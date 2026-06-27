import Link from "next/link";
import { Quote, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { resolveTestimonials } from "@/content/resolve";
import { withLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

export function FeaturedTestimonial({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const all = resolveTestimonials(dict);
  const featured = all.find((t) => t.id === "cern") ?? all[0];

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading heading={dict.resultsTeaser} />

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
            href={withLocale(locale, "/results")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            {dict.resultsTeaser.readMore}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
