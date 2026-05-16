import type { RegionalConfig } from "./types";

export const euConfig: RegionalConfig = {
  slug: "eu",
  meta: {
    title: "AI Workflow Automation Europe | GDPR-Compliant by Design | TwoApps",
    description:
      "AI automation. GDPR-compliant by design. European businesses need automation that respects data protection. Request a compliance-ready proposal today.",
    keywords: [
      "AI automation Europe",
      "GDPR compliant automation",
      "workflow automation EU",
      "data residency automation",
      "European AI solutions",
      "privacy-first automation"
    ],
    ogImage: "/og-default.svg",
    canonicalPath: "/eu",
    alternates: [
      { hreflang: "en-eu", href: "https://thetwoapps.com/eu" },
      { hreflang: "en-sg", href: "https://thetwoapps.com/sg" },
      { hreflang: "en-au", href: "https://thetwoapps.com/au" },
      { hreflang: "en-nz", href: "https://thetwoapps.com/nz" },
      { hreflang: "en-ae", href: "https://thetwoapps.com/ae" },
      { hreflang: "x-default", href: "https://thetwoapps.com" }
    ]
  },
  hero: {
    eyebrow: "Privacy-First • European-Ready",
    headline: "AI automation. GDPR by design.",
    subheadline:
      "European businesses can't compromise on data protection. We build AI workflows with GDPR, data residency, and audit trails baked in from day one.",
    primaryCta: "Book a call",
    secondaryCta: "How it works",
    trustBar: "Trusted by European businesses",
    trustMarks: ["GDPR-compliant", "Data residency", "Privacy by design"]
  },
  painPoints: {
    title: "The European challenge",
    items: [
      {
        icon: "shield",
        title: "GDPR by default",
        description:
          "Non-compliance means fines. Automation has to be compliant from line one.",
        stat: "Compliant by design"
      },
      {
        icon: "building",
        title: "Data residency",
        description:
          "Data must stay in EU jurisdictions. We respect your sovereignty.",
        stat: "EU data residency"
      },
      {
        icon: "building",
        title: "Legacy infrastructure",
        description:
          "European systems are layered and old. Automation has to integrate, not replace.",
        stat: "Legacy-friendly integration"
      }
    ]
  },
  howItWorksTitle: "How we work",
  howItWorks: [
    {
      title: "Compliance review",
      subtitle: "45-minute call. We map GDPR requirements and data residency needs.",
      duration: "45 min"
    },
    {
      title: "Design and build",
      subtitle: "Workflows with GDPR built in — DPIA and ROPA ready.",
      duration: "4–6 weeks"
    },
    {
      title: "Deploy and refine",
      subtitle: "Live with your team. DPO-ready documentation included.",
      duration: "2 weeks"
    }
  ],
  testimonialsTitle: "Trusted by European Businesses",
  testimonials: {
    title: "Trusted by European Businesses",
    items: [
      {
        quote: "GDPR was non-negotiable. TwoApps delivered privacy-by-design — data residency, deletion, audit trails. Our DPO signed off unchanged.",
        name: "Klaus Müller",
        title: "CTO, IndustrieTech GmbH (Germany)",
        stat: "Full GDPR compliance"
      },
      {
        quote: "We needed EU-hosted automation that respected sovereignty. The compliance docs were comprehensive and clear.",
        name: "Sophie Dubois",
        title: "Operations Director, LogiTrans SA (France)",
        stat: "EU data residency · 50% efficiency gain"
      }
    ]
  },
  faq: {
    title: "Common Questions",
    items: [
      {
        question: "How do you handle GDPR?",
        answer:
          "GDPR is built in from day one — right to deletion, data minimization, audit trails, processing records. DPIAs available on request."
      },
      {
        question: "Where is data stored?",
        answer:
          "EU-based infrastructure by default. On-premise available. Clear data processing agreements — you control where data lives."
      },
      {
        question: "Can you work with our legacy systems?",
        answer:
          "Yes. APIs, RPA, middleware — we integrate with what you have, no rip-and-replace."
      }
    ]
  },
  finalCta: {
    headline: "GDPR-compliant automation.",
    subheadline:
      "Book a call. We'll show you how automation works inside your data protection rules.",
    cta: "Book a call",
    supporting: "GDPR · EU residency · Privacy by design"
  },
  footer: {
    tagline: "GDPR-compliant AI workflow automation for European businesses. Privacy by design.",
    contactLabel: "Europe"
  },
  schema: {
    name: "TwoApps Europe",
    description: "GDPR-compliant AI workflow automation for European businesses",
    areaServed: ["European Union", "United Kingdom", "Switzerland", "Norway"]
  }
};
