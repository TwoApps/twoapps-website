import { cn } from "@/lib/utils";

export function Tag({
  className,
  children
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent-1/15 bg-accent-1/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-1/85 shadow-[inset_0_0_0_1px_rgba(0,228,212,.03)]",
        className
      )}
    >
      {children}
    </span>
  );
}
