import { HeroSection } from "../components/home/HeroSection";
import { TrustedBySection } from "../components/home/TrustedBySection";
import { ProblemSection } from "../components/home/ProblemSection";
import { DualLayerSection } from "../components/home/DualLayerSection";
import { FeaturesJourneySection } from "../components/home/FeaturesJourneySection";
import { ForCarriersSection } from "../components/home/ForCarriersSection";
import { IntegrationsSection } from "../components/home/IntegrationsSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { PricingPreviewSection } from "../components/home/PricingPreviewSection";
import { CTASection } from "../components/home/CTASection";

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProblemSection />
      <DualLayerSection />
      <FeaturesJourneySection />
      <ForCarriersSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <CTASection />
    </>
  );
}