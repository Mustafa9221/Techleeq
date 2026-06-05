import { HeroSection } from '../components/HeroSection';
import { SocialProofBar } from '../components/SocialProofBar';
import { ValueProposition } from '../components/ValueProposition';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorks } from '../components/HowItWorks';
import { PricingTeaser } from '../components/PricingTeaser';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ValueProposition />
      <FeaturesGrid />
      <HowItWorks />
      <PricingTeaser />
      <Testimonials />
      <CTABanner />
    </>
  );
}
