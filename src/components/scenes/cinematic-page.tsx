import type { StickySceneFrame } from "@/components/motion/sticky-scene";

import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
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
  const title = frames[0]?.headline ?? "";

  return (
    <Section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <Heading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} className="p-5 sm:p-6">
            <p className="font-display text-lg font-semibold text-ink sm:text-xl lg:text-2xl">{card.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/68">{card.copy}</p>
            {card.chips?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 text-xs text-ink/70"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
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
