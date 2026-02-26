import { buildMetadata } from "@/lib/seo";
import { getBookingUrl } from "@/lib/site-config";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/common/page-hero";
import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Two Apps to discuss agentic AI automation, Claude/Claude Code workflows, AI-enabled products, or white-label AI delivery for software houses.",
  canonicalPath: "/contact",
  keywords: ["contact ai automation agency dubai", "white label ai partner contact"],
  ogImage: "/og-default.svg"
});

const contactFrames: StickySceneFrame[] = [
  {
    label: "Businesses",
    headline: "Describe the workflow problem first",
    subline: "The fastest way to a useful response is to explain the current bottleneck, target outcome, and constraints."
  },
  {
    label: "Agencies",
    headline: "White-label opportunities are welcome",
    subline: "Mention whether this is a pilot, client feature delivery, or ongoing AI capacity request."
  }
];

export default function ContactPage() {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need to ship"
        description="One brief form for direct business automation projects and white-label agency partnerships."
        chips={["Businesses", "Agencies / software houses", "Dubai-based / global delivery"]}
      />

      <StickyScene
        eyebrow="How to Start"
        frames={contactFrames}
        heightMultiplier={2.3}
        visual={
          <StackedVisualCards
            items={[
              {
                title: "Direct business project",
                body: "Share the current workflow, desired outcome, and where delays or manual work are happening.",
                meta: ["Ops automation", "Internal tools", "Pilot scope"]
              },
              {
                title: "Agency / software house partnership",
                body: "Share the client scope, white-label expectations, and whether you need sprint, pilot, or retainer support.",
                meta: ["White-label", "Capacity", "Co-delivery"]
              }
            ]}
          />
        }
      />

      <Section className="pt-6">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-6 sm:p-8">
            <ContactForm sourcePage="/contact" />
          </Card>
          <div className="space-y-3">
            <ExpandableDetailPanel
              title="What to include"
              summary="Make the first reply faster and more useful"
              defaultOpen
            >
              <ul className="space-y-2 text-sm text-ink/78">
                <li>Current workflow or delivery problem</li>
                <li>Desired outcome (speed, quality, capacity, cost, etc.)</li>
                <li>Timeline and team constraints</li>
                <li>Whether this is direct business work or a white-label agency opportunity</li>
              </ul>
            </ExpandableDetailPanel>
            <ExpandableDetailPanel title="Prefer a call?" summary="Booking CTA with fallback flow">
              <div className="space-y-4 text-sm text-ink/78">
                <p>
                  Use the booking CTA if a booking link is live. Until then, submit the form and mention that you
                  prefer a discovery call.
                </p>
                <Button href={bookingHref} variant="secondary">
                  Book discovery call
                </Button>
              </div>
            </ExpandableDetailPanel>
            <ExpandableDetailPanel title="Location" summary="Dubai-based, global delivery support">
              <p className="text-sm text-ink/78">Dubai, UAE</p>
              <p className="mt-2 text-sm text-ink/65">
                Serving UAE/GCC businesses and white-label agency partners internationally.
              </p>
            </ExpandableDetailPanel>
          </div>
        </div>
      </Section>
    </>
  );
}
