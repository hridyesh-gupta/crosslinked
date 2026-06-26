import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/content/home";
import { site } from "@/content/site";

export function Faq() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          accent="questions"
          subtitle="Everything you need to know about working with us."
        />

        <div className="mx-auto w-full max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/30">
          {faqs.map((f) => (
            <details key={f.question} className="group px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium text-fg [&::-webkit-details-marker]:hidden">
                {f.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-accent"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-9 text-sm leading-relaxed text-muted">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted">Still have questions?</p>
          <Button href={site.contact.calendly} variant="secondary" external>
            Book a discovery call
          </Button>
        </div>
      </Container>
    </section>
  );
}
