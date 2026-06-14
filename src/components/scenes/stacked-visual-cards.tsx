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
    <div className={cn("grid grid-cols-1 gap-4 sm:gap-5", className)}>
      {items.map((item) => (
        <Card key={item.title} className="rounded-[22px] p-5 sm:p-6">
          <p className="font-display text-lg font-semibold text-ink sm:text-xl lg:text-2xl">{item.title}</p>
          <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-ink/70">{item.body}</p>
          {item.meta?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.meta.map((meta) => (
                <span
                  key={meta}
                  className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 text-xs text-ink/70"
                >
                  {meta}
                </span>
              ))}
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
