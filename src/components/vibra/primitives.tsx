/**
 * Primitivas visuales compartidas del dossier Vibra Music.
 * Todos los colores salen de los tokens definidos en src/styles.css.
 */
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** Sección vertical con espaciado consistente. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-12 ${className}`}>
      {children}
    </section>
  );
}

/** Etiqueta pequeña sobre los títulos de sección. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-sand px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  );
}

/** Animación de entrada al hacer scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Insignia circular con halo dorado. Placeholder vectorial de imágenes reales. */
export function GlowIcon({
  icon: Icon,
  size = "md",
  tone = "gold",
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  tone?: "gold" | "caramel";
}) {
  const dims = {
    sm: "h-10 w-10",
    md: "h-14 w-14",
    lg: "h-24 w-24",
  }[size];
  const iconSize = { sm: 18, md: 24, lg: 40 }[size];

  return (
    <div
      className={`gold-halo grid ${dims} shrink-0 place-items-center rounded-full border border-border bg-card`}
    >
      {/* REPLACE_WITH_ORIGINAL_IMAGE */}
      <Icon
        size={iconSize}
        strokeWidth={1.8}
        className={tone === "gold" ? "text-gold" : "text-caramel"}
      />
    </div>
  );
}

/** Ondas de frecuencia decorativas en trazo fino dorado. */
export function SoundWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      aria-hidden="true"
      className={`w-full text-gold ${className}`}
    >
      <path
        d="M0 40 Q 12 40 20 20 T 40 40 T 60 8 T 80 40 T 100 26 T 120 40 T 140 4 T 160 40 T 180 22 T 200 40 T 220 12 T 240 40 T 260 28 T 280 40 T 300 6 T 320 40 T 340 24 T 360 40 T 380 18 T 400 40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M0 56 Q 16 56 28 44 T 56 56 T 84 40 T 112 56 T 140 46 T 168 56 T 196 38 T 224 56 T 252 48 T 280 56 T 308 42 T 336 56 T 364 50 T 400 56"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
