# Vibra Music — Dossier Digital Interactivo

Mockup vertical mobile-first (contenedor `max-w-lg` centrado) con 8 secciones, barra de progreso de lectura, CTA inferior fijo y modal de inscripción que envía a WhatsApp (+51 970 608 367).

## Sistema de diseño

Tokens en `src/styles.css` (oklch equivalentes a los HEX indicados):

- Fondo `#FAF6ED`, superficie arena `#F0EAE0`, cards blancas con borde `#E2DACB`
- Texto principal `#1C1B1A`, párrafos `#4A5568`
- Primario Vibra Gold `#E8A217` (texto carbón, peso 700), secundario Terracota `#C86228`
- Radios suaves (`rounded-2xl`/`rounded-3xl`), sombras cálidas, halos dorados al 15–20%
- Tipografía retro-moderna cálida cargada vía `<link>` en el root

## Estructura de la página

Todo vive en `/` (`src/routes/index.tsx`), con componentes en `src/components/vibra/`:

1. **Hero** — badge "NUEVA ETAPA • ESCUELA DE MÚSICA", logo real con halo dorado, H1, subtítulo, CTA de scroll suave y ondas de frecuencia en SVG.
2. **Fundadora** — tarjeta editorial arena, avatar vectorial con anillo y halo, storytelling, cita en itálica y badge "+4 años".
3. **Cómo funcionan las clases** — tarjetas de duración, horarios y programas por etapa (Infantil / Junior / Juvenil-Adultos).
4. **Cursos** — explorador interactivo con 5 instrumentos (Guitarra, Piano, Violín, Canto, Batería); al seleccionar se muestran los rangos de edad con acento dorado.
5. **Método Vibra** — 3 bloques: enfoque anti-frustración, maestros apasionados, cómo los enamoramos.
6. **Beneficios y planes** — acordeón con los 9 beneficios, matriz de 3 planes (Mensual S/329, Trimestral S/289.40 recomendado, Anual S/263.20 destacado en terracota) y banner de matrícula con el 75% de descuento.
7. **Calidad de instrumentos** — 3 tarjetas de garantía con iconos.
8. **3 pasos** — línea secuencial con conectores dorados, CTA grande y micro-copy de cupos limitados.

## Interacciones

- Barra de progreso de lectura superior ligada al scroll.
- Barra inferior fija con "🎵 Reservar Clase Demo Gratis" que abre el modal.
- Modal de inscripción (nombre, edad del alumno, instrumento, teléfono): al enviar arma el mensaje y abre WhatsApp a +51970608367.
- Micro-animaciones de entrada al hacer scroll y estados táctiles en tarjetas y pestañas.

## Detalles técnicos

- El logo subido se publica como asset CDN y también se copia a `public/favicon.png` (versión cuadrada) actualizando el icono en `__root.tsx`.
- Iconografía Lucide (`Guitar`, `Piano`, `Mic`, `Music`, `Drum`, `Sparkles`, `Award`, `ShieldCheck`, etc.); sin fotos reales.
- Avatares e insignias vectoriales llevan el comentario `{/* REPLACE_WITH_ORIGINAL_IMAGE */}` para sustituirlos luego por fotos originales.
- Animaciones con Framer Motion (se instala si no está presente); componentes pequeños y comentados.
- SEO: `head()` propio en la ruta índice con título, descripción y og/twitter de Vibra Music.
