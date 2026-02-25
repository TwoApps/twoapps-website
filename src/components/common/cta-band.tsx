import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CtaBand({
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref = "/contact",
  secondaryLabel = "Contact us"
}: {
  title: string;
  copy: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <Section className="pt-6">
      <div className="gradient-stroke glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-10">
        <div className="noise-overlay" />
        <div className="absolute left-4 top-4 h-36 w-36 rounded-full bg-accent-1/10 blur-3xl" />
        <div className="absolute right-6 bottom-4 h-40 w-40 rounded-full bg-accent-2/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">{copy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primaryHref}>{primaryLabel}</Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
