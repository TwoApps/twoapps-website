import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

type DetailPanelItem = {
  title: string;
  summary?: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
};

export function DetailPanelsSection({
  eyebrow,
  title,
  subtitle,
  items,
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: DetailPanelItem[];
  className?: string;
}) {
  if (!items.length) return null;

  return (
    <Section className={className}>
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-8 space-y-3">
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
    </Section>
  );
}
