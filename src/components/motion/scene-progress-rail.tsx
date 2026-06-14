import { cn } from "@/lib/utils";

export function SceneProgressRail({
  steps,
  activeIndex,
  className
}: {
  steps: string[];
  activeIndex: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)} aria-hidden>
      {steps.map((step, index) => {
        const active = index === activeIndex;
        const passed = index < activeIndex;
        return (
          <div key={step} className="flex items-center gap-3">
            <span
              className={cn(
                "relative h-2 w-2 rounded-full border border-ink/15 transition-all",
                active && "scale-125 border-blue bg-blue",
                passed && "border-blue/60 bg-blue/60",
                !active && !passed && "bg-transparent"
              )}
            />
            <span className={cn("text-xs uppercase tracking-[0.18em] text-ink/45", active && "text-blue")}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
