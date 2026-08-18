/**
 * Pasos 5 a 8 del onboarding Vibra Music.
 */
import {
  CalendarDays,
  Camera,
  GraduationCap,
  Heart,
  Music2,
  PartyPopper,
  RefreshCw,
  Sparkles,
  Timer,
  Trophy,
  Users,
  Video,
} from "lucide-react";

import onbPerfiles from "@/assets/onb-perfiles.jpg";
import onbRecital from "@/assets/onb-recital.jpg";

import {
  Card,
  Eyebrow,
  IconBadge,
  Photo,
  PhotoSlot,
  Rise,
  StepText,
  StepTitle,
} from "./step-primitives";

/* ------------------------------------------------------------------- PASO 5 */

const PERFILES = [
  { etapa: "Infantil", edad: "4 a 6 años", detalle: "3 años de formación lúdica" },
  { etapa: "Junior", edad: "7 a 12 años", detalle: "4 años de evolución técnica" },
  { etapa: "Juvenil", edad: "13 a 17 años", detalle: "Repertorio a su medida" },
  { etapa: "Adultos", edad: "18 años a más", detalle: "Ritmo flexible, sin presión" },
];

export function StepProfiles() {
  return (
    <div>
      <Rise>
        <Eyebrow>Para quién es</Eyebrow>
        <StepTitle>Nunca es tarde ni temprano para empezar</StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <Photo
          src={onbPerfiles}
          alt="Niña tocando el piano mientras su profesora la felicita"
          ratio="3/2"
        />
      </Rise>

      <div className="mt-6 space-y-3">
        {PERFILES.map((p, i) => (
          <Rise key={p.etapa} delay={0.12 + i * 0.05}>
            <Card className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="min-w-0">
                <h2 className="text-lg text-foreground">{p.etapa}</h2>
                <p className="text-xs font-light text-muted-foreground">{p.detalle}</p>
              </div>
              <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold">
                {p.edad}
              </span>
            </Card>
          </Rise>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- PASO 6 */

const HORARIOS = ["Lun y Mié", "Mar y Jue", "Viernes intensivo", "Sábados intensivos"];

export function StepClasses() {
  return (
    <div>
      <Rise>
        <Eyebrow>Cómo son las clases</Eyebrow>
        <StepTitle>Dos encuentros por semana, cero apuro</StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <Card className="flex items-start gap-4">
          <IconBadge icon={Timer} />
          <div className="min-w-0">
            <h2 className="text-lg text-foreground">45 minutos por sesión</h2>
            <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
              2 clases semanales de práctica guiada, con seguimiento personal de tu profesor.
            </p>
          </div>
        </Card>
      </Rise>

      <Rise delay={0.12}>
        <Card className="mt-3">
          <div className="flex items-center gap-4">
            <IconBadge icon={CalendarDays} />
            <h2 className="text-lg text-foreground">Horarios flexibles</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {HORARIOS.map((h) => (
              <span
                key={h}
                className="rounded-full border border-border bg-sand px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {h}
              </span>
            ))}
          </div>
        </Card>
      </Rise>

      <Rise delay={0.18}>
        <Card className="mt-3 flex items-start gap-4">
          <IconBadge icon={RefreshCw} />
          <div className="min-w-0">
            <h2 className="text-lg text-foreground">Recuperación garantizada</h2>
            <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
              Si faltas, reprogramamos tu clase. Nadie se queda atrás.
            </p>
          </div>
        </Card>
      </Rise>

      <Rise delay={0.24} className="mt-6">
        <PhotoSlot label="Foto real de un salón de clases de Vibra" ratio="3/2" />
      </Rise>
    </div>
  );
}

/* ------------------------------------------------------------------- PASO 7 */

const BENEFICIOS = [
  { icon: PartyPopper, texto: "Recitales y conciertos en vivo" },
  { icon: Trophy, texto: "Concursos y desafíos de talento" },
  { icon: Camera, texto: "Sesión de fotos profesional de recuerdo" },
  { icon: Video, texto: "Videos de progreso para los padres" },
  { icon: GraduationCap, texto: "Niveles con concierto de graduación" },
  { icon: Users, texto: "Talleres vivenciales para familias" },
  { icon: Heart, texto: "Comunidad Vibra: acompañamiento emocional" },
  { icon: Music2, texto: "Instrumentos seleccionados por especialistas" },
];

const PLANES = [
  { nombre: "Mensual", precio: "S/ 329", nota: "por mes", destacado: false },
  { nombre: "Trimestral", precio: "S/ 289.40", nota: "por mes · 12% dcto", destacado: false },
  { nombre: "Anual", precio: "S/ 263.20", nota: "por mes · 20% dcto", destacado: true },
];

export function StepBenefits() {
  return (
    <div>
      <Rise>
        <Eyebrow>Beneficios e inversión</Eyebrow>
        <StepTitle>Momentos que valen más que la nota</StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <Photo
          src={onbRecital}
          alt="Alumna de Vibra Music cantando en un recital mientras el público aplaude"
          ratio="3/2"
        />
      </Rise>

      <ul className="mt-6 grid gap-2">
        {BENEFICIOS.map((b, i) => {
          const Icon = b.icon;
          return (
            <Rise key={b.texto} delay={0.1 + i * 0.035}>
              <li className="flex items-center gap-3 rounded-2xl border border-border/70 bg-sand/50 px-4 py-3">
                <Icon size={16} className="shrink-0 text-gold" />
                <span className="min-w-0 text-sm font-light text-muted-foreground">{b.texto}</span>
              </li>
            </Rise>
          );
        })}
      </ul>

      <div className="mt-7 space-y-3">
        {PLANES.map((p, i) => (
          <Rise key={p.nombre} delay={0.14 + i * 0.06}>
            <div
              className={`rounded-3xl border p-5 ${
                p.destacado ? "border-gold bg-gold/12" : "border-border bg-card"
              }`}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="min-w-0">
                  <p className="truncate font-display text-xl text-foreground">Plan {p.nombre}</p>
                  <p className="text-xs font-light text-muted-foreground">{p.nota}</p>
                </div>
                <p
                  className={`shrink-0 font-display text-2xl ${
                    p.destacado ? "text-gold" : "text-foreground"
                  }`}
                >
                  {p.precio}
                </p>
              </div>
              {p.destacado ? (
                <span className="mt-3 inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-foreground">
                  Mayor ahorro
                </span>
              ) : null}
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={0.34}>
        <div className="mt-6 rounded-3xl border border-dashed border-gold/40 bg-sand/60 p-5">
          <p className="text-sm font-light text-muted-foreground">
            Matrícula regular <strong className="font-semibold text-foreground">S/ 120</strong> ·
            útiles anuales <strong className="font-semibold text-foreground">S/ 67</strong> (Método
            Vibra, Practikid y partituras).
          </p>
          <p className="mt-3 flex items-start gap-2 text-[15px] leading-snug text-foreground">
            <Sparkles size={18} className="mt-0.5 shrink-0 text-gold" />
            <span>
              <strong className="font-semibold">75% de descuento</strong> en tu matrícula si te
              inscribes el día de tu clase demostrativa.
            </span>
          </p>
        </div>
      </Rise>
    </div>
  );
}

/* ------------------------------------------------------------------- PASO 8 */

const PASOS = [
  "Reserva tu clase demo 100% gratis.",
  "Ven, prueba distintos instrumentos y descubre tu favorito.",
  "Elige tu programa y asegura tu 75% de descuento en matrícula.",
];

export function StepBooking({
  instrumento,
  onCta,
}: {
  instrumento: string;
  onCta: () => void;
}) {
  return (
    <div>
      <Rise>
        <Eyebrow>Último paso</Eyebrow>
        <StepTitle>
          Tu primera clase es <em className="italic text-gold">gratis</em>
        </StepTitle>
      </Rise>

      <Rise delay={0.06} className="mt-7">
        <PhotoSlot label="Foto real de la bienvenida en recepción" ratio="3/2" />
      </Rise>

      <ol className="mt-6 space-y-3">
        {PASOS.map((p, i) => (
          <Rise key={p} delay={0.12 + i * 0.06}>
            <li className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 font-display text-base text-gold">
                {i + 1}
              </span>
              <p className="min-w-0 text-sm font-light leading-relaxed text-muted-foreground">
                {p}
              </p>
            </li>
          </Rise>
        ))}
      </ol>

      <Rise delay={0.3}>
        <div className="mt-6 rounded-3xl border border-gold/40 bg-gold/10 p-5 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Tu instrumento elegido
          </p>
          <p className="mt-2 font-display text-2xl text-gold">{instrumento}</p>
          <button
            type="button"
            onClick={onCta}
            className="mt-4 w-full rounded-2xl bg-gold px-5 py-4 text-[15px] font-semibold text-gold-foreground transition active:scale-[0.98]"
          >
            Reservar mi clase demo gratis
          </button>
        </div>
      </Rise>
    </div>
  );
}
