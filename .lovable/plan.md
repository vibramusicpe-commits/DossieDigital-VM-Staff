# Cursos "full visual" — media que cambia con el instrumento

El paso 4 (Cursos) deja de tener una foto fija: el marco superior se convierte en una pieza de video en loop que cambia al tocar cada instrumento (guitarra, piano, violín, canto, batería y "aún no lo sé").

## Qué se construye

1. **Nuevo primitivo `MediaFrame`** en `src/components/vibra/step-primitives.tsx`, con la misma estética que `Photo` (marco dorado, esquinas 3xl, viñeta cálida). Acepta `video` + `poster` + `alt`, reproduce mudo en loop y hace crossfade suave al cambiar de selección.
2. **Datos centralizados**: el mapa `CURSOS` pasa a incluir `{ nombre, edades, poster, video, alt }`, para que agregar un instrumento sea una sola entrada.
3. **Paso 4 conectado**: al tocar una tarjeta, el `MediaFrame` cambia de clip; la selección sigue viajando hasta el paso de reserva como hoy.
4. **Accesibilidad**: con `prefers-reduced-motion` activo se muestra solo el poster, sin video.
5. **Fallback sin hueco**: `preload="metadata"` y el poster visible desde el primer frame; si el video falla, queda la imagen.

## Videos

Se generan 6 clips cortos (~4 s, mudos, vertical/3:2) con IA en el estilo actual: luz cálida, fondo oscuro, acentos dorados, plano cerrado del instrumento en manos de un alumno. Se suben como assets CDN por peso, no al repo.

## Después (mismo patrón)

Una vez validado el paso 4, extender `MediaFrame` a bienvenida, método, perfiles y recital para la meta de "nada estático". Cada paso reutiliza su imagen actual como poster.

## Notas técnicas

- Archivos tocados: `src/components/vibra/step-primitives.tsx` (nuevo `MediaFrame`), `src/components/vibra/steps-a.tsx` (`StepInstruments` + `CURSOS`).
- Videos vía `videogen`, subidos con `lovable-assets` y referenciados por su `.asset.json`.
- Sin cambios de lógica de negocio ni del flujo de reserva.

Generar los videos consume créditos.
