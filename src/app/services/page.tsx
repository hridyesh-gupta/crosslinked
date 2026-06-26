import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ServiceItemCard } from "@/components/ServiceItemCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { serviceCategories } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, website & app development, and design & branding — the full Crosslinked service catalogue.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything we build"
        accent="build"
        subtitle="Automation, web & app, and design — scoped to your stack and your ROI, not a fixed retainer."
      />

      <div className="flex flex-col gap-20 py-20 sm:gap-24 sm:py-24">
        {serviceCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <Container className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Eyebrow>{category.label}</Eyebrow>
                <div className="flex items-start gap-4">
                  <span className="hidden h-12 w-12 shrink-0 place-items-center rounded-xl border border-border-strong bg-canvas text-accent sm:grid">
                    <Icon name={category.icon} className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                      {category.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-muted">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, i) => (
                  <Reveal key={service.title} delay={(i % 3) * 0.06}>
                    <ServiceItemCard service={service} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ))}
      </div>

      <ContactCta />
    </>
  );
}
