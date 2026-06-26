import { UserPlus, Sparkles, Headset, Check, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface Node {
  label: string;
  meta: string;
  icon: LucideIcon;
}

const nodes: Node[] = [
  { label: "Lead", meta: "Captured from any channel", icon: UserPlus },
  { label: "AI qualifies", meta: "Scored & enriched in seconds", icon: Sparkles },
  { label: "Agent", meta: "Routed to the right person", icon: Headset },
];

/** Decorative Lead → AI → Agent → Closed flow shown beside the hero. */
export function AutomationDiagram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "card-sheen relative rounded-2xl border border-border bg-surface/70 p-6 backdrop-blur-sm",
        className,
      )}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-faint">
          Automation flow
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          live
        </span>
      </div>

      <ol className="flex flex-col">
        {nodes.map((n) => (
          <li key={n.label}>
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border-strong bg-canvas text-muted">
                <n.icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-fg">{n.label}</p>
                <p className="truncate text-xs text-faint">{n.meta}</p>
              </div>
            </div>
            <span className="my-1 ml-[21px] block h-5 w-px bg-gradient-to-b from-accent/60 to-border" />
          </li>
        ))}

        <li>
          <div className="flex items-center gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-ink shadow-[0_0_24px_-6px_rgba(197,254,60,0.7)]">
              <Check className="h-5 w-5" strokeWidth={2.4} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-accent">Closed</p>
              <p className="truncate text-xs text-faint">Synced to your CRM</p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
