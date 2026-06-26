import type { Metadata } from "next";
import { Clock, ArrowUpRight, Phone, Mail, MessageCircle, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { booking } from "@/content/home";
import { site, whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free discovery call or a strategy deep-dive. ROI-based scoping, fast deployment, and direct access to your engineer.",
};

const tiers = [
  { ...booking.discovery, href: site.contact.calendly, highlight: false, price: "Free" },
  { ...booking.deepDive, href: site.contact.calendly, highlight: true, price: site.contact.deepDivePrice },
];

const direct = [
  { label: site.contact.phoneDisplay, href: `tel:${site.contact.phone}`, icon: Phone },
  { label: site.contact.email, href: `mailto:${site.contact.email}`, icon: Mail },
  { label: "Chat on WhatsApp", href: whatsappHref, icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s get started"
        accent="get started"
        subtitle="Book a free discovery call or a strategy deep-dive. ROI-based scoping, fast deployment, and direct access to your engineer."
      />

      <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2">
        {/* Left: booking + expectations + direct */}
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
            <h3 className="font-display text-sm font-semibold text-fg">What to expect</h3>
            <ul className="flex flex-col gap-2.5">
              {booking.expectations.map((e) => (
                <li key={e} className="inline-flex items-start gap-2.5 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.4} aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-6">
            <h3 className="font-display text-sm font-semibold text-fg">Direct contact</h3>
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

        {/* Right: form */}
        <div>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
