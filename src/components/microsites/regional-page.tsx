"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

import { FaqSection as CommonFaqSection } from "@/components/common/faq-section";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { useMotionDisabled } from "@/components/motion/use-motion-disabled";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { getContactPhone } from "@/lib/site-config";
import type {
  RegionalConfig,
  RegionalFeature,
  RegionalIndustry,
  RegionalPainPoint,
  RegionalTestimonial,
  RegionalProcessStep,
} from "./types";

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
    <section className="relative pt-8 sm:pt-10 lg:pt-12" data-bot-stop data-bot-fx="0.15" data-bot-say="Same AI sales rep, dialed in for your local market." data-bot-short="Tuned for your market">
      <Container>
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[22px] border border-ink/10 bg-white px-4 py-8 shadow-card sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-16 lg:py-16"
        >
          <div className="relative max-w-4xl">
            <div data-hero-rise>
              <Tag className="mb-5">{hero.eyebrow}</Tag>
            </div>
            <h1
              data-hero-rise
              className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {hero.headline}
            </h1>
            <p
              data-hero-rise
              className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg md:text-xl"
            >
              {hero.subheadline}
            </p>
            <div data-hero-rise className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/book" size="lg" className="w-full sm:w-auto">
                {hero.primaryCta}
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div data-hero-rise className="mt-10 border-t border-ink/10 pt-6">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">
              {hero.trustBar}
            </p>
            <div className="flex flex-wrap gap-3">
              {hero.trustMarks?.map((mark, i) => (
                <span key={i} className="rounded-full border border-ink/10 bg-cream px-3 py-1.5 text-xs text-blue">
                  {mark}
                </span>
              ))}
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
  items: RegionalPainPoint[];
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" data-bot-stop data-bot-fx="0.85" data-bot-say="Tired of leads slipping through timezone cracks?" data-bot-short="No more timezone leaks">
      <Container>
        <h2 className="mb-8 text-center font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item, i) => (
            <Card key={i} className="p-5 sm:p-6">
              <div className="mb-4 text-blue">{getIcon(item.icon)}</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:text-xl">{item.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink/60">{item.description}</p>
              <p className="text-xs font-medium text-blue">→ {item.stat}</p>
            </Card>
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
  steps: RegionalProcessStep[];
}) {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24" data-bot-stop data-bot-fx="0.5" data-bot-say="Books, qualifies, and follows up — before your coffee gets cold." data-bot-short="Books and qualifies leads">
      <Container>
        <h2 className="mb-10 text-center font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="mx-auto max-w-4xl">
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 before:absolute before:left-6 before:right-6 before:top-6 before:hidden before:h-px before:bg-ink/10 lg:before:block">
            {steps?.map((step, i) => (
              <div key={i} className="relative">
                <Card className="relative z-10 p-5 text-center sm:p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-cream text-lg font-bold text-blue">
                    {i + 1}
                  </div>
                  <h3 className="mb-1 font-display text-lg font-semibold text-ink sm:text-xl">{step.title}</h3>
                  <p className="mb-3 text-sm text-ink/60">{step.subtitle}</p>
                  <p className="text-xs text-blue">{step.duration}</p>
                </Card>
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
  features: RegionalFeature[];
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" data-bot-stop data-bot-fx="0.3" data-bot-say="Works in your language, your currency, your CRM." data-bot-short="Your language, currency, CRM">
      <Container>
        <h2 className="mb-8 text-center font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="p-5 sm:p-6">
              <div className="mb-4 text-blue">{getIcon(feature.icon)}</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:text-xl">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{feature.description}</p>
            </Card>
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
  industries: RegionalIndustry[];
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" data-bot-stop data-bot-fx="0.7" data-bot-say="One playbook, tuned for every vertical you sell into." data-bot-short="One playbook, every vertical">
      <Container>
        <h2 className="mb-8 text-center font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {industries.map((industry, i) => (
            <Card key={i} className="p-5 sm:p-6">
              <div className="mb-4 text-blue">{getIcon(industry.icon)}</div>
              <h3 className="mb-3 font-display text-lg font-semibold text-ink sm:text-xl lg:text-2xl">{industry.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink/60">{industry.description}</p>
              <Link
                href="/industries"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:underline"
              >
                Learn more {getIcon("chevronRight")}
              </Link>
            </Card>
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
  testimonials: RegionalTestimonial[];
}) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" data-bot-stop data-bot-fx="0.25" data-bot-say="Local teams are already hitting quota by Thursday." data-bot-short="Quota by Thursday">
      <Container>
        <h2 className="mb-8 text-center font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:mb-10 sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="p-6 sm:p-8">
              <blockquote className="mb-6 text-base italic leading-relaxed text-ink/80 sm:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-ink/60">{testimonial.title}</p>
                  <p className="mt-1 text-xs text-blue">{testimonial.stat}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

// Final CTA Section
function FinalCtaSection({ finalCta }: { finalCta: RegionalConfig["finalCta"] }) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" data-bot-stop data-bot-fx="0.8" data-bot-say="Ready to see it sell in your market?" data-bot-short="See it sell">
      <Container>
        <div className="relative overflow-hidden rounded-[22px] border border-ink/10 bg-white px-4 py-10 text-center shadow-card sm:px-8 sm:py-12 md:px-10 md:py-16">
          <div className="relative">
            <h2 className="mb-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl lg:text-5xl">
              {finalCta.headline}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-ink/70 sm:text-lg">
              {finalCta.subheadline}
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button href="/book" size="lg" className="w-full sm:w-auto">
                {finalCta.cta}
              </Button>
              <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                Contact form
              </Button>
            </div>
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
            telephone: getContactPhone() || "+971-55-672-7803",
            email: "team@twoapps.com",
            areaServed: config.schema.areaServed,
          },
        ]}
      />

      <ScrollBot />

      {/* Hero */}
      <RegionalHero hero={config.hero} />

      {config.painPoints && (
        <PainPointsSection
          title={config.painPoints.title}
          items={config.painPoints.items}
        />
      )}

      {config.howItWorks && (
        <HowItWorksSection
          title={config.howItWorksTitle || "How it works"}
          steps={config.howItWorks}
        />
      )}

      {config.features && (
        <FeaturesSection
          title={config.featuresTitle || config.features.title}
          features={config.features.items}
        />
      )}

      {config.industries && (
        <IndustrySection
          title={config.industriesTitle || config.industries.title}
          industries={config.industries.items}
        />
      )}

      {config.testimonials && (
        <TestimonialsSection
          title={config.testimonialsTitle || config.testimonials.title}
          testimonials={config.testimonials.items}
        />
      )}

      {config.faq && (
        <CommonFaqSection
          eyebrow="FAQ"
          title={config.faq.title}
          items={config.faq.items}
          align="center"
          emitSchema={false}
        />
      )}

      {/* Final CTA */}
      <FinalCtaSection finalCta={config.finalCta} />
    </>
  );
}

// Export metadata builder
export function BuildMetadata(config: RegionalConfig) {
  return {
    title: config.meta.title,
    description: config.meta.description,
    keywords: config.meta.keywords,
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      images: [config.meta.ogImage || "/og-default.png"],
    },
    alternates: {
      canonical: config.meta.canonicalPath || `/${config.slug}`,
    },
  };
}
