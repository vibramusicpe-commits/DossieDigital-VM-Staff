/**
 * Datos centrales de los cursos: media por instrumento y los 3 hitos
 * concretos del primer mes (usados en el paso 4 y en el resumen final).
 */
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

export type Curso = {
  nombre: string;
  edades: string;
  poster: string;
  video: string;
  alt: string;
  /** Lo que aprendes el primer mes. */
  hitos: string[];
};

export const CURSOS: Curso[] = [
  {
    nombre: "Guitarra",
    edades: "7 años a adultos",
    poster: cursoGuitarra,
    video: vidGuitarra.url,
    alt: "Manos de una alumna tocando guitarra acústica con luz cálida",
    hitos: [
      "Tus primeros 4 acordes básicos",
      "Un ritmo de rasgueo que suena parejo",
      "Tu primera canción completa de principio a fin",
    ],
  },
  {
    nombre: "Piano",
    edades: "desde 4 años",
    poster: cursoPiano,
    video: vidPiano.url,
    alt: "Manos recorriendo las teclas de un piano de cola",
    hitos: [
      "Ubicar las notas sin mirar el teclado",
      "Melodía con mano derecha y acompañamiento simple",
      "Tu primera pieza tocada con las dos manos",
    ],
  },
  {
    nombre: "Violín",
    edades: "7 años a adultos",
    poster: cursoViolin,
    video: vidViolin.url,
    alt: "Alumno tocando violín con el arco sobre las cuerdas",
    hitos: [
      "Postura y arco con sonido limpio",
      "Las primeras notas afinadas en cuerdas al aire",
      "Tu primera melodía reconocible",
    ],
  },
  {
    nombre: "Canto",
    edades: "7 años a adultos",
    poster: cursoCanto,
    video: vidCanto.url,
    alt: "Alumna cantando frente a un micrófono de estudio",
    hitos: [
      "Respiración y calentamiento vocal diario",
      "Encontrar tu tono cómodo sin forzar",
      "Tu primera canción cantada con seguridad",
    ],
  },
  {
    nombre: "Batería",
    edades: "7 años a adultos",
    poster: cursoBateria,
    video: vidBateria.url,
    alt: "Manos con baquetas tocando caja y platillos",
    hitos: [
      "Agarre de baquetas y pulso estable",
      "Tu primer ritmo de rock coordinando manos y pie",
      "Tocar un tema completo con la pista",
    ],
  },
];

export const CURSO_EXPLORAR: Curso = {
  nombre: "Aún no lo sé",
  edades: "te ayudamos a elegir",
  poster: cursoExplorar,
  video: vidExplorar.url,
  alt: "Sala de ensayo con guitarra, piano, violín y batería bajo luces cálidas",
  hitos: [
    "Pruebas guiadas de varios instrumentos",
    "Descubres cuál se acomoda mejor a tus manos y tu oído",
    "Empiezas tu primera melodía en el que elijas",
  ],
};

export function getCurso(nombre: string): Curso {
  return CURSOS.find((c) => c.nombre === nombre) ?? CURSO_EXPLORAR;
}
