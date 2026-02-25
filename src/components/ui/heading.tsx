import { cn } from "@/lib/utils";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function Heading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className
}: HeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-accent-1/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-balance mt-4 max-w-3xl text-base leading-relaxed text-ink/75 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
