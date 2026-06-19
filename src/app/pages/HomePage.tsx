import { HeroSection } from '../components/HeroSection';
import { ValueProposition } from '../components/ValueProposition';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { CTABanner } from '../components/CTABanner';
import { ServicesSlider } from '../components/ServicesSlider';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <FeaturesGrid />
      <ServicesSlider />
      <HowItWorks />
      <CTABanner />
    </>
  );
}
