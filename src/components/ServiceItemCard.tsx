import { Icon } from "./Icon";
import type { ResolvedService } from "@/content/resolve";

export function ServiceItemCard({ service }: { service: ResolvedService }) {
  return (
    <div className="signal-border-hover card-sheen group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-border-strong bg-canvas text-accent transition-shadow group-hover:shadow-[0_0_22px_-8px_rgba(197,254,60,0.6)]">
        <Icon name={service.icon} className="h-5 w-5" />
      </span>
      <h3 className="font-display text-base font-semibold text-fg">{service.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{service.description}</p>
    </div>
  );
}
