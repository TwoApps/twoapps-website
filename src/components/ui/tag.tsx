import { cn } from "@/lib/utils";

export function Tag({ className, children }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-ink/70",
        className
      )}
    >
      {children}
    </span>
  );
}
