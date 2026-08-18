/** Canal de conversión: WhatsApp de Vibra Music. */
export const WHATSAPP_NUMBER = "51970608367";

export type DemoLead = {
  nombre: string;
  edad: string;
  instrumento: string;
  telefono: string;
};

/** Construye el enlace de WhatsApp con el mensaje pre-armado del lead. */
export function buildWhatsappUrl(lead: DemoLead) {
  const message = [
    "¡Hola Vibra Music! Quiero reservar mi Clase Demo gratis 🎵",
    `• Nombre: ${lead.nombre}`,
    `• Edad del alumno: ${lead.edad}`,
    `• Instrumento de interés: ${lead.instrumento}`,
    `• Teléfono de contacto: ${lead.telefono}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
