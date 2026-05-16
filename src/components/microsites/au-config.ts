import type { RegionalConfig } from "./types";

export const auConfig: RegionalConfig = {
  slug: "au",
  meta: {
    title: "AI Workflow Automation Australia | Enterprise-Grade for Mid-Market | TwoApps",
    description:
      "Enterprise automation without the enterprise overhead. AI workflow automation for Australian businesses facing rising wage costs and efficiency demands.",
    keywords: [
      "AI automation Australia",
      "workflow automation AU",
      "enterprise automation mid-market",
      "Australian business automation",
      "rising wage costs automation"
    ],
    ogImage: "/og-default.svg",
    canonicalPath: "/au",
    alternates: [
      { hreflang: "en-au", href: "https://thetwoapps.com/au" },
      { hreflang: "en-sg", href: "https://thetwoapps.com/sg" },
      { hreflang: "en-nz", href: "https://thetwoapps.com/nz" },
      { hreflang: "en-ae", href: "https://thetwoapps.com/ae" },
      { hreflang: "en-eu", href: "https://thetwoapps.com/eu" },
      { hreflang: "x-default", href: "https://thetwoapps.com" }
    ]
  },
  hero: {
    eyebrow: "Australian Business • Enterprise-Ready",
    headline: "Enterprise automation. Mid-market price.",
    subheadline:
      "Australian mid-market needs the efficiency of the big end of town — without the implementation army. We ship production-grade AI workflows, pilot-first.",
    primaryCta: "Book a call",
    secondaryCta: "How it works",
    trustBar: "Trusted by Australian businesses",
    trustMarks: ["Production-grade", "ROI-focused", "Mid-market specialists"]
  },
  painPoints: {
    title: "What Australian leaders face",
    items: [
      {
        icon: "trendingUp",
        title: "Rising wage costs",
        description:
          "Wages climb every year. Manual work keeps getting more expensive.",
        stat: "Reduce labor costs"
      },
      {
        icon: "fileCheck",
        title: "Compliance load",
        description:
          "Regulators move fast. Automation needs to handle the complexity.",
        stat: "Compliance built-in"
      },
      {
        icon: "globe",
        title: "Global competition",
        description:
          "You're up against bigger budgets. Efficiency is your edge.",
        stat: "Compete globally"
      }
    ]
  },
  howItWorksTitle: "How we work",
  howItWorks: [
    {
      title: "Roadmap session",
      subtitle: "45 minutes. We baseline your costs and prioritize automations by ROI.",
      duration: "45 min"
    },
    {
      title: "Design and build",
      subtitle: "Production-grade workflows with enterprise monitoring.",
      duration: "4–6 weeks"
    },
    {
      title: "Deploy and scale",
      subtitle: "Live with your team. Hard ROI numbers for your board.",
      duration: "2 weeks"
    }
  ],
  testimonialsTitle: "Trusted by Australian Businesses",
  testimonials: {
    title: "Trusted by Australian Businesses",
    items: [
      {
        quote: "Enterprise-grade automation without enterprise resources. ROI was clear inside 60 days.",
        name: "David Chen",
        title: "Operations Manager, ResourceTech Australia",
        stat: "40% efficiency gain"
      },
      {
        quote: "Pilot-first matched our reality — budget-conscious, quality-focused. Five workflows automated since.",
        name: "Jennifer Walsh",
        title: "CFO, HealthFirst Medical Group",
        stat: "5 workflows automated"
      }
    ]
  },
  finalCta: {
    headline: "Enterprise automation without the overhead.",
    subheadline:
      "Book a call. We'll show you where automation delivers ROI in your business.",
    cta: "Book a call",
    supporting: "Production-grade · ROI-focused · Mid-market expertise"
  },
  footer: {
    tagline: "Enterprise-grade AI workflow automation for Australian mid-market businesses.",
    contactLabel: "Australia"
  },
  schema: {
    name: "TwoApps Australia",
    description: "Enterprise-grade AI workflow automation for Australian mid-market businesses",
    areaServed: ["Australia"]
  }
};
