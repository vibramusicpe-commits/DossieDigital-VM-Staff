/**
 * Modal de inscripción a la Clase Demo.
 * Al enviar, arma el mensaje y abre WhatsApp (+51 970 608 367).
 */
import { AnimatePresence, motion } from "framer-motion";
import { Music, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { buildWhatsappUrl } from "@/lib/whatsapp";

const INSTRUMENTOS = ["Guitarra", "Piano", "Violín", "Canto", "Batería", "Aún no lo sé"];

export function DemoModal({
  open,
  onClose,
  instrumento = "Guitarra",
}: {
  open: boolean;
  onClose: () => void;
  instrumento?: string;
}) {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    instrumento,
    telefono: "",
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    window.open(buildWhatsappUrl(form), "_blank", "noopener,noreferrer");
    onClose();
  }

  const field =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-background/80 backdrop-blur-sm px-4 pb-4 pt-10 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Reservar clase demo gratis"
            className="card-soft w-full max-w-md rounded-3xl p-6"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground">
                  <Music size={12} /> Clase demo gratis
                </span>
                <h2 className="mt-3 text-xl font-bold text-foreground">
                  Reserva tu clase demostrativa
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Completa tus datos y coordinamos tu horario por WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition hover:bg-sand"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                required
                className={field}
                placeholder="Nombre y apellido"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
              <input
                required
                className={field}
                placeholder="Edad del alumno"
                value={form.edad}
                onChange={(e) => setForm({ ...form, edad: e.target.value })}
              />
              <select
                className={field}
                value={form.instrumento}
                onChange={(e) => setForm({ ...form, instrumento: e.target.value })}
              >
                {INSTRUMENTOS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <input
                required
                type="tel"
                className={field}
                placeholder="Teléfono de contacto"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-gold px-5 py-4 text-base font-bold text-gold-foreground transition active:scale-[0.98]"
              >
                🎶 Enviar y agendar por WhatsApp
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Cupos limitados por semana para atención personalizada.
              </p>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
