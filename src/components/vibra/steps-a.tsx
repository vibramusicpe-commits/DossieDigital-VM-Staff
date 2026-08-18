/**
 * Pasos 1 a 4 del onboarding Vibra Music.
 */
import { Award, Brain, Flame, Heart, Sparkles } from "lucide-react";

import onbBienvenida from "@/assets/onb-bienvenida.jpg";
import onbMetodo from "@/assets/onb-metodo.jpg";
import cursoBateria from "@/assets/curso-bateria.jpg";
import cursoCanto from "@/assets/curso-canto.jpg";
import cursoExplorar from "@/assets/curso-explorar.jpg";
import cursoGuitarra from "@/assets/curso-guitarra.jpg";
import cursoPiano from "@/assets/curso-piano.jpg";
import cursoViolin from "@/assets/curso-violin.jpg";
import vidBateria from "@/assets/curso-bateria.mp4.asset.json";
import vidCanto from "@/assets/curso-canto.mp4.asset.json";
import vidExplorar from "@/assets/curso-explorar.mp4.asset.json";
import vidGuitarra from "@/assets/curso-guitarra.mp4.asset.json";
import vidPiano from "@/assets/curso-piano.mp4.asset.json";
import vidViolin from "@/assets/curso-violin.mp4.asset.json";

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

export function StepWelcome() {
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
          Te acompañamos paso a paso en este recorrido de 8 pantallas para que conozcas la escuela,
          el método y tu primera clase gratuita.
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

export function StepMethod() {
  return (
    <div>
      <Rise>
        <Eyebrow>El método Vibra</Eyebrow>
        <StepTitle>Enseñamos con el corazón y con método</StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <Photo
          src={onbMetodo}
          alt="Profesor guiando las manos de un alumno adolescente en la guitarra"
          ratio="3/2"
        />
      </Rise>

      <div className="mt-6 space-y-3">
        {METODO.map((m, i) => (
          <Rise key={m.titulo} delay={0.12 + i * 0.06}>
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

const CURSOS = [
  {
    nombre: "Guitarra",
    edades: "7 años a adultos",
    poster: cursoGuitarra,
    video: vidGuitarra.url,
    alt: "Manos de una alumna tocando guitarra acústica con luz cálida",
  },
  {
    nombre: "Piano",
    edades: "desde 4 años",
    poster: cursoPiano,
    video: vidPiano.url,
    alt: "Manos recorriendo las teclas de un piano de cola",
  },
  {
    nombre: "Violín",
    edades: "7 años a adultos",
    poster: cursoViolin,
    video: vidViolin.url,
    alt: "Alumno tocando violín con el arco sobre las cuerdas",
  },
  {
    nombre: "Canto",
    edades: "7 años a adultos",
    poster: cursoCanto,
    video: vidCanto.url,
    alt: "Alumna cantando frente a un micrófono de estudio",
  },
  {
    nombre: "Batería",
    edades: "7 años a adultos",
    poster: cursoBateria,
    video: vidBateria.url,
    alt: "Manos con baquetas tocando caja y platillos",
  },
];

const CURSO_EXPLORAR = {
  nombre: "Aún no lo sé",
  poster: cursoExplorar,
  video: vidExplorar.url,
  alt: "Sala de ensayo con guitarra, piano, violín y batería bajo luces cálidas",
};

export function StepInstruments({
  seleccion,
  onSelect,
}: {
  seleccion: string;
  onSelect: (nombre: string) => void;
}) {
  const actual = CURSOS.find((c) => c.nombre === seleccion) ?? CURSO_EXPLORAR;

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
    </div>
  );
}
