import { cn } from "@/lib/utils";

type KeyTakeawaysProps = {
  items: string[];
  title?: string;
  className?: string;
};

/**
 * TL;DR / "Key takeaways" box. Answer engines preferentially extract concise,
 * self-contained summary bullets near the top of a page.
 */
export function KeyTakeaways({ items, title = "Key takeaways", className }: KeyTakeawaysProps) {
  if (!items.length) return null;
  return (
    <aside
      className={cn(
        "rounded-2xl border border-ink/10 bg-cream/40 p-5 sm:p-6",
        className
      )}
      aria-label={title}
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink/80 sm:text-base">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
