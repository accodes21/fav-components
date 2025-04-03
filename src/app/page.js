import Otp from "@/components/otp";
import StepwiseImageSwitch from "@/components/step-image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-8 p-24">
      <Otp />
      <StepwiseImageSwitch />
    </main>
  );
}
