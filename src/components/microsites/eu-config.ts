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
    headline: "AI Automation. GDPR-Compliant by Design.",
    subheadline:
      "European businesses can't compromise on data protection. TwoApps builds AI workflows with GDPR compliance built in from day one — not retrofitted. Whether it's data residency, right to deletion, or audit trails, your automation meets European standards.",
    primaryCta: "Request a compliance-ready proposal",
    secondaryCta: "View GDPR features",
    trustBar: "Trusted by European businesses",
    trustMarks: ["GDPR-compliant", "Data residency", "Privacy by design"]
  },
  painPoints: {
    title: "The European Automation Challenge",
    items: [
      {
        icon: "shield",
        title: "GDPR Compliance",
        description:
          "Strict data protection regulations. Non-compliance means fines. Automation must be compliant from day one.",
        stat: "Compliant by design"
      },
      {
        icon: "building",
        title: "Data Residency",
        description:
          "Data must stay in the EU or specific jurisdictions. You need automation that respects data sovereignty.",
        stat: "EU data residency"
      },
      {
        icon: "building",
        title: "Legacy Infrastructure",
        description:
          "European businesses often have complex legacy systems. Automation must integrate, not replace.",
        stat: "Legacy-friendly integration"
      },
      {
        icon: "zap",
        title: "ESG & Sustainability",
        description:
          "Sustainability reporting and ESG compliance requirements. Automation can help track and report on sustainability goals.",
        stat: "ESG-aligned automation"
      }
    ]
  },
  howItWorksTitle: "Privacy by Design",
  howItWorks: [
    {
      title: "Compliance Assessment",
      subtitle: "45-minute compliance review to understand your GDPR requirements and data residency needs.",
      duration: "45 min review"
    },
    {
      title: "Design & Build",
      subtitle: "We design and build your workflow with GDPR compliance built in from day one.",
      duration: "4-6 weeks delivery"
    },
    {
      title: "Deploy Pilot",
      subtitle: "Test with your team. Full compliance documentation and DPO-ready reports included.",
      duration: "2 weeks test"
    },
    {
      title: "Scale & Support",
      subtitle: "Expand to more workflows. Ongoing compliance partnership and audit support.",
      duration: "Ongoing partnership"
    }
  ],
  featuresTitle: "Built for European Standards",
  features: {
    title: "Built for European Standards",
    items: [
      {
        icon: "shieldCheck",
        title: "GDPR Compliant",
        description: "Privacy-by-design automation. Full documentation."
      },
      {
        icon: "building",
        title: "EU Data Residency",
        description: "EU-based hosting options. On-premise available."
      },
      {
        icon: "code",
        title: "Legacy Friendly",
        description: "Works with your existing systems. No rip-and-replace."
      },
      {
        icon: "zap",
        title: "ESG Aligned",
        description: "Automation for sustainability reporting."
      },
      {
        icon: "fileCheck",
        title: "Audit Ready",
        description: "Complete compliance docs and audit trails."
      },
      {
        icon: "users",
        title: "European References",
        description: "EU-based client references available."
      }
    ]
  },
  industriesTitle: "Solutions by Industry",
  industries: {
    title: "Solutions by Industry",
    items: [
      {
        icon: "building2",
        title: "Manufacturing",
        description:
          "Automate production scheduling, quality control, and compliance reporting. Integrate with existing MES and ERP systems. GDPR-compliant data handling."
      },
      {
        icon: "building",
        title: "Professional Services",
        description:
          "Streamline client onboarding, document management, and billing workflows. Client data protection built into every process."
      },
      {
        icon: "truck",
        title: "E-commerce",
        description:
          "Automate order processing, customer service, and inventory management. GDPR-compliant customer data handling."
      }
    ]
  },
  testimonialsTitle: "Trusted by European Businesses",
  testimonials: {
    title: "Trusted by European Businesses",
    items: [
      {
        quote: "GDPR compliance was our top priority. TwoApps built automation with privacy by design — data residency, right to deletion, audit trails, everything. Our DPO signed off without a single change request.",
        name: "Klaus Müller",
        title: "CTO, IndustrieTech GmbH (Germany)",
        stat: "Full GDPR compliance • €150K annual savings"
      },
      {
        quote: "We needed automation that respected data sovereignty. TwoApps delivered EU-hosted workflows that integrated with our legacy systems. The compliance documentation was comprehensive and clear.",
        name: "Sophie Dubois",
        title: "Operations Director, LogiTrans SA (France)",
        stat: "EU data residency • 50% efficiency gain"
      }
    ]
  },
  pricing: {
    free: {
      title: "Compliance Assessment",
      price: "€0",
      features: [
        "45-minute compliance review",
        "GDPR requirements assessment",
        "Data residency recommendations",
        "Automation opportunity identification",
        "Compliance roadmap proposal",
        "No obligation"
      ],
      cta: "Request Your Assessment"
    },
    pilot: {
      title: "GDPR-Compliant Automation",
      price: "€20,000 - €120,000",
      features: [
        "Complete workflow audit",
        "GDPR-compliant automation build",
        "EU data residency configuration",
        "Compliance documentation (DPIA, ROPA)",
        "Team training and handover",
        "60 days post-launch support",
        "Ongoing compliance partnership"
      ],
      cta: "Get Started",
      popular: true
    },
    note: "All prices in EUR. Data residency options available. Start with a free assessment — no commitment."
  },
  faq: {
    title: "Common Questions",
    items: [
      {
        question: "How do you handle GDPR?",
        answer:
          "GDPR compliance is built into our workflow design from day one. Right to deletion, data minimization, audit trails, processing records — we document and implement everything. We can provide DPIAs and compliance documentation."
      },
      {
        question: "Where is data stored?",
        answer:
          "We can configure data residency to meet your requirements — EU-based infrastructure, on-premise options if needed, and clear data processing agreements. You control where your data lives."
      },
      {
        question: "What about the right to explanation?",
        answer:
          "Our workflows include decision logging and can provide explanations for automated decisions where required. Human oversight is built in — you're never fully black-box."
      },
      {
        question: "Can you work with our legacy systems?",
        answer:
          "European businesses often have complex legacy infrastructure. We specialize in integration — APIs, RPA where needed, middleware. We connect to your existing systems, not force rip-and-replace."
      },
      {
        question: "Do you understand local business culture?",
        answer:
          "We work with European businesses regularly and respect the different approaches across countries. Whether it's German precision, Nordic sustainability focus, or French relationship-building, we adapt our delivery."
      }
    ]
  },
  finalCta: {
    headline: "Ready for GDPR-Compliant Automation?",
    subheadline:
      "Request your compliance-ready proposal. We'll show you how AI automation can work within your data protection requirements — no obligation, just clarity.",
    cta: "Request a compliance-ready proposal",
    supporting: "GDPR-compliant • EU data residency • Full documentation • Privacy by design"
  },
  footer: {
    tagline: "GDPR-compliant AI workflow automation for European businesses. Privacy by design.",
    contactLabel: "Europe"
  },
  schema: {
    name: "TwoApps Europe",
    description: "GDPR-compliant AI workflow automation for European businesses",
    areaServed: ["European Union", "United Kingdom", "Switzerland", "Norway"],
    priceRange: "€20,000 - €120,000"
  }
};
