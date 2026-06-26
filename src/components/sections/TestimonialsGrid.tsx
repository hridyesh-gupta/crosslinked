import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/results";

export function TestimonialsGrid() {
  return (
    <section className="border-t border-border bg-surface/20 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Client success stories"
          accent="success stories"
          subtitle="Real results from businesses that chose to automate with intelligence."
        />

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-sheen break-inside-avoid rounded-2xl border border-border bg-surface/40 p-6"
            >
              <blockquote className="text-sm leading-relaxed text-fg/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border-strong bg-canvas text-xs font-semibold text-accent">
                  {t.monogram}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-fg">{t.name}</p>
                  <p className="truncate text-xs text-muted">{t.org}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
