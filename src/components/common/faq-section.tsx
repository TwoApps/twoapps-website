import type { FaqItem } from "@/content/types";

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
      <Heading eyebrow={eyebrow} title={title} subtitle="Clear answers for common scoping, delivery, and collaboration questions." />
      <div className="mt-8 grid gap-4">
        {items.map((item) => (
          <Card key={item.question} className="p-5 sm:p-6">
            <h3 className="font-display text-xl font-semibold">{item.question}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-base">{item.answer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
