import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Eyebrow";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, accent, subtitle }: PageHeaderProps) {
  const parts =
    accent && title.includes(accent)
      ? [title.slice(0, title.indexOf(accent)), accent, title.slice(title.indexOf(accent) + accent.length)]
      : [title, "", ""];

  return (
    <section className="hero-glow relative overflow-hidden border-b border-border">
      <div aria-hidden className="grid-faint pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {parts[0]}
            <span className="text-gradient">{parts[1]}</span>
            {parts[2]}
          </h1>
          {subtitle && (
            <p className="text-pretty text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
