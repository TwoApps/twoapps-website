import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

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
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: DetailPanelItem[];
  align?: "left" | "center";
  className?: string;
}) {
  if (!items.length) return null;

  return (
    <Section className={cn("py-12 sm:py-16 md:py-20 lg:py-24", className)}>
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} align={align} />
      <div className="mt-6 space-y-3 sm:mt-8">
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
