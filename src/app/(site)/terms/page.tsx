import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for the TwoApps website.",
  canonicalPath: "/terms",
  keywords: ["twoapps terms"],
  ogImage: "/og-default.svg"
});

export default function TermsPage() {
  return (
    <div className="relative">
      <ScrollBot />

      <div
        data-bot-stop="hero"
        data-bot-fx="0.5"
        data-bot-say="The legal stuff — plain English version coming up."
        data-bot-icons="shield,chat"
      >
        <PageHero
          eyebrow="Legal"
          title="Terms of Use"
          description="Launch-ready website terms for TwoApps. Replace placeholders and obtain legal review if you need jurisdiction-specific terms."
        />
      </div>

      <Section>
        <div className="px-4 sm:px-6 lg:px-8">
          <Card className="prose-dark mx-auto max-w-2xl p-5 sm:p-8 md:p-10">
            <div className="space-y-6 sm:space-y-8 text-base leading-relaxed lg:text-lg">
              <div
                data-bot-stop="use"
                data-bot-fx="0.15"
                data-bot-say="Lawful purposes only. Sorry, no villain origin stories."
                data-bot-icons="target,check"
              >
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Website use</h2>
                <p className="mt-3">
                  By using this website, you agree to use it for lawful purposes and not to misuse any forms, content, or services presented.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">No guaranteed engagement</h2>
                <p className="mt-3">
                  Submitting an inquiry does not create a client relationship. Engagements begin only after mutual agreement and documented terms.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Content and intellectual property</h2>
                <p className="mt-3">
                  Website content, branding, and materials are owned by TwoApps unless otherwise stated. Do not reproduce or redistribute without permission.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">External links</h2>
                <p className="mt-3">
                  This website may link to third-party resources. We are not responsible for the content or privacy practices of external sites.
                </p>
              </div>
              <div
                data-bot-stop="liability"
                data-bot-fx="0.85"
                data-bot-say="As-is, but built with care. Read the fine print anyway."
                data-bot-icons="shield,clock"
              >
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">Limitation of liability</h2>
                <p className="mt-3">
                  The website is provided on an “as-is” basis. To the fullest extent permitted by law, TwoApps disclaims liability arising from website use.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
