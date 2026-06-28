import type { ResolvedTestimonial } from "@/content/resolve";

export function TestimonialCard({ t }: { t: ResolvedTestimonial }) {
  return (
    <figure className="signal-border-hover card-sheen mb-5 break-inside-avoid rounded-2xl border border-border bg-surface/40 p-6">
      <blockquote className="text-sm leading-relaxed text-fg/90">“{t.quote}”</blockquote>
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
  );
}
