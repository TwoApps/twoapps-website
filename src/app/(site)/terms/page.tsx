import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for the Two Apps website.",
  canonicalPath: "/terms",
  keywords: ["two apps terms"],
  ogImage: "/og-default.svg"
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="Launch-ready website terms for Two Apps. Replace placeholders and obtain legal review if you need jurisdiction-specific terms."
      />
      <Section>
        <Card className="prose-dark max-w-none p-6 sm:p-8">
          <div className="space-y-5 text-sm leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-semibold">Website use</h2>
              <p className="mt-2">
                By using this website, you agree to use it for lawful purposes and not to misuse any forms, content, or services presented.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">No guaranteed engagement</h2>
              <p className="mt-2">
                Submitting an inquiry does not create a client relationship. Engagements begin only after mutual agreement and documented terms.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Content and intellectual property</h2>
              <p className="mt-2">
                Website content, branding, and materials are owned by Two Apps unless otherwise stated. Do not reproduce or redistribute without permission.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">External links</h2>
              <p className="mt-2">
                This website may link to third-party resources. We are not responsible for the content or privacy practices of external sites.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Limitation of liability</h2>
              <p className="mt-2">
                The website is provided on an “as-is” basis. To the fullest extent permitted by law, Two Apps disclaims liability arising from website use.
              </p>
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
