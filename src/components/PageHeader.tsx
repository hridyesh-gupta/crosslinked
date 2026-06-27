import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";
import type { Heading } from "@/i18n/dictionary";

export function PageHeader({ heading }: { heading: Heading }) {
  const { eyebrow, pre, accent, post, subtitle } = heading;
  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="flex max-w-3xl flex-col gap-5">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {pre}
            <span className="text-gradient">{accent}</span>
            {post}
          </h1>
          {subtitle && (
            <p className="text-pretty text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
