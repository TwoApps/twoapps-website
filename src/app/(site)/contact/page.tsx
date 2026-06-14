import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";
import { getBookingUrl, getContactPhone } from "@/lib/site-config";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/common/page-hero";
import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { JsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with TwoApps. Tell us what you're trying to automate or ship, and we'll reply with a clear next step — usually within one business day.",
  canonicalPath: "/contact",
  keywords: ["contact ai automation partner uae", "white label ai partner contact"],
  ogImage: "/og-default.svg"
});

const whatHappensNext = [
  {
    step: "01",
    title: "Send us the messy details",
    body:
      "No pitch deck needed. Tell us what’s slow, expensive, or frustrating — and the outcome you actually want."
  },
  {
    step: "02",
    title: "A real human reviews it fast",
    body:
      "We read every message, ask clarifying questions, and point you at the smallest useful first step."
  },
  {
    step: "03",
    title: "You get a clear next move",
    body:
      "Usually a short call, a scoped pilot, or a quick Loom with options — no generic proposals."
  }
];

function StepCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="relative flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-7">
      <span className="font-display text-4xl font-semibold leading-none text-ink/10 sm:text-5xl">
        {step}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-[1.6] text-ink/58">{body}</p>
    </div>
  );
}

export default function ContactPage() {
  const bookingHref = getBookingUrl() ?? "/book";
  const contactPhone = getContactPhone();

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.12"
        data-bot-say="Drop a message — I usually reply before your coffee gets cold." data-bot-short="Drop a message"
      >
        <PageHero
          eyebrow="Contact"
          title="Tell us what’s eating your team’s time"
          description="One short message is enough. We read every inquiry, reply fast, and only propose work that actually fits your workflow."
          chips={["UAE-based", "Reply within 24 hours", "Pilot-first approach"]}
          mobileChips={["Based in the UAE", "Replies within 24 hours", "Pilot-first project approach"]}
        />
      </div>

      <Section className="bg-cream/30">
        <Heading
          align="center"
          eyebrow="What happens next"
          title="Reach out today. Ship something useful next week."
          subtitle="We’ve stripped the process down to three simple steps so you know exactly what to expect."
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {whatHappensNext.map((item) => (
            <StepCard key={item.step} {...item} />
          ))}
        </div>
      </Section>

      <Section className="pt-6 sm:pt-8 lg:pt-12">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          <Card
            className="order-1 p-6 sm:p-8"
            data-bot-stop
            data-bot-fx="0.88"
            data-bot-say="More detail now = a useful answer faster." data-bot-short="More detail, faster answer"
          >
            <ContactForm sourcePage="/contact" />
          </Card>
          <div
            className="order-2 space-y-4"
            data-bot-stop
            data-bot-fx="0.5"
            data-bot-say="Rather talk? WhatsApp or book a slot — I'm around." data-bot-short="WhatsApp or book a slot"
          >
            <ExpandableDetailPanel
              title="Help us help you faster"
              summary="A few details that turn a slow reply into a useful one"
              defaultOpen
            >
              <ul className="space-y-3 text-sm text-ink/78">
                <li className="flex gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>The workflow or delivery problem you’re trying to solve</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>The outcome you want — speed, quality, capacity, cost, or fewer errors</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>Any timeline, budget, or team constraints we should know about</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                  <span>Whether this is for your own business or a white-label agency opportunity</span>
                </li>
              </ul>
            </ExpandableDetailPanel>

            <ExpandableDetailPanel
              title="Rather jump on a call?"
              summary="Call, WhatsApp, or book a discovery slot"
            >
              <div className="space-y-4 text-sm text-ink/78">
                {contactPhone && (
                  <>
                    <p className="font-medium text-ink">Call or WhatsApp:</p>
                    <a
                      href={`tel:${contactPhone.replace(/\s/g, "")}`}
                      className="block text-blue transition-colors hover:text-blue/80"
                    >
                      {contactPhone}
                    </a>
                    <a
                      href={`https://wa.me/${contactPhone.replace(/[\s\+]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue transition-colors hover:text-blue/80"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp
                    </a>
                  </>
                )}
                <p>Or submit the form and mention you&apos;d prefer a call — we’ll reach out to schedule.</p>
                <Button href={bookingHref} variant="secondary" className="w-full sm:w-auto">
                  Book discovery call
                </Button>
              </div>
            </ExpandableDetailPanel>

            <ExpandableDetailPanel title="Where we work from" summary="UAE-based, global delivery support">
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
