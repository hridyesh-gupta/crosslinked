import { ShieldCheck, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/Reveal";
import type { Dictionary } from "@/i18n/dictionary";

export function SecurityBand({ dict }: { dict: Dictionary }) {
  const security = dict.security;
  return (
    <section className="py-10">
      <Container>
        <Reveal className="signal-border card-sheen flex flex-col items-start gap-6 rounded-2xl border border-border bg-surface/40 p-7 sm:flex-row sm:items-center sm:gap-8">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border-strong bg-canvas text-accent">
            <ShieldCheck className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold text-fg">{security.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{security.body}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {security.points.map((p) => (
              <li
                key={p}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-canvas px-3 py-1.5 text-xs text-muted"
              >
                <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2.4} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
