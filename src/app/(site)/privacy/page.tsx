import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the TwoApps privacy policy: what data we collect through our website, how we use and protect it, and how to exercise your privacy rights.",
  canonicalPath: "/privacy",
  keywords: [
    "TwoApps privacy policy",
    "data protection",
    "UAE privacy",
    "AI automation privacy",
    "website privacy policy"
  ],
  ogImage: "/og-default.svg"
});

const lastUpdated = "June 14, 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" }
          ])
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-fx="0.5"
        data-bot-say="Boring but important — your data stays yours."
        data-bot-icons="shield,eyeoff"
      >
        <PageHero
          eyebrow="Legal"
          title="Your privacy, explained in plain English"
          description="This policy covers what we collect through the TwoApps website, how we use it, and the choices you have. No surprises, and we never sell your information."
        />
      </div>

      <Section innerClassName="flex justify-center">
        <Card className="w-full max-w-3xl p-6 sm:p-8 md:p-10 lg:p-12">
          <article className="space-y-10 sm:space-y-12">
            <header className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue">
                Last updated: {lastUpdated}
              </p>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                TwoApps (“we”, “us”, “our”) respects your privacy. This page tells you what
                happens when you use our website, submit a form, or download a resource — and what
                control you have over your information.
              </p>
            </header>

            <section
              data-bot-stop="scope"
              data-bot-fx="0.2"
              data-bot-say="This policy covers the site, contact forms, guides, and events."
              data-bot-icons="shield,target"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                What this policy covers
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                This policy applies to information collected through the TwoApps website — including
                contact forms, guide downloads, academy enrollments, livestream registrations, and
                referral submissions. It does not cover third-party sites we may link to.
              </p>
            </section>

            <section
              data-bot-stop="collect"
              data-bot-fx="0.25"
              data-bot-say="We only ask for what we actually need. No data-mining nonsense."
              data-bot-icons="inbox,person"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                What data we collect
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                Most of the time, you browse our site without sharing anything personal. When you
                choose to get in touch or download a resource, we may collect:
              </p>
              <ul className="space-y-2 text-base text-ink/80 sm:text-lg">
                {[
                  "Name, email address, and company name",
                  "Your region and the service or topic you are interested in",
                  "Project details or questions you share with us",
                  "Basic technical data such as browser type and pages visited, via privacy-friendly analytics"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              data-bot-stop="use"
              data-bot-fx="0.4"
              data-bot-say="We use your info to reply, deliver what you asked for, and improve the site."
              data-bot-icons="chat,check"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                How we use your data
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                We only use your information for the reason you gave it to us:
              </p>
              <ul className="space-y-2 text-base text-ink/80 sm:text-lg">
                {[
                  "Respond to your questions and evaluate potential engagements",
                  "Send the guides, academy details, or event updates you requested",
                  "Improve the website experience and measure content performance",
                  "Comply with legal or regulatory obligations when required"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              data-bot-stop="analytics"
              data-bot-fx="0.55"
              data-bot-say="Privacy-friendly analytics. No creepy cross-site tracking."
              data-bot-icons="chart,eyeoff"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                Analytics and cookies
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                We use privacy-focused analytics to understand which pages are useful and where
                visitors get stuck. We do not use this data to identify you personally or to follow
                you around the web. You can manage or disable cookies through your browser settings
                at any time.
              </p>
            </section>

            <section
              data-bot-stop="protect"
              data-bot-fx="0.7"
              data-bot-say="Your data is stored securely and only kept as long as needed."
              data-bot-icons="shield,check"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                How we protect your data
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                We rely on reputable hosting, email, and analytics providers and limit internal
                access to your information. We keep data only as long as we need it to respond to
                you, deliver what you requested, or meet our legal obligations.
              </p>
            </section>

            <section
              data-bot-stop="share"
              data-bot-fx="0.8"
              data-bot-say="We don't sell your info. Our lawyers made us say it twice."
              data-bot-icons="shield,check"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                Data sharing
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                We do not sell your personal information. We only share it with trusted service
                providers — such as hosting, email delivery, and analytics platforms — who help us
                run the website and are bound to keep your information confidential.
              </p>
            </section>

            <section
              data-bot-stop="rights"
              data-bot-fx="0.85"
              data-bot-say="You can ask to see, update, or delete your data anytime."
              data-bot-icons="person,check"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                Your rights
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                Depending on where you are located, you may have the right to access, correct, or
                delete the personal information we hold about you. You can also ask us to stop
                sending marketing emails at any time by clicking the unsubscribe link or contacting
                us directly.
              </p>
            </section>

            <section
              data-bot-stop="updates"
              data-bot-fx="0.9"
              data-bot-say="We'll update this page if our practices change."
              data-bot-icons="chat,clock"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                Updates to this policy
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                We may update this policy as our website or services evolve. When we do, we will
                revise the date at the top of this page. We encourage you to check back occasionally
                so you know where things stand.
              </p>
            </section>

            <section
              data-bot-stop="contact"
              data-bot-fx="0.95"
              data-bot-say="Questions? Reach out through the contact page."
              data-bot-icons="chat,inbox"
              className="space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-balance text-ink sm:text-2xl md:text-3xl">
                How to contact us
              </h2>
              <p className="text-base leading-relaxed text-ink/80 sm:text-lg">
                If you have questions about this policy, want to exercise your privacy rights, or
                believe something here needs correcting, please reach out through our contact page.
                We read every message and will respond as quickly as we can.
              </p>
            </section>
          </article>
        </Card>
      </Section>

      <CtaBand
        title="Questions about your data?"
        copy="We're happy to explain how we handle information or help you exercise your privacy rights."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/book"
        secondaryLabel="Book a call"
      />
    </>
  );
}
