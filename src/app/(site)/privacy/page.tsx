import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
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
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This is a launch-ready privacy policy template for the TwoApps marketing website. Replace placeholders with your legal/business details before production publication if required."
      />
      <Section>
        <Card className="prose-dark max-w-none p-6 sm:p-8">
          <div className="space-y-5 text-sm leading-relaxed">
            <p>
              TwoApps (“we”, “us”, “our”) collects limited information through this website when you submit the contact form or interact with the site.
            </p>
            <div>
              <h2 className="font-display text-2xl font-semibold">Information we collect</h2>
              <p className="mt-2">
                We may collect your name, email address, company name, region, service interest, and project details that you submit through the contact form.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">How we use information</h2>
              <p className="mt-2">
                We use submitted information to review inquiries, respond to requests, and evaluate potential service engagements or partnerships.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Analytics</h2>
              <p className="mt-2">
                We may use privacy-friendly analytics tools to understand website traffic and page performance. Analytics configuration may be updated over time.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Data sharing</h2>
              <p className="mt-2">
                We do not sell personal information. We may use third-party service providers (such as hosting, analytics, and email delivery services) to operate the website.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Contact</h2>
              <p className="mt-2">
                To request changes or deletion related to information you submitted through this website, contact us through the website contact page.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
