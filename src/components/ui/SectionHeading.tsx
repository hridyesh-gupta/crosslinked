import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import type { Heading } from "@/i18n/dictionary";

export function SectionHeading({
  heading,
  align = "center",
  className,
}: {
  heading: Heading;
  align?: "left" | "center";
  className?: string;
}) {
  const { eyebrow, pre, accent, post, subtitle } = heading;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center"
          ? "mx-auto max-w-2xl items-center text-center"
          : "max-w-2xl items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-[2.75rem]">
        {pre}
        <span className="text-gradient">{accent}</span>
        {post}
      </h2>
      {subtitle && (
        <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
