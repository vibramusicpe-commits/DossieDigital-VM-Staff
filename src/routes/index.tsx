import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";

import { DemoModal } from "@/components/vibra/DemoModal";
import { OnboardingShell } from "@/components/vibra/OnboardingShell";
import {
  StepFounder,
  StepInstruments,
  StepMethod,
  StepWelcome,
} from "@/components/vibra/steps-a";
import {
  StepBenefits,
  StepBooking,
  StepClasses,
  StepProfiles,
} from "@/components/vibra/steps-b";

const TITLE = "Vibra Music — Descubre tu instrumento en 8 pasos";
const DESCRIPTION =
  "Recorrido guiado por la escuela Vibra Music en Lima: método anti-frustración, cursos de guitarra, piano, violín, canto y batería, y tu clase demostrativa gratis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: OnboardingPage,
});

const LABELS = [
  "Bienvenida",
  "Nuestra historia",
  "El método",
  "Cursos",
  "Para quién es",
  "Las clases",
  "Beneficios",
  "Tu clase demo",
];

function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [instrumento, setInstrumento] = useState("Guitarra");
  const [modalOpen, setModalOpen] = useState(false);

  const total = LABELS.length;
  const isLast = step === total - 1;

  const goTo = useCallback((next: number) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = useCallback(() => {
    if (isLast) {
      setModalOpen(true);
      return;
    }
    goTo(step + 1);
  }, [goTo, isLast, step]);

  const handlePrev = useCallback(() => {
    if (step > 0) goTo(step - 1);
  }, [goTo, step]);

  const steps = [
    <StepWelcome key="welcome" />,
    <StepFounder key="founder" />,
    <StepMethod key="method" />,
    <StepInstruments key="instruments" seleccion={instrumento} onSelect={setInstrumento} />,
    <StepProfiles key="profiles" />,
    <StepClasses key="classes" />,
    <StepBenefits key="benefits" />,
    <StepBooking key="booking" instrumento={instrumento} onCta={() => setModalOpen(true)} />,
  ];

  return (
    <>
      <OnboardingShell
        total={total}
        current={step}
        label={LABELS[step] ?? ""}
        onNext={handleNext}
        onPrev={handlePrev}
        onSkip={() => goTo(total - 1)}
        nextLabel={isLast ? "Reservar clase demo gratis" : "Siguiente"}
      >
        {steps[step]}
      </OnboardingShell>

      <DemoModal
        open={modalOpen}
        instrumento={instrumento}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
