import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/structure";
import type { Dictionary } from "@/i18n/dictionary";

export function ContactCta({ dict }: { dict: Dictionary }) {
  const c = dict.contactCta;
  const waHref = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    dict.whatsappPrefill,
  )}`;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-surface/40 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-5xl">
              {c.pre}
              <span className="text-gradient">{c.accent}</span>
              {c.post}
            </h2>
            <p className="text-pretty text-lg text-muted">{c.subtitle}</p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button href={site.contact.calendly} size="lg" external>
                {c.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href={waHref} variant="secondary" size="lg" external>
                <MessageCircle className="h-4 w-4" />
                {c.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
