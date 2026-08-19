/** Estado compartido del recorrido didáctico (sin backend). */

export type Nivel = "Nunca" | "Un poco" | "Retomando";

export type Etapa = {
  etapa: string;
  edad: string;
  detalle: string;
  /** Rango de edad usado para resaltar la etapa elegida. */
  min: number;
  max: number;
};

export const ETAPAS: Etapa[] = [
  { etapa: "Infantil", edad: "4 a 6 años", detalle: "3 años de formación lúdica", min: 4, max: 6 },
  { etapa: "Junior", edad: "7 a 12 años", detalle: "4 años de evolución técnica", min: 7, max: 12 },
  { etapa: "Juvenil", edad: "13 a 17 años", detalle: "Repertorio a su medida", min: 13, max: 17 },
  {
    etapa: "Adultos",
    edad: "18 años a más",
    detalle: "Ritmo flexible, sin presión",
    min: 18,
    max: 120,
  },
];

export type Logro = "melodia" | "ritmo" | "instrumento";

export const TOTAL_LOGROS = 3;

export type Journey = {
  nivel: Nivel | null;
  instrumento: string;
  etapa: string | null;
  logros: Logro[];
};

export const NIVEL_MENSAJE: Record<Nivel, string> = {
  Nunca: "Empezamos desde cero: primero tocas, después entendemos la teoría.",
  "Un poco": "Perfecto, ordenamos lo que ya sabes y te destrabamos rápido.",
  Retomando: "Volver es más fácil de lo que crees: retomamos tu nivel real.",
};
