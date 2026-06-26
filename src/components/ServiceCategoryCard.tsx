import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";
import type { ServiceCategory } from "@/content/services";

export function ServiceCategoryCard({
  category,
  className,
}: {
  category: ServiceCategory;
  className?: string;
}) {
  return (
    <Link
      href={`/services#${category.id}`}
      className={cn(
        "card-sheen group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface",
        className,
      )}
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl border border-border-strong bg-canvas text-accent transition-shadow group-hover:shadow-[0_0_24px_-8px_rgba(197,254,60,0.6)]">
        <Icon name={category.icon} className="h-6 w-6" />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-semibold text-fg">{category.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{category.description}</p>
      </div>

      <div className="mt-auto pt-2">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
          {category.services.length} services
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
