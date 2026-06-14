import type { Metadata } from "next";

import { aeConfig } from "@/components/microsites/ae-config";
import { JsonLd } from "@/components/json-ld";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { FaqSection } from "@/components/common/faq-section";
import { CtaBand } from "@/components/common/cta-band";
import { buildMetadata, organizationSchema, makeBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    ...aeConfig.meta,
    canonicalPath: aeConfig.meta.canonicalPath || "/ae",
  }),
  title: { absolute: aeConfig.meta.title },
  alternates: {
    canonical: aeConfig.meta.canonicalPath || "/ae",
    languages: {
      "en-ae": "/ae",
      "en-sg": "/sg",
      "en-au": "/au",
      "en-nz": "/nz",
      "en-eu": "/eu",
      "x-default": "/",
    },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  target: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
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
  globe: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
  zap: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  fileCheck: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
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
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  home: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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
};

function getIcon(name: string) {
  return iconMap[name] || null;
}

function HeroSection() {
  const { hero } = aeConfig;
  return (
    <section
      className="relative pt-8 sm:pt-10 lg:pt-12"
      data-bot-stop
      data-bot-fx="0.15"
      data-bot-say="Same AI delivery team, dialed in for your GCC market."
      data-bot-icons="spark,target"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[22px] border border-ink/10 bg-white px-4 py-8 shadow-[0_18px_70px_rgba(22,21,15,0.08)] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <div className="relative max-w-4xl">
            <Tag className="mb-5">{hero.eyebrow}</Tag>
            <h1 className="text-balance font-display text-3xl font-semibold leading-[0.95] text-ink sm:text-4xl md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg md:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/book" size="lg" className="w-full sm:w-auto">
                {hero.primaryCta}
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          {hero.trustMarks && hero.trustMarks.length > 0 && (
            <div className="mt-10 border-t border-ink/10 pt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/50">{hero.trustBar}</p>
              <div className="flex flex-wrap gap-2">
                {hero.trustMarks.map((mark) => (
                  <span
                    key={mark}
                    className="max-w-full break-words rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs text-ink/70"
                  >
                    {mark}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function PainPointsSection() {
  const { painPoints } = aeConfig;
  if (!painPoints) return null;
  return (
    <Section
      data-bot-stop
      data-bot-fx="0.85"
      data-bot-say="Tired of leads slipping through timezone cracks?"
      data-bot-icons="clock,inbox"
    >
      <Heading title={painPoints.title} subtitle="We hear these from GCC teams every week." align="center" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {painPoints.items.map((item, i) => (
          <Card key={i} className="flex flex-col p-5 sm:p-6">
            <div className="mb-4 text-blue">{getIcon(item.icon)}</div>
            <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:text-xl">{item.title}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
            <p className="text-xs font-semibold text-blue">{item.stat}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function HowItWorksSection() {
  const { howItWorks, howItWorksTitle } = aeConfig;
  if (!howItWorks || howItWorks.length === 0) return null;
  return (
    <Section
      id="how-it-works"
      data-bot-stop
      data-bot-fx="0.5"
      data-bot-say="Books, qualifies, and follows up — before your coffee gets cold."
      data-bot-icons="calendar,chat"
    >
      <Heading
        title={howItWorksTitle || "How it works"}
        subtitle="From first call to live workflow in as little as five weeks."
        align="center"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {howItWorks.map((step, i) => (
          <Card key={i} className="relative p-5 text-center sm:p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-cream text-lg font-bold text-blue">
              {i + 1}
            </div>
            <h3 className="mb-1 font-display text-lg font-semibold text-ink sm:text-xl">{step.title}</h3>
            <p className="mb-3 text-sm leading-relaxed text-ink/60">{step.subtitle}</p>
            <p className="text-xs font-semibold text-blue">{step.duration}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function FeaturesSection() {
  const { features } = aeConfig;
  if (!features) return null;
  return (
    <Section
      data-bot-stop
      data-bot-fx="0.3"
      data-bot-say="Works in your language, your currency, your CRM."
      data-bot-icons="target,check"
    >
      <Heading
        title={features.title}
        subtitle="Every capability is tuned for the regulations, languages, and business culture of the GCC."
        align="center"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
        {features.items.map((feature, i) => (
          <Card key={i} className="p-5 sm:p-6">
            <div className="mb-4 text-blue">{getIcon(feature.icon)}</div>
            <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:text-xl">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-ink/60">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function IndustriesSection() {
  const { industries } = aeConfig;
  if (!industries) return null;
  return (
    <Section
      data-bot-stop
      data-bot-fx="0.7"
      data-bot-say="One playbook, tuned for every vertical you sell into."
      data-bot-icons="box,check"
    >
      <Heading
        title={industries.title}
        subtitle="Automation that fits the workflows your industry actually runs on."
        align="center"
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
        {industries.items.map((industry, i) => (
          <Card key={i} className="p-5 sm:p-6">
            <div className="mb-4 text-blue">{getIcon(industry.icon)}</div>
            <h3 className="mb-2 font-display text-lg font-semibold text-ink sm:text-xl">{industry.title}</h3>
            <p className="text-sm leading-relaxed text-ink/60">{industry.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function TestimonialsSection() {
  const { testimonials } = aeConfig;
  if (!testimonials) return null;
  return (
    <Section
      data-bot-stop
      data-bot-fx="0.25"
      data-bot-say="Local teams are already hitting quota by Thursday."
      data-bot-icons="chart,check"
    >
      <Heading title={testimonials.title} subtitle="Real results from organizations in your market." align="center" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
        {testimonials.items.map((testimonial, i) => (
          <Card key={i} className="flex flex-col p-6 sm:p-8">
            <blockquote className="mb-6 flex-1 text-base italic leading-relaxed text-ink/80 sm:text-lg">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-lg font-bold text-cream">
                {testimonial.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-ink/60">{testimonial.title}</p>
                <p className="mt-1 text-xs font-semibold text-blue">{testimonial.stat}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default function UAEPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "UAE & GCC", path: "/ae" }
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: aeConfig.schema.name,
            description: aeConfig.schema.description,
            url: `https://thetwoapps.com/${aeConfig.slug}`,
            telephone: "+971-55-672-7803",
            email: "team@twoapps.com",
            areaServed: aeConfig.schema.areaServed,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "AE"
            }
          }
        ]}
      />

      <ScrollBot />

      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <FaqSection
        eyebrow="FAQ"
        title={aeConfig.faq?.title || "Frequently asked questions"}
        items={aeConfig.faq?.items || []}
      />
      <CtaBand
        title={aeConfig.finalCta.headline}
        copy={aeConfig.finalCta.subheadline}
        primaryHref="/book"
        primaryLabel={aeConfig.finalCta.cta}
        secondaryHref="/pricing"
        secondaryLabel="See pricing"
      />
    </>
  );
}
