import type { RegionalConfig } from "./types";

export const sgConfig: RegionalConfig = {
  slug: "sg",
  meta: {
    title: "AI Workflow Automation Singapore | MAS & PDPA Compliant | TwoApps",
    description:
      "Cut costs. Stay compliant. Scale faster. AI workflow automation for Singapore businesses facing high labor costs and regulatory requirements",
    keywords: [
      "AI automation Singapore",
      "workflow automation SG",
      "MAS compliance automation",
      "PDPA compliant",
      "Singapore business automation"
    ],
    ogImage: "/og-default.svg",
    canonicalPath: "/sg",
    alternates: [
      { hreflang: "en-sg", href: "https://thetwoapps.com/sg" },
      { hreflang: "en-au", href: "https://thetwoapps.com/au" },
      { hreflang: "en-nz", href: "https://thetwoapps.com/nz" },
      { hreflang: "en-ae", href: "https://thetwoapps.com/ae" },
      { hreflang: "en-eu", href: "https://thetwoapps.com/eu" },
      { hreflang: "x-default", href: "https://thetwoapps.com" }
    ]
  },
  hero: {
    eyebrow: "Singapore Business • Asia-Ready",
    headline: "Cut costs. Stay compliant. Scale faster.",
    subheadline:
      "Singapore businesses pay premium prices for manual work. We build MAS- and PDPA-ready AI workflows so your team does more without hiring.",
    primaryCta: "Book a call",
    secondaryCta: "How it works",
    trustBar: "Trusted by Singapore teams",
    trustMarks: ["MAS-aware automation", "PDPA-ready data handling", "Singapore references", "Pilot in 3–5 weeks"],
    mobileTrustMarks: ["MAS-aware automation built in", "PDPA-ready data handling", "Singapore client references", "Pilot ships in 3–5 weeks"]
  },
  painPoints: {
    title: "Why Singapore teams automate",
    items: [
      {
        icon: "dollarSign",
        title: "High labor costs",
        description:
          "Singapore wages climb every year. Manual work is your most expensive overhead.",
        stat: "Reduce operational costs"
      },
      {
        icon: "shieldCheck",
        title: "Regulatory load",
        description:
          "MAS and PDPA leave no room for error. We build compliance into every step.",
        stat: "Compliance built-in"
      },
      {
        icon: "users",
        title: "Talent shortage",
        description:
          "Hiring is slow and pricey. Automation lets your team scale without it.",
        stat: "Do more with your team"
      }
    ]
  },
  howItWorksTitle: "How we work",
  howItWorks: [
    {
      title: "Free audit",
      subtitle: "30-minute call. We map the workflows costing you the most.",
      duration: "30 min"
    },
    {
      title: "Design and build",
      subtitle: "We build your pilot with compliance built in.",
      duration: "3–5 weeks"
    },
    {
      title: "Deploy and refine",
      subtitle: "Live with your team. We train, monitor, and tune.",
      duration: "2 weeks"
    }
  ],
  testimonialsTitle: "What clients say",
  testimonials: {
    title: "What clients say",
    items: [
      {
        quote: "MAS sign-off was our biggest worry. TwoApps shipped automation with audit trails baked in — our compliance team approved it unchanged.",
        name: "Sarah Tan",
        title: "Operations Director, FinServe Pte Ltd",
        stat: "MAS-ready"
      },
      {
        quote: "We couldn't hire fast enough. TwoApps automated onboarding and support. Same team, 3× the volume.",
        name: "Michael Lim",
        title: "CTO, LogiTech Solutions",
        stat: "3× throughput"
      }
    ]
  },
  finalCta: {
    headline: "Cut costs. Stay compliant.",
    subheadline:
      "Book a 30-minute call. We'll show you where automation pays off first.",
    cta: "Book a call",
    supporting: "MAS-ready · PDPA-ready · Singapore references"
  },
  footer: {
    tagline: "AI workflow automation for Singapore businesses. MAS and PDPA compliant.",
    contactLabel: "Singapore"
  },
  schema: {
    name: "TwoApps Singapore",
    description: "AI workflow automation for Singapore businesses",
    areaServed: ["Singapore"]
  }
};
