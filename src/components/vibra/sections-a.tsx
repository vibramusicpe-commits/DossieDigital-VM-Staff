/**
 * Secciones 1 a 4 del dossier Vibra Music.
 * Los avatares/insignias son vectoriales: reemplazables por fotos originales
 * en los puntos marcados con REPLACE_WITH_ORIGINAL_IMAGE.
 */
import { motion } from "framer-motion";
import {
  ArrowDown,
  Award,
  CalendarDays,
  Drum,
  Guitar,
  Mic,
  Music,
  Piano,
  Sparkles,
  Timer,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

import logoVibra from "@/assets/logo-vibra.webp.asset.json";

import { Eyebrow, GlowIcon, Reveal, Section, SoundWaves } from "./primitives";

/* ---------------------------------------------------------------- SECCIÓN 1 */

export function HeroSection() {
  return (
    <Section id="portada" className="pb-10 pt-14 text-center">
      <Reveal>
        <Eyebrow>Nueva etapa • Escuela de música</Eyebrow>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="gold-halo mx-auto mt-7 grid h-40 w-40 place-items-center rounded-full">
          {/* Logotipo oficial de Vibra Music (fondo transparente) */}
          <img
            src={logoVibra.url}
            alt="Logotipo de Vibra Music"
            className="relative h-40 w-40 object-contain"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-7 text-[2rem] font-extrabold leading-[1.1] text-foreground">
          Despierta tu pasión musical sin frustraciones.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
          Aprende Guitarra, Piano, Violín, Canto o Batería desde los 4 años con un método propio
          diseñado para enamorarte de la música.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <a
          href="#cursos"
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gold px-6 py-4 text-[15px] font-bold text-gold-foreground transition active:scale-[0.98]"
        >
          Explorar Cursos y Beneficios <ArrowDown size={17} />
        </a>
      </Reveal>

      <SoundWaves className="mt-10 opacity-90" />
    </Section>
  );
}

/* ---------------------------------------------------------------- SECCIÓN 2 */

export function FounderSection() {
  return (
    <Section id="fundadora">
      <Reveal>
        <Eyebrow>Historia y pasión</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          Conoce a Claudia, Fundadora y Directora de Vibra Music
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <article className="mt-6 rounded-3xl border border-border bg-sand p-6">
          <div className="flex items-center gap-4">
            {/* REPLACE_WITH_ORIGINAL_IMAGE — foto real de Claudia */}
            <div className="gold-halo grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-gold bg-card">
              <UserCheck size={30} strokeWidth={1.7} className="text-gold" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-lg font-bold text-foreground">Claudia</p>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Sparkles size={14} className="text-caramel" /> Fundadora y Directora
              </p>
            </div>
          </div>

          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Desde una pequeña caseta de madera en el Centro de Lima vendiendo casetes y comprando
            cuerdas de guitarra a crédito, hasta liderar una comunidad de cientos de alumnos.
            Claudia descubrió que la música es el puente que transforma vidas y genera confianza.
          </p>

          <blockquote className="mt-5 border-l-2 border-gold pl-4 text-[15px] italic leading-relaxed text-foreground">
            “Nos propusimos resolver las frustraciones que atraviesan quienes aprenden un
            instrumento, priorizando la motivación y el amor por el arte.”
          </blockquote>

          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <Award size={20} className="shrink-0 text-caramel" />
            <p className="text-sm font-medium text-foreground">
              Más de 4 años formando talentos y creando experiencias inolvidables.
            </p>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

/* ---------------------------------------------------------------- SECCIÓN 3 */

const HORARIOS = [
  "Lunes y Miércoles",
  "Martes y Jueves",
  "Viernes Intensivo",
  "Sábados Intensivos",
];

const PROGRAMAS = [
  { etapa: "Infantil", edad: "desde 4 años", detalle: "3 años de formación lúdica" },
  { etapa: "Junior", edad: "7 a 12 años", detalle: "4 años de evolución técnica" },
  {
    etapa: "Juvenil y Adultos",
    edad: "13 años a más",
    detalle: "4 años con repertorio personalizado",
  },
];

export function ClassesSection() {
  return (
    <Section id="clases" className="bg-sand/60">
      <Reveal>
        <Eyebrow>La experiencia</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          ¿Cómo es la experiencia en Vibra Music?
        </h2>
      </Reveal>

      <div className="mt-6 space-y-4">
        <Reveal delay={0.05}>
          <div className="card-soft rounded-3xl p-5">
            <div className="flex items-center gap-4">
              <GlowIcon icon={Timer} />
              <div className="min-w-0">
                <h3 className="text-base font-bold text-foreground">Duración</h3>
                <p className="text-sm text-muted-foreground">
                  2 clases por semana · 45 minutos por sesión de práctica guiada.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-soft rounded-3xl p-5">
            <div className="flex items-center gap-4">
              <GlowIcon icon={CalendarDays} />
              <h3 className="text-base font-bold text-foreground">Flexibilidad de horarios</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {HORARIOS.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border bg-sand px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card-soft rounded-3xl p-5">
            <div className="flex items-center gap-4">
              <GlowIcon icon={Music} />
              <h3 className="text-base font-bold text-foreground">Programas por etapa</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {PROGRAMAS.map((p) => (
                <li
                  key={p.etapa}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-sand px-4 py-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground">{p.etapa}</p>
                    <p className="text-xs text-muted-foreground">{p.detalle}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                    {p.edad}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- SECCIÓN 4 */

const CURSOS = [
  {
    nombre: "Guitarra",
    icon: Guitar,
    rangos: ["Junior: 7-12", "Juvenil: 13-17", "Adultos: 18+"],
  },
  {
    nombre: "Piano",
    icon: Piano,
    rangos: ["Infantil: 4-6", "Junior: 7-12", "Juvenil: 13-17", "Adultos: 18+"],
  },
  { nombre: "Violín", icon: Music, rangos: ["Junior: 7-12", "Juvenil: 13-17", "Adultos: 18+"] },
  { nombre: "Canto", icon: Mic, rangos: ["Junior: 7-12", "Juvenil: 13-17", "Adultos: 18+"] },
  { nombre: "Batería", icon: Drum, rangos: ["Junior: 7-12", "Juvenil: 13-17", "Adultos: 18+"] },
];

export function CoursesSection() {
  const [activo, setActivo] = useState(0);
  const curso = CURSOS[activo]!;
  const Icon = curso.icon;

  return (
    <Section id="cursos">
      <Reveal>
        <Eyebrow>Nuestros cursos</Eyebrow>
        <h2 className="mt-4 text-[26px] font-bold leading-tight text-foreground">
          Elige el instrumento que te hará vibrar
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-6 grid grid-cols-5 gap-2">
          {CURSOS.map((c, i) => {
            const CIcon = c.icon;
            const activa = i === activo;
            return (
              <button
                key={c.nombre}
                type="button"
                onClick={() => setActivo(i)}
                className={`flex flex-col items-center gap-2 rounded-2xl border px-1 py-3 transition ${
                  activa
                    ? "border-gold bg-gold/15"
                    : "border-border bg-card hover:bg-sand"
                }`}
              >
                {/* REPLACE_WITH_ORIGINAL_IMAGE — foto del instrumento */}
                <span
                  className={`gold-halo grid h-11 w-11 place-items-center rounded-full border ${
                    activa ? "border-gold bg-card" : "border-border bg-sand"
                  }`}
                >
                  <CIcon size={19} strokeWidth={1.8} className="text-gold" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-foreground">
                  {c.nombre}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div
        key={curso.nombre}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="card-soft mt-5 rounded-3xl p-6"
      >
        <div className="flex items-center gap-4">
          <GlowIcon icon={Icon} size="md" />
          <div className="min-w-0">
            <h3 className="truncate text-xl font-bold text-foreground">{curso.nombre}</h3>
            <p className="text-sm text-muted-foreground">Programa por rangos de edad</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {curso.rangos.map((r) => (
            <span
              key={r}
              className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-semibold text-muted-foreground"
            >
              {r}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
