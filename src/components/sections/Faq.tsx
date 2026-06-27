import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/structure";
import type { Dictionary } from "@/i18n/dictionary";

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading heading={dict.faq} />

        <div className="mx-auto w-full max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface/30">
          {dict.faq.items.map((f) => (
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
          <p className="text-sm text-muted">{dict.faq.stillHaveQuestions}</p>
          <Button href={site.contact.calendly} variant="secondary" external>
            {dict.faq.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
