/**
 * Primitivas visuales de los pasos del onboarding.
 * Colores siempre por tokens semánticos (styles.css).
 */
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** Etiqueta pequeña sobre el titular del paso. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-sand/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
      {children}
    </span>
  );
}

/** Entrada escalonada de los bloques del paso. */
export function Rise({
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 + delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Titular serif del paso con hilo dorado. */
export function StepTitle({ children }: { children: ReactNode }) {
  return (
    <>
      <h1 className="mt-4 text-[2rem] leading-[1.12] text-foreground">{children}</h1>
      <div className="gold-thread mt-5 max-w-24" />
    </>
  );
}

export function StepText({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] font-light leading-relaxed text-muted-foreground">{children}</p>
  );
}

/** Foto de personas con marco dorado y viñeta cálida. */
export function Photo({
  src,
  alt,
  ratio = "4/5",
  priority = false,
  caption,
}: {
  src: string;
  alt: string;
  ratio?: "4/5" | "3/2" | "1/1";
  priority?: boolean;
  caption?: string;
}) {
  const aspect = { "4/5": "aspect-4/5", "3/2": "aspect-3/2", "1/1": "aspect-square" }[ratio];

  return (
    <figure className="mt-1">
      <div className={`photo-frame ${aspect} w-full rounded-3xl bg-sand`}>
        <img
          src={src}
          alt={alt}
          width={1024}
          height={1280}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs tracking-wide text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Marco con video en loop (mudo) y poster de respaldo.
 * Hace crossfade al cambiar de fuente y respeta prefers-reduced-motion.
 */
export function MediaFrame({
  video,
  poster,
  alt,
  ratio = "3/2",
  mediaKey,
  caption,
}: {
  video?: string;
  poster: string;
  alt: string;
  ratio?: "4/5" | "3/2" | "1/1";
  mediaKey: string;
  caption?: string;
}) {
  const aspect = { "4/5": "aspect-4/5", "3/2": "aspect-3/2", "1/1": "aspect-square" }[ratio];
  const reduced = useReducedMotion();

  return (
    <figure className="mt-1">
      <div className={`photo-frame ${aspect} relative w-full overflow-hidden rounded-3xl bg-sand`}>
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={mediaKey}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {video && !reduced ? (
              <video
                src={video}
                poster={poster}
                aria-label={alt}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            ) : (
              <img src={poster} alt={alt} loading="lazy" className="h-full w-full object-cover" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-xs tracking-wide text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Marco vacío listo para una foto real de la escuela. */
export function PhotoSlot({
  label,
  ratio = "4/5",
}: {
  label: string;
  ratio?: "4/5" | "3/2" | "1/1";
}) {
  const aspect = { "4/5": "aspect-4/5", "3/2": "aspect-3/2", "1/1": "aspect-square" }[ratio];

  return (
    // REPLACE_WITH_ORIGINAL_IMAGE
    <div
      className={`${aspect} warm-grain grid w-full place-items-center rounded-3xl border border-dashed border-gold/40 bg-sand/60 p-6 text-center`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/** Tarjeta oscura con borde sutil. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card-soft rounded-3xl p-5 ${className}`}>{children}</div>;
}

/** Insignia circular dorada con icono. */
export function IconBadge({ icon: Icon, size = 44 }: { icon: LucideIcon; size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full border border-gold/35 bg-gold/10"
      style={{ height: size, width: size }}
    >
      <Icon size={size * 0.42} strokeWidth={1.6} className="text-gold" />
    </span>
  );
}
