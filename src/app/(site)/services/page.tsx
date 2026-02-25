import Link from "next/link";

import { services } from "@/content";
import { buildMetadata } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { PageHero } from "@/components/common/page-hero";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Agentic AI automation, Claude/Claude Code workflow implementation, AI-enabled product engineering, and white-label AI delivery for software houses.",
  canonicalPath: "/services",
  keywords: ["agentic ai services", "claude code automation consulting", "white label ai delivery"],
  ogImage: "/og-default.svg"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI automation and AI delivery services built for execution"
        description="Two Apps helps businesses automate operations and helps agencies ship AI projects through white-label implementation support."
        chips={["Dubai-based", "Business + Agency", "Claude-native execution"]}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedReveal key={service.slug} delay={0.05 * index}>
              <Card className="h-full p-6">
                <Tag className="mb-4">
                  {service.audiences.includes("business") && service.audiences.includes("agency")
                    ? "Business + Agency"
                    : "Agency"}
                </Tag>
                <h2 className="text-balance font-display text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{service.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/85">
                  {service.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-accent-1 hover:bg-white/5"
                >
                  View service <span aria-hidden>↗</span>
                </Link>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="font-display text-2xl font-semibold">Productized starting offers</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {[
                "AI Automation Audit (1-2 weeks)",
                "30-Day Agentic Pilot (one workflow end-to-end)",
                "Claude Code Team Acceleration Setup",
                "White-Label AI Capability Sprint for agencies"
              ].map((offer) => (
                <li key={offer} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {offer}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="font-display text-2xl font-semibold">Outcomes we optimize for</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {[
                "Reduced manual ops time",
                "Faster turnaround and response times",
                "Lower execution inconsistency across recurring work",
                "Faster AI project delivery without in-house AI hiring delays"
              ].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
      <CtaBand
        title="Need help picking the right starting service?"
        copy="Start with the highest-friction workflow or the next AI project your team is expected to deliver. We can scope the right pilot."
        primaryHref="/contact"
        primaryLabel="Discuss scope"
      />
    </>
  );
}
