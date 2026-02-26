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
      "Cut manual work, speed up operations, and launch useful AI workflows without hiring a full AI team first.",
    href: "/services",
    bullets: ["Save time", "Reduce manual tasks", "Internal tools", "Clear approvals"]
  },
  agency: {
    key: "agency" as const,
    title: "For Agencies / Software Houses",
    description:
      "Offer AI projects with confidence using TwoApps as your white-label implementation partner, while you keep the client relationship.",
    href: "/agency-partners",
    bullets: ["White-label delivery", "AI project support", "Claude Code setup", "Extra delivery capacity"]
  }
};

export const services: Service[] = [
  {
    slug: "agentic-ai-automation",
    title: "Agentic AI Automation",
    tagline: "Turn repetitive work into AI-powered workflows with clear checks, approvals, and human oversight.",
    summary:
      "We build practical AI workflows for support, operations, finance ops, onboarding, reporting, and back-office work so your team spends less time on repeat tasks.",
    audiences: ["business", "agency"],
    benefits: [
      "Reduce manual work and turnaround time on repeat tasks",
      "Keep output quality more consistent across the team",
      "Add approval steps and exception handling where people need to stay involved",
      "Connect workflows to your CRM, ERP, email, or internal tools"
    ],
    deliverables: [
      "Workflow discovery and priority map",
      "AI workflow design with guardrails and decision points",
      "Integrations with your tools, APIs, and data sources",
      "Monitoring and failure-handling setup",
      "Handover notes and next-step improvement backlog"
    ],
    process: [
      "Review the current process and identify bottlenecks",
      "Build one pilot workflow with a measurable goal",
      "Stabilize the workflow with monitoring and fallback paths",
      "Expand into the next high-value process"
    ],
    faq: [
      {
        question: "What kinds of workflows are a good fit for AI automation?",
        answer:
          "The best fit is repeatable work with clear inputs and outputs. Examples include ticket triage, onboarding checks, report prep, routing, and internal follow-up workflows."
      },
      {
        question: "Does this replace my team?",
        answer:
          "Usually no. The goal is to remove repetitive work, reduce delays, and free people to focus on exceptions, decisions, and customer-facing tasks."
      },
      {
        question: "Can this work with our current tools?",
        answer:
          "Yes. We usually build around your current systems first so the workflow fits how your team already works."
      }
    ],
    seo: {
      title: "AI Workflow Automation Services | TwoApps",
      description:
        "TwoApps is a UAE-based AI automation partner serving UAE/GCC, the Middle East, Eastern Europe, South America, Australia, and New Zealand. We build practical AI workflows for business teams and agencies.",
      keywords: [
        "ai workflow automation uae",
        "agentic ai automation middle east",
        "operations automation ai gcc",
        "ai workflow implementation partner"
      ],
      canonicalPath: "/services/agentic-ai-automation",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "claude-code-automation",
    title: "Claude / Claude Code Automation",
    tagline: "Turn Claude and Claude Code into repeatable team workflows instead of one-off prompts.",
    summary:
      "We help teams use Claude and Claude Code in a structured way for coding, QA, reviews, and delivery tasks so results are faster and more consistent.",
    audiences: ["business", "agency"],
    benefits: [
      "Speed up engineering and delivery work with repeatable AI-assisted steps",
      "Reduce inconsistent outputs across people and projects",
      "Turn repeat tasks into playbooks your team can actually follow",
      "Improve quality with review checkpoints and clear rules"
    ],
    deliverables: [
      "Claude / Claude Code workflow setup",
      "Team playbooks and prompting standards",
      "Automation scripts around common coding and QA tasks",
      "Review and risk-control checkpoints",
      "Training and onboarding for the team"
    ],
    process: [
      "Assess how your team currently uses AI tools",
      "Run a pilot on one delivery stream",
      "Document playbooks and rollout rules",
      "Improve the workflow using feedback and metrics"
    ],
    faq: [
      {
        question: "Is this only for software teams?",
        answer:
          "No. We can also use Claude-based workflows for operations, support, analysts, and internal teams with repeatable knowledge work."
      },
      {
        question: "Do we need to change our engineering standards?",
        answer:
          "No. We fit the workflow into your review process, testing standards, and compliance requirements."
      },
      {
        question: "What if my team is new to Claude Code?",
        answer:
          "That is normal. We start small with a pilot, then document the workflow so your team can use it safely and consistently."
      }
    ],
    seo: {
      title: "Claude Code Automation Partner | TwoApps",
      description:
        "TwoApps helps businesses and software teams build repeatable Claude and Claude Code workflows for faster delivery, better consistency, and safer AI-assisted execution.",
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
    tagline: "Offer AI projects without hiring a full in-house AI team first.",
    summary:
      "TwoApps works behind the scenes as a white-label implementation partner for software houses and agencies that want to deliver AI workflows, AI features, and internal tools.",
    audiences: ["agency"],
    benefits: [
      "Start selling AI projects faster without delaying on hiring",
      "Win more scopes with credible implementation support",
      "Keep the client relationship while we deliver the AI layer",
      "Add flexible delivery capacity for pilots and backlogs"
    ],
    deliverables: [
      "Support for discovery and solution framing",
      "White-label implementation of AI workflows and features",
      "Delivery documentation for handoff to your team",
      "Optional ongoing support and optimization",
      "Internal enablement for your agency team"
    ],
    process: [
      "Align on communication model and white-label rules",
      "Run one pilot on a real client project",
      "Set a repeatable delivery cadence",
      "Move into a retainer or capacity model if needed"
    ],
    faq: [
      {
        question: "Will you speak directly with our client?",
        answer:
          "We can work fully white-label behind your team or in a co-delivery setup. We agree the communication model before work starts."
      },
      {
        question: "Which agencies are the best fit?",
        answer:
          "Software houses, product studios, and digital agencies that already deliver web or mobile work and need a reliable partner for AI scopes."
      },
      {
        question: "Do you support agencies outside the UAE?",
        answer:
          "Yes. We are UAE-based and work with partners across the Middle East, Eastern Europe, South America, Australia, and New Zealand, plus other regions where there is a fit."
      }
    ],
    seo: {
      title: "White-Label AI Delivery Partner | TwoApps",
      description:
        "UAE-based white-label AI delivery partner for software houses and agencies. TwoApps supports teams in UAE/GCC, the Middle East, Eastern Europe, South America, Australia, and New Zealand.",
      keywords: [
        "white label ai partner agency",
        "ai delivery partner software house",
        "white label ai implementation middle east",
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
      "AI-assisted workflow design for compliance-heavy teams that need faster processing, fewer errors, and a clear audit trail.",
    painPoints: [
      "Manual review queues that slow down onboarding and case handling",
      "Repetitive document checks that consume analyst time",
      "Inconsistent triage and routing between team members",
      "Poor visibility across tools, queues, and handoffs"
    ],
    solutions: [
      "AI-assisted document sorting and workflow routing",
      "Rules plus AI support with human approval checkpoints",
      "Analyst copilots for summaries and investigation prep",
      "Internal dashboards for queue visibility and escalations"
    ],
    exampleAutomations: [
      "KYC intake triage and document completeness checks",
      "AML alert enrichment and case summary drafts",
      "Compliance ops reporting automation",
      "Escalation routing and SLA monitoring"
    ],
    faq: [
      {
        question: "Can AI be used safely in compliance workflows?",
        answer:
          "Yes, with clear boundaries. We design workflows with human review checkpoints, audit trails, and explicit ownership so AI supports the team instead of making hidden decisions."
      },
      {
        question: "Do we need to replace our current compliance systems?",
        answer:
          "Usually no. We normally improve the workflow around your current tools, which reduces rollout risk and gets results faster."
      },
      {
        question: "Is this only for large fintech companies?",
        answer:
          "No. Smaller fintechs and regulated startups often get strong results because automation removes pressure from lean teams."
      }
    ],
    seo: {
      title: "Fintech AML KYC Workflow Automation Services",
      description:
        "TwoApps helps fintech teams improve AML/KYC and compliance operations with AI-assisted workflows, human review checkpoints, and better operational visibility.",
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
      "TwoApps is a UAE-based AI automation and software delivery partner helping teams in Dubai, the UAE, and the GCC reduce manual work and launch practical AI systems.",
    marketFocus: [
      "UAE/GCC businesses with slow, manual operational workflows",
      "Founders and operators who need a real pilot, not an AI demo",
      "Teams that need internal tools and workflow automation built together"
    ],
    whyTwoApps: [
      "UAE-based execution with global delivery experience",
      "Strong AI workflow delivery plus product engineering capability",
      "Practical implementation across web, mobile, backend, and internal tools",
      "A good fit for operations-heavy and compliance-aware work"
    ],
    engagementModel: [
      "Automation audit and priority sprint",
      "30-day pilot for one workflow or internal tool",
      "Production rollout and ongoing optimization support"
    ],
    faq: [
      {
        question: "Do you work on-site in Dubai?",
        answer:
          "Yes, when needed. We can work remotely or support on-site sessions in Dubai for workshops, discovery, and stakeholder alignment."
      },
      {
        question: "Can you build the automation and the interface?",
        answer:
          "Yes. We can build both the workflow engine and the internal dashboard or admin interface your team needs to use it."
      },
      {
        question: "What size companies do you support?",
        answer:
          "We support startups, SMEs, and mid-market teams. The best fit is a team with recurring operational work and a clear process owner."
      }
    ],
    seo: {
      title: "Dubai UAE GCC AI Automation Partner | TwoApps",
      description:
        "TwoApps is a UAE-based AI automation partner for Dubai, UAE, and GCC teams. We build practical AI workflows, internal tools, and automation systems that reduce manual work.",
      keywords: [
        "dubai ai automation agency",
        "uae ai automation company",
        "gcc ai workflow automation",
        "middle east ai automation partner"
      ],
      canonicalPath: "/regions/dubai-uae-gcc-ai-automation",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "white-label-ai-partner-software-houses",
    title: "White-Label AI Partner for Software Houses (Global)",
    summary:
      "TwoApps supports software houses and agencies as a white-label AI implementation partner, with strong demand fit across the Middle East, Eastern Europe, South America, Australia, and New Zealand.",
    marketFocus: [
      "Software houses adding AI services to existing web/mobile delivery",
      "Agencies that need implementation support for AI workflows and AI features",
      "Teams that want to start selling AI work before hiring in-house specialists"
    ],
    whyTwoApps: [
      "Practical AI delivery focused on real client outcomes",
      "Senior execution from a UAE base without commodity outsourcing positioning",
      "Flexible white-label or co-delivery collaboration",
      "Can build the AI workflow and the product/UI around it"
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
          "Yes. Being UAE-based gives us useful overlap time with the Middle East, Eastern Europe, parts of South America, and Australia/New Zealand."
      },
      {
        question: "Do you sign NDAs and work white-label?",
        answer:
          "Yes. NDAs, confidentiality, and white-label delivery are core parts of this service model."
      },
      {
        question: "What projects do agencies usually bring to you?",
        answer:
          "Common projects include AI automation pilots, AI features inside existing apps, internal tools for client teams, and Claude/agentic workflows the agency does not have time to build."
      }
    ],
    seo: {
      title: "White-Label AI Partner for Software Houses | TwoApps",
      description:
        "TwoApps is a UAE-based white-label AI implementation partner for software houses and agencies in UAE/GCC, the Middle East, Eastern Europe, South America, Australia, and New Zealand.",
      keywords: [
        "white label ai partner software houses",
        "agency ai implementation partner",
        "white label ai delivery eastern europe agency",
        "ai partner software house middle east australia"
      ],
      canonicalPath: "/regions/white-label-ai-partner-software-houses",
      ogImage: "/og-default.svg"
    }
  }
];

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "claude-automation-ops-acceleration",
    title: "Claude Workflows That Help Teams Deliver Faster",
    context: "AI-assisted engineering and operations delivery",
    problem:
      "Teams were using AI in an ad hoc way, which caused inconsistent outputs, duplicated effort, and extra review work.",
    approach:
      "Built repeatable Claude and Claude Code workflows with clear task structure, review steps, and handoff rules so the team could use AI in a consistent way.",
    outcomes: [
      "Faster delivery on repeat implementation tasks",
      "More consistent output quality and review expectations",
      "Clearer handoffs for scaling AI-assisted work"
    ],
    tech: ["Claude", "Claude Code", "Automation playbooks", "Workflow design"],
    disclaimer: "Representative summary based on founder expertise and delivery experience."
  },
  {
    slug: "aml-kyc-workflow-automation-patterns",
    title: "Compliance Workflow Automation Patterns (AML/KYC)",
    context: "Fintech and compliance operations process design",
    problem:
      "Compliance teams were dealing with queue pressure, repetitive checks, and slow handoffs across tools and people.",
    approach:
      "Mapped the process, introduced automation opportunities, and added AI-assisted steps with human approval gates for safer execution.",
    outcomes: [
      "Less repetitive handling in compliance operations",
      "Better visibility across queues and escalations",
      "Safer AI usage with human control points"
    ],
    tech: ["Workflow automation", "Internal tools", "AI-assisted processing", "Ops dashboards"],
    disclaimer: "Representative summary based on domain and implementation experience."
  },
  {
    slug: "ai-enabled-product-and-dashboard-delivery",
    title: "AI Workflow + Dashboard Delivery in One Build",
    context: "Custom product engineering and internal tooling",
    problem:
      "The team needed both the automation backend and a usable interface, but vendors often delivered only one side.",
    approach:
      "Delivered the workflow logic and the operator-facing product interface together so teams could run, approve, and monitor AI-assisted processes in one system.",
    outcomes: [
      "End-to-end delivery from workflow logic to operator UI",
      "Faster time-to-value for internal AI systems",
      "Less coordination between multiple vendors"
    ],
    tech: ["Flutter", "AWS", "Web apps", "Dashboards", "API integrations"],
    disclaimer: "Representative summary synthesized from founder CV and project experience."
  }
];

export const processSteps = [
  {
    title: "Audit",
    copy: "Understand the workflow, bottlenecks, approvals, and systems involved. Choose the best starting point first."
  },
  {
    title: "Pilot",
    copy: "Build one real workflow with a clear goal so you can measure value quickly."
  },
  {
    title: "Stabilize",
    copy: "Add monitoring, guardrails, and fallback behavior so the workflow runs reliably."
  },
  {
    title: "Scale",
    copy: "Expand into the next workflow or client use case without starting from scratch."
  }
] as const;

export const featuredIndustries = [
  "Fintech / AML / KYC",
  "Real Estate Operations",
  "Logistics and Supply Chain",
  "Recruitment / Staffing",
  "E-commerce Operations",
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
