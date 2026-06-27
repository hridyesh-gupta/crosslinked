import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/structure";
import { withLocale, type Locale } from "@/i18n/config";

/** The Crosslinked mark — four nodes cross-linked through a center. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="6" cy="6" r="2.3" fill="currentColor" />
      <circle cx="18" cy="6" r="2.3" fill="currentColor" />
      <circle cx="6" cy="18" r="2.3" fill="currentColor" />
      <circle cx="18" cy="18" r="2.3" fill="currentColor" />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({
  locale,
  className,
  showMark = true,
}: {
  locale: Locale;
  className?: string;
  showMark?: boolean;
}) {
  return (
    <Link
      href={withLocale(locale, "/")}
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      {showMark && (
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface text-accent transition-shadow group-hover:shadow-[0_0_22px_-6px_rgba(197,254,60,0.6)]">
          <Mark className="h-[18px] w-[18px]" />
        </span>
      )}
      <span className="font-display text-lg font-bold tracking-tight text-fg">
        {site.wordmark.base}
        <span className="text-accent">{site.wordmark.accent}</span>
      </span>
    </Link>
  );
}
