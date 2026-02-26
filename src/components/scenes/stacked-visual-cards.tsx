import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StackedVisualCardItem = {
  title: string;
  body: string;
  meta?: string[];
};

export function StackedVisualCards({
  items,
  className
}: {
  items: StackedVisualCardItem[];
  className?: string;
}) {
  return (
    <div data-scene-visual-root className={cn("relative h-full min-h-[420px]", className)}>
      <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.02]" />
      {items.map((item, index) => (
        <Card
          key={item.title}
          data-scene-visual-card
          className={cn(
            "absolute inset-x-4 top-4 p-5 sm:inset-x-6 sm:p-6",
            index === 0 && "z-30",
            index === 1 && "z-20",
            index >= 2 && "z-10"
          )}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(82,255,239,.07),transparent_55%)]" />
          <div className="relative">
            <p className="font-display text-2xl font-semibold text-ink">{item.title}</p>
            <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-ink/68">{item.body}</p>
            {item.meta?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.meta.map((meta) => (
                  <span
                    key={meta}
                    className="rounded-full border border-accent-1/12 bg-accent-1/[0.04] px-2.5 py-1 text-xs text-ink/70"
                  >
                    {meta}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </Card>
      ))}
    </div>
  );
}
