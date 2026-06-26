import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import { stats } from "@/content/home";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-surface/20">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-y-8 sm:grid-cols-3 sm:gap-0">
          {stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 0.08}
              className={cn(
                "flex flex-col gap-2 px-2 text-center sm:px-8",
                i > 0 && "sm:border-l sm:border-border",
              )}
            >
              <span
                className={cn(
                  "font-display text-4xl font-bold tracking-tight sm:text-5xl",
                  i === 2 ? "text-gradient" : "text-fg",
                )}
              >
                {s.value}
              </span>
              <span className="mx-auto max-w-[28ch] text-sm leading-relaxed text-muted">
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
