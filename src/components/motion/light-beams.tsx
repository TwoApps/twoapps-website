import { cn } from "@/lib/utils";

export function LightBeams({
  className,
  count = 8,
  diagonal = false
}: {
  className?: string;
  count?: number;
  diagonal?: boolean;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "absolute top-[-20%] h-[160%] w-px animate-beam-shift bg-gradient-to-b from-transparent via-accent-1/20 to-transparent opacity-50 blur-[0.6px]",
            diagonal ? "rotate-[18deg]" : "rotate-0"
          )}
          style={{
            left: `${8 + index * (84 / Math.max(count - 1, 1))}%`,
            animationDelay: `${index * 0.18}s`,
            animationDuration: `${8 + (index % 3) * 2}s`
          }}
        />
      ))}
      <div className="absolute inset-0 bg-scanfade" />
    </div>
  );
}
