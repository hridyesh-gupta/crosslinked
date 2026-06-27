import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { StatsBand } from "@/components/sections/StatsBand";
import { ClientWall } from "@/components/sections/ClientWall";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { ContactCta } from "@/components/sections/ContactCta";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.meta.resultsTitle, description: dict.meta.resultsDescription };
}

export default async function ResultsPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader heading={dict.resultsPage.header} />
      <StatsBand dict={dict} />
      <ClientWall dict={dict} />
      <TestimonialsGrid dict={dict} />
      <ContactCta dict={dict} />
    </>
  );
}
