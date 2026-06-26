import Link from "next/link";
import { Quote, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/content/results";

export function FeaturedTestimonial() {
  const featured = testimonials.find((t) => t.org === "CERN") ?? testimonials[0];

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Results"
          title="Results for industry leaders"
          accent="industry leaders"
          subtitle="Delivering solutions that close more clients and grow recurring revenue."
        />

        <Reveal>
          <figure className="card-sheen relative mx-auto max-w-3xl rounded-2xl border border-border bg-surface/50 p-8 sm:p-10">
            <Quote className="absolute right-8 top-8 h-10 w-10 text-accent/15" aria-hidden="true" />
            <blockquote className="font-display text-balance text-xl font-medium leading-relaxed text-fg sm:text-2xl">
              “{featured.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="font-display grid h-12 w-12 place-items-center rounded-full border border-border-strong bg-canvas text-sm font-semibold text-accent">
                {featured.monogram}
              </span>
              <div>
                <p className="text-sm font-semibold text-fg">{featured.name}</p>
                <p className="text-sm text-muted">{featured.org}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="flex justify-center">
          <Link
            href="/results"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            Read more client stories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
