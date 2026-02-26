import { cn } from "@/lib/utils";

export function SceneViewport({
  children,
  className,
  pad = "normal"
}: {
  children: React.ReactNode;
  className?: string;
  pad?: "tight" | "normal" | "spacious";
}) {
  return (
    <section
      className={cn(
        "relative",
        pad === "tight" && "py-10 sm:py-12 lg:py-16",
        pad === "normal" && "py-14 sm:py-16 lg:py-20",
        pad === "spacious" && "py-16 sm:py-20 lg:py-28",
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
