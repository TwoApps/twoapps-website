import { cn } from "@/lib/utils";

export function GlowField({
  className,
  intensity = "default"
}: {
  className?: string;
  intensity?: "soft" | "default" | "strong";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        intensity === "soft" && "opacity-70",
        intensity === "default" && "opacity-90",
        intensity === "strong" && "opacity-100",
        className
      )}
    >
      <div className="absolute inset-0 bg-cyan-field" />
      <div className="absolute inset-x-[-8%] top-[-20%] h-[60%] animate-glow-breathe rounded-full bg-accent-1/20 blur-3xl" />
      <div className="absolute inset-x-[25%] top-[5%] h-[46%] animate-glow-breathe-delay rounded-full bg-accent-2/15 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[12%] h-56 w-56 animate-float-deep rounded-full bg-accent-3/15 blur-3xl" />
      <div className="absolute right-[8%] top-[18%] h-56 w-56 animate-float-deep-delay rounded-full bg-accent-1/18 blur-3xl" />
    </div>
  );
}
