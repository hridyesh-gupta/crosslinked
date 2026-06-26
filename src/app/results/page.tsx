import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { StatsBand } from "@/components/sections/StatsBand";
import { ClientWall } from "@/components/sections/ClientWall";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real outcomes for 30+ clients across restaurants, professional services, education and research — and the stories behind them.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Results"
        title="Outcomes, not promises"
        accent="Outcomes"
        subtitle="Delivering AI and web solutions that close more clients and grow recurring revenue."
      />
      <StatsBand />
      <ClientWall />
      <TestimonialsGrid />
      <ContactCta />
    </>
  );
}
