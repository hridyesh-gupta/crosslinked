import { cn } from "@/lib/cn";

/** Continuous auto-scrolling marquee. Renders children twice so a -50%
    translate loops seamlessly. Pauses on hover; respects reduced-motion. */
export function Marquee({
  children,
  vertical = false,
  reverse = false,
  duration,
  className,
}: {
  children: React.ReactNode;
  vertical?: boolean;
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  const dur = duration ?? (vertical ? 32 : 42);
  const track = vertical ? "marquee-y" : "marquee-x";
  const setCls = vertical ? "flex flex-col" : "flex";

  return (
    <div className={cn("marquee", vertical ? "marquee--v" : "marquee--h", className)}>
      <div
        className={cn(track, reverse && "marquee-rev")}
        style={{ "--mq-dur": `${dur}s` } as React.CSSProperties}
      >
        <div className={setCls}>{children}</div>
        <div className={setCls} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
