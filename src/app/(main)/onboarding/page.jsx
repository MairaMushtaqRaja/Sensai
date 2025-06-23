import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";

export default function OnboardingPage() {
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
