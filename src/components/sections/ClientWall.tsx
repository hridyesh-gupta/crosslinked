import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { clients } from "@/content/structure";
import type { Dictionary } from "@/i18n/dictionary";

export function ClientWall({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading heading={dict.resultsPage.clientWall} />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.05}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-sheen group flex h-full items-center gap-3 rounded-2xl border border-border bg-surface/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface"
              >
                <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border-strong bg-canvas text-sm font-semibold text-accent">
                  {c.monogram}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-medium text-fg">{c.name}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
