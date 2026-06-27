import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";

export function ProcessTimeline({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-surface/20 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading heading={dict.process} />

        <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden
            className="clx-flowline absolute left-0 right-0 top-6 hidden h-px md:block"
          />
          {dict.process.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="relative flex flex-col gap-3">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <span className="font-display relative z-10 grid h-12 w-12 place-items-center rounded-full border border-border-strong bg-canvas text-sm font-bold text-accent">
                  {step.number}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-fg">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:justify-center sm:gap-3">
          <span className="text-sm font-medium text-fg">{dict.process.timelineLead}</span>
          <span className="hidden text-faint sm:inline">·</span>
          <span className="text-sm text-muted">{dict.process.timelineNote}</span>
        </div>
      </Container>
    </section>
  );
}
