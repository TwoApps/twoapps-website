"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type StickySceneFrame = {
  label: string;
  headline: string;
  subline: string;
};

export function StickyScene({
  eyebrow,
  frames,
  visual,
  className,
  heightMultiplier
}: {
  eyebrow?: string;
  frames: StickySceneFrame[];
  visual?: React.ReactNode;
  className?: string;
  heightMultiplier?: number;
}) {
  void heightMultiplier;

  return (
    <section className={cn("relative py-12 sm:py-16 md:py-20 lg:py-24", className)}>
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-12">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
          <div className="space-y-3 sm:space-y-4">
            {eyebrow ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-blue/80">{eyebrow}</p>
            ) : null}
            {frames.map((frame) => (
              <Card key={`${frame.label}-${frame.headline}`} className="rounded-[22px] p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{frame.label}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {frame.headline}
                </h3>
                {frame.subline ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">{frame.subline}</p>
                ) : null}
              </Card>
            ))}
          </div>
          {visual ? <div className="relative">{visual}</div> : null}
        </div>
      </div>
    </section>
  );
}
