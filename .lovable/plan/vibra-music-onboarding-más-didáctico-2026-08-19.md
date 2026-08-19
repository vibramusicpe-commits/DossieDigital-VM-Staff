# Vibra Music — Onboarding más didáctico

El recorrido actual (8 pasos con video en el paso de Cursos) informa bien, pero el visitante solo lee y avanza. La mejora convierte el intro en una **mini clase de prueba**: en cada paso hace algo, aprende algo y termina con un perfil personalizado que motiva a reservar la clase demo.

## Idea central

"Antes de entrar a la escuela, ya tocaste algo." Tres momentos activos repartidos en el recorrido, sin alargarlo (siguen siendo 8 pasos).

## Cambios paso a paso

**1. Bienvenida** — pregunta de arranque: "¿Ya tocaste algún instrumento?" (Nunca / Un poco / Retomando). La respuesta ajusta el tono de los textos siguientes (mensajes para principiante vs. quien retoma) y se usa al final.

**3. El método** — "Pruébalo ahora": mini teclado táctil de 8 teclas que suena de verdad (audio sintetizado en el navegador). Aparece una guía de puntos: sigue las teclas iluminadas y tocas la melodía de "Estrellita". Al completarla: confeti dorado suave y el mensaje del método — "acabas de tocar tu primera melodía en 20 segundos; así enseñamos, primero el logro, después la teoría".

**4. Cursos** — se mantiene el video por instrumento y se suma una tarjeta "¿qué aprenderías el primer mes?" con 3 hitos concretos por instrumento (ej. guitarra: 4 acordes, primer ritmo, primera canción completa). La selección queda guardada para el resumen final.

**5. Para quién es** — la etapa correspondiente a la edad elegida se resalta; se añade un selector de edad rápido en lugar de una lista pasiva.

**6. Las clases** — juego corto de ritmo: toca el pulso 4 veces con el botón y ves tu precisión ("¡tienes buen tiempo!"), enlazado a la idea de práctica guiada de 45 minutos.

**7. Beneficios** — se reordena para mostrar primero el beneficio que corresponde al perfil elegido (niño / joven / adulto).

**8. Clase demo** — "Tu plan personalizado": tarjeta que resume instrumento elegido, nivel, etapa por edad y los 3 hitos del primer mes. El mensaje de WhatsApp se arma con ese resumen, así la escuela recibe un lead ya calificado.

## Detalles de cariño

- Indicador de logros: pequeñas estrellas doradas en la barra de progreso cuando completa un momento activo (melodía, ritmo, instrumento elegido).
- Todo interactivo es opcional: siempre se puede seguir sin tocar nada.
- Audio solo tras un toque del usuario, con botón de silencio visible.
- Respeta `prefers-reduced-motion` (sin confeti ni animación de teclas, solo el resultado).

## Notas técnicas

- Estado compartido del recorrido (nivel, instrumento, edad, logros) en un contexto ligero en `src/routes/index.tsx`, pasado a los pasos por props; sin backend.
- Nuevos componentes en `src/components/vibra/`: `MiniPiano` (Web Audio API, osciladores sencillos, sin archivos de audio), `RitmoTap`, `PlanResumen`.
- Datos de hitos por instrumento en el mismo mapa `CURSOS` de `steps-a.tsx`.
- `OnboardingShell` recibe los logros para pintar las estrellas en la barra de progreso.
- `DemoModal` y `src/lib/whatsapp.ts` amplían el mensaje con el resumen personalizado.
- Verificación: build y pasada de navegador tocando la melodía, el ritmo y comprobando el resumen final.
