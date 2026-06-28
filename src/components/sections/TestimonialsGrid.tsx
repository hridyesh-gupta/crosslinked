import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { TestimonialCard } from "@/components/TestimonialCard";
import { resolveTestimonials } from "@/content/resolve";
import type { Dictionary } from "@/i18n/dictionary";

export function TestimonialsGrid({ dict }: { dict: Dictionary }) {
  const all = resolveTestimonials(dict);
  const columns = [
    all.filter((_, i) => i % 3 === 0),
    all.filter((_, i) => i % 3 === 1),
    all.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section className="border-t border-border bg-surface/20 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading heading={dict.resultsPage.testimonials} />

        {/* Desktop: three vertical marquees — columns 1 & 3 rise, column 2 falls. */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-3">
          {columns.map((col, i) => (
            <Marquee
              key={i}
              vertical
              reverse={i === 1}
              duration={34 + i * 4}
              className="h-[42rem]"
            >
              {col.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </Marquee>
          ))}
        </div>

        {/* Mobile / tablet: static masonry (vertical marquees are too narrow). */}
        <div className="columns-1 gap-5 sm:columns-2 lg:hidden">
          {all.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
