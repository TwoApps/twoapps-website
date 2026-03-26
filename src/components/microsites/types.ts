export interface RegionalPainPoint {
  icon: string;
  title: string;
  description: string;
  stat: string;
}

export interface RegionalPricingTier {
  title: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface RegionalPricing {
  free: RegionalPricingTier;
  pilot: RegionalPricingTier;
  note: string;
}

export interface RegionalFeature {
  icon: string;
  title: string;
  description: string;
}

export interface RegionalIndustry {
  icon: string;
  title: string;
  description: string;
}

export interface RegionalTestimonial {
  quote: string;
  name: string;
  title: string;
  stat: string;
  avatar?: string;
}

export interface RegionalFaq {
  question: string;
  answer: string;
}

export interface RegionalProcessStep {
  title: string;
  subtitle: string;
  duration: string;
}

export interface RegionalConfig {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    canonicalPath?: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustBar: string;
    trustMarks?: string[];
  };
  painPoints: {
    title: string;
    items: RegionalPainPoint[];
  };
  howItWorksTitle?: string;
  howItWorks?: RegionalProcessStep[];
  featuresTitle?: string;
  features: {
    title: string;
    items: RegionalFeature[];
  };
  industriesTitle?: string;
  industries: {
    title: string;
    items: RegionalIndustry[];
  };
  testimonialsTitle?: string;
  testimonials: {
    title: string;
    items: RegionalTestimonial[];
  };
  pricing: RegionalPricing;
  faq: {
    title: string;
    items: RegionalFaq[];
  };
  finalCta: {
    headline: string;
    subheadline: string;
    cta: string;
    supporting: string;
  };
  footer: {
    tagline: string;
    contactLabel: string;
  };
  schema: {
    name: string;
    description: string;
    areaServed: string[];
    priceRange: string;
  };
}
