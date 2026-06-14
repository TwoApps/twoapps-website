import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for the TwoApps website and contact form.",
  canonicalPath: "/privacy",
  keywords: ["twoapps privacy policy"],
  ogImage: "/og-default.svg"
});

export default function PrivacyPage() {
  return (
    <div className="relative">
      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-fx="0.5"
        data-bot-say="Boring but important — your data stays yours."
        data-bot-icons="shield,eyeoff"
      >
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          description="This is a launch-ready privacy policy template for the TwoApps marketing website. Replace placeholders with your legal/business details before production publication if required."
        />
      </div>

      <Section>
        <div className="px-4 sm:px-6 lg:px-8">
          <Card className="prose-dark mx-auto max-w-2xl p-5 sm:p-8 md:p-10">
            <div className="space-y-6 sm:space-y-8 text-base leading-relaxed lg:text-lg">
              <p>
                TwoApps (“we”, “us”, “our”) collects limited information through this website when you submit the contact form or interact with the site.
              </p>
              <div
                data-bot-stop="collect"
                data-bot-fx="0.2"
                data-bot-say="We only ask for what we actually need. No data-mining nonsense."
                data-bot-icons="inbox,person"
              >
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Information we collect</h2>
                <p className="mt-3">
                  We may collect your name, email address, company name, region, service interest, and project details that you submit through the contact form.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">How we use information</h2>
                <p className="mt-3">
                  We use submitted information to review inquiries, respond to requests, and evaluate potential service engagements or partnerships.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Analytics</h2>
                <p className="mt-3">
                  We may use privacy-friendly analytics tools to understand website traffic and page performance. Analytics configuration may be updated over time.
                </p>
              </div>
              <div
                data-bot-stop="share"
                data-bot-fx="0.8"
                data-bot-say="We don't sell your info. Our lawyers made us say it twice."
                data-bot-icons="shield,check"
              >
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Data sharing</h2>
                <p className="mt-3">
                  We do not sell personal information. We may use third-party service providers (such as hosting, analytics, and email delivery services) to operate the website.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Contact</h2>
                <p className="mt-3">
                  To request changes or deletion related to information you submitted through this website, contact us through the website contact page.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
