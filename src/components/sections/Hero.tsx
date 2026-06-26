import { Check, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { AutomationDiagram } from "./AutomationDiagram";
import { hero } from "@/content/home";

export function Hero() {
  const parts = hero.title.split(hero.titleAccent);

  return (
    <section className="hero-glow relative overflow-hidden">
      <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {parts[0]}
            <span className="text-gradient">{hero.titleAccent}</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-3">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {hero.microDetails.map((d) => (
              <li key={d} className="inline-flex items-center gap-2 text-sm text-muted">
                <Check className="h-4 w-4 text-accent" strokeWidth={2.4} aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:justify-self-end">
          <AutomationDiagram className="w-full max-w-md" />
        </div>
      </Container>
    </section>
  );
}
