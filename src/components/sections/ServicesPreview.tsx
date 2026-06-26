import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { serviceCategories } from "@/content/services";

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="What we do"
          title="Everything we build"
          accent="build"
          subtitle="Three connected disciplines — automation that runs your operations, products that put you online, and design that makes you unmistakable."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCategories.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <ServiceCategoryCard category={c} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
