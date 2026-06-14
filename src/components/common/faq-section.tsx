import type { FaqItem } from "@/content/types";

import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { JsonLd } from "@/components/json-ld";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { makeFaqPageSchema } from "@/lib/seo";

export function FaqSection({
  items,
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  subtitle = "Expand the questions that matter to you — answers are written in plain English, with no jargon.",
  align = "left",
  emitSchema = true
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  emitSchema?: boolean;
}) {
  if (!items.length) return null;

  return (
    <Section>
      {emitSchema && <JsonLd data={makeFaqPageSchema(items)} />}
      <Heading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align={align}
      />
      <Card className="mt-8 p-3 sm:p-4 md:p-5">
        <div className="space-y-3 sm:space-y-4">
          {items.map((item, index) => (
            <ExpandableDetailPanel
              key={item.question}
              title={item.question}
              summary="Expand to view answer"
              defaultOpen={index === 0}
            >
              <p className="text-sm leading-relaxed text-ink/80 sm:text-base">{item.answer}</p>
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
