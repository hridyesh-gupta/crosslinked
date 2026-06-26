import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-strong shadow-[0_0_30px_-10px_rgba(197,254,60,0.7)] hover:shadow-[0_0_38px_-6px_rgba(197,254,60,0.85)] hover:-translate-y-0.5",
  secondary:
    "border border-border-strong bg-surface/40 text-fg hover:bg-surface hover:border-faint",
  ghost: "text-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
