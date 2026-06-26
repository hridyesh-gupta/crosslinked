import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeaturedTestimonial } from "@/components/sections/FeaturedTestimonial";
import { SecurityBand } from "@/components/sections/SecurityBand";
import { Faq } from "@/components/sections/Faq";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatsBand />
      <ServicesPreview />
      <FeaturesGrid />
      <ProcessTimeline />
      <FeaturedTestimonial />
      <SecurityBand />
      <Faq />
      <ContactCta />
    </>
  );
}
