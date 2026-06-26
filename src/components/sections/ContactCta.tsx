import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, whatsappHref } from "@/content/site";

export function ContactCta() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-surface/40 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <Eyebrow>Let’s talk</Eyebrow>
            <h2 className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-5xl">
              Let’s <span className="text-gradient">get started</span>
            </h2>
            <p className="text-pretty text-lg text-muted">
              Schedule a call to discuss how AI can transform your business.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button href={site.contact.calendly} size="lg" external>
                Book a free discovery call
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href={whatsappHref} variant="secondary" size="lg" external>
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
