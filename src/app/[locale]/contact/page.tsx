import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, ArrowUpRight, Phone, Mail, MessageCircle, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { site } from "@/content/structure";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return { title: dict.meta.contactTitle, description: dict.meta.contactDescription };
}

export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const cp = dict.contactPage;

  const waHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    dict.whatsappPrefill,
  )}`;

  const tiers = [
    { ...cp.discovery, href: site.contact.calendly, highlight: false, price: cp.discovery.price },
    { ...cp.deepDive, href: site.contact.calendly, highlight: true, price: site.contact.deepDivePrice },
  ];

  const direct = [
    { label: site.contact.phoneDisplay, href: `tel:${site.contact.phone}`, icon: Phone },
    { label: site.contact.email, href: `mailto:${site.contact.email}`, icon: Mail },
    { label: cp.chatLabel, href: waHref, icon: MessageCircle },
  ];

  return (
    <>
      <PageHeader heading={cp.header} />

      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            {tiers.map((t) => (
              <div
                key={t.title}
                className={`card-sheen flex flex-col gap-3 rounded-2xl border p-6 ${
                  t.highlight ? "border-accent/40 bg-surface/60" : "border-border bg-surface/40"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-fg">{t.title}</h3>
                  <span className="font-display text-sm font-semibold text-accent">{t.price}</span>
                </div>
                <p className="inline-flex items-center gap-1.5 text-xs text-faint">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.duration}
                </p>
                <p className="text-sm leading-relaxed text-muted">{t.body}</p>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                >
                  {t.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-semibold text-fg">{cp.expectationsTitle}</h3>
            <ul className="flex flex-col gap-2.5">
              {cp.expectations.map((e) => (
                <li key={e} className="inline-flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            <h3 className="font-display text-sm font-semibold text-fg">{cp.directTitle}</h3>
            <div className="flex flex-col gap-2.5">
              {direct.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-accent"
                >
                  <d.icon className="h-4 w-4 text-faint" aria-hidden="true" />
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <ContactForm form={cp.form} email={site.contact.email} />
        </div>
      </Container>
    </>
  );
}
