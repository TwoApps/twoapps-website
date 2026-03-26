export interface RegionalPainPoint {
  icon: string;
  title: string;
  description: string;
  stat: string;
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
}

export interface RegionalFaq {
  question: string;
  answer: string;
}

export interface RegionalPricing {
  free: {
    title: string;
    price: string;
    features: string[];
  };
  pilot: {
    title: string;
    price: string;
    features: string[];
  };
  note: string;
}

export interface RegionalProcessStep {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
}

export interface RegionalConfig {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustBar: string;
  };
  painPoints: {
    title: string;
    items: RegionalPainPoint[];
  };
  process: {
    title: string;
    steps: RegionalProcessStep[];
  };
  features: {
    title: string;
    items: RegionalFeature[];
  };
  industries: {
    title: string;
    items: RegionalIndustry[];
  };
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
