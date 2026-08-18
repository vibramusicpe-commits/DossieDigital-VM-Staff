/**
 * Secciones 5 a 8 del dossier Vibra Music.
 */
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Camera,
  ChevronDown,
  Flame,
  GraduationCap,
  Heart,
  Music2,
  PartyPopper,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Video,
  Volume2,
} from "lucide-react";
import { useState } from "react";

import { Eyebrow, GlowIcon, Reveal, Section } from "./primitives";

/* ---------------------------------------------------------------- SECCIÓN 5 */

const METODO = [
  {
    icon: Brain,
    titulo: "Enfoque Psicológico Anti-Frustración",
    texto:
      "Técnicas pedagógicas que mantienen al alumno curioso y construyen el hábito de la práctica divertida.",
  },
  {
    icon: Flame,
    titulo: "Maestros Apasionados",
    texto: "Un profesor apasionado inspira e impulsa a sus alumnos.",
  },
  {
    icon: Heart,
    titulo: "¿Cómo los enamoramos de la música?",
    texto: "Nuevos amigos, recitales en vivo y premios por avance constante.",
  },
];

export function MethodSection() {
  return (
    <Section id="metodo" className="bg-sand/60">
      <Reveal>
        <Eyebrow>El método Vibra</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          ¿Por qué nuestro método funciona?
        </h2>
      </Reveal>

      <div className="mt-6 space-y-4">
        {METODO.map((m, i) => (
          <Reveal key={m.titulo} delay={0.05 * i}>
            <motion.div
              whileTap={{ scale: 0.985 }}
              className="card-soft rounded-3xl p-5 transition hover:border-gold/60"
            >
              <div className="flex items-start gap-4">
                <GlowIcon icon={m.icon} />
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground">{m.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.texto}</p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- SECCIÓN 6 */

const BENEFICIOS = [
  { icon: Music2, texto: "Clases semanales estructuradas" },
  { icon: RefreshCw, texto: "Recuperación de clases garantizada" },
  { icon: Trophy, texto: "Concursos y desafíos de talento" },
  { icon: PartyPopper, texto: "Recitales y conciertos en vivo" },
  { icon: Camera, texto: "Sesión de fotos profesional de recuerdo" },
  { icon: Video, texto: "Videos demostrativos de progreso para padres" },
  { icon: GraduationCap, texto: "Niveles de estudio con Concierto de Graduación" },
  { icon: Users, texto: "Talleres vivenciales para padres" },
  { icon: Heart, texto: "Comunidad Vibra: acompañamiento y formación emocional" },
];

const PLANES = [
  { nombre: "Plan Mensual", precio: "S/ 329", nota: "/mes", badge: null, destacado: false },
  {
    nombre: "Plan Trimestral",
    precio: "S/ 289.40",
    nota: "/mes · 12% DCTO",
    badge: "Opción Recomendada",
    destacado: false,
  },
  {
    nombre: "Plan Anual",
    precio: "S/ 263.20",
    nota: "/mes · 20% DCTO",
    badge: "Mayor ahorro",
    destacado: true,
  },
];

export function BenefitsSection() {
  const [abierto, setAbierto] = useState(true);

  return (
    <Section id="beneficios">
      <Reveal>
        <Eyebrow>Beneficios e inversión</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          Todo lo que incluye ser parte de Vibra
        </h2>
      </Reveal>

      {/* Acordeón de beneficios */}
      <Reveal delay={0.05}>
        <div className="card-soft mt-6 overflow-hidden rounded-3xl">
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 text-left"
          >
            <span className="min-w-0 text-base font-bold text-foreground">
              9 beneficios incluidos
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-muted-foreground transition-transform ${
                abierto ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {abierto ? (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 overflow-hidden px-5 pb-5"
              >
                {BENEFICIOS.map((b, i) => {
                  const BIcon = b.icon;
                  return (
                    <li key={b.texto} className="flex items-center gap-3 rounded-2xl bg-sand p-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/20">
                        <BIcon size={15} className="text-caramel" />
                      </span>
                      <span className="min-w-0 text-sm text-muted-foreground">
                        <span className="font-bold text-foreground">{i + 1}. </span>
                        {b.texto}
                      </span>
                    </li>
                  );
                })}
              </motion.ul>
            ) : null}
          </AnimatePresence>
        </div>
      </Reveal>

      {/* Matriz de planes */}
      <div className="mt-6 space-y-3">
        {PLANES.map((p, i) => (
          <Reveal key={p.nombre} delay={0.05 * i}>
            <div
              className={`rounded-3xl p-5 ${
                p.destacado
                  ? "bg-caramel text-caramel-foreground"
                  : "card-soft text-foreground"
              }`}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="min-w-0">
                  <p
                    className={`truncate text-sm font-bold uppercase tracking-wide ${
                      p.destacado ? "text-caramel-foreground" : "text-foreground"
                    }`}
                  >
                    {p.nombre}
                  </p>
                  <p
                    className={`text-xs ${
                      p.destacado ? "text-caramel-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {p.nota}
                  </p>
                </div>
                <p
                  className={`shrink-0 text-2xl font-extrabold ${
                    p.destacado ? "text-caramel-foreground" : "text-foreground"
                  }`}
                >
                  {p.precio}
                </p>
              </div>
              {p.badge ? (
                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                    p.destacado
                      ? "bg-caramel-foreground/15 text-caramel-foreground"
                      : "bg-gold text-gold-foreground"
                  }`}
                >
                  {p.badge}
                </span>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Banner promocional */}
      <Reveal delay={0.1}>
        <div className="mt-6 rounded-3xl border border-dashed border-caramel/50 bg-gold/10 p-5">
          <p className="text-sm text-muted-foreground">
            Matrícula regular: <strong className="text-foreground">S/ 120</strong> · Útiles anuales:{" "}
            <strong className="text-foreground">S/ 67</strong> (Método Vibra, Practikid y
            partituras).
          </p>
          <p className="mt-3 flex items-start gap-2 text-[15px] font-bold leading-snug text-foreground">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-caramel" />
            75% de descuento en tu matrícula al inscribirte el día de tu Clase Demostrativa.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- SECCIÓN 7 */

const GARANTIAS = [
  {
    icon: Music2,
    titulo: "Mejor Aprendizaje",
    texto: "Afinación estable y ergonomía para proteger las manos desde el primer día.",
  },
  {
    icon: Volume2,
    titulo: "Sonido Auténtico",
    texto: "Resonancia superior que motiva a practicar con gusto.",
  },
  {
    icon: ShieldCheck,
    titulo: "Selección Minuciosa",
    texto: "Instrumentos duraderos seleccionados por especialistas.",
  },
];

export function InstrumentsSection() {
  return (
    <Section id="instrumentos" className="bg-sand/60">
      <Reveal>
        <Eyebrow>Instrumentos</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          Calidad y durabilidad en cada nota
        </h2>
      </Reveal>

      <div className="mt-6 space-y-4">
        {GARANTIAS.map((g, i) => (
          <Reveal key={g.titulo} delay={0.05 * i}>
            <div className="card-soft rounded-3xl p-5">
              <div className="flex items-start gap-4">
                {/* REPLACE_WITH_ORIGINAL_IMAGE — foto real del instrumento */}
                <GlowIcon icon={g.icon} tone="caramel" />
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground">{g.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{g.texto}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- SECCIÓN 8 */

const PASOS = [
  "Reserva tu Clase Demo 100% GRATIS.",
  "Asiste a la clase, prueba diferentes instrumentos y descubre tu favorito.",
  "Elige tu programa, asegura tu 75% de descuento en matrícula y ¡comienza a tocar!",
];

export function StepsSection({ onCta }: { onCta: () => void }) {
  return (
    <Section id="pasos" className="pb-16">
      <Reveal>
        <Eyebrow>Inscríbete en 3 pasos</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          ¿Cómo empezar tu camino musical?
        </h2>
      </Reveal>

      <ol className="relative mt-7 space-y-6 pl-2">
        {PASOS.map((paso, i) => (
          <Reveal key={paso} delay={0.06 * i}>
            <li className="relative flex gap-4">
              {i < PASOS.length - 1 ? (
                <span className="absolute left-[21px] top-11 h-[calc(100%+0.5rem)] w-0.5 bg-gold/50" />
              ) : null}
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-lg font-extrabold text-gold-foreground">
                {i + 1}
              </span>
              <p className="min-w-0 pt-2 text-[15px] leading-relaxed text-muted-foreground">
                {paso}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.15}>
        <button
          type="button"
          onClick={onCta}
          className="mt-9 w-full rounded-3xl bg-caramel px-6 py-5 text-[17px] font-bold text-caramel-foreground transition active:scale-[0.98]"
        >
          🎶 Agendar mi Clase Demo Gratuita Ahora
        </button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Cupos limitados por semana para atención personalizada.
        </p>
      </Reveal>
    </Section>
  );
}
