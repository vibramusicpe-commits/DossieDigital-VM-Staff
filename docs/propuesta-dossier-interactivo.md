# Propuesta A — Vibra Music: Dossier digital interactivo

Propuesta guardada como referencia (no está implementada). Formato: una sola página
mobile-first de scroll largo, tipo dossier/brochure digital, paleta cálida clara.

## Concepto

Un "dossier" desplazable que cuenta la historia de la escuela de arriba a abajo,
con barra de progreso de lectura y un CTA fijo permanente al pie.

## Estructura (8 secciones)

1. **Portada / Hero** — logotipo con halo dorado, titular "Despierta tu pasión musical
   sin frustraciones", subtítulo con instrumentos y edad mínima, botón "Explorar Cursos
   y Beneficios", ondas de frecuencia decorativas en trazo dorado.
2. **Fundadora** — retrato de Claudia, relato de origen (caseta de madera en el Centro
   de Lima, casetes, cuerdas a crédito), cita destacada sobre el método anti-frustración,
   insignia "más de 4 años formando talentos".
3. **La experiencia** — tarjetas: duración (2 clases semanales de 45 min), flexibilidad
   de horarios (chips), programas por etapa (Infantil desde 4 años, Junior 7-12,
   Juvenil y Adultos 13+).
4. **Cursos** — selector horizontal de 5 instrumentos (Guitarra, Piano, Violín, Canto,
   Batería) con rangos de edad que cambian al elegir.
5. **Método** — 3 pilares: enfoque psicológico anti-frustración, maestros apasionados,
   cómo enamoramos de la música (amigos, recitales, premios).
6. **Beneficios e inversión** — acordeón con 9 beneficios; matriz de 3 planes
   (Mensual S/ 329, Trimestral S/ 289.40 con 12% dcto, Anual S/ 263.20 con 20% dcto);
   banner con matrícula S/ 120, útiles S/ 67 y 75% de descuento el día de la clase demo.
7. **Instrumentos** — 3 garantías de calidad: mejor aprendizaje (afinación y ergonomía),
   sonido auténtico, selección minuciosa.
8. **Pasos para inscribirse** — 3 pasos numerados que terminan en el CTA de clase demo.

## Sistema visual

- Paleta cálida retro-moderna en oklch: Warm Canvas `#FAF6ED`, Surface Sand `#F0EAE0`,
  Deep Carbon `#1C1B1A`, Slate Editorial `#4A5568`, Vibra Gold `#E8A217`,
  Warm Caramel `#C86228`.
- Tipografías: "Baloo 2" para títulos (redondeada y amable), "DM Sans" para cuerpo.
- Radios generosos (1rem base, hasta 2rem en tarjetas), sombras suaves difusas.
- Utilidades propias: `gold-halo` (halo radial dorado detrás de avatares/insignias) y
  `card-soft` (tarjeta blanca con borde sutil y sombra baja).
- Insignias circulares con iconos lineales como placeholder de fotos reales.

## Interacción

- `ReadingProgress`: barra dorada superior ligada al scroll con spring suave.
- `StickyCta`: botón fijo inferior "Reservar Clase Demo Gratis" con blur de fondo.
- `Reveal`: animación de entrada (fade + 18px) al entrar en viewport, una sola vez.
- Modal de clase demo con formulario (nombre, edad, instrumento, teléfono) que arma
  el mensaje y abre WhatsApp (+51 970 608 367).

## Cuándo reutilizarla

Sirve para clientes que necesitan un brochure de una sola página, muy escaneable,
imprimible como PDF y con lectura completa sin interacción obligatoria.
