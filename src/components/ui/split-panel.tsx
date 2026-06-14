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
  const isCyan = accent === "cyan";
  const accentColor = isCyan ? "text-accent-1" : "text-accent-2";
  const accentBg = isCyan ? "bg-accent-1" : "bg-accent-2";
  const hoverBorder = isCyan ? "hover:border-accent-1/55" : "hover:border-accent-2/55";

  const content = (
    <Card
      className={cn(
        "group h-full transition-transform duration-300 hover:-translate-y-1",
        hoverBorder,
        className
      )}
    >
      <div className="relative">
        <h3 className="font-display text-lg font-semibold sm:text-xl lg:text-2xl">{title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75 sm:text-base">
          {description}
        </p>
        <ul className="mt-5 grid gap-2 text-sm text-ink/85">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className={cn("mt-1 block h-1.5 w-1.5 rounded-full", accentBg)} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {href ? (
          <div className={cn("mt-6 inline-flex items-center gap-2 text-sm font-medium", accentColor)}>
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
