import type { StickySceneFrame } from "@/components/motion/sticky-scene";

import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { GlowField } from "@/components/motion/glow-field";
import { LightBeams } from "@/components/motion/light-beams";
import { StickyScene } from "@/components/motion/sticky-scene";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function CinematicStickySummary({
  eyebrow = "Summary",
  frames,
  cards
}: {
  eyebrow?: string;
  frames: StickySceneFrame[];
  cards: Array<{ title: string; copy: string; chips?: string[] }>;
}) {
  return (
    <StickyScene
      eyebrow={eyebrow}
      frames={frames}
      heightMultiplier={Math.max(2.5, Math.min(3.5, 1.8 + frames.length * 0.55))}
      visual={
        <div data-scene-visual-root className="relative h-full min-h-[420px]">
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <GlowField intensity="soft" />
            <LightBeams count={6} className="opacity-35" />
          </div>
          {cards.map((card, index) => (
            <Card key={card.title} data-scene-visual-card className="absolute inset-x-4 top-4 p-5 sm:inset-x-6 sm:p-6">
              <p className="font-display text-2xl font-semibold">{card.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/68">{card.copy}</p>
              {card.chips?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-accent-1/12 bg-accent-1/[0.04] px-2.5 py-1 text-xs text-ink/70"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      }
    />
  );
}

export type ExpandableGroupItem = {
  title: string;
  summary?: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
};

export function ExpandableContentSection({
  eyebrow,
  title,
  subtitle,
  items
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: ExpandableGroupItem[];
}) {
  if (!items.length) return null;

  return (
    <Section className="pt-6">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <Card className="mt-8 p-3 sm:p-4">
        <div className="space-y-3">
          {items.map((item, index) => (
            <ExpandableDetailPanel
              key={item.title}
              title={item.title}
              summary={item.summary}
              defaultOpen={item.defaultOpen ?? index === 0}
            >
              {item.content}
            </ExpandableDetailPanel>
          ))}
        </div>
      </Card>
    </Section>
  );
}
