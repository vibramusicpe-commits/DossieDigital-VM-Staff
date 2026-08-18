# Remix of Remix of Vibra Music Interactive Mockup

Actúa como un Diseñador UI/UX Senior y Desarrollador Frontend experto en React, Tailwind CSS, Lucide Icons y Framer Motion.

Crea un MOCKUP INTERACTIVO en formato vertical (Mobile-First / Dossier Digital Interactivo) para "VIBRA MUSIC", una escuela de música moderna, cálida y de alta conversión.

---

### ⚠️ REGLA CRÍTICA DE ASSETS E IMÁGENES (FASE MOCKUP)

- NO uses fotografías reales fijas ni enlaces rotos.

- Usa **Placeholders estilizados**, **Lucide Icons** y contenedores con fondo transparente y halos de luz (glow effects en `#E8A217` al 15-20% de opacidad).

- Para el logotipo: Usa un contenedor con logo placeholder o `/assets/logo-vibra.png` listo para recibir el archivo con fondo transparente.

- Para la Fundadora y los Instrumentos: Diseña avatares e insignias vectoriales elegantes con iconos musicales (Lucide: `Guitar`, `Piano`, `Mic`, `Music`, `Sparkles`, `Award`, `ShieldCheck`), dejando en el código el comentario: `{/* REPLACE_WITH_ORIGINAL_IMAGE */}` para su fácil sustitución posterior.

---

### 🎨 1. SISTEMA DE DISEÑO Y TOKENS (OBLIGATORIO)

Configura e implementa la siguiente paleta cromática exacta:

- Background Global: `#FAF6ED` (Warm Canvas - crema cálido y editorial)

- Surface / Cards secundarias: `#F0EAE0` (Surface Sand)

- Surface Cards principales: `#FFFFFF` con border `1px solid #E2DACB` y shadow suave

- Textos Principales (H1, H2, H3): `#1C1B1A` (Deep Carbon - alto contraste)

- Textos de Párrafos y Metadatos: `#4A5568` (Slate Editorial)

- Color Primario (Hero / Botones CTA / Acentos activos): `#E8A217` (Vibra Gold) con texto en `#1C1B1A` (Font-weight: 700)

- Color Secundario (Conversión / Ofertas / Badges): `#C86228` (Warm Caramel / Terracota)

- Bordes y Separadores: `#E2DACB`

Estilo Visual: Retro-moderno, cálido, curvas suaves (`rounded-2xl` y `rounded-3xl`), micro-animaciones al hacer scroll e interfaz táctil optimizada para móviles.

---

### 📱 2. EXPERIENCIA DE USUARIO (UX/UI VERTICAL)

- Formato optimizado para visualización en Smartphone y Desktop vertical (contenedor centrado: `max-w-md` o `max-w-lg` simulando un dossier interactivo para smartphone).

- Barra inferior fija (Sticky Bottom CTA): Botón flotante siempre visible: "🎵 Reservar Clase Demo Gratis" que abre un modal de registro o enlace interactivo a WhatsApp.

- Barra de progreso de lectura superior mientras se hace scroll por las 8 secciones.

---

### 📑 3. ESTRUCTURA Y CONTENIDO EXACTO DE LAS 8 SECCIONES

#### SECCIÓN 1: PORTADA (Hero Screen)

- Badge superior: "NUEVA ETAPA • ESCUELA DE MÚSICA"

- Logo central de VIBRA MUSIC (Placeholder transparente con halo dorado).

- Título H1: "Despierta tu pasión musical sin frustraciones."

- Subtítulo: "Aprende Guitarra, Piano, Violín, Canto o Batería desde los 4 años con un método propio diseñado para enamorarte de la música."

- Botón de Acción Principal (CTA): "Explorar Cursos y Beneficios ↓" (Scroll suave)

- Elemento visual decorativo: Ondas de frecuencia sonora en trazo fino `#E8A217`.

#### SECCIÓN 2: NUESTRA FUNDADORA & HISTORIA

- Encabezado: "Historia y Pasión" -> Título: "Conoce a Claudia, Fundadora y Directora de Vibra Music"

- Tarjeta editorial (`#F0EAE0`) con un avatar placeholder estilizado (ícono `Sparkles` / `UserCheck` con anillo perimetral y halo dorado `#E8A217`).

- Storytelling condensado:

  * "Desde una pequeña caseta de madera en el Centro de Lima vendiendo casetes y comprando cuerdas de guitarra a crédito, hasta liderar una comunidad de cientos de alumnos. Claudia descubrió que la música es el puente que transforma vidas y genera confianza."

  * Cita destacada en itálica: "Nos propusimos resolver las frustraciones que atraviesan quienes aprenden un instrumento, priorizando la motivación y el amor por el arte."

- Badge de confianza: "Más de 4 años formando talentos y creando experiencias inolvidables."

#### SECCIÓN 3: CÓMO FUNCIONAN LAS CLASES

- Título: "¿Cómo es la experiencia en Vibra Music?"

- Tarjetas interactivas con iconos modernos:

  * ⏱️ Duración: 2 clases por semana (45 minutos por sesión de práctica guiada).

  * 📅 Flexibilidad de Horarios: Lunes y Miércoles | Martes y Jueves | Viernes Intensivo | Sábados Intensivos.

  * 🎯 Programas por Etapa:

    - Infantil (desde 4 años): 3 años de formación lúdica.

    - Junior (7 a 12 años): 4 años de evolución técnica.

    - Juvenil y Adultos (13 años a más): 4 años con repertorio personalizado.

#### SECCIÓN 4: NUESTROS CURSOS (Explorador Interactivo)

- Selector de instrumentos por pestañas o grid de 5 tarjetas interactivas (cada una con su contenedor placeholder circular iluminado con halo dorado `#E8A217` e ícono Lucide alusivo):

  1. 🎸 GUITARRA (Junior: 7-12 | Juvenil: 13-17 | Adultos: 18+)

  2. 🎹 PIANO (Infantil: 4-6 | Junior: 7-12 | Juvenil: 13-17 | Adultos: 18+)

  3. 🎻 VIOLÍN (Junior: 7-12 | Juvenil: 13-17 | Adultos: 18+)

  4. 🎤 CANTO (Junior: 7-12 | Juvenil: 13-17 | Adultos: 18+)

  5. 🥁 BATERÍA (Junior: 7-12 | Juvenil: 13-17 | Adultos: 18+)

- Badges de rango de edad en gris plomo `#4A5568` y acentos dorados al seleccionar.

#### SECCIÓN 5: METODOLOGÍA ÚNICA (El Método Vibra)

- Título: "¿Por qué nuestro método funciona?"

- Bloques de valor interactivos:

  * 🧠 Enfoque Psicológico Anti-Frustración: Técnicas pedagógicas que mantienen al alumno curioso y construyen el hábito de la práctica divertida.

  * 🔥 Maestros Apasionados: Un profesor apasionado inspira e impulsa a sus alumnos.

  * ❤️ ¿Cómo los enamoramos de la música?: Nuevos amigos, recitales en vivo y premios por avance constante.

#### SECCIÓN 6: BENEFICIOS EXCLUSIVOS Y PLANES DE INVERSIÓN

- Acordeón / Grid de los 9 Beneficios Incluidos:

  1. Clases semanales estructuradas

  2. Recuperación de clases garantizada

  3. Concursos y desafíos de talento

  4. Recitales y conciertos en vivo

  5. Sesión de fotos profesional de recuerdo

  6. Videos demostrativos de progreso periódicos para padres

  7. Niveles de estudio con Concierto de Graduación

  8. Talleres vivenciales para padres

  9. Comunidad Vibra (acompañamiento y formación emocional)

- Matriz de Planes y Precios:

  * PLAN MENSUAL: S/ 329 /mes

  * PLAN TRIMESTRAL: S/ 289.40 /mes (12% DCTO) -> [Badge: Opción Recomendada]

  * PLAN ANUAL: S/ 263.20 /mes (20% DCTO) -> [Tarjeta destacada en `#C86228` con texto blanco]

- Banner Promocional de Matrícula:

  * "Matrícula regular: S/ 120 | Útiles anuales: S/ 67 (Método Vibra, Practikid y partituras)."

  * 💥 OFERTA DESTACADA: **75% DE DESCUENTO EN TU MATRÍCULA** al inscribirte el día de tu Clase Demostrativa.

#### SECCIÓN 7: CALIDAD DE INSTRUMENTOS

- Título: "Calidad y durabilidad en cada nota"

- 3 Tarjetas de garantía con iconos de protección y audio:

  * 🎼 Mejor Aprendizaje: Afinación estable y ergonomía para proteger las manos desde el primer día.

  * 🔊 Sonido Auténtico: Resonancia superior que motiva a practicar con gusto.

  * 🛡️ Selección Minuciosa: Instrumentos duraderos seleccionados por especialistas.

#### SECCIÓN 8: INSCRIBIRSE EN 3 PASOS (Cierre de Conversión)

- Título: "¿Cómo empezar tu camino musical?"

- Línea secuencial interactiva 1-2-3 con conectores dorados:

  * Paso 1: Reserva tu Clase Demo 100% GRATIS.

  * Paso 2: Asiste a la clase, prueba diferentes instrumentos y descubre tu favorito.

  * Paso 3: Elige tu programa, asegura tu 75% de descuento en matrícula y ¡comienza a tocar!

- Botón CTA Grande y Destacado: "🎶 Agendar mi Clase Demo Gratuita Ahora"

- Micro-copy de seguridad: "Cupos limitados por semana para atención personalizada."

---

### ⚙️ 4. REQUERIMIENTOS TÉCNICOS

- Código limpio, modular y documentado con comentarios claros para reemplazar los placeholders con fotos originales cuando estén listas.

- Modal de inscripción interactivo al hacer clic en los botones CTA.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/759bdc36-e16e-4402-a71b-0d38912d76c3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
