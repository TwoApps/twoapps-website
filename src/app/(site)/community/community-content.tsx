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
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Tag } from "@/components/ui/tag";

const benefits = [
  {
    icon: "🤝",
    title: "Peer Learning",
    description:
      "Connect with operators and agency founders solving the same problems you are."
  },
  {
    icon: "📚",
    title: "Templates & playbooks",
    description:
      "Workflow templates and automation playbooks you can't get anywhere else."
  },
  {
    icon: "🚀",
    title: "Early Access",
    description:
      "Be the first to try new features, provide feedback, and shape the TwoApps product roadmap."
  },
  {
    icon: "💬",
    title: "Team support",
    description:
      "Get quick answers from the TwoApps team and experienced community members in real-time."
  }
];

const steps = [
  {
    number: "01",
    title: "Request Access",
    description: "Fill out the form below. We review applications within 24-48 hours."
  },
  {
    number: "02",
    title: "Get Your Invite",
    description: "Approved members receive a Slack invite link via email."
  },
  {
    number: "03",
    title: "Join & Introduce Yourself",
    description: "Hop into Slack, introduce yourself in #welcome, and start connecting."
  }
];

const featuredTestimonial = {
  quote:
    "The TwoApps community helped us identify three automation opportunities we hadn't considered. The peer insights alone were worth it.",
  name: "Sarah Chen",
  role: "Operations Director",
  company: "Fintech Startup, Singapore"
};

const faqs = [
  {
    question: "Who can join the TwoApps Community?",
    answer:
      "The community is open to active TwoApps clients, agency partners, and select qualified leads. We prioritize members who are genuinely implementing or exploring AI automation in their organizations."
  },
  {
    question: "Is there a cost to join?",
    answer:
      "It's open at no cost to TwoApps clients and approved partners. We believe in building long-term relationships, and the community is part of how we support our network."
  },
  {
    question: "What platform does the community use?",
    answer:
      "We use Slack. Most of our members already use Slack daily, so there's no new app to download or learn. You'll get a Slack invite once your application is approved."
  },
  {
    question: "What if I'm not a TwoApps client yet?",
    answer:
      "You can still apply! We admit qualified leads who are seriously exploring AI automation. The community is a great way to learn, see real use cases, and connect with peers before committing to a project."
  },
  {
    question: "How active is the community?",
    answer:
      "We run weekly content (Tips Tuesday, Feature Friday), monthly AMAs, and regular discussions. Most members check in a few times per week, and core contributors are active daily."
  },
  {
    question: "Can I promote my services in the community?",
    answer:
      "Self-promotion is allowed in designated channels (#networking, #off-topic) but must be relevant and valuable to the community. Spammy or irrelevant promotion will result in removal."
  }
];

const inputClassName =
  "focus-ring w-full rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors hover:border-ink/20 focus:border-blue/30 focus:bg-white";

export default function CommunityPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/community-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", role: "", goals: "" });
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
        data-bot-say="This is where agencies trade playbooks that actually move revenue."
        data-bot-fx="0.25"
        data-bot-icons="spark,chat"
      >
        <PageHero
          eyebrow="Client Community"
          title="The TwoApps client community"
          description="Peer learning, templates, and direct team support — for operators building AI automation."
          chips={["Peer learning", "Templates", "Early access", "Direct support"]}
        />
      </div>

      {/* Benefits Section */}
      <Section
        className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
        data-bot-stop
        data-bot-say="Members get templates and workflows that aren't in any public library."
        data-bot-fx="0.75"
        data-bot-icons="box,chart"
      >
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <Tag>Benefits</Tag>
            <Heading title="What You Get" align="center" className="mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-5 sm:p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-2">{benefit.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
        data-bot-stop
        data-bot-say="Request access today and you'll be inside the Slack within 48 hours."
        data-bot-fx="0.15"
        data-bot-icons="clock,arrowR"
      >
        <Container>
          <div className="text-center mb-10 sm:mb-12">
            <Tag>Process</Tag>
            <Heading title="How it works" align="center" className="mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue/10 text-blue text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-ink/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Inline testimonial */}
          <div className="mx-auto mt-10 sm:mt-12 max-w-2xl">
            <Card className="p-5 sm:p-6">
              <p className="text-ink/80 text-sm leading-relaxed mb-6 italic">
                &quot;{featuredTestimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue font-semibold">
                  {featuredTestimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-ink font-semibold text-sm">{featuredTestimonial.name}</p>
                  <p className="text-ink/60 text-xs">
                    {featuredTestimonial.role}, {featuredTestimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ + Request Access */}
      <Section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div
            data-bot-stop
            data-bot-say="Every question here came from real applicants. Yours is probably already answered."
            data-bot-fx="0.85"
            data-bot-icons="chat,check"
          >
            <FaqSection title="Common questions" items={faqs} />
          </div>

          <div
            className="max-w-2xl mx-auto mt-12 sm:mt-16"
            data-bot-stop
            data-bot-say="Spots are reviewed weekly. A complete application gets you in faster."
            data-bot-fx="0.5"
            data-bot-icons="shield,person"
          >
            <div className="text-center mb-6 sm:mb-8">
              <Tag>Join Now</Tag>
              <Heading title="Request Access" align="center" className="mt-4" />
              <p className="mt-4 text-ink/70">
                Fill out the form below. We review applications within 24-48 hours.
              </p>
            </div>

            <Card className="p-5 sm:p-6 md:p-8">
              {submitStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4 text-emerald-600">✓</div>
                  <h3 className="text-xl font-semibold text-ink mb-2">
                    Application received
                  </h3>
                  <p className="text-ink/70 text-sm">
                    We&apos;ll review your application and send you a Slack invite within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
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
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
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
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={inputClassName}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-ink mb-2">
                      Your Role *
                    </label>
                    <select
                      id="role"
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

                  <div>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium text-ink mb-2"
                    >
                      What do you hope to get from the community?
                    </label>
                    <textarea
                      id="goals"
                      rows={4}
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className={cn(inputClassName, "min-h-32 resize-y")}
                      placeholder="e.g., Learn from peers, get support with automation, stay updated on AI trends..."
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      Something went wrong. Please try again or contact us directly at team@twoapps.com
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    variant="primary"
                  >
                    {isSubmitting ? "Submitting..." : "Request Access"}
                  </Button>

                  <p className="text-center text-ink/50 text-xs">
                    By submitting, you agree to our community guidelines. We&apos;ll never spam you or share
                    your information.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Band */}
      <div
        data-bot-stop
        data-bot-say="Not ready to apply? Ping the team - we usually reply the same day."
        data-bot-fx="0.35"
        data-bot-icons="inbox,pulse"
      >
        <CtaBand
          title="Have a question first?"
          copy="Tell us what you're trying to do and we'll point you in the right direction."
          primaryHref="/contact"
          primaryLabel="Talk to us"
          secondaryHref="mailto:team@twoapps.com"
          secondaryLabel="Email the team"
        />
      </div>
    </>
  );
}
