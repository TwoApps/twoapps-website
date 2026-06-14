import {
  buildMetadata,
  makeBreadcrumbSchema,
  organizationSchema
} from "@/lib/seo";
import { getBookingUrl, getCalendlyEmbedUrl } from "@/lib/site-config";

import { CalendlyEmbed } from "@/components/book/calendly-embed";
import { PageHero } from "@/components/common/page-hero";
import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Book a Discovery Call",
  description:
    "Book a free 30-minute discovery call with TwoApps. We'll pinpoint your biggest workflow bottleneck and map a practical AI pilot you can start this week.",
  canonicalPath: "/book",
  keywords: [
    "book ai automation consultation",
    "book discovery call twoapps",
    "free ai workflow audit",
    "uae ai automation partner consultation"
  ],
  ogImage: "/og-default.svg"
});

const howItWorks = [
  {
    step: "01",
    title: "What the call is for",
    body:
      "We zero in on the workflow, handoff, or delivery bottleneck that's eating your team's time right now."
  },
  {
    step: "02",
    title: "What we'll cover",
    body:
      "A few focused questions, a rough sketch of the fix, and the smallest pilot that can prove real value."
  },
  {
    step: "03",
    title: "How long it takes",
    body:
      "30 minutes. If we need to go deeper, we'll book a separate working session with the right people."
  },
  {
    step: "04",
    title: "What happens after",
    body:
      "You'll get a short follow-up with next steps, a timeline, and an investment range — no proposal theater."
  }
];

export default function BookPage() {
  const bookingUrl = getBookingUrl();
  const calendlyEmbedUrl = getCalendlyEmbedUrl();

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Book a Discovery Call", path: "/book" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.2"
        data-bot-say="Pick a time — I'll bring the pipeline audit."
      >
        <PageHero
          eyebrow="Free 30-minute strategy call"
          title={
            bookingUrl
              ? "Let's find your fastest AI win"
              : "Booking link coming soon"
          }
          description={
            bookingUrl
              ? "No pitch deck, no pressure. We'll pinpoint the workflow or delivery bottleneck costing you time, then map a small pilot you can start this week."
              : "The public booking link isn't live yet. Use the contact form to share your availability and we'll schedule a discovery call."
          }
          chips={[
            "30 minutes",
            "Direct clients",
            "Agency partners",
            "UAE / global support"
          ]}
        />
      </div>

      <Section className="pt-6 sm:pt-8 lg:pt-10">
        <div className="mx-auto max-w-4xl">
          <Heading
            align="center"
            eyebrow="How it works"
            title="From booking to pilot plan in four steps"
            subtitle="The call is designed to give you a clear next step — not another vague roadmap."
          />
          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <Card
                key={item.step}
                className="flex h-full flex-col p-5 sm:p-6"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {calendlyEmbedUrl && (
        <div
          data-bot-stop
          data-bot-fx="0.8"
          data-bot-say="Show up with your biggest bottleneck — leave with a pilot plan."
        >
          <Section className="pt-4 sm:pt-6 lg:pt-8">
            <div className="mx-auto max-w-4xl">
              <CalendlyEmbed embedUrl={calendlyEmbedUrl} />
              <p className="mt-3 text-center text-xs text-ink/60 sm:mt-4 sm:text-sm">
                Prefer to open Calendly in a new tab?{" "}
                <a
                  href={bookingUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue hover:underline"
                >
                  Open scheduler
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
          <Card className="mx-auto max-w-3xl p-5 sm:p-6 md:p-7">
            <ExpandableDetailPanel
              title={
                bookingUrl
                  ? calendlyEmbedUrl
                    ? "Can't see the calendar?"
                    : "Open the booking link"
                  : "Use the contact fallback"
              }
              summary={
                bookingUrl
                  ? "Book direct or share context first"
                  : "Booking URL is not configured yet"
              }
              defaultOpen={!calendlyEmbedUrl}
            >
              <div className="space-y-4 text-sm text-ink/78 sm:text-base">
                <p>
                  {bookingUrl
                    ? calendlyEmbedUrl
                      ? "If the scheduler isn't loading, open Calendly in a new tab. Prefer to share context first? Use the contact form."
                      : "Use the button below to schedule. Want to share context first? Use the contact form."
                    : "Use the contact form and share your preferred times — we'll reply within one business day."}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {bookingUrl ? (
                    <Button
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      {calendlyEmbedUrl ? "Open in new tab" : "Book your slot"}
                    </Button>
                  ) : (
                    <Button href="/contact" className="w-full sm:w-auto">
                      Request a time
                    </Button>
                  )}
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Contact form
                  </Button>
                </div>
              </div>
            </ExpandableDetailPanel>

            <div className="mt-3">
              <ExpandableDetailPanel
                title="Typical outcomes from the call"
                summary="What we usually decide together"
              >
                <ul className="space-y-2 text-sm text-ink/78">
                  <li>The workflow or delivery bottleneck to fix first</li>
                  <li>A focused pilot scope with measurable success criteria</li>
                  <li>Timeline, collaboration model, and rough investment range</li>
                </ul>
              </ExpandableDetailPanel>
            </div>
          </Card>
        </Section>
      </div>
    </>
  );
}
