import { caseStudies, processSteps, workFaq } from '@/content';
import { buildMetadata, collectionPageSchema, makeBreadcrumbSchema, organizationSchema } from '@/lib/seo';

import { CaseStudyGrid } from '@/components/case-studies/case-study-grid';
import { CtaBand } from '@/components/common/cta-band';
import { FaqSection } from '@/components/common/faq-section';
import { PageHero } from '@/components/common/page-hero';
import { JsonLd } from '@/components/json-ld';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Section } from '@/components/ui/section';
import { ScrollBot } from '@/components/shared/scroll-bot';

export const metadata = buildMetadata({
  title: 'Work & Case Studies | TwoApps',
  description:
    'See how TwoApps delivers AI workflows, Claude Code automation, and internal tools for fintech, compliance, and operations teams.',
  canonicalPath: '/work',
  keywords: [
    'ai automation case studies',
    'claude code workflow examples',
    'aml kyc automation examples',
    'ai workflow implementation partner',
    'fintech automation case study'
  ],
  ogImage: '/og-default.png'
});

const resultPatterns = [
  {
    title: 'Hours back every week',
    body: 'We replace repeat manual work — document checks, routing, report prep, follow-ups — with workflows that run while your team focuses on decisions.'
  },
  {
    title: 'Fewer errors, calmer reviews',
    body: 'Human checkpoints stay where they matter. AI handles the repetitive parts so quality stays consistent and compliance teams sleep better.'
  },
  {
    title: 'Shipped in weeks, not quarters',
    body: 'We start with one measurable pilot, prove value fast, then expand. No six-month roadmap. No vaporware.'
  }
];

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Work', path: '/work' }
          ]),
          collectionPageSchema({
            name: 'TwoApps Work & Case Studies',
            description:
              'Representative delivery patterns showing how TwoApps builds AI workflows, Claude Code automation, and internal tools for operations and compliance teams.',
            path: '/work',
            items: caseStudies.map((item) => ({
              name: item.title,
              path: `/work#${item.slug}`,
              description: item.approach
            }))
          })
        ]}
      />

      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="This is where we show our work. Scroll and I'll walk you through what actually gets built." data-bot-short="See our work"
      >
        <PageHero
          eyebrow="Work"
          title="Real workflows. Honest outcomes."
          description="No case-study theatre here — just the delivery patterns we use to help teams move faster, make fewer mistakes, and ship AI systems that actually run."
          chips={['Founder-led delivery', 'Pilot-first approach', 'Operations & compliance focus']}
          mobileChips={['Delivery led by the founder', 'Pilot-first project approach', 'Focus on ops and compliance']}
        />
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.3"
        data-bot-say="These are the three results our clients see most often." data-bot-short="Three results clients see"
      >
        <Section>
          <Heading
            eyebrow="What you get"
            title="Results we deliver again and again"
            subtitle="Every engagement starts with one question: what measurable outcome can we prove in the first few weeks?"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {resultPatterns.map((result, index) => (
              <Card key={result.title} className="flex flex-col p-6 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue/10 text-sm font-bold text-blue">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-ink sm:text-xl">
                  {result.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{result.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Four steps. No surprises. We keep the loop tight so you see value before committing to the next phase." data-bot-short="Four steps, no surprises"
      >
        <Section className="bg-cyan-field">
          <Heading
            eyebrow="How we work"
            title="From first audit to scaled workflow"
            subtitle="A simple, repeatable process that keeps risk low and learning high."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden p-6">
                <span className="absolute right-4 top-4 font-display text-5xl font-semibold text-ink/[0.06]">
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.copy}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <div
        data-bot-stop
        data-bot-fx="0.6"
        data-bot-say="Tap any card for the full problem, approach, outcomes, and tech stack." data-bot-short="Tap any card"
      >
        <CaseStudyGrid caseStudies={caseStudies} showFeatured />
      </div>

      <FaqSection items={workFaq} title="Working with TwoApps — common questions" eyebrow="FAQ" />

      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Like what you see? Let's build a pilot that proves value in your operation." data-bot-short="Let's build a pilot"
      >
        <CtaBand
          title="Ready to turn a workflow into a pilot?"
          copy="Tell us what slows your team down. We'll map the smallest proof-of-value project and build it with you."
          primaryHref="/contact"
          primaryLabel="Book a call"
          secondaryHref="/services"
          secondaryLabel="See our services"
        />
      </div>
    </>
  );
}
