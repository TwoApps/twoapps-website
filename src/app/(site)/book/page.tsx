import { buildMetadata } from "@/lib/seo";
import { getBookingUrl, getCalendlyEmbedUrl } from "@/lib/site-config";

import { CalendlyEmbed } from "@/components/book/calendly-embed";
import { PageHero } from "@/components/common/page-hero";
import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Book Discovery Call",
  description:
    "Book a discovery call about AI workflow automation, internal tools, or white-label delivery.",
  canonicalPath: "/book",
  keywords: ["book ai automation consultation", "book discovery call twoapps"],
  ogImage: "/og-default.svg"
});

export default function BookPage() {
  const bookingUrl = getBookingUrl();
  const calendlyEmbedUrl = getCalendlyEmbedUrl();

  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.2"
        data-bot-say="Pick a time - I'll bring the pipeline audit."
      >
        <PageHero
          eyebrow="Book Discovery Call"
          title={bookingUrl ? "Book a discovery call" : "Booking link coming soon"}
          description={
            bookingUrl
              ? "Pick a time below. Direct projects and agency partnerships welcome."
              : "The public booking link is not live yet. Use the contact form and share availability for a discovery call."
          }
          chips={["Direct clients", "Agency partners", "UAE-based / global support"]}
        />
      </div>

      {calendlyEmbedUrl && (
        <div
          data-bot-stop
          data-bot-fx="0.8"
          data-bot-say="Show up with your biggest bottleneck - leave with a pilot plan."
        >
          <Section className="pt-6 sm:pt-8 lg:pt-10">
            <div className="mx-auto max-w-4xl">
              <CalendlyEmbed embedUrl={calendlyEmbedUrl} />
              <p className="mt-3 text-center text-xs text-ink/60 sm:mt-4 sm:text-sm">
                Prefer to open in a new tab?{" "}
                <a
                  href={bookingUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Open Calendly
                </a>
              </p>
            </div>
          </Section>
        </div>
      )}

      <div
        data-bot-stop
        data-bot-fx="0.15"
        data-bot-say="Still on the fence? We'll map the first win before any invoice."
      >
        <Section className="pt-6 sm:pt-8 lg:pt-10">
          <Card className="mx-auto max-w-3xl p-4 sm:p-5 lg:p-6">
            <ExpandableDetailPanel
              title={bookingUrl ? (calendlyEmbedUrl ? "Or use the link" : "Open the booking link") : "Use the contact fallback"}
              summary={bookingUrl ? "Live scheduler - book direct" : "Booking URL is not configured yet"}
              defaultOpen={!calendlyEmbedUrl}
            >
              <div className="space-y-4 text-sm text-ink/78 sm:text-base">
                <p>
                  {bookingUrl
                    ? calendlyEmbedUrl
                      ? "Schedule above, or open Calendly in a new tab. Prefer to share context first? Use the contact form."
                      : "Use the button below to schedule. Need to share context first? Use the contact form."
                    : "Use the contact form and share your preferred times."}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {bookingUrl ? (
                    <Button href={bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                      {calendlyEmbedUrl ? "Open in new tab" : "Open booking link"}
                    </Button>
                  ) : (
                    <Button href="/contact" className="w-full sm:w-auto">Use contact form</Button>
                  )}
                  <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                    Contact instead
                  </Button>
                </div>
              </div>
            </ExpandableDetailPanel>
            <div className="mt-3">
              <ExpandableDetailPanel title="Typical discovery call goals" summary="What we decide in the first call">
                <ul className="space-y-2 text-sm text-ink/78">
                  <li>Define the workflow or delivery bottleneck</li>
                  <li>Choose the right pilot scope</li>
                  <li>Confirm timeline, collaboration model, and constraints</li>
                </ul>
              </ExpandableDetailPanel>
            </div>
          </Card>
        </Section>
      </div>
    </>
  );
}
