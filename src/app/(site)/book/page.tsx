import { buildMetadata } from "@/lib/seo";
import { getBookingUrl, getCalendlyEmbedUrl } from "@/lib/site-config";

import { CalendlyEmbed } from "@/components/book/calendly-embed";
import { PageHero } from "@/components/common/page-hero";
import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { StickyScene, type StickySceneFrame } from "@/components/motion/sticky-scene";
import { StackedVisualCards } from "@/components/scenes/stacked-visual-cards";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Book Discovery Call",
  description:
    "Book a discovery call with TwoApps to discuss AI workflow automation, internal tools, or white-label AI delivery support.",
  canonicalPath: "/book",
  keywords: ["book ai automation consultation", "book discovery call twoapps"],
  ogImage: "/og-default.svg"
});

const bookingFrames: StickySceneFrame[] = [
  {
    label: "Goal",
    headline: "Use a short call to define the right pilot",
    subline: "Discovery calls are for choosing scope, constraints, and the fastest measurable starting point."
  },
  {
    label: "Fallback",
    headline: "No booking link? The contact flow still works",
    subline: "Submit the contact form with availability and context. The team can coordinate from there."
  }
];

export default function BookPage() {
  const bookingUrl = getBookingUrl();
  const calendlyEmbedUrl = getCalendlyEmbedUrl();

  return (
    <>
      <PageHero
        eyebrow="Book Discovery Call"
        title={bookingUrl ? "Book a discovery call" : "Booking link coming soon"}
        description={
          bookingUrl
            ? "Use the live booking link for direct business projects or white-label agency partnerships."
            : "The public booking link is not live yet. Use the contact form and share availability for a discovery call."
        }
        chips={["Direct clients", "Agency partners", "UAE-based / global support"]}
      />

      <StickyScene
        eyebrow="Booking Flow"
        frames={bookingFrames}
        heightMultiplier={2.2}
        visual={
          <StackedVisualCards
            items={[
              {
                title: bookingUrl ? "Booking link is live" : "Placeholder flow active",
                body: bookingUrl
                  ? "The primary CTA opens the live booking page. You can still use the contact form if you want to share context before the call."
                  : "This page intentionally acts as a CTA fallback until NEXT_PUBLIC_BOOKING_URL is configured."
              },
              {
                title: "Typical call outcomes",
                body: "Define the workflow bottleneck, choose the pilot scope, and confirm timeline, collaboration model, and constraints.",
                meta: ["Scope", "Timeline", "Constraints"]
              }
            ]}
          />
        }
      />

      {calendlyEmbedUrl && (
        <Section className="pt-6">
          <div className="mx-auto max-w-4xl">
            <CalendlyEmbed embedUrl={calendlyEmbedUrl} />
            <p className="mt-3 text-center text-sm text-ink/60">
              Prefer to open in a new tab?{" "}
              <a
                href={bookingUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-1 hover:underline"
              >
                Open Calendly
              </a>
            </p>
          </div>
        </Section>
      )}

      <Section className="pt-6">
        <Card className="mx-auto max-w-3xl p-4 sm:p-5">
          <ExpandableDetailPanel
            title={bookingUrl ? (calendlyEmbedUrl ? "Or use the link" : "Open the booking link") : "Use the contact fallback"}
            summary={bookingUrl ? "Primary CTA now points to your live scheduler" : "Booking URL is not configured yet"}
            defaultOpen={!calendlyEmbedUrl}
          >
            <div className="space-y-4 text-sm text-ink/78 sm:text-base">
              <p>
                {bookingUrl
                  ? calendlyEmbedUrl
                    ? "Schedule above or use the link to open Calendly in a new tab. You can also use the contact form to share context before the call."
                    : "Use the button below to schedule. If you need to share background before the call, you can still use the contact form."
                  : "Use the contact page and mention your preferred times. This keeps the website flow working until a live booking tool is added."}
              </p>
              <div className="flex flex-wrap gap-3">
                {bookingUrl ? (
                  <Button href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    {calendlyEmbedUrl ? "Open in new tab" : "Open booking link"}
                  </Button>
                ) : (
                  <Button href="/contact">Use contact form</Button>
                )}
                <Button href="/contact" variant="secondary">
                  Contact instead
                </Button>
              </div>
            </div>
          </ExpandableDetailPanel>
          <div className="mt-3">
            <ExpandableDetailPanel title="Typical discovery call goals" summary="What gets decided in the first call">
              <ul className="space-y-2 text-sm text-ink/78">
                <li>Define the workflow or delivery bottleneck</li>
                <li>Choose the right pilot scope</li>
                <li>Confirm timeline, collaboration model, and constraints</li>
              </ul>
            </ExpandableDetailPanel>
          </div>
        </Card>
      </Section>
    </>
  );
}
