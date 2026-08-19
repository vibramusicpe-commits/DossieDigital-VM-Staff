/**
 * Juego corto de pulso: el visitante marca 4 tiempos y ve su precisión.
 * Sin audio obligatorio; solo feedback visual y un pequeño click sintetizado.
 */
import { useCallback, useEffect, useRef, useState } from "react";

const OBJETIVO_MS = 600; // 100 BPM
const TOQUES = 5; // 4 intervalos

export function RitmoTap({ onComplete }: { onComplete: () => void }) {
  const ctxRef = useRef<AudioContext | null>(null);
  const tiempos = useRef<number[]>([]);
  const [conteo, setConteo] = useState(0);
  const [precision, setPrecision] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(
    () => () => {
      void ctxRef.current?.close();
    },
    [],
  );

  const click = useCallback(() => {
    try {
      const Ctx =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return;
      const ctx = (ctxRef.current ??= new Ctx());
      void ctx.resume();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      /* sin audio, el juego sigue siendo visual */
    }
  }, []);

  function tap() {
    click();
    setPulse(true);
    window.setTimeout(() => setPulse(false), 140);

    if (precision !== null) {
      tiempos.current = [];
      setConteo(0);
      setPrecision(null);
      return;
    }

    tiempos.current = [...tiempos.current, Date.now()];
    const n = tiempos.current.length;
    setConteo(n);

    if (n >= TOQUES) {
      const gaps = tiempos.current.slice(1).map((t, i) => t - (tiempos.current[i] as number));
      const error =
        gaps.reduce((acc, g) => acc + Math.abs(g - OBJETIVO_MS), 0) / (gaps.length * OBJETIVO_MS);
      setPrecision(Math.max(0, Math.round((1 - error) * 100)));
      onComplete();
    }
  }

  const mensaje =
    precision === null
      ? null
      : precision >= 85
        ? "¡Tienes muy buen tiempo! Con guía llegas lejos rápido."
        : precision >= 65
          ? "Buen pulso base. Esto es justo lo que entrenamos en clase."
          : "El pulso se entrena, y es lo primero que trabajamos contigo.";

  return (
    <div className="card-soft rounded-3xl p-5">
      <h2 className="text-lg text-foreground">Mide tu pulso</h2>
      <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
        Toca el círculo 5 veces a un ritmo parejo, como el tic-tac de un reloj.
      </p>

      <button
        type="button"
        onClick={tap}
        className={`mx-auto mt-5 grid h-28 w-28 place-items-center rounded-full border-2 font-display text-3xl transition-transform duration-100 ${
          pulse
            ? "scale-95 border-gold bg-gold text-gold-foreground"
            : "border-gold/50 bg-gold/10 text-gold"
        }`}
      >
        {precision !== null ? "↻" : conteo || "Toca"}
      </button>

      <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
        {Array.from({ length: TOQUES }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i < conteo ? "bg-gold" : "bg-border"}`}
          />
        ))}
      </div>

      {precision !== null ? (
        <div className="mt-4 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-center">
          <p className="font-display text-3xl text-gold">{precision}%</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{mensaje}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            En 45 minutos de práctica guiada esto mejora clase a clase.
          </p>
        </div>
      ) : null}
    </div>
  );
}
