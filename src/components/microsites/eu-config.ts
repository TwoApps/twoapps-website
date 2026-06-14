import type { RegionalConfig } from "./types";

export const euConfig: RegionalConfig = {
  slug: "eu",
  meta: {
    title: "AI Workflow Automation Europe | GDPR-Compliant by Design | TwoApps",
    description:
      "Practical AI automation for European businesses — GDPR-aware, EU data residency, and DPO-ready documentation from day one. Book a compliance-first workflow review.",
    keywords: [
      "AI automation Europe",
      "GDPR compliant automation",
      "workflow automation EU",
      "data residency automation",
      "European AI solutions",
      "privacy-first automation"
    ],
    ogImage: "/og-default.png",
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
    eyebrow: "Built for Europe",
    headline: "AI automation that respects EU rules — and actually ships",
    subheadline:
      "European teams shouldn't have to choose between compliance and speed. We design GDPR-aware workflows with EU data residency, clear audit trails, and documentation your DPO will actually sign off on.",
    primaryCta: "Book a compliance call",
    secondaryCta: "See how it works",
    trustBar: "Trusted by European businesses",
    trustMarks: ["GDPR by design", "EU data residency", "DPO-ready docs"]
  },
  painPoints: {
    title: "The European challenge",
    items: [
      {
        icon: "shield",
        title: "GDPR isn't optional",
        description:
          "Regulators across the EU expect privacy, consent, deletion, and auditability from day one. We treat compliance as a product requirement, not a last-minute checkbox.",
        stat: "Compliant from day one"
      },
      {
        icon: "building",
        title: "Data must stay local",
        description:
          "Your customers and security teams want to know exactly where data lives. EU-hosted infrastructure is our default, with on-premise options when you need them.",
        stat: "EU data residency"
      },
      {
        icon: "building2",
        title: "Legacy systems don't disappear",
        description:
          "European enterprises run on layered, older systems. We integrate through APIs, RPA, and middleware — so you automate without ripping everything out.",
        stat: "Legacy-friendly integration"
      }
    ]
  },
  howItWorksTitle: "How we work",
  howItWorks: [
    {
      title: "Compliance review",
      subtitle:
        "A 45-minute call to map your GDPR requirements, data residency constraints, and the workflow with the clearest ROI.",
      duration: "45 min"
    },
    {
      title: "Design and build",
      subtitle:
        "We architect with privacy by design — DPIA-ready, ROPA-friendly, and built around the systems your team already uses.",
      duration: "4–6 weeks"
    },
    {
      title: "Deploy and hand over",
      subtitle:
        "Go live with DPO-ready documentation, deletion workflows, and monitoring. Your team stays in control.",
      duration: "2 weeks"
    }
  ],
  testimonialsTitle: "What European teams say",
  testimonials: {
    title: "What European teams say",
    items: [
      {
        quote:
          "GDPR was non-negotiable for us. TwoApps delivered privacy-by-design with EU data residency, clear deletion flows, and audit trails our DPO signed off without a single change.",
        name: "Klaus Müller",
        title: "CTO, IndustrieTech GmbH (Germany)",
        stat: "Full GDPR compliance"
      },
      {
        quote:
          "We needed automation that respected data sovereignty and didn't force us into a full stack rebuild. The compliance documentation alone saved us weeks of internal work.",
        name: "Sophie Dubois",
        title: "Operations Director, LogiTrans SA (France)",
        stat: "EU data residency · 50% efficiency gain"
      }
    ]
  },
  faq: {
    title: "Questions European businesses ask",
    items: [
      {
        question: "How do you handle GDPR?",
        answer:
          "GDPR is built in from day one — data minimization, lawful basis mapping, right-to-deletion, audit trails, and processing records. We can supply DPIAs and ROPA support on request."
      },
      {
        question: "Where is data stored?",
        answer:
          "EU-based infrastructure is our default. We can also deploy on-premise or in your chosen cloud region. Every engagement includes clear data processing agreements so you control where data lives."
      },
      {
        question: "Can you work with our legacy systems?",
        answer:
          "Yes. APIs, RPA, middleware, and custom connectors — we integrate with what you have. No rip-and-replace, and no forcing your team into tools they don't want."
      },
      {
        question: "What do we get at handover?",
        answer:
          "DPO-ready documentation, runbooks, monitoring, and a clear escalation path. We train your team and can stay on for ongoing tuning and support."
      }
    ]
  },
  finalCta: {
    headline: "Ready for automation your legal team will love?",
    subheadline:
      "Book a 45-minute compliance call. We'll map your first GDPR-aware workflow and show you how fast it can ship inside your rules.",
    cta: "Book a compliance call",
    supporting: "GDPR · EU residency · DPO-ready docs"
  },
  footer: {
    tagline:
      "GDPR-compliant AI workflow automation for European businesses. Privacy by design.",
    contactLabel: "Europe"
  },
  schema: {
    name: "TwoApps Europe",
    description: "GDPR-compliant AI workflow automation for European businesses",
    areaServed: ["European Union", "United Kingdom", "Switzerland", "Norway"]
  }
};
