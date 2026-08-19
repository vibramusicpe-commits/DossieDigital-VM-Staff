/**
 * Mini teclado táctil con audio sintetizado (Web Audio API).
 * Guía al visitante para tocar "Estrellita" siguiendo la tecla iluminada.
 */
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const TECLAS = [
  { nombre: "Do", freq: 261.63 },
  { nombre: "Re", freq: 293.66 },
  { nombre: "Mi", freq: 329.63 },
  { nombre: "Fa", freq: 349.23 },
  { nombre: "Sol", freq: 392.0 },
  { nombre: "La", freq: 440.0 },
  { nombre: "Si", freq: 493.88 },
  { nombre: "Do′", freq: 523.25 },
];

/** Estrellita: Do Do Sol Sol La La Sol · Fa Fa Mi Mi Re Re Do */
const MELODIA = [0, 0, 4, 4, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0];

export function MiniPiano({ onComplete }: { onComplete: () => void }) {
  const ctxRef = useRef<AudioContext | null>(null);
  const [paso, setPaso] = useState(0);
  const [activa, setActiva] = useState<number | null>(null);
  const [mute, setMute] = useState(false);
  const [listo, setListo] = useState(false);
  const reduced = useReducedMotion();

  useEffect(
    () => () => {
      void ctxRef.current?.close();
    },
    [],
  );

  const tocar = useCallback(
    (freq: number) => {
      if (mute) return;
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
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.95);
      } catch {
        /* audio no disponible: la guía visual sigue funcionando */
      }
    },
    [mute],
  );

  function handleKey(index: number) {
    const tecla = TECLAS[index];
    if (!tecla) return;
    tocar(tecla.freq);
    setActiva(index);
    window.setTimeout(() => setActiva((a) => (a === index ? null : a)), 220);

    if (listo) return;
    if (index !== MELODIA[paso]) return;

    const siguiente = paso + 1;
    setPaso(siguiente);
    if (siguiente >= MELODIA.length) {
      setListo(true);
      onComplete();
    }
  }

  const esperada = listo ? -1 : MELODIA[paso];
  const progreso = Math.round((paso / MELODIA.length) * 100);

  return (
    <div className="card-soft rounded-3xl p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg text-foreground">Pruébalo ahora</h2>
          <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
            {listo
              ? "¡Lo hiciste! Acabas de tocar tu primera melodía."
              : "Sigue la tecla dorada y tocarás “Estrellita” en 20 segundos."}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setMute((m) => !m)}
          aria-label={mute ? "Activar sonido" : "Silenciar"}
          aria-pressed={mute}
          className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:border-gold/60 hover:text-gold"
        >
          {mute ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>

      <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-gold transition-[width] duration-300"
          style={{ width: `${progreso}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-8 gap-1.5">
        {TECLAS.map((t, i) => {
          const siguiente = i === esperada;
          const pulsando = activa === i;
          return (
            <button
              key={t.nombre}
              type="button"
              onClick={() => handleKey(i)}
              aria-label={`Tocar ${t.nombre}`}
              className={`flex h-24 flex-col items-center justify-end rounded-xl border pb-2 text-[10px] font-semibold transition-colors duration-150 ${
                pulsando
                  ? "border-gold bg-gold text-gold-foreground"
                  : siguiente
                    ? "border-gold bg-gold/25 text-gold"
                    : "border-border bg-sand text-muted-foreground hover:border-gold/50"
              } ${siguiente && !reduced && !pulsando ? "animate-pulse" : ""}`}
            >
              {t.nombre}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {listo ? (
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-foreground"
          >
            Así enseñamos en Vibra:{" "}
            <strong className="font-semibold">primero el logro, después la teoría</strong>. Cuando
            algo suena bien desde el primer día, practicar deja de ser una obligación.
          </motion.p>
        ) : null}
      </AnimatePresence>

      {!listo ? (
        <button
          type="button"
          onClick={() => {
            setListo(true);
            onComplete();
          }}
          className="mt-3 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-gold"
        >
          Saltar la práctica
        </button>
      ) : null}
    </div>
  );
}
