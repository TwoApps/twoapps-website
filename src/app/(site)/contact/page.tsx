import { buildMetadata } from "@/lib/seo";
import { getBookingUrl, getContactPhone } from "@/lib/site-config";

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
    "Contact TwoApps to discuss AI workflow automation, internal tools, Claude/Claude Code workflows, or white-label AI delivery support.",
  canonicalPath: "/contact",
  keywords: ["contact ai automation partner uae", "white label ai partner contact"],
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
  const contactPhone = getContactPhone();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need to ship"
        description="One brief form for direct business automation projects and white-label agency partnerships."
        chips={["Businesses", "Agencies / software houses", "UAE-based / global delivery"]}
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
                {contactPhone && (
                  <>
                    <p className="font-medium text-ink">Call or WhatsApp:</p>
                    <a
                      href={`tel:${contactPhone.replace(/\s/g, "")}`}
                      className="block text-accent-1 hover:text-accent-1/80 transition-colors"
                    >
                      {contactPhone}
                    </a>
                    <a
                      href={`https://wa.me/${contactPhone.replace(/[\s\+]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-1 hover:text-accent-1/80 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </>
                )}
                <p>
                  Use the booking CTA if a booking link is live. Until then, submit the form and mention that you
                  prefer a discovery call.
                </p>
                <Button href={bookingHref} variant="secondary">
                  Book discovery call
                </Button>
              </div>
            </ExpandableDetailPanel>
            <ExpandableDetailPanel title="Location" summary="UAE-based, global delivery support">
              <p className="text-sm text-ink/78">Dubai, UAE</p>
              <p className="mt-2 text-sm text-ink/65">
                Serving businesses and white-label agency partners worldwide.
              </p>
            </ExpandableDetailPanel>
          </div>
        </div>
      </Section>
    </>
  );
}
