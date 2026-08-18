/** Cromo del dossier: barra de progreso de lectura y CTA inferior fijo. */
import { motion, useScroll, useSpring } from "framer-motion";
import { Music4 } from "lucide-react";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });

  return (
    <div className="fixed inset-x-0 top-0 z-40 h-1 bg-border/60">
      <motion.div className="h-full origin-left bg-gold" style={{ scaleX: width }} />
    </div>
  );
}

export function StickyCta({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 pb-5 pt-3 backdrop-blur-md">
      <div className="mx-auto max-w-lg">
        <button
          type="button"
          onClick={onClick}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gold px-5 py-4 text-base font-bold text-gold-foreground shadow-[0_12px_30px_-14px_rgba(28,27,26,0.6)] transition active:scale-[0.98]"
        >
          <Music4 size={18} /> Reservar Clase Demo Gratis
        </button>
      </div>
    </div>
  );
}
