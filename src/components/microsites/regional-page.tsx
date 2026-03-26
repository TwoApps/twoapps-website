"use client";

import { useEffect, useRef } from "react";
import { BuildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { GlowField } from "@/components/motion/glow-field";
import { LightBeams } from "@/components/motion/light-beams";
import { useMotionDisabled } from "@/components/motion/use-motion-disabled";
import { cn } from "@/lib/utils";
import type { RegionalConfig } from "./types";

const iconMap: Record<string, React.ReactNode> = {
  dollarSign: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  shieldCheck: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 4 4-4" />
    </svg>
  ),
  users: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  trendingUp: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  target: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  rocket: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c-2.72.97-5.61 1.65-8.05 3.05A12.88 12.88 0 0 0 9 12l3 3z" />
      <path d="M9 12H4s.55 3.03 2 4c1.62 1.08 5 2 5 2" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 2-5 2-5" />
    </svg>
  ),
  fileCheck: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
  landmark: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  zap: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  building: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
  globe: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  truck: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  code: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  building2: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  ),
  home: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  checkCircle: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  chevronRight: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  chevronDown: (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

function getIcon(name: string): React.ReactNode {
  return iconMap[name] || null;
}

// Hero Section
function RegionalHero({ hero }: { hero: RegionalConfig["hero"] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const motionDisabled = useMotionDisabled();

  useEffect(() => {
    const root = ref.current;
    if (!root || motionDisabled) return;

    let ctx: { revert?: () => void } | null = null;
    void (async () => {
      const [{ gsap }] = await Promise.all([import("gsap")]);
      ctx = gsap.context(() => {
        gsap.fromTo(
          root.querySelectorAll("[data-hero-rise]"),
          { y: 18, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }, root);
    })();
    return () => ctx?.revert?.();
  }, [motionDisabled]);

  return (
    <section className="relative pt-8 sm:pt-10 lg:pt-12">
      <Container>
        <div
          ref={ref}
          className="neon-frame gradient-stroke relative overflow-hidden rounded-[1.75rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16"
        >
          <GlowField intensity="strong" />
          <LightBeams count={12} className="opacity-45" />
          <div className="noise-overlay" />
          <div className="absolute -right-8 top-0 h-64 w-64 rounded-full bg-accent-1/12 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-accent-3/12 blur-3xl" />

          <div className="relative max-w-4xl">
            <div data-hero-rise>
              <Tag className="mb-5">{hero.eyebrow}</Tag>
            </div>
            <h1
              data-hero-rise
              className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </h1>
            <p
              data-hero-rise
              className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl"
            >
              {hero.subheadline}
            </p>
            <div data-hero-rise className="mt-8 flex flex-wrap gap-3">
              <Button href="/book" size="lg">
                {hero.primaryCta}
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div data-hero-rise className="mt-10 border-t border-white/10 pt-6">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">
              {hero.trustBar}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-accent-1/15 bg-accent-1/5 px-3 py-1.5 text-xs text-accent-1">
                MAS Compliant
              </span>
              <span className="rounded-full border border-accent-1/15 bg-accent-1/5 px-3 py-1.5 text-xs text-accent-1">
                PDPA Ready
              </span>
              <span className="rounded-full border border-accent-1/15 bg-accent-1/5 px-3 py-1.5 text-xs text-accent-1">
                Singapore References
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Pain Points Section
function PainPointsSection({
  title,
  items,
}: {
  title: string;
  items: RegionalConfig["painPoints"]["items"];
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-accent-1/20 hover:bg-accent-1/[0.02]"
            >
              <div className="mb-4 text-accent-1">{getIcon(item.icon)}</div>
              <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink/60">{item.description}</p>
              <p className="text-xs font-medium text-accent-1">→ {item.stat}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// How It Works Section
function HowItWorksSection({
  title,
  steps,
}: {
  title: string;
  steps: RegionalConfig["howItWorks"];
}) {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-12 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {title}
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-accent-1/30 to-transparent lg:block" />
                )}
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-1 text-lg font-bold text-[#021111]">
                    {i + 1}
                  </div>
                  <h3 className="mb-1 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mb-3 text-sm text-ink/60">{step.subtitle}</p>
                  <p className="text-xs text-accent-1">{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Features Grid Section
function FeaturesSection({
  title,
  features,
}: {
  title: string;
  features: RegionalConfig["features"];
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-accent-1/20 hover:bg-accent-1/[0.02]"
            >
              <div className="mb-4 text-accent-1">{getIcon(feature.icon)}</div>
              <h3 className="mb-2 font-display text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Industry Solutions Section
function IndustrySection({
  title,
  industries,
}: {
  title: string;
  industries: RegionalConfig["industries"];
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {title}
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-accent-1/20 hover:bg-accent-1/[0.02]"
            >
              <div className="mb-4 text-accent-1">{getIcon(industry.icon)}</div>
              <h3 className="mb-3 font-display text-xl font-semibold">{industry.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink/60">{industry.description}</p>
              <a
                href="/industries"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent-1 hover:underline"
              >
                Learn more {getIcon("chevronRight")}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection({
  title,
  testimonials,
}: {
  title: string;
  testimonials: RegionalConfig["testimonials"];
}) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {title}
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <blockquote className="mb-6 text-lg leading-relaxed text-ink/80 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-1/20 text-lg font-bold text-accent-1">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-ink/60">{testimonial.title}</p>
                  <p className="mt-1 text-xs text-accent-1">{testimonial.stat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Pricing Section
function PricingSection({ pricing }: { pricing: RegionalConfig["pricing"] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Investment
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Free Tier */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="mb-2 font-display text-xl font-semibold">{pricing.free.title}</h3>
            <p className="mb-6 text-3xl font-bold text-accent-1">{pricing.free.price}</p>
            <ul className="mb-8 space-y-3">
              {pricing.free.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                  <span className="mt-0.5 text-accent-1">{getIcon("checkCircle")}</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/book" variant="secondary" className="w-full">
              {pricing.free.cta}
            </Button>
          </div>

          {/* Pilot Tier */}
          <div className="relative rounded-2xl border-2 border-accent-1/30 bg-accent-1/[0.02] p-8">
            <div className="absolute -top-3 left-6 rounded-full bg-accent-1 px-3 py-1 text-xs font-semibold text-[#021111]">
              ★ Most Popular
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold">{pricing.pilot.title}</h3>
            <p className="mb-6 text-3xl font-bold text-accent-1">{pricing.pilot.price}</p>
            <ul className="mb-8 space-y-3">
              {pricing.pilot.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                  <span className="mt-0.5 text-accent-1">{getIcon("checkCircle")}</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button href="/book" className="w-full">
              {pricing.pilot.cta}
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-ink/50">{pricing.note}</p>
      </Container>
    </section>
  );
}

// FAQ Section
function FaqSection({ faq }: { faq: RegionalConfig["faq"] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          {faq.title}
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">{item.question}</span>
                <span
                  className={cn(
                    "transition-transform",
                    openIndex === i && "rotate-180"
                  )}
                >
                  {getIcon("chevronDown")}
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-white/10 px-6 pb-6 pt-4">
                  <p className="text-sm leading-relaxed text-ink/70">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Final CTA Section
function FinalCtaSection({ finalCta }: { finalCta: RegionalConfig["finalCta"] }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="neon-frame gradient-stroke relative overflow-hidden rounded-[1.75rem] px-6 py-12 text-center sm:px-10 sm:py-16">
          <GlowField intensity="strong" />
          <LightBeams count={8} className="opacity-35" />
          <div className="noise-overlay" />
          <div className="relative">
            <h2 className="mb-4 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              {finalCta.headline}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-ink/70">
              {finalCta.subheadline}
            </p>
            <Button href="/book" size="lg">
              {finalCta.cta}
            </Button>
            <p className="mt-6 text-sm text-ink/50">{finalCta.supporting}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Main Regional Page Component
export function RegionalPage({ config }: { config: RegionalConfig }) {
  return (
    <>
      {/* JSON-LD Schema */}
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: config.schema.name,
            description: config.schema.description,
            url: `https://thetwoapps.com/${config.slug}`,
            telephone: "+971-55-672-7803",
            email: "team@twoapps.com",
            areaServed: config.schema.areaServed,
            priceRange: config.schema.priceRange,
          },
        ]}
      />

      {/* Hero */}
      <RegionalHero hero={config.hero} />

      {/* Pain Points */}
      <PainPointsSection
        title={config.painPoints.title}
        items={config.painPoints.items}
      />

      {/* How It Works */}
      <HowItWorksSection
        title={config.howItWorksTitle}
        steps={config.howItWorks}
      />

      {/* Features */}
      <FeaturesSection
        title={config.featuresTitle}
        features={config.features}
      />

      {/* Industries */}
      <IndustrySection
        title={config.industriesTitle}
        industries={config.industries}
      />

      {/* Testimonials */}
      <TestimonialsSection
        title={config.testimonials.title}
        testimonials={config.testimonials.items}
      />

      {/* Pricing */}
      <PricingSection pricing={config.pricing} />

      {/* FAQ */}
      <FaqSection faq={config.faq} />

      {/* Final CTA */}
      <FinalCtaSection finalCta={config.finalCta} />
    </>
  );
}

// Export metadata builder
export { BuildMetadata };
