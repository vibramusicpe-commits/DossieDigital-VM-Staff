/**
 * Pasos 1 a 4 del onboarding Vibra Music.
 */
import { Award, Brain, Flame, Heart, Sparkles } from "lucide-react";

import onbBienvenida from "@/assets/onb-bienvenida.jpg";
import onbMetodo from "@/assets/onb-metodo.jpg";

import { CURSOS, getCurso } from "./cursos";
import { NIVEL_MENSAJE, type Nivel } from "./journey";
import { MiniPiano } from "./MiniPiano";
import {
  Card,
  Eyebrow,
  IconBadge,
  MediaFrame,
  Photo,
  PhotoSlot,
  Rise,
  StepText,
  StepTitle,
} from "./step-primitives";

/* ------------------------------------------------------------------- PASO 1 */

const NIVELES: { valor: Nivel; etiqueta: string; detalle: string }[] = [
  { valor: "Nunca", etiqueta: "Nunca toqué", detalle: "Empiezo desde cero" },
  { valor: "Un poco", etiqueta: "Un poco", detalle: "Sé algo suelto" },
  { valor: "Retomando", etiqueta: "Retomando", detalle: "Ya toqué antes" },
];

export function StepWelcome({
  nivel,
  onNivel,
}: {
  nivel: Nivel | null;
  onNivel: (n: Nivel) => void;
}) {
  return (
    <div className="text-center">
      <Rise>
        <Eyebrow>Escuela de música · Lima</Eyebrow>
      </Rise>

      <Rise delay={0.05}>
        <StepTitle>
          Despierta tu pasión musical <em className="italic text-gold">sin frustraciones</em>
        </StepTitle>
      </Rise>

      <Rise delay={0.1} className="mx-auto max-w-sm">
        <StepText>
          Este recorrido de 8 pantallas es una mini clase: vas a tocar, medir tu pulso y salir con
          un plan hecho a tu medida.
        </StepText>
      </Rise>

      <Rise delay={0.16} className="mt-7">
        <Photo
          src={onbBienvenida}
          alt="Profesora de Vibra Music sonriendo frente a un piano"
          priority
          caption="Clases presenciales para niños, jóvenes y adultos"
        />
      </Rise>

      <Rise delay={0.22} className="mt-6">
        <Card className="text-left">
          <h2 className="text-lg text-foreground">¿Ya tocaste algún instrumento?</h2>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {NIVELES.map((n) => {
              const activo = nivel === n.valor;
              return (
                <button
                  key={n.valor}
                  type="button"
                  onClick={() => onNivel(n.valor)}
                  aria-pressed={activo}
                  className={`rounded-2xl border p-3 text-left transition active:scale-[0.98] ${
                    activo
                      ? "border-gold bg-gold/12 text-foreground"
                      : "border-border bg-sand text-muted-foreground hover:border-gold/50"
                  }`}
                >
                  <span className="block text-sm font-semibold text-foreground">{n.etiqueta}</span>
                  <span className="mt-0.5 block text-[11px] leading-tight">{n.detalle}</span>
                </button>
              );
            })}
          </div>
          {nivel ? (
            <p className="mt-4 text-sm font-light leading-relaxed text-gold">
              {NIVEL_MENSAJE[nivel]}
            </p>
          ) : (
            <p className="mt-4 text-xs text-muted-foreground">
              Con tu respuesta ajustamos lo que verás en los siguientes pasos.
            </p>
          )}
        </Card>
      </Rise>
    </div>
  );
}

/* ------------------------------------------------------------------- PASO 2 */

export function StepFounder() {
  return (
    <div>
      <Rise>
        <Eyebrow>Historia y pasión</Eyebrow>
        <StepTitle>Conoce a Claudia, fundadora de Vibra Music</StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <PhotoSlot label="Foto real de Claudia con sus alumnos" ratio="3/2" />
      </Rise>

      <Rise delay={0.12}>
        <StepText>
          De una pequeña caseta de madera en el Centro de Lima vendiendo casetes y comprando cuerdas
          a crédito, a liderar una comunidad de cientos de alumnos.
        </StepText>
      </Rise>

      <Rise delay={0.18}>
        <blockquote className="mt-6 border-l border-gold/60 pl-5 font-display text-xl italic leading-snug text-foreground">
          “La música es el puente que transforma vidas y construye confianza.”
        </blockquote>
      </Rise>

      <Rise delay={0.24}>
        <Card className="mt-6 flex items-center gap-4">
          <IconBadge icon={Award} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Más de <strong className="font-semibold text-foreground">4 años</strong> formando
            talentos y creando experiencias inolvidables.
          </p>
        </Card>
      </Rise>
    </div>
  );
}

/* ------------------------------------------------------------------- PASO 3 */

const METODO = [
  {
    icon: Brain,
    titulo: "Enfoque anti-frustración",
    texto: "Pedagogía que sostiene la curiosidad y crea el hábito de practicar con gusto.",
  },
  {
    icon: Flame,
    titulo: "Maestros apasionados",
    texto: "Un profesor que ama lo que hace inspira e impulsa a cada alumno.",
  },
  {
    icon: Heart,
    titulo: "Enamorarse de la música",
    texto: "Nuevos amigos, recitales en vivo y premios por avance constante.",
  },
];

export function StepMethod({
  nivel,
  onMelodia,
}: {
  nivel: Nivel | null;
  onMelodia: () => void;
}) {
  return (
    <div>
      <Rise>
        <Eyebrow>El método Vibra</Eyebrow>
        <StepTitle>Enseñamos con el corazón y con método</StepTitle>
      </Rise>

      {nivel ? (
        <Rise delay={0.04}>
          <StepText>{NIVEL_MENSAJE[nivel]}</StepText>
        </Rise>
      ) : null}

      <Rise delay={0.08} className="mt-6">
        <MiniPiano onComplete={onMelodia} />
      </Rise>

      <Rise delay={0.14} className="mt-6">
        <Photo
          src={onbMetodo}
          alt="Profesor guiando las manos de un alumno adolescente en la guitarra"
          ratio="3/2"
        />
      </Rise>

      <div className="mt-6 space-y-3">
        {METODO.map((m, i) => (
          <Rise key={m.titulo} delay={0.18 + i * 0.06}>
            <Card className="flex items-start gap-4">
              <IconBadge icon={m.icon} />
              <div className="min-w-0">
                <h2 className="text-lg text-foreground">{m.titulo}</h2>
                <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                  {m.texto}
                </p>
              </div>
            </Card>
          </Rise>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- PASO 4 */

export function StepInstruments({
  seleccion,
  onSelect,
}: {
  seleccion: string;
  onSelect: (nombre: string) => void;
}) {
  const actual = getCurso(seleccion);

  return (
    <div>
      <Rise>
        <Eyebrow>Nuestros cursos</Eyebrow>
        <StepTitle>Elige el instrumento que te hará vibrar</StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <MediaFrame
          mediaKey={actual.nombre}
          video={actual.video}
          poster={actual.poster}
          alt={actual.alt}
          ratio="3/2"
          caption={actual.nombre}
        />
      </Rise>

      <Rise delay={0.12}>
        <StepText>Toca el que más te llame; lo llevamos anotado hasta el último paso.</StepText>
      </Rise>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {CURSOS.map((c, i) => {
          const activo = c.nombre === seleccion;
          return (
            <Rise key={c.nombre} delay={0.16 + i * 0.04}>
              <button
                type="button"
                onClick={() => onSelect(c.nombre)}
                aria-pressed={activo}
                className={`h-full w-full rounded-2xl border p-4 text-left transition active:scale-[0.98] ${
                  activo
                    ? "border-gold bg-gold/12 text-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-gold/50"
                }`}
              >
                <span className="block font-display text-xl text-foreground">{c.nombre}</span>
                <span className="mt-0.5 block text-xs">{c.edades}</span>
              </button>
            </Rise>
          );
        })}
        <Rise delay={0.36}>
          <button
            type="button"
            onClick={() => onSelect("Aún no lo sé")}
            aria-pressed={seleccion === "Aún no lo sé"}
            className={`flex h-full w-full items-center gap-2 rounded-2xl border p-4 text-left text-sm transition active:scale-[0.98] ${
              seleccion === "Aún no lo sé"
                ? "border-gold bg-gold/12 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-gold/50"
            }`}
          >
            <Sparkles size={16} className="shrink-0 text-gold" /> Aún no lo sé
          </button>
        </Rise>
      </div>

      <Rise delay={0.42} className="mt-6">
        <Card>
          <h2 className="text-lg text-foreground">¿Qué aprenderías el primer mes?</h2>
          <ol className="mt-4 space-y-3">
            {actual.hitos.map((h, i) => (
              <li key={h} className="flex items-start gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm text-gold">
                  {i + 1}
                </span>
                <p className="min-w-0 text-sm font-light leading-relaxed text-muted-foreground">
                  {h}
                </p>
              </li>
            ))}
          </ol>
        </Card>
      </Rise>
    </div>
  );
}
