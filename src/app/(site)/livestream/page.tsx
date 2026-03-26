import { buildMetadata } from "@/lib/seo";

import { LivestreamRegistrationForm } from "@/components/livestream/registration-form";
import { PageHero } from "@/components/common/page-hero";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export const metadata = buildMetadata({
  title: "Live AI Workflow Demo",
  description:
    "Watch TwoApps build a production-ready AI workflow in 30 minutes. Learn real automation patterns, integration techniques, and see results live.",
  canonicalPath: "/livestream",
  keywords: ["ai workflow demo", "live automation", "n8n demo", "ai automation webinar", "twoapps live"],
  ogImage: "/og-livestream.svg"
});

const whatToExpectItems = [
  {
    title: "Real workflow, built live",
    description: "Watch a production-ready AI workflow take shape from blank canvas to working system in 30 minutes."
  },
  {
    title: "Customer support automation",
    description: "We'll build a ticket triage system with AI categorization, smart routing, and response suggestions."
  },
  {
    title: "Integration patterns",
    description: "See how to connect AI, databases, and communication tools without the usual complexity."
  },
  {
    title: "Live Q&A",
    description: "Get your questions answered during and after the build. No slides, no theory—just practical answers."
  },
  {
    title: "Take-home resources",
    description: "All attendees get the workflow template, diagrams, and implementation checklist after the session."
  }
];

export default function LivestreamPage() {
  return (
    <>
      <PageHero
        eyebrow="Live Demo"
        title="Watch an AI workflow get built in 30 minutes"
        description="No slides. No theory. Just real building. See exactly how we deliver production automation in weeks, not months."
        chips={["30 minutes", "Live Q&A", "Free resources"]}
      />

      <Section className="pt-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* What to expect */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-ink">What you'll see</h2>
              <p className="mt-2 text-ink/70">
                A complete walkthrough of building a customer support ticket triage system—the same pattern we've used with fintech, SaaS, and e-commerce clients.
              </p>
            </div>

            <div className="space-y-4">
              {whatToExpectItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-1/20 text-sm font-medium text-accent-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof placeholder */}
            <Card className="border-accent-1/10 bg-gradient-to-br from-accent-1/5 to-transparent p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-1/20">
                  <svg className="h-5 w-5 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-ink">Based on real client work</p>
                  <p className="mt-1 text-sm text-ink/60">
                    This demo showcases the exact patterns we used to help a fintech client reduce support response time by 60%.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Registration form */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Card className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-ink">Reserve your spot</h2>
                <p className="mt-1 text-sm text-ink/60">
                  Date and time to be announced. Register now to get priority notification.
                </p>
              </div>
              <LivestreamRegistrationForm sourcePage="/livestream" />
              
              {/* Trust signals */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-xs text-ink/50">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Your info stays private. No spam, ever.</span>
                </div>
                <p className="mt-3 text-xs text-ink/50">
                  Questions? Contact us at{" "}
                  <a href="mailto:team@twoapps.com" className="text-accent-1 hover:underline">
                    team@twoapps.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="pt-12 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-ink">Common questions</h2>
          
          <div className="space-y-4">
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-ink">
                Do I need technical knowledge to benefit from this?
                <span className="ml-4 shrink-0 rounded-full bg-white/5 p-1 text-ink/60 group-open:rotate-45">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-ink/60">
                No. The demo is designed for both technical and non-technical viewers. We explain what we're doing at each step and why it matters for business outcomes.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-ink">
                Will there be a recording?
                <span className="ml-4 shrink-0 rounded-full bg-white/5 p-1 text-ink/60 group-open:rotate-45">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-ink/60">
                Yes. Everyone who registers will receive the recording and resources via email. But attending live means you can ask questions and get immediate answers.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-ink">
                What tools will you use?
                <span className="ml-4 shrink-0 rounded-full bg-white/5 p-1 text-ink/60 group-open:rotate-45">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-ink/60">
                We'll use n8n for workflow automation, integrate with common tools like Slack and email, and show AI patterns that work with various LLM providers. The concepts apply regardless of your specific tech stack.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-ink">
                Is this a sales pitch disguised as a demo?
                <span className="ml-4 shrink-0 rounded-full bg-white/5 p-1 text-ink/60 group-open:rotate-45">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm text-ink/60">
                No. This is 30 minutes of real building. At the end, we'll mention how TwoApps can help if you want to implement something similar—but the focus is on teaching you practical patterns you can use yourself.
              </p>
            </details>
          </div>
        </div>
      </Section>
    </>
  );
}
