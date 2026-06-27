import { cn } from "@/lib/cn";

// A constellation of cross-linked nodes with a lime pulse continuously
// travelling along each edge — the brand's "Crosslinked / Signal" motif as
// ambient hero motion. Pure CSS animation (see globals.css), reduced-motion safe.

const nodes: [number, number][] = [
  [60, 80],
  [180, 40],
  [300, 110],
  [430, 60],
  [110, 220],
  [250, 250],
  [400, 200],
  [340, 360],
  [160, 360],
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 4],
  [4, 5],
  [5, 2],
  [5, 6],
  [6, 3],
  [4, 8],
  [5, 7],
  [7, 6],
  [8, 5],
];

export function SignalField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-70 [mask-image:radial-gradient(78%_78%_at_72%_26%,#000_0%,transparent_72%)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 520 440"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        {edges.map(([a, b], i) => {
          const [x1, y1] = nodes[a];
          const [x2, y2] = nodes[b];
          return (
            <g key={`e-${i}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="stroke-border"
                strokeWidth={1}
                opacity={0.45}
              />
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className="clx-edge stroke-accent"
                strokeWidth={1.6}
                strokeLinecap="round"
                fill="none"
                style={{
                  animationDuration: `${2.8 + (i % 4) * 0.5}s`,
                  animationDelay: `${(i % 5) * 0.4}s`,
                }}
              />
            </g>
          );
        })}

        {nodes.map(([cx, cy], i) => (
          <g key={`n-${i}`}>
            <circle
              cx={cx}
              cy={cy}
              r={6}
              className="stroke-accent"
              fill="none"
              strokeWidth={1}
              opacity={0.2}
            />
            <circle
              cx={cx}
              cy={cy}
              r={2.6}
              className="clx-node fill-accent"
              style={{ animationDelay: `${(i % 6) * 0.55}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
