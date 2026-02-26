import type { FaqItem } from "@/content/types";

import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export function FaqSection({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQ"
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  if (!items.length) return null;

  return (
    <Section>
      <Heading
        eyebrow={eyebrow}
        title={title}
        subtitle="Questions are collapsed by default to keep the page readable while preserving all the detail."
      />
      <Card className="mt-8 p-3 sm:p-4">
        <div className="space-y-3">
          {items.map((item, index) => (
            <ExpandableDetailPanel
              key={item.question}
              title={item.question}
              summary="Expand to view answer"
              defaultOpen={index === 0}
            >
              <p className="text-sm leading-relaxed text-ink/78 sm:text-base">{item.answer}</p>
            </ExpandableDetailPanel>
          ))}
        </div>
      </Card>
      <div className="sr-only">
        {items.map((item) => (
          <div key={`${item.question}-sr`}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
