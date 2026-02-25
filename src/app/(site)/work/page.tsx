import { caseStudies } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Case-style summaries based on founder expertise and delivery experience across Claude automation workflows, compliance operations, and AI-enabled product engineering.",
  canonicalPath: "/work",
  keywords: ["ai automation case studies", "claude code workflow implementation examples", "aml kyc automation examples"],
  ogImage: "/og-default.svg"
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Representative work and implementation patterns"
        description="Launch proof starts with strong, honest case-style summaries built from real delivery experience. These can evolve into formal client case studies as the site grows."
        chips={["Founder-backed", "Case-style summaries", "Implementation-focused"]}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Card key={item.slug} className="flex h-full flex-col p-6">
              <Tag className="mb-4">{item.context}</Tag>
              <h2 className="text-balance font-display text-2xl font-semibold leading-tight">{item.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink/75">
                <p>
                  <span className="font-medium text-ink">Problem:</span> {item.problem}
                </p>
                <p>
                  <span className="font-medium text-ink">Approach:</span> {item.approach}
                </p>
              </div>
              <div className="mt-4">
                <p className="font-medium text-sm">Outcomes</p>
                <ul className="mt-2 space-y-2 text-sm text-ink/80">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-2" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink/70">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-auto pt-4 text-xs text-ink/55">{item.disclaimer}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CtaBand
        title="Want to turn one of your workflows into a measured pilot?"
        copy="We can start with a discovery call and define the smallest implementation that proves value quickly."
        primaryHref="/contact"
        primaryLabel="Start a pilot discussion"
      />
    </>
  );
}
