# Vibra Music — Onboarding paso a paso

Reemplazamos la landing de scroll largo por una experiencia tipo catálogo/onboarding: una pantalla por tema, avance con botón "Siguiente" y barra de progreso. Más fotos de personas y una paleta negro + dorado + blanco + marrón.

## Antes de tocar nada

La propuesta actual (dossier interactivo) se guarda como referencia en `docs/propuesta-dossier-interactivo.md`, con su estructura de secciones y decisiones de diseño, para reutilizarla en otro proyecto.

## Experiencia

Pantalla completa, mobile-first, centrada. Arriba: barra de progreso segmentada + logo pequeño. Abajo: botón primario "Siguiente" y enlace discreto "Saltar al contacto".

```text
┌──────────────────────────────┐
│ ▓▓▓▓▓▓░░░░░░  3/8   Vibra    │
│                              │
│      [ foto de persona ]     │
│                              │
│   Titular grande dorado      │
│   Texto corto y cálido       │
│   · bullets / cards          │
│                              │
│   [   Siguiente   ]  Atrás   │
└──────────────────────────────┘
```

Pasos (8):
1. Bienvenida — foto de la fundadora enseñando, promesa de marca.
2. Quién soy — Alexandra, trayectoria, cercanía.
3. Cómo enseñamos — método en 3 ideas.
4. Instrumentos — tarjetas seleccionables (piano, guitarra, canto, batería, ukelele…).
5. Para quién — niños, jóvenes, adultos, con foto por perfil.
6. Clases y cursos — modalidades y duración.
7. Beneficios y resultados — testimonios cortos con retrato.
8. Reserva tu clase demo — formulario/modal + WhatsApp.

Detalles de cariño: transición suave al cambiar de paso, fotos con marco redondeado y viñeta cálida, hilos dorados finos como separadores, micro-animación de entrada en titulares, avance también por teclado (flechas) y swipe vertical.

## Imágenes

Mixto: genero retratos y escenas de clase con IA en estilo consistente (luz cálida, fondo oscuro, dorado) para los pasos 3, 4, 5 y 7; dejo marcos preparados para fotos reales de Alexandra y alumnos en los pasos 1, 2 y 8.

## Estilo

- Fondo negro profundo, superficies marrón oscuro, texto blanco cálido, acentos dorados.
- Titulares en serif display con carácter; cuerpo sans limpio.
- Todos los colores como tokens semánticos en `src/styles.css` (nada de clases de color fijas en componentes).

## Notas técnicas

- `src/routes/index.tsx` pasa a ser el contenedor del onboarding: estado de paso actual, progreso, navegación, `head()` propio con título y descripción de Vibra Music.
- Cada paso es un componente en `src/components/vibra/steps/`; los componentes actuales de `sections-a.tsx` / `sections-b.tsx` se reescriben o retiran según encajen.
- Progreso y navegación en un componente compartido (`OnboardingShell`) que recibe los pasos como arreglo.
- El paso final mantiene el CTA de clase demo con enlace a WhatsApp.
- Imágenes generadas se guardan en `src/assets/` e importan como módulos ES6, con `alt` descriptivo.
- Verifico con build y una pasada de navegador: avanzar los 8 pasos, volver atrás y abrir el CTA final.
