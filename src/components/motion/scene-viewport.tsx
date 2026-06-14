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
        pad === "tight" && "py-6 sm:py-10 md:py-12 lg:py-16",
        pad === "normal" && "py-8 sm:py-12 md:py-16 lg:py-20",
        pad === "spacious" && "py-12 sm:py-16 md:py-20 lg:py-28",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-12">{children}</div>
    </section>
  );
}
