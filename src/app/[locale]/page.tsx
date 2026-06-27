import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
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

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <TrustStrip dict={dict} />
      <StatsBand dict={dict} />
      <ServicesPreview dict={dict} locale={locale} />
      <FeaturesGrid dict={dict} />
      <ProcessTimeline dict={dict} />
      <FeaturedTestimonial dict={dict} locale={locale} />
      <SecurityBand dict={dict} />
      <Faq dict={dict} />
      <ContactCta dict={dict} />
    </>
  );
}
