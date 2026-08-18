/**
 * Cromo del onboarding Vibra Music: progreso segmentado, marca, navegación
 * y transición entre pasos. Todos los colores vienen de los tokens de styles.css.
 */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

import logoVibra from "@/assets/logo-vibra.webp.asset.json";

export function ProgressBar({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
            i <= current ? "bg-gold" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

export function OnboardingShell({
  total,
  current,
  label,
  onNext,
  onPrev,
  onSkip,
  nextLabel,
  children,
}: {
  total: number;
  current: number;
  label: string;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
  nextLabel: string;
  children: ReactNode;
}) {
  const touchStart = useRef<{ y: number; x: number; time: number } | null>(null);
  const lastNav = useRef(0);
  const isLast = current === total - 1;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && /input|textarea|select/i.test(target.tagName)) return;
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNext, onPrev]);

  return (
    <div
      className="flex min-h-screen flex-col bg-background"
      onTouchStart={(e) => {
        const t = e.touches[0];
        touchStart.current = t ? { y: t.clientY, x: t.clientX, time: Date.now() } : null;
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        const t = e.changedTouches[0];
        if (!start || !t) return;

        const dy = start.y - t.clientY;
        const dx = Math.abs(start.x - t.clientX);
        // Solo gestos claramente verticales, largos y no accidentales.
        if (Math.abs(dy) < 140 || dx > Math.abs(dy) * 0.6) return;

        // Enfriamiento: evita saltar varios pasos seguidos al deslizar rápido.
        const now = Date.now();
        if (now - lastNav.current < 900) return;

        // Solo cambia de paso en los extremos del scroll, para poder leer.
        const scrollY = window.scrollY;
        const atTop = scrollY <= 4;
        const atBottom = scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

        if (dy > 0 && atBottom) {
          lastNav.current = now;
          onNext();
        } else if (dy < 0 && atTop) {
          lastNav.current = now;
          onPrev();
        }
      }}
    >
      {/* Cabecera: marca + progreso */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto w-full max-w-lg px-5 pb-3 pt-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={logoVibra.url}
                alt="Vibra Music"
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 object-contain"
              />
              <span className="truncate text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {label}
              </span>
            </div>
            <span className="shrink-0 font-display text-sm text-gold">
              {String(current + 1).padStart(2, "0")}
              <span className="text-muted-foreground">/{String(total).padStart(2, "0")}</span>
            </span>
          </div>
          <div className="mt-3">
            <ProgressBar total={total} current={current} />
          </div>
        </div>
      </header>

      {/* Cuerpo del paso */}
      <main className="relative flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-lg px-5 pb-40 pt-6"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Pie: navegación */}
      <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto w-full max-w-lg px-5 pb-5 pt-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onPrev}
              disabled={current === 0}
              aria-label="Paso anterior"
              className="grid h-[3.25rem] w-[3.25rem] shrink-0 place-items-center rounded-2xl border border-border text-muted-foreground transition disabled:opacity-30 enabled:hover:border-gold/60 enabled:hover:text-gold enabled:active:scale-95"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="flex h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-2xl bg-gold text-[15px] font-semibold text-gold-foreground shadow-[0_16px_36px_-18px_oklch(0.7563_0.1132_79/0.9)] transition active:scale-[0.985]"
            >
              {nextLabel} <ArrowRight size={17} />
            </button>
          </div>
          {!isLast ? (
            <button
              type="button"
              onClick={onSkip}
              className="mx-auto mt-2.5 block text-xs font-medium tracking-wide text-muted-foreground underline decoration-border underline-offset-4 transition hover:text-gold"
            >
              Saltar al final y reservar mi clase demo
            </button>
          ) : (
            <p className="mt-2.5 text-center text-xs text-muted-foreground">
              Cupos limitados por semana para atención personalizada.
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}
