import { audienceTracks, caseStudies, featuredIndustries, globalPartnerRegions, processSteps, services } from "@/content";

import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SplitPanel } from "@/components/ui/split-panel";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";

export function AudienceSplitSection() {
  return (
    <Section>
      <AnimatedReveal>
        <Heading
          eyebrow="Two Paths"
          title="One team for business automation and agency white-label delivery"
          subtitle="TwoApps helps businesses reduce manual work and helps agencies deliver AI projects faster with practical implementation support."
          align="center"
          className="max-w-4xl"
        />
      </AnimatedReveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <AnimatedReveal delay={0.05}>
          <SplitPanel
            title={audienceTracks.business.title}
            description={audienceTracks.business.description}
            bullets={audienceTracks.business.bullets}
            href={audienceTracks.business.href}
            ctaLabel="Explore business services"
            accent="cyan"
          />
        </AnimatedReveal>
        <AnimatedReveal delay={0.12}>
          <SplitPanel
            title={audienceTracks.agency.title}
            description={audienceTracks.agency.description}
            bullets={audienceTracks.agency.bullets}
            href={audienceTracks.agency.href}
            ctaLabel="Explore agency partnerships"
            accent="orange"
          />
        </AnimatedReveal>
      </div>
    </Section>
  );
}

export function ServicesOverviewSection() {
  return (
    <Section className="pt-6">
      <AnimatedReveal>
        <Heading
          eyebrow="Service Pillars"
          title="What TwoApps helps you build"
          subtitle="AI workflows, internal tools, and white-label AI delivery support that solve real operational bottlenecks."
        />
      </AnimatedReveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <AnimatedReveal key={service.slug} delay={0.04 * index}>
            <Card className="h-full p-5">
              <div className="mb-3">
                <Tag>{service.audiences.includes("agency") && service.audiences.includes("business") ? "Business + Agency" : "Agency"}</Tag>
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{service.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/85">
                {service.benefits.slice(0, 2).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-accent-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href={`/services/${service.slug}`} variant="ghost" className="mt-5 px-0">
                View service
              </Button>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

export function FounderProofSection() {
  return (
    <Section className="pt-6">
      <AnimatedReveal>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="p-6 sm:p-8">
            <Tag className="mb-4">Founder Proof</Tag>
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
              Founder-led delivery that makes scoping and execution faster
            </h2>
            <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-ink/75 sm:text-base">
              TwoApps is company-led, but founder depth is a major trust advantage. Clients get practical experience across
              AI workflows, product engineering, Claude/Claude Code workflows, and compliance-aware process design.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Claude / Claude Code workflow setup",
                "AI workflow design with guardrails",
                "Flutter + AWS product engineering background",
                "AML / KYC process and operations fit"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-ink/85">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/about" variant="secondary">
                About TwoApps
              </Button>
              <Button href="https://zainhthegreat.github.io/my_cv_zain/" variant="ghost" target="_blank" rel="noreferrer">
                View founder CV
              </Button>
            </div>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Target Markets</Tag>
            <h3 className="font-display text-2xl font-semibold">UAE-based, serving globally</h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium">Direct business clients</p>
                <p className="mt-1 text-sm text-ink/70">
                  We work with teams worldwide, with strong local access in the UAE for workshops and faster alignment.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium">Agency and software house partners</p>
                <p className="mt-1 text-sm text-ink/70">
                  White-label delivery support for agencies that want to sell AI work without hiring a full team first.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-2">Common partner markets</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{globalPartnerRegions.join(" • ")}</p>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedReveal>
    </Section>
  );
}

export function WorkPreviewSection() {
  return (
    <Section className="pt-6">
      <AnimatedReveal>
        <Heading
          eyebrow="Work Style"
          title="Plain-language proof before long technical documents"
          subtitle="These case-style summaries show how TwoApps scopes and delivers work. They can later expand into formal case studies as client approvals grow."
        />
      </AnimatedReveal>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {caseStudies.slice(0, 2).map((item, index) => (
          <AnimatedReveal key={item.slug} delay={0.05 * index}>
            <Card className="h-full p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">{item.context}</p>
              <h3 className="mt-2 text-xl font-display font-semibold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.approach}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-ink/70">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/work" variant="secondary">
          View all work summaries
        </Button>
      </div>
    </Section>
  );
}

export function IndustriesAndRegionsSection() {
  return (
    <Section className="pt-6">
      <AnimatedReveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="p-6">
            <Tag className="mb-4">Industries</Tag>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Operationally heavy teams benefit first</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              TwoApps focuses on teams where manual workflows create delays, errors, and too much back-and-forth.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-ink/85">
              {featuredIndustries.slice(0, 4).map((industry) => (
                <li key={industry} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  {industry}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink/60">More industry targets are listed on the industries page.</p>
            <Button href="/industries" variant="ghost" className="mt-5 px-0">
              Explore industries
            </Button>
          </Card>
          <Card className="p-6">
            <Tag className="mb-4">Geography</Tag>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">UAE-based with global delivery</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              We serve clients worldwide. UAE location helps with local collaboration, while delivery is built for remote teams and agency partnerships.
            </p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="font-medium">Direct clients</p>
                <p className="mt-1 text-sm text-ink/70">UAE-based with global client support</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="font-medium">Agency partners</p>
                <p className="mt-1 text-sm text-ink/70">Global delivery, with strong fit in {globalPartnerRegions.join(", ")}</p>
              </div>
            </div>
            <Button href="/regions/white-label-ai-partner-software-houses" variant="ghost" className="mt-5 px-0">
              View partner model
            </Button>
          </Card>
        </div>
      </AnimatedReveal>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section className="pt-6">
      <AnimatedReveal>
        <Heading
          eyebrow="Process"
          title="Audit → Pilot → Stabilize → Scale"
          subtitle="A simple delivery model for both direct business projects and white-label agency work."
        />
      </AnimatedReveal>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <AnimatedReveal key={step.title} delay={0.05 * index}>
            <Card className="relative h-full p-5">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-lg">
                {index + 1}
              </div>
              <h3 className="font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.copy}</p>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
