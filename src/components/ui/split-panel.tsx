import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SplitPanelProps = {
  title: string;
  description: string;
  bullets: string[];
  href?: string;
  className?: string;
  accent?: "cyan" | "orange";
  ctaLabel?: string;
};

export function SplitPanel({
  title,
  description,
  bullets,
  href,
  className,
  accent = "cyan",
  ctaLabel = "Explore"
}: SplitPanelProps) {
  const accentClasses =
    accent === "cyan"
      ? "from-accent-1/20 to-accent-3/10 group-hover:from-accent-1/28"
      : "from-accent-2/20 to-accent-3/10 group-hover:from-accent-2/30";

  const content = (
    <Card className={cn("group h-full transition-transform duration-300 hover:-translate-y-1", className)}>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition-opacity duration-300",
          accentClasses
        )}
      />
      <div className="relative">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
          {description}
        </p>
        <ul className="mt-5 grid gap-2 text-sm text-ink/85">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1/90" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {href ? (
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-1">
            {ctaLabel}
            <span aria-hidden>↗</span>
          </div>
        ) : null}
      </div>
    </Card>
  );

  if (!href) return content;

  return (
    <a href={href} className="focus-ring block rounded-3xl">
      {content}
    </a>
  );
}
