import { buildMetadata, makeBreadcrumbSchema, organizationSchema } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "The plain-English rules for using the TwoApps website: what we cover, who can use it, what you can expect from us, and how we handle disputes.",
  canonicalPath: "/terms",
  keywords: ["twoapps terms of use", "twoapps legal", "website terms"],
  ogImage: "/og-default.svg"
});

const TERMS_SECTIONS = [
  {
    number: "01",
    title: "What these terms cover",
    body: "These terms apply when you browse, read, or interact with the TwoApps website. They explain the rules of the road: what you can do here, what we are responsible for, and what happens if something goes wrong. By continuing to use the site, you agree to these terms."
  },
  {
    number: "02",
    title: "Who can use this site",
    body: "The site is built for business visitors, prospective clients, partners, and anyone genuinely interested in AI automation services. Please use it lawfully — no scraping, spamming, hacking, or attempts to overload or interfere with the site. If you are under the age of majority in your country, please use the site only with a parent or guardian."
  },
  {
    number: "03",
    title: "What you can expect from us",
    body: "We work hard to keep the site accurate and useful, but we cannot promise that every detail is perfect at every moment. The content here is for general information only and is not legal, financial, or professional advice. Sending a contact form or booking a call starts a conversation — it does not create a client relationship. A real engagement only begins after both sides agree to documented terms."
  },
  {
    number: "04",
    title: "What we expect from you",
    body: "Use the site honestly. Do not submit false information through forms, copy or redistribute our content without permission, or use our brand or trademarks without approval. If you share feedback or ideas with us, you give us permission to use them to improve our services without owing you compensation."
  },
  {
    number: "05",
    title: "Content and intellectual property",
    body: "The branding, text, images, case studies, and materials on this site belong to TwoApps unless otherwise stated. You are welcome to read and share links, but please do not reproduce, republish, or resell our content without written permission."
  },
  {
    number: "06",
    title: "External links",
    body: "We may link to third-party resources, tools, or articles we think are useful. We are not responsible for the content, accuracy, or privacy practices of those external sites. Please review their terms before you share information with them."
  },
  {
    number: "07",
    title: "Our liability to you",
    body: "The site is provided on an as-is basis. To the fullest extent permitted by law, TwoApps disclaims liability arising from your use of the site or reliance on its content. This does not affect any rights you may have as a consumer that cannot be limited under applicable law."
  },
  {
    number: "08",
    title: "Changes and questions",
    body: "We may update these terms as our business and the site evolve. The latest version will always be posted here. If you have any questions about these terms, please reach out through our contact page."
  }
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" }
          ])
        ]}
      />

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
          description="The rules of the road for using the TwoApps website. Written in plain English so you know what to expect — no law degree required."
          chips={["Website use", "Intellectual property", "Liability limits", "Disputes"]}
        />
      </div>

      <Section>
        <Card className="prose-dark mx-auto max-w-3xl p-6 sm:p-8 md:p-10">
          <div className="space-y-8 sm:space-y-10">
            {TERMS_SECTIONS.map((section, index) => (
              <div
                key={section.number}
                data-bot-stop={section.number === "02" ? "use" : section.number === "07" ? "liability" : undefined}
                data-bot-fx={section.number === "02" ? "0.15" : section.number === "07" ? "0.85" : undefined}
                data-bot-say={
                  section.number === "02"
                    ? "Lawful purposes only. Sorry, no villain origin stories."
                    : section.number === "07"
                      ? "As-is, but built with care. Read the fine print anyway."
                      : undefined
                }
                data-bot-icons={
                  section.number === "02"
                    ? "target,check"
                    : section.number === "07"
                      ? "shield,clock"
                      : undefined
                }
                className={
                  index < TERMS_SECTIONS.length - 1
                    ? "border-b border-ink/10 pb-8 sm:pb-10"
                    : undefined
                }
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue/80">
                  Step {section.number}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold leading-tight text-ink sm:text-xl lg:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/70 sm:text-base">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <div
        data-bot-stop="cta"
        data-bot-fx="0.5"
        data-bot-say="Questions? We would rather talk than hide behind fine print."
        data-bot-icons="chat,person"
      >
        <CtaBand
          title="Questions about these terms?"
          copy="We would rather talk than hide behind fine print. Reach out and we will explain anything that feels unclear."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="/privacy"
          secondaryLabel="Privacy policy"
        />
      </div>
    </>
  );
}
