import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { features } from "@/content/home";

export function FeaturesGrid() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why us"
          title="Built for performance"
          accent="performance"
          subtitle="Enterprise-grade features that deliver measurable results."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.07}>
              <div className="card-sheen group flex h-full flex-col gap-3.5 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-border-strong">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border-strong bg-canvas text-accent">
                  <Icon name={f.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="font-display text-lg font-semibold text-fg">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
