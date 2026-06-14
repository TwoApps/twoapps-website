import type { BlogPost, CaseStudySummary, Industry, RegionPage, Service } from "@/content/types";

export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/agency-partners", label: "Agency Partners" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
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
    tagline: "Turn repeat work into AI workflows with human checks where they matter.",
    summary:
      "We build AI workflows for support, ops, finance, onboarding, and reporting so your team stops doing the work software should be doing.",
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
    tagline: "Make Claude a team workflow, not a personal trick.",
    summary:
      "We turn Claude and Claude Code into structured workflows for coding, QA, and delivery so your output is faster and consistent across the team.",
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
    tagline: "Sell AI projects today. Skip the AI hiring delay.",
    summary:
      "We work behind your brand as the AI implementation team — so you ship AI workflows, features, and internal tools without standing up an AI practice first.",
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
      "Faster AML and KYC reviews with fewer errors and a clean audit trail.",
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
      "A UAE-based AI partner helping Dubai and GCC teams cut manual work and launch real systems.",
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
      "Pilot one workflow or internal tool",
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
      "White-label AI implementation for agencies — Middle East, Eastern Europe, LATAM, Australia, New Zealand.",
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
      "Ongoing delivery capacity for AI work",
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

export const blogPosts: BlogPost[] = [
  {
    slug: "from-chatgpt-prompts-to-production-why-most-ai-pilots-stall",
    title: "From ChatGPT Prompts to Production: Why Most AI Pilots Stall",
    summary:
      "Most AI pilots never reach production. The gap is not the model. It is the workflow, the guardrails, and the handoff plan that turns a prompt into a reliable system.",
    content:
      "Every week we speak with teams that have built impressive ChatGPT demos. They can generate emails, summarize documents, draft code, or answer support questions. The demo feels magical. Then they try to put it in front of real users, and the magic fades. Outputs become inconsistent, edge cases multiply, and someone has to manually check every result. The pilot stalls not because the model is bad, but because a prompt is not a product.\n\n" +
      "The first trap is treating the prompt as the whole system. A prompt works beautifully in a notebook when the inputs are clean and the user is patient. In production, inputs are messy. A customer ticket arrives with missing context. A PDF is scanned upside down. A spreadsheet column is named differently this month. A prompt that assumes perfect inputs will fail silently or produce confident nonsense. Production AI needs input validation, fallback logic, and a way to surface uncertainty instead of hiding it.\n\n" +
      "The second trap is skipping the human checkpoint. Teams either keep humans entirely out of the loop, which creates risk, or they keep humans in every step, which defeats the purpose. The right design is selective involvement. Let the AI handle the routine cases with clear confidence thresholds, and route exceptions to a person who can decide. That routing logic is where most pilots fall short. It requires understanding the real cost of being wrong in each scenario.\n\n" +
      "The third trap is measuring the wrong thing. Pilot teams often optimize for how smart the output looks instead of how much time or money it saves. They celebrate a beautiful summary while ignoring that the person still has to copy it between three tools. Real value comes from end-to-end workflow improvement: fewer clicks, shorter queues, less rework, and faster handoffs.\n\n" +
      "A fourth trap is underestimating integration and maintenance. A model that works today may drift as data formats, user behavior, or business rules change. Production systems need logging, versioning, and a clear owner who watches for degradation. Without that, the pilot becomes a fragile demo that breaks the first time something real changes.\n\n" +
      "There is also a people challenge. Teams sometimes resist AI workflows because they fear replacement or because the tool does not match how they actually work. Successful rollout includes the people who use the output from day one. Their feedback shapes the checkpoints, the escalation rules, and the user interface. If the workflow makes their job harder, they will work around it.\n\n" +
      "Finally, be realistic about timelines. A useful pilot can often be built in weeks, but turning it into a production system that runs reliably for months takes longer. The goal of the pilot is to prove value and learn constraints, not to eliminate all future work. Teams that promise overnight transformation usually disappoint. Teams that plan for iteration usually win.\n\n" +
      "The good news is that once the first workflow is in production, the next one is easier. You have the patterns, the tooling, and the trust. The real transformation is not a single AI feature. It is the organizational muscle to keep building useful workflows over time.\n\n" +
      "At TwoApps, we approach production differently. We start with one repeatable process, not a broad AI strategy. We map the inputs, the decisions, the errors, and the approvals. We build the workflow so the AI handles what it should and humans stay where they matter. Then we add monitoring, so the team can see when drift happens and fix it before it becomes a problem.\n\n" +
      "If your pilot is stalling, the fix is usually not a better prompt. It is a better workflow around the prompt. That is the difference between a demo and a system that actually runs your business.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-01",
    tags: ["AI automation", "Agentic AI", "AI strategy"],
    featured: true,
    estimatedReadTime: "6 min read",
    seo: {
      title: "From ChatGPT Prompts to Production: Why Most AI Pilots Stall | TwoApps",
      description:
        "Most AI pilots stall because teams confuse prompts with production systems. Learn why workflow design, guardrails, and human checkpoints matter more than the model.",
      keywords: [
        "chatgpt pilot production",
        "ai pilot stall",
        "ai workflow production",
        "ai automation implementation"
      ],
      canonicalPath: "/blog/from-chatgpt-prompts-to-production-why-most-ai-pilots-stall",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "what-agentic-ai-actually-means-for-operations-teams",
    title: "What Agentic AI Actually Means for Operations Teams",
    summary:
      "Agentic AI is not about replacing people. It is about giving operations teams small, autonomous agents that handle routine steps and ask for help when the situation changes.",
    content:
      "The term agentic AI is everywhere right now, and like most buzzwords, it means different things to different people. For some it conjures images of fully autonomous digital workers. For others it sounds like chatbots with extra branding. For operations teams, the reality is more practical and more useful than either extreme.\n\n" +
      "Agentic AI, at its core, is software that can take a goal, plan a sequence of actions, use tools, observe results, and adjust. It is not one giant brain that runs your company. It is a set of focused agents that handle specific workflows: checking a queue, drafting a response, gathering data, routing an exception, or updating a record. Each agent has a narrow scope, clear boundaries, and a defined way to escalate.\n\n" +
      "This matters for operations because most operational work is not one task. It is a chain of tasks. A refund request might require verifying the order, checking policy, fetching transaction data, drafting a response, and routing for approval. Traditionally, a person does every step. With agentic AI, an agent can do the verification, data gathering, and draft, then hand the decision to a person at the approval step. The person still controls the outcome, but the boring parts disappear.\n\n" +
      "The design challenge is deciding where autonomy ends and human judgment begins. This is not a technical decision alone. It is a business decision about risk, compliance, and customer trust. A good agentic workflow makes those boundaries explicit. It logs what the agent did, why it did it, and what it was unsure about. That transparency is what makes the system acceptable in regulated or customer-facing environments.\n\n" +
      "Another common misconception is that agentic AI requires replacing your current tools. In practice, the best agents usually work through the APIs and interfaces you already have. They read from your CRM, write to your ERP, send emails through your existing provider, and update the same dashboards your team uses. The value is in orchestration, not replacement.\n\n" +
      "The tooling landscape is also maturing quickly. There are now frameworks for building agents, observing their behavior, and managing their memory and state. But tooling alone does not guarantee success. The hard part is still the design: defining the goal, choosing the right tools, setting the confidence thresholds, and planning for failure. A poorly designed agent will cause more work than it saves.\n\n" +
      "Common starting points include ticket triage, invoice processing, refund routing, lead enrichment, and compliance checks. These workflows share three traits: they happen often, they follow a pattern, and the cost of a mistake is manageable with the right checkpoints. They are also unglamorous, which is exactly why people stop doing them manually once they see a better way.\n\n" +
      "Measuring agent performance is different from measuring traditional software. You need to track accuracy, escalation rate, human override rate, and latency. You also need a feedback loop so the agent improves as it sees more examples. Without measurement, you cannot tell whether the agent is helping or just adding complexity.\n\n" +
      "In the end, agentic AI is best understood as a way to extend your operations team. It handles the predictable work, escalates the uncertain work, and keeps a record of everything it tried. That combination is what makes it practical for real businesses today.\n\n" +
      "For operations leaders, the right question is not whether to adopt agentic AI. It is which workflows are repeatable enough to delegate and important enough to improve. Start with one workflow that is well understood, has measurable pain, and has a clear owner. Build a small agent around it, measure the results, and expand from there. That is how agentic AI becomes real operations leverage instead of another slide in a strategy deck.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-05",
    tags: ["Agentic AI", "AI automation", "Operations"],
    featured: false,
    estimatedReadTime: "6 min read",
    seo: {
      title: "What Agentic AI Actually Means for Operations Teams | TwoApps",
      description:
        "Agentic AI gives operations teams focused autonomous agents for routine workflow steps. Learn how to design boundaries, escalation rules, and real ROI.",
      keywords: [
        "agentic ai operations",
        "ai agents operations teams",
        "autonomous workflow agents",
        "agentic ai implementation"
      ],
      canonicalPath: "/blog/what-agentic-ai-actually-means-for-operations-teams",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "how-we-use-claude-code-to-ship-faster-at-twoapps",
    title: "How We Use Claude Code to Ship Faster at TwoApps",
    summary:
      "Claude Code is not a replacement for engineering judgment. It is a multiplier when paired with clear tasks, review rules, and a workflow that keeps humans in control.",
    content:
      "We build a lot of software at TwoApps. Internal tools, client workflows, dashboards, integrations, and AI features all move through the same delivery pipeline. Over the last year, Claude Code has become a core part of how we ship faster without lowering our standards. The key has been treating it as a workflow tool, not a magic button.\n\n" +
      "The first thing we learned is that context matters more than the prompt. Claude Code works best when it understands the codebase, the conventions, and the goal. We keep our project structure consistent, document our patterns, and break tasks into small, well-defined pieces. A task like refactor the auth helper to use the new error format and add tests is a good fit. A task like improve the app is not.\n\n" +
      "The second thing we learned is that review is non-negotiable. Claude Code can write code quickly, but it is still our responsibility to verify it. We run the same checks we would for human-written code: tests, type checks, lint, and a manual review of the diff. The difference is that the starting point is much further along. Instead of staring at a blank file, we are editing a solid first draft.\n\n" +
      "We also built a set of reusable patterns around common tasks. For example, when we add a new API endpoint, we have a standard file structure, naming convention, and test pattern. Claude Code can generate that boilerplate in seconds, which lets us focus on the business logic that is different this time. Those patterns are written down and kept current, so the tool does not drift from how we actually work.\n\n" +
      "Another important practice is keeping risky changes small. We prefer ten small, reviewable changes over one large diff. This reduces the chance of subtle errors slipping through and makes rollbacks easier. Claude Code helps here because generating small changes is fast. The bottleneck becomes our review process, which is exactly where we want human attention.\n\n" +
      "Finally, we measure outcomes, not activity. We track cycle time, defect rate, and rework. The goal is not to produce more code. It is to produce the right code faster and with fewer bugs. In our experience, Claude Code delivers the biggest gains when the team has clear standards, a good review habit, and a culture of asking whether the generated code is correct, not just whether it runs.\n\n" +
      "We also use Claude Code as an onboarding and knowledge-sharing tool. New team members can ask questions about the codebase in natural language and get pointed to the right files, conventions, and examples. It does not replace mentorship, but it shortens the time it takes for someone to become productive in an unfamiliar project. That is especially valuable for agencies and software houses that move people between client codebases.\n\n" +
      "It is also important to know what Claude Code is not good for. It does not replace architecture decisions, security reviews, or deep debugging of complex concurrency issues. It can suggest, draft, and accelerate, but the final responsibility stays with the engineer. Teams that pretend otherwise usually pay for it later in subtle bugs and architectural drift.\n\n" +
      "Security and context management matter too. We are careful about what code and data we feed into any AI tool, especially for client projects. We keep sensitive credentials, customer data, and proprietary algorithms out of prompts. We also organize context so the tool understands the relevant files without being overwhelmed by irrelevant ones. Good context hygiene is what separates useful assistance from expensive guessing.\n\n" +
      "For teams considering Claude Code, my advice is simple. Start with one repeatable task. Document your conventions. Require review. Measure what improves. Done right, it is a genuine force multiplier. Done carelessly, it is a fast way to accumulate technical debt.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-10",
    tags: ["Claude Code", "AI automation", "Engineering"],
    featured: false,
    estimatedReadTime: "6 min read",
    seo: {
      title: "How We Use Claude Code to Ship Faster at TwoApps",
      description:
        "A practical look at how TwoApps uses Claude Code for faster delivery, including task design, review rules, patterns, and measuring real engineering outcomes.",
      keywords: [
        "claude code workflow",
        "claude code engineering",
        "ai coding assistant implementation",
        "ship faster with claude code"
      ],
      canonicalPath: "/blog/how-we-use-claude-code-to-ship-faster-at-twoapps",
      ogImage: "/og-default.svg"
    }
  },
  {
    slug: "the-real-roi-of-ai-automation-in-regulated-industries",
    title: "The Real ROI of AI Automation in Regulated Industries",
    summary:
      "Regulated industries measure ROI differently. The payoff comes from fewer errors, cleaner audits, faster onboarding, and a team that can finally focus on judgment work.",
    content:
      "When we talk to fintech, healthcare, and compliance teams about AI automation, the first question is often about return on investment. Leaders want a number: how much will this save? The honest answer is that the biggest returns in regulated industries are usually risk reduction and throughput, not headcount reduction.\n\n" +
      "In a regulated environment, the cost of an error is not just the time to fix it. It is the audit finding, the regulatory notice, the customer complaint, and the reputational damage. A workflow that reduces manual transcription, standardizes triage, and logs every decision creates value that is hard to capture in a simple hourly savings calculation. The ROI shows up as fewer incidents, faster audits, and calmer operations teams.\n\n" +
      "Take AML and KYC operations as an example. Analysts spend huge portions of their day on repetitive checks: is the document complete, does the name match, is the address valid, has this case been seen before. These are perfect tasks for AI-assisted automation, but only if the system is designed with checkpoints. A well-built workflow can handle the routine cases, prepare summaries for the analyst, and route exceptions for human review. The analyst handles more cases per day and spends more time on the ones that actually need judgment.\n\n" +
      "The same pattern applies to onboarding, claims processing, contract review, and supplier checks. The value is not replacing the expert. It is removing the friction that keeps experts from doing expert work. When a compliance officer can focus on real risks instead of formatting reports, the whole program improves.\n\n" +
      "There is also a less obvious ROI: retention. Operational teams in regulated industries often burn out on repetitive work. Automation that removes the worst parts of the job makes the work more interesting and reduces turnover. That saves recruiting and training costs, but more importantly, it preserves institutional knowledge.\n\n" +
      "To measure ROI well, track a mix of operational and risk metrics. Time per case, error rate, rework rate, audit findings, queue length, and employee satisfaction all matter. The best automation projects improve several of these at once. The worst ones optimize one metric while quietly making others worse.\n\n" +
      "Implementation approach also affects ROI. The safest path is to start with a narrow, well-documented workflow, run it in parallel with the existing process, and compare results. This builds confidence, surfaces edge cases early, and gives you real numbers before a wider rollout. Big-bang deployments in regulated environments are risky because they combine process change, technology change, and compliance exposure all at once.\n\n" +
      "Stakeholder alignment is another factor that is often overlooked. Finance, compliance, operations, and IT each care about different parts of the outcome. A strong business case speaks to all of them in their own language: cost savings for finance, control and auditability for compliance, throughput and experience for operations, and maintainability and security for IT. When everyone sees the value, the project survives the inevitable bumps.\n\n" +
      "Choosing the right partner also affects ROI. Look for a team that asks about your process before proposing technology, that designs checkpoints into the workflow, and that can explain what happens when something goes wrong. The best partners make the pilot safer and the production system easier to own. The worst ones deliver a demo and leave you to figure out the rest.\n\n" +
      "When done well, AI automation in regulated industries does not feel like a gamble. It feels like finally having the bandwidth to do the work that always deserved more attention. That is the return that matters most.\n\n" +
      "If you are evaluating AI automation in a regulated industry, look for a partner who understands compliance as part of the design, not an afterthought. The goal is a system that is faster and safer, not faster at the expense of safety. That is the ROI that holds up under scrutiny.",
    authorName: "Zain Hassan",
    authorRole: "Founder & AI Implementation Engineer",
    datePublished: "2026-06-13",
    tags: ["AI automation", "Compliance", "Fintech"],
    featured: false,
    estimatedReadTime: "7 min read",
    seo: {
      title: "The Real ROI of AI Automation in Regulated Industries | TwoApps",
      description:
        "AI automation ROI in regulated industries comes from risk reduction, audit readiness, and throughput. Learn how to measure value beyond headcount savings.",
      keywords: [
        "ai automation regulated industries",
        "compliance automation roi",
        "fintech ai automation value",
        "aml kyc automation roi"
      ],
      canonicalPath: "/blog/the-real-roi-of-ai-automation-in-regulated-industries",
      ogImage: "/og-default.svg"
    }
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

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
