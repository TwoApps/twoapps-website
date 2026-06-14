"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { PageHero } from "@/components/common/page-hero";
import { FaqSection } from "@/components/common/faq-section";
import { CtaBand } from "@/components/common/cta-band";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Tag } from "@/components/ui/tag";

const audience = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "In-house ops & COOs",
    description:
      "You're the one turning messy handoffs into repeatable workflows — and looking for playbooks that actually survive Monday morning."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Agency founders & partners",
    description:
      "You embed automation into client delivery or white-label it. Here you find partners, pricing wisdom, and templates you can reuse."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "CTOs & transformation leads",
    description:
      "You're choosing tools, setting guardrails, and scaling adoption — and you want real stories from teams further down the road."
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Builders & founders",
    description:
      "You're shipping AI workflows yourself and want honest feedback, sanity checks, and early looks at what's coming next."
  }
];

const benefits = [
  {
    icon: "🤝",
    title: "Peer learning",
    description:
      "Connect with operators and agency founders working through the same build, pricing, and adoption questions you are."
  },
  {
    icon: "📚",
    title: "Templates & playbooks",
    description:
      "Get workflow templates, prompt libraries, and automation playbooks we don't publish anywhere else."
  },
  {
    icon: "🚀",
    title: "Early access",
    description:
      "Test new features before they ship, give feedback, and help shape the TwoApps product roadmap."
  },
  {
    icon: "💬",
    title: "Direct team support",
    description:
      "Get quick answers from the TwoApps team and experienced community members without jumping through support queues."
  }
];

const steps = [
  {
    number: "01",
    title: "Request access",
    description:
      "Fill out the short form. We review every application to keep the room relevant and valuable."
  },
  {
    number: "02",
    title: "Get approved",
    description:
      "You'll hear back within 24-48 hours with a Slack invite sent to your work email."
  },
  {
    number: "03",
    title: "Join the conversation",
    description:
      "Drop into #welcome, introduce yourself, and start using the playbooks and channels."
  }
];

const featuredTestimonial = {
  quote:
    "The TwoApps community helped us spot three automation opportunities we had completely missed. The peer insights alone paid for the time I spent in there.",
  name: "Sarah Chen",
  role: "Operations Director",
  company: "Fintech Startup, Singapore"
};

const faqs = [
  {
    question: "Who is the TwoApps Community for?",
    answer:
      "Active TwoApps clients, approved agency partners, and qualified operators exploring AI automation. We prioritize people who are actively building or rolling out workflows in their organizations."
  },
  {
    question: "Is there a cost to join?",
    answer:
      "No — it's complimentary for TwoApps clients and approved partners. The community is part of how we support the people building with us."
  },
  {
    question: "What platform do you use?",
    answer:
      "Slack. Most members already live there, so there's nothing new to install. Approved applicants get a single-invite link by email."
  },
  {
    question: "I'm not a client yet. Can I still apply?",
    answer:
      "Yes. We admit qualified leads who are seriously evaluating AI automation. It's a low-pressure way to learn from real operators before you commit to a project."
  },
  {
    question: "How active is the community?",
    answer:
      "We run weekly content drops (Tips Tuesday, Feature Friday), monthly AMAs, and ongoing threads. Core contributors and the TwoApps team check in daily."
  },
  {
    question: "Can I promote my services?",
    answer:
      "Relevant self-promotion is allowed in designated channels like #networking. Outright spam or off-topic pitching will be removed."
  }
];

const inputClassName =
  "focus-ring w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors hover:border-ink/20 focus:border-blue/30 focus:bg-white";

export function CommunityContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    goals: "",
    honeypot: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/community-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          goals: formData.goals,
          honeypot: formData.honeypot
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", role: "", goals: "", honeypot: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-say="This is where agencies trade playbooks that actually move revenue." data-bot-short="Playbooks that move revenue"
        data-bot-fx="0.25"
      >
        <PageHero
          eyebrow="Client Community"
          title="A private Slack community for operators actually shipping AI automation"
          description="No fluff. No pitch decks. Just peers, playbooks, and direct access to the TwoApps team."
          chips={["Slack-based", "Free for clients", "Weekly AMAs", "Real playbooks"]}
          mobileChips={["Slack-based community access", "Free for active clients", "Weekly ask-me-anything sessions", "Real operational playbooks"]}
        />
      </div>

      {/* Who it's for */}
      <Section
        data-bot-stop
        data-bot-say="If you're actively automating work — or deciding what to automate next — you'll fit right in." data-bot-short="For active automators"
        data-bot-fx="0.75"
      >
        <div className="text-center mb-10 sm:mb-12">
          <Tag>Who it&apos;s for</Tag>
          <Heading
            title="Built for operators, not spectators"
            subtitle="This room is for people doing the work: running ops, building workflows, and making AI useful inside real organizations."
            align="center"
            className="mt-4"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
          {audience.map((item, index) => (
            <Card key={index} className="p-5 sm:p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink sm:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section
        className="bg-white"
        data-bot-stop
        data-bot-say="Members get templates and workflows that aren't in any public library." data-bot-short="Members-only templates"
        data-bot-fx="0.75"
      >
        <div className="text-center mb-10 sm:mb-12">
          <Tag>What you get</Tag>
          <Heading
            title="The stuff that actually moves the needle"
            subtitle="Not another notification channel. These are the reasons members keep coming back."
            align="center"
            className="mt-4"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-5 sm:p-6">
              <div className="mb-4 text-4xl">{benefit.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-ink sm:text-xl">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section
        data-bot-stop
        data-bot-say="Request access today and you'll be inside the Slack within 48 hours." data-bot-short="Request access today"
        data-bot-fx="0.15"
      >
        <div className="text-center mb-10 sm:mb-12">
          <Tag>How it works</Tag>
          <Heading
            title="From application to invite in three steps"
            subtitle="We keep the process simple and the room high-signal."
            align="center"
            className="mt-4"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-7 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue/10 text-2xl font-bold text-blue">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink sm:text-xl">{step.title}</h3>
              <p className="text-sm text-ink/70">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-12 max-w-2xl sm:mt-14">
          <Card className="p-5 sm:p-6">
            <p className="mb-6 text-sm italic leading-relaxed text-ink/80 sm:text-base">
              &quot;{featuredTestimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10 text-sm font-semibold text-blue">
                {featuredTestimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">{featuredTestimonial.name}</p>
                <p className="truncate text-xs text-ink/60">
                  {featuredTestimonial.role}, {featuredTestimonial.company}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Request access */}
      <Section
        className="bg-white"
        data-bot-stop
        data-bot-say="Spots are reviewed weekly. A complete application gets you in faster." data-bot-short="Spots reviewed weekly"
        data-bot-fx="0.5"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 text-center sm:mb-8">
            <Tag>Join now</Tag>
            <Heading
              title="Get your invite"
              subtitle="Tell us a little about yourself. We review every application to keep the room valuable."
              align="center"
              className="mt-4"
            />
          </div>

          <Card className="p-5 sm:p-6 md:p-8">
            {submitStatus === "success" ? (
              <div className="py-8 text-center">
                <div className="mb-4 text-5xl text-emerald-600">✓</div>
                <h3 className="mb-2 text-xl font-semibold text-ink">Application received</h3>
                <p className="text-sm text-ink/70">
                  We&apos;ll review it and send your Slack invite within 24-48 hours. Keep an eye on your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClassName}
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Work email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClassName}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={inputClassName}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="mb-2 block text-sm font-medium text-ink">
                      Your role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className={cn(inputClassName, "appearance-none")}
                    >
                      <option value="">Select your role...</option>
                      <option value="Operations / COO">Operations / COO</option>
                      <option value="CTO / Tech Lead">CTO / Tech Lead</option>
                      <option value="Founder / CEO">Founder / CEO</option>
                      <option value="Agency Owner / Principal">Agency Owner / Principal</option>
                      <option value="Digital Transformation Lead">
                        Digital Transformation Lead
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    What are you hoping to learn or solve?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className={cn(inputClassName, "min-h-32 resize-y")}
                    placeholder="e.g. I want to automate client onboarding, compare AI tools, or learn how others are scaling workflows..."
                  />
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className={inputClassName}
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                    Something went wrong while submitting. Please try again, or email us directly at{" "}
                    <a href="mailto:team@twoapps.com" className="underline">
                      team@twoapps.com
                    </a>
                    .
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  variant="primary"
                >
                  {isSubmitting ? "Sending your application..." : "Request my invite"}
                </Button>

                <p className="text-center text-xs text-ink/50">
                  By submitting, you agree to our community guidelines. We&apos;ll never spam you or share
                  your information.
                </p>
              </form>
            )}
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <div
        data-bot-stop
        data-bot-say="Every question here came from real applicants. Yours is probably already answered." data-bot-short="Real applicant questions"
        data-bot-fx="0.85"
      >
        <FaqSection
          title="Common questions"
          eyebrow="FAQ"
          items={faqs}
          emitSchema={false}
        />
      </div>

      {/* CTA Band */}
      <div
        data-bot-stop
        data-bot-say="Not ready to apply? Ping the team — we usually reply the same day." data-bot-short="Not ready? Just ping us"
        data-bot-fx="0.35"
      >
        <CtaBand
          title="Still have questions?"
          copy="Tell us what you're trying to do and we'll point you in the right direction — usually same day."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="mailto:team@twoapps.com"
          secondaryLabel="Email the team"
        />
      </div>
    </>
  );
}
