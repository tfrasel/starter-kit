import { DeploymentTestimonialSection } from "./sections/DeploymentTestimonialSection";
import { FaqSection } from "./sections/FaqSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { HeroMessagingSection } from "./sections/HeroMessagingSection";
import { PricingTierSection } from "./sections/PricingTierSection";
import { ProductOverviewSection } from "./sections/ProductOverviewSection";
import { ScaleFeatureGridSection } from "./sections/ScaleFeatureGridSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-bg w-full flex flex-col">
      <HeroMessagingSection />
      <ScaleFeatureGridSection />
      <ProductOverviewSection />
      <PricingTierSection />
      <DeploymentTestimonialSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterLinksSection />
    </div>
  );
};
