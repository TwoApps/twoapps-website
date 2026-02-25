import { buildMetadata } from "@/lib/seo";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { getBookingUrl } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Two Apps to discuss agentic AI automation, Claude/Claude Code workflows, AI-enabled products, or white-label AI delivery for software houses.",
  canonicalPath: "/contact",
  keywords: ["contact ai automation agency dubai", "white label ai partner contact"],
  ogImage: "/og-default.svg"
});

export default function ContactPage() {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what workflow or AI project you need to ship"
        description="Use the form for direct business automation projects or white-label agency partnerships. The more specific the workflow/problem, the better the first response."
        chips={["Businesses", "Agencies / software houses", "Dubai-based / global delivery"]}
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 sm:p-8">
            <ContactForm sourcePage="/contact" />
          </Card>
          <div className="space-y-5">
            <Card className="p-6">
              <Tag className="mb-4">What to include</Tag>
              <ul className="space-y-2 text-sm text-ink/80">
                <li>Current workflow or delivery problem</li>
                <li>What outcome you want (speed, quality, capacity, cost, etc.)</li>
                <li>Your timeline and team constraints</li>
                <li>Whether this is a direct business project or a white-label agency opportunity</li>
              </ul>
            </Card>
            <Card className="p-6">
              <Tag className="mb-4">Prefer a call?</Tag>
              <p className="text-sm leading-relaxed text-ink/80">
                You can use the booking CTA if a booking link is live. Until then, submit the form and mention that you prefer a discovery call.
              </p>
              <div className="mt-4">
                <Button href={bookingHref} variant="secondary">
                  Book discovery call
                </Button>
              </div>
            </Card>
            <Card className="p-6">
              <Tag className="mb-4">Location</Tag>
              <p className="text-sm text-ink/80">Dubai, UAE</p>
              <p className="mt-2 text-sm text-ink/65">
                Serving UAE/GCC businesses and white-label agency partners internationally.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
