import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { resolveCategories } from "@/content/resolve";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

export function ServicesPreview({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const categories = resolveCategories(dict);
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading heading={dict.servicesPreview} />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <ServiceCategoryCard
                category={c}
                locale={locale}
                servicesSuffix={dict.servicesPreview.servicesSuffix}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
