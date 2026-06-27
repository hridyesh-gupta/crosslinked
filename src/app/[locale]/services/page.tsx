import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ServiceItemCard } from "@/components/ServiceItemCard";
import { ContactCta } from "@/components/sections/ContactCta";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { resolveCategories } from "@/content/resolve";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.meta.servicesTitle, description: dict.meta.servicesDescription };
}

export default async function ServicesPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const categories = resolveCategories(dict);

  return (
    <>
      <PageHeader heading={dict.servicesPage.header} />

      <div className="flex flex-col gap-20 py-20 sm:gap-24 sm:py-24">
        {categories.map((category) => (
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
                  <Reveal key={service.id} delay={(i % 3) * 0.06}>
                    <ServiceItemCard service={service} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        ))}
      </div>

      <ContactCta dict={dict} />
    </>
  );
}
