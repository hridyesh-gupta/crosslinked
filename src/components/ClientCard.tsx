import { ArrowUpRight } from "lucide-react";
import type { Client } from "@/content/structure";

export function ClientCard({ client }: { client: Client }) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      title={client.name}
      className="signal-border-hover card-sheen group mr-4 flex w-[240px] shrink-0 items-center gap-3 rounded-2xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/40 hover:bg-surface"
    >
      <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border-strong bg-canvas text-sm font-semibold text-accent">
        {client.monogram}
      </span>
      <span className="min-w-0 flex-1 truncate text-sm font-medium text-fg">{client.name}</span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent"
        aria-hidden="true"
      />
    </a>
  );
}
