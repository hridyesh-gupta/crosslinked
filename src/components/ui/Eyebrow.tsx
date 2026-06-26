import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-faint",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(197,254,60,0.5)]" />
      {children}
    </span>
  );
}
