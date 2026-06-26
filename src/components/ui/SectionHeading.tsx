import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Substring of `title` rendered in the accent gradient. */
  accent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const parts =
    accent && title.includes(accent)
      ? [
          title.slice(0, title.indexOf(accent)),
          accent,
          title.slice(title.indexOf(accent) + accent.length),
        ]
      : [title, "", ""];

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-2xl",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-[2.75rem]">
        {parts[0]}
        <span className="text-gradient">{parts[1]}</span>
        {parts[2]}
      </h2>
      {subtitle && (
        <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
