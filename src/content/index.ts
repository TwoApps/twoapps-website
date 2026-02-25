import type { CaseStudySummary, Industry, RegionPage, Service } from "@/content/types";

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/agency-partners", label: "Agency Partners" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const audienceTracks = {
  business: {
    key: "business" as const,
    title: "For Businesses",
    description:
      "Automate operations, ship internal tools, and deploy AI workflows without waiting to build an in-house AI engineering team.",
    href: "/services",
    bullets: ["Ops automation", "AI copilots", "Internal dashboards", "Compliance workflows"]
  },
  agency: {
    key: "agency" as const,
    title: "For Agencies / Software Houses",
    description:
      "White-label AI delivery and Claude-native implementation support so your team can sell and ship AI projects faster.",
    href: "/agency-partners",
    bullets: ["White-label delivery", "Claude Code setup", "AI feature implementation", "Delivery acceleration"]
  }
};

export const services: Service[] = [
  {
    slug: "agentic-ai-automation",
    title: "Agentic AI Automation",
    tagline: "Automate operational workflows with multi-step AI systems that actually execute work.",
    summary:
      "We design and implement agentic workflows for support, operations, finance ops, reporting, onboarding, and internal back-office processes.",
    audiences: ["business", "agency"],
    benefits: [
      "Reduce manual operational workload and response times",
      "Standardize execution quality across recurring processes",
      "Add approvals, escalation, and human-in-the-loop checkpoints",
      "Integrate AI workflows with your existing CRM, ERP, and internal tools"
    ],
    deliverables: [
      "Workflow discovery and automation design map",
      "Agent orchestration logic and prompt/runtime design",
      "Integrations with APIs, databases, and internal systems",
      "Monitoring, alerting, and failure-handling patterns",
      "Handover documentation and improvement backlog"
    ],
    process: [
      "Process audit and bottleneck mapping",
      "Pilot workflow implementation with measurable outcomes",
      "Production hardening and monitoring",
      "Expansion into adjacent workflows"
    ],
    faq: [
      {
        question: "What kinds of workflows are a good fit for agentic automation?",
        answer:
          "High-volume, rules-aware, repetitive workflows with clear outputs are the best fit. Examples include ticket triage, onboarding checks, reporting assembly, and internal ops routing."
      },
      {
        question: "Do you replace staff?",
        answer:
          "The goal is typically capacity expansion and speed, not replacement. We design systems that handle repeatable work while humans manage exceptions and decision-heavy tasks."
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes. We usually integrate with your existing stack first so the automation fits current operations instead of forcing a new platform rollout."
      }
    ],
    seo: {
      title: "Agentic AI Automation Services in Dubai & UAE",
      description:
        "Two Apps builds agentic AI automation systems for UAE/GCC businesses and global agencies: workflow automation, internal ops AI, and production-ready orchestration.",
      keywords: [
        "agentic ai automation dubai",
        "ai workflow automation uae",
        "agentic automation agency gcc",
        "operations automation ai"
      ],
      canonicalPath: "/services/agentic-ai-automation",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "claude-code-automation",
    title: "Claude / Claude Code Automation",
    tagline: "Make Claude and Claude Code part of your delivery system, not just a chat tab.",
    summary:
      "We set up Claude-first development and operations workflows: coding automation, QA loops, task execution flows, and repeatable team standards.",
    audiences: ["business", "agency"],
    benefits: [
      "Increase engineering throughput with structured Claude workflows",
      "Reduce inconsistency in AI-assisted delivery across teams",
      "Turn repeated dev/ops tasks into automated playbooks",
      "Enable faster prototyping and internal tooling delivery"
    ],
    deliverables: [
      "Claude/Claude Code workflow architecture",
      "Team playbooks, prompting standards, and operating patterns",
      "Automation scripts and integrations around coding tasks",
      "Risk controls for review, validation, and approvals",
      "Training and onboarding sessions for the team"
    ],
    process: [
      "Workflow and team maturity assessment",
      "Pilot setup on one delivery stream",
      "Playbook standardization and rollout",
      "Optimization based on review metrics and velocity"
    ],
    faq: [
      {
        question: "Is this only for software teams?",
        answer:
          "No. Claude-based automations can support operations, support teams, analysts, and internal business functions. We scope based on actual repetitive work."
      },
      {
        question: "Can you work with our existing engineering standards?",
        answer:
          "Yes. We adapt to your review process, branching, testing expectations, and compliance requirements instead of forcing a generic AI workflow."
      },
      {
        question: "What if our team is new to Claude Code?",
        answer:
          "That is common. We can structure a ramp-up with a pilot and internal playbooks so the adoption is practical and measurable."
      }
    ],
    seo: {
      title: "Claude Code Automation & Implementation Partner",
      description:
        "Two Apps helps companies and software houses implement Claude and Claude Code automation workflows for faster AI-native delivery and repeatable engineering operations.",
      keywords: [
        "claude code automation",
        "claude code consulting",
        "claude workflow implementation",
        "ai coding workflow setup"
      ],
      canonicalPath: "/services/claude-code-automation",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "white-label-ai-delivery",
    title: "White-Label AI Delivery for Software Houses",
    tagline: "Become the AI-capable agency your clients expect without building an in-house AI team first.",
    summary:
      "Two Apps works as a white-label implementation partner for software houses and agencies that want to sell AI automation and AI-enabled product work.",
    audiences: ["agency"],
    benefits: [
      "Expand your services without delaying on hiring",
      "Win AI scopes with implementation backing",
      "Keep client relationships while we operate behind the scenes",
      "Add delivery capacity for AI-heavy backlogs and pilots"
    ],
    deliverables: [
      "Discovery support and solution framing for your client opportunities",
      "White-label implementation of AI workflows and features",
      "Technical delivery documentation for your team handoff",
      "Optional ongoing support and optimization retainer",
      "Internal enablement for your agency team"
    ],
    process: [
      "Partner alignment and white-label operating model",
      "Pilot client project execution",
      "Delivery playbook and communication cadence",
      "Retainer or capacity model for ongoing work"
    ],
    faq: [
      {
        question: "Will you talk directly to our clients?",
        answer:
          "We can work either white-label behind your team or in a co-delivery model. The communication structure is agreed upfront per project."
      },
      {
        question: "Which agencies are a good fit?",
        answer:
          "Software houses, product studios, and digital agencies that already ship web/mobile platforms and want AI automation or AI features as a credible upsell."
      },
      {
        question: "Do you support agencies outside the Middle East?",
        answer:
          "Yes. We specifically support partners in Eastern Europe, South America, Australia, and New Zealand in addition to UAE/GCC collaborations."
      }
    ],
    seo: {
      title: "White-Label AI Delivery Partner for Software Houses",
      description:
        "Dubai-based white-label AI delivery partner for software houses and agencies. Two Apps helps teams ship AI automations, Claude workflows, and AI-enabled client solutions.",
      keywords: [
        "white label ai partner agency",
        "ai delivery partner software house",
        "white label agentic ai implementation",
        "agency ai implementation partner"
      ],
      canonicalPath: "/services/white-label-ai-delivery",
      ogImage: "/og-default.svg"
    }
  }
];

export const industries: Industry[] = [
  {
    slug: "fintech-aml-kyc-automation",
    title: "Fintech / AML / KYC Automation",
    summary:
      "Automation and AI-assisted workflow design for compliance-heavy processes where speed, consistency, and auditability matter.",
    painPoints: [
      "Manual review queues and repetitive document handling",
      "Inconsistent triage and case routing across teams",
      "Slow onboarding and verification turnaround",
      "Operational bottlenecks between compliance and product teams"
    ],
    solutions: [
      "AI-assisted document classification and workflow routing",
      "Rules + AI hybrid decision support with human approval gates",
      "Analyst copilots for case summaries and investigation prep",
      "Internal dashboards for queue visibility and escalation handling"
    ],
    exampleAutomations: [
      "KYC intake triage and document completeness checks",
      "AML alert enrichment and case summary drafting",
      "Ops reporting automation for compliance operations",
      "Escalation routing and SLA monitoring workflows"
    ],
    faq: [
      {
        question: "Can AI be used in compliance workflows safely?",
        answer:
          "Yes, when designed with strict boundaries. We use human-in-the-loop checkpoints, audit trails, and clear decision ownership so AI assists rather than silently decides."
      },
      {
        question: "Do you replace our compliance systems?",
        answer:
          "Usually no. We integrate with existing systems and improve workflow execution around them, which reduces rollout risk and shortens time-to-value."
      },
      {
        question: "Is this only for large fintech companies?",
        answer:
          "No. Smaller fintechs and regulated startups often see the biggest gains because automation reduces pressure on lean teams during growth."
      }
    ],
    seo: {
      title: "Fintech AML KYC Workflow Automation Services",
      description:
        "Two Apps builds AI-assisted AML/KYC and compliance operations workflows for fintech teams, improving speed, consistency, and operational visibility.",
      keywords: [
        "aml workflow automation",
        "kyc automation ai",
        "fintech compliance automation",
        "aml kyc process automation"
      ],
      canonicalPath: "/industries/fintech-aml-kyc-automation",
      ogImage: "/og-default.svg"
    }
  }
];

export const regions: RegionPage[] = [
  {
    slug: "dubai-uae-gcc-ai-automation",
    title: "AI Automation Partner in Dubai, UAE & GCC",
    summary:
      "Two Apps is a Dubai-based AI automation and product engineering partner helping UAE/GCC businesses automate operations and ship AI-enabled systems.",
    marketFocus: [
      "UAE/GCC SMEs with operational bottlenecks",
      "Founders and COOs needing practical automation, not AI demos",
      "Product teams looking to add AI-enabled workflows and internal tools"
    ],
    whyTwoApps: [
      "Dubai-based execution with global delivery capability",
      "Claude/Claude Code automation depth combined with product engineering",
      "Practical implementation across web/mobile/backend/internal tooling",
      "Strong fit for operations-heavy and compliance-aware workflows"
    ],
    engagementModel: [
      "Automation audit and prioritization sprint",
      "30-day pilot for one workflow or internal tool",
      "Production rollout and ongoing optimization retainer"
    ],
    faq: [
      {
        question: "Do you work on-site in Dubai?",
        answer:
          "We can support remote-first delivery and on-site sessions when needed for workshops, discovery, or stakeholder alignment in Dubai/UAE."
      },
      {
        question: "Can you build both the automation and the product interface?",
        answer:
          "Yes. We can implement the workflow engine and the internal dashboard/admin interface required to operate it."
      },
      {
        question: "What size companies do you support?",
        answer:
          "We support startups, SMEs, and mid-market teams. The best fit is a team with recurring operational work and a clear owner for the process."
      }
    ],
    seo: {
      title: "Dubai UAE GCC AI Automation Agency | Two Apps",
      description:
        "Dubai-based agentic AI automation and product engineering partner for UAE/GCC companies. Build internal AI workflows, automations, and AI-enabled systems with Two Apps.",
      keywords: [
        "dubai ai automation agency",
        "uae ai automation company",
        "gcc agentic ai partner",
        "dubai ai workflow automation"
      ],
      canonicalPath: "/regions/dubai-uae-gcc-ai-automation",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "white-label-ai-partner-software-houses",
    title: "White-Label AI Partner for Software Houses (Global)",
    summary:
      "Two Apps partners with software houses and agencies as a white-label AI implementation team, with a strong fit for agencies in Eastern Europe, South America, Australia, and New Zealand.",
    marketFocus: [
      "Software houses adding AI services to existing web/mobile delivery",
      "Agencies needing an implementation partner for AI automation projects",
      "Teams that want AI capability without immediate in-house hiring"
    ],
    whyTwoApps: [
      "Specialized Claude-native and agentic workflow execution",
      "Cost-efficient senior delivery from Dubai without commodity outsourcing positioning",
      "Flexible white-label or co-delivery collaboration model",
      "Able to build AI automation plus product/UI surfaces around it"
    ],
    engagementModel: [
      "Capability sprint for your agency team",
      "White-label pilot on one client project",
      "Monthly delivery capacity / retainer model",
      "Escalation support for AI-heavy backlog items"
    ],
    faq: [
      {
        question: "Can you support agencies across time zones?",
        answer:
          "Yes. Dubai is a useful overlap point across Europe, the Middle East, Africa, Australia/New Zealand, and parts of South America depending on project cadence."
      },
      {
        question: "Do you sign NDAs and work white-label?",
        answer:
          "Yes. White-label collaboration and confidentiality are core to this service model."
      },
      {
        question: "What projects do agencies typically bring to you?",
        answer:
          "AI automation pilots, AI features inside existing apps, internal tools for client ops teams, and Claude/agentic execution workflows their team does not yet have bandwidth to build."
      }
    ],
    seo: {
      title: "White-Label AI Partner for Software Houses | Two Apps",
      description:
        "Two Apps is a Dubai-based white-label AI implementation partner for software houses and agencies in Eastern Europe, South America, Australia, and New Zealand.",
      keywords: [
        "white label ai partner software houses",
        "agency ai implementation partner",
        "white label ai delivery eastern europe agency",
        "ai partner for software houses australia new zealand"
      ],
      canonicalPath: "/regions/white-label-ai-partner-software-houses",
      ogImage: "/og-default.svg"
    }
  }
];

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "claude-automation-ops-acceleration",
    title: "Claude-Centric Automation Workflows for Fast Execution",
    context: "AI operations and engineering workflow optimization",
    problem:
      "Teams using AI ad hoc often hit inconsistency, duplicated effort, and review overhead because there is no shared workflow for how AI-generated work is created and validated.",
    approach:
      "Designed repeatable Claude/Claude Code-centric workflows with task structure, review gates, and operational patterns that turn one-off usage into a reliable delivery system.",
    outcomes: [
      "Faster execution on repeated implementation tasks",
      "Improved consistency in outputs and review expectations",
      "Clear handoff patterns for scaling AI-assisted delivery"
    ],
    tech: ["Claude", "Claude Code", "Automation playbooks", "Workflow design"],
    disclaimer: "Representative summary based on founder expertise and delivery experience."
  },
  {
    slug: "aml-kyc-workflow-automation-patterns",
    title: "Compliance Workflow Automation Patterns (AML/KYC)",
    context: "Fintech / compliance operations process design",
    problem:
      "Compliance-heavy teams face queue pressure, repetitive manual checks, and operational delays when process steps are fragmented across tools and human handoffs.",
    approach:
      "Mapped workflow stages, introduced automation opportunities with human approval gates, and structured AI-assisted steps for summaries, triage, and process support.",
    outcomes: [
      "Reduced repetitive handling in compliance operations",
      "Better workflow visibility and escalation paths",
      "Safer AI use with human-in-the-loop control points"
    ],
    tech: ["Workflow automation", "Internal tools", "AI-assisted processing", "Ops dashboards"],
    disclaimer: "Representative summary based on domain and implementation experience."
  },
  {
    slug: "ai-enabled-product-and-dashboard-delivery",
    title: "AI-Enabled Product & Internal Dashboard Delivery",
    context: "Custom product engineering and internal tooling",
    problem:
      "Businesses often need both the automation backend and a usable interface for teams to operate, approve, and monitor workflows, but vendors only deliver one side.",
    approach:
      "Combined product engineering (web/mobile/admin) with automation workflows so teams can run AI-enabled operations with a clear interface and control layer.",
    outcomes: [
      "End-to-end delivery from workflow logic to operator UI",
      "Faster time-to-value for internal AI systems",
      "Less coordination overhead between multiple vendors"
    ],
    tech: ["Flutter", "AWS", "Web apps", "Dashboards", "API integrations"],
    disclaimer: "Representative summary synthesized from founder CV and project experience."
  }
];

export const processSteps = [
  {
    title: "Audit",
    copy: "Map the workflow, bottlenecks, approvals, and integration points. Prioritize what should be automated first."
  },
  {
    title: "Pilot",
    copy: "Implement one production-relevant workflow with measurable outcomes and clear ownership."
  },
  {
    title: "Harden",
    copy: "Add monitoring, guardrails, fallback behavior, and operator visibility for stable operation."
  },
  {
    title: "Expand",
    copy: "Scale into adjacent workflows or white-label client delivery streams without rebuilding from scratch."
  }
] as const;

export const featuredIndustries = [
  "Fintech / AML / KYC",
  "Real Estate Operations",
  "Logistics and Supply Chain",
  "Recruitment / Staffing",
  "E-commerce Ops",
  "Support-heavy Service Businesses"
] as const;

export const globalPartnerRegions = [
  "Eastern Europe",
  "South America",
  "Australia",
  "New Zealand"
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug) ?? null;
}

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug) ?? null;
}

export function getRegionBySlug(slug: string) {
  return regions.find((region) => region.slug === slug) ?? null;
}
