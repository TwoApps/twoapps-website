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
                "relative h-2 w-2 rounded-full border border-white/20 transition-all",
                active && "scale-125 border-accent-1 bg-accent-1 shadow-[0_0_16px_rgba(0,228,212,.45)]",
                passed && "border-accent-1/60 bg-accent-1/60",
                !active && !passed && "bg-transparent"
              )}
            />
            <span className={cn("text-xs uppercase tracking-[0.18em] text-ink/45", active && "text-accent-1/90")}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
