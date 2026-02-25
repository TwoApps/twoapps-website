import { cn } from "@/lib/utils";

export function Tag({
  className,
  children
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ink/80",
        className
      )}
    >
      {children}
    </span>
  );
}
