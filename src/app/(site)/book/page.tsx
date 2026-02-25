import { buildMetadata } from "@/lib/seo";
import { getBookingUrl } from "@/lib/site-config";

import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

export const metadata = buildMetadata({
  title: "Book Discovery Call",
  description:
    "Book a discovery call with Two Apps to discuss AI automation, Claude/Claude Code implementation, or white-label AI delivery support.",
  canonicalPath: "/book",
  keywords: ["book ai automation consultation", "book discovery call two apps"],
  ogImage: "/og-default.svg"
});

export default function BookPage() {
  const bookingUrl = getBookingUrl();

  return (
    <>
      <PageHero
        eyebrow="Book Discovery Call"
        title={bookingUrl ? "Book a discovery call" : "Booking link coming soon"}
        description={
          bookingUrl
            ? "Use the booking link below to schedule a discovery call for a direct project or white-label agency partnership."
            : "The public booking link is not live yet. Please use the contact form and mention your availability for a discovery call."
        }
        chips={["Direct clients", "Agency partners", "Dubai-based / global support"]}
      />
      <Section>
        <Card className="mx-auto max-w-3xl p-6 sm:p-8">
          <Tag className="mb-4">{bookingUrl ? "Booking live" : "Placeholder flow active"}</Tag>
          <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
            {bookingUrl
              ? "The primary CTA now points to the live booking link. You can also use the contact form if you need to share context before scheduling."
              : "This page intentionally acts as the CTA fallback until a real booking URL (for example Calendly) is configured via NEXT_PUBLIC_BOOKING_URL."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {bookingUrl ? (
              <Button href={bookingUrl}>Open booking link</Button>
            ) : (
              <Button href="/contact">Use contact form</Button>
            )}
            <Button href="/contact" variant="secondary">
              Contact instead
            </Button>
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-ink/70">
            <p className="font-medium text-ink">Typical discovery call goals</p>
            <ul className="mt-2 space-y-1">
              <li>Define the workflow or delivery bottleneck</li>
              <li>Choose the right pilot scope</li>
              <li>Confirm timeline, collaboration model, and constraints</li>
            </ul>
          </div>
        </Card>
      </Section>
    </>
  );
}
