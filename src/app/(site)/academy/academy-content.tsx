"use client";

import { useState } from "react";

import { PageHero } from "@/components/common/page-hero";
import { CtaBand } from "@/components/common/cta-band";
import { FaqSection } from "@/components/common/faq-section";
import { ScrollBot } from "@/components/shared/scroll-bot";
import { AcademyEnrollForm } from "@/components/academy/academy-enroll-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { ExpandableDetailPanel } from "@/components/common/expandable-detail-panel";

const courses = [
  {
    id: "ai-workflow-audit",
    title: "AI Workflow Audit",
    subtitle: "Find the bottleneck that's bleeding time and money",
    description:
      "A 5-step framework to pinpoint the manual workflows that are slowing your team down. You'll get the same checklists and ROI calculator we use on client calls.",
    duration: "30 min read",
    level: "Beginner",
    topics: [
      "The 5-step audit framework",
      "Common workflow pattern checklists",
      "ROI calculator template",
      "How to spot quick wins in under an hour"
    ],
    cta: "Book a Free Audit with TwoApps",
    ctaHref: "/book",
    color: "accent-1"
  },
  {
    id: "build-first-automation",
    title: "Build Your First Automation",
    subtitle: "A no-code-friendly guide for non-technical teams",
    description:
      "Learn how to decide what can be automated using a simple decision tree. See five real before/after workflow examples and get a tool-selection guide you can use immediately.",
    duration: "45 min read",
    level: "Beginner",
    topics: [
      "The automation decision tree",
      "5 real workflow examples with before/after results",
      "Implementation timeline template",
      "How to choose the right tools"
    ],
    cta: "Start a Pilot with TwoApps",
    ctaHref: "/book",
    color: "accent-2"
  },
  {
    id: "compliance-first-ai",
    title: "Compliance-First AI",
    subtitle: "Build AI that regulators actually trust",
    description:
      "Navigate GDPR, MAS, and PDPA requirements without getting lost in legal jargon. Learn how to design AI workflows that keep auditors happy from day one.",
    duration: "40 min read",
    level: "Intermediate",
    topics: [
      "GDPR, MAS, and PDPA requirements for AI",
      "Compliant automation design patterns",
      "AI compliance review checklist",
      "Documentation templates you can reuse"
    ],
    cta: "Get a Compliance Review",
    ctaHref: "/book",
    color: "accent-1"
  },
  {
    id: "ai-sales-pipeline",
    title: "AI-Powered Sales Pipeline",
    subtitle: "From lead to close with less manual work",
    description:
      "Discover how AI transforms your sales pipeline — from lead scoring to automated follow-ups. Includes five real examples with measurable outcomes and a build-vs-buy framework.",
    duration: "50 min read",
    level: "Intermediate",
    topics: [
      "AI lead scoring and qualification",
      "5 pipeline automation examples with results",
      "Build vs. buy framework",
      "Implementation checklist"
    ],
    cta: "Book a Pipeline Audit",
    ctaHref: "/book",
    color: "accent-2"
  },
  {
    id: "compliance-ready-stack",
    title: "Building a Compliance-Ready AI Stack",
    subtitle: "Architecture for regulated, enterprise-scale AI",
    description:
      "Map regulatory requirements to every layer of your AI stack. Learn architecture patterns, vendor evaluation checklists, and audit templates for scalable, compliant systems.",
    duration: "55 min read",
    level: "Advanced",
    topics: [
      "Mapping GDPR/MAS/PDPA to AI components",
      "Compliant architecture patterns",
      "Vendor evaluation checklist",
      "Compliance audit template"
    ],
    cta: "Get a Compliance Review",
    ctaHref: "/book",
    color: "accent-1"
  }
];

const quizQuestions = [
  {
    id: "company_size",
    question: "How big is your team?",
    options: [
      { label: "1-10 employees", value: 1, score: 1 },
      { label: "11-50 employees", value: 2, score: 2 },
      { label: "51-200 employees", value: 3, score: 3 },
      { label: "200+ employees", value: 4, score: 4 }
    ]
  },
  {
    id: "automation_level",
    question: "How automated are your operations today?",
    options: [
      { label: "Mostly manual processes", value: 1, score: 1 },
      { label: "Some basic automation (spreadsheets, templates)", value: 2, score: 2 },
      { label: "Using automation tools like Zapier or Make", value: 3, score: 3 },
      { label: "Advanced automation with custom integrations", value: 4, score: 4 }
    ]
  },
  {
    id: "pain_points",
    question: "What's your biggest automation challenge right now?",
    options: [
      { label: "I don't know where to start", value: 1, score: 1, recommendation: "audit" },
      { label: "I need to understand what's actually possible", value: 2, score: 2, recommendation: "first-automation" },
      { label: "Compliance concerns are holding us back", value: 3, score: 3, recommendation: "compliance" },
      { label: "I need to scale what we've already built", value: 4, score: 4, recommendation: "advanced" }
    ]
  },
  {
    id: "budget",
    question: "What scale of automation are you considering?",
    options: [
      { label: "Just exploring what's possible", value: 1, score: 1 },
      { label: "Targeted automation projects", value: 2, score: 2 },
      { label: "A comprehensive automation programme", value: 3, score: 3 },
      { label: "Enterprise-scale transformation", value: 4, score: 4 }
    ]
  },
  {
    id: "timeline",
    question: "When do you need to see results?",
    options: [
      { label: "ASAP — we're losing revenue daily", value: 1, score: 1, urgency: "high" },
      { label: "Within 1-3 months", value: 2, score: 2, urgency: "medium" },
      { label: "3-6 months — planning ahead", value: 3, score: 3, urgency: "low" },
      { label: "Just exploring options right now", value: 4, score: 4, urgency: "exploring" }
    ]
  }
];

function getRecommendation(answers: Record<string, number>): {
  primary: (typeof courses)[0];
  secondary: (typeof courses)[0];
  message: string;
  cta: string;
} {
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const painPoint = answers.pain_points;

  if (painPoint === 1) {
    return {
      primary: courses[0],
      secondary: courses[1],
      message:
        "You're at the perfect starting point. Begin with the AI Workflow Audit to identify your biggest opportunities, then move on to Build Your First Automation to learn what's possible.",
      cta: "Start with the Workflow Audit course"
    };
  }

  if (painPoint === 3) {
    return {
      primary: courses[2],
      secondary: courses[4],
      message:
        "Compliance is critical for your situation. Start with Compliance-First AI to understand the landscape, then dive into the Compliance-Ready Stack for implementation.",
      cta: "Start with the Compliance-First AI course"
    };
  }

  if (totalScore <= 8) {
    return {
      primary: courses[0],
      secondary: courses[1],
      message:
        "You're just getting started. Focus on identifying quick wins with the AI Workflow Audit, then learn to implement them with Build Your First Automation.",
      cta: "Start with the Workflow Audit course"
    };
  }

  if (totalScore <= 12) {
    return {
      primary: courses[1],
      secondary: courses[3],
      message:
        "You have the basics in place. Now it's time to build real automation. Start with Build Your First Automation for the framework, then explore AI-Powered Sales Pipeline for high-ROI applications.",
      cta: "Start with the First Automation course"
    };
  }

  if (totalScore <= 16) {
    return {
      primary: courses[3],
      secondary: courses[4],
      message:
        "You're ready for advanced automation. The AI-Powered Sales Pipeline course shows high-ROI implementations, while Compliance-Ready Stack prepares you for enterprise scale.",
      cta: "Start with the AI-Powered Sales Pipeline course"
    };
  }

  return {
    primary: courses[4],
    secondary: courses[3],
    message:
      "You're operating at enterprise level. Focus on building a compliant, scalable AI stack with the Compliance-Ready Stack course, then optimize your pipeline.",
    cta: "Start with the Compliance-Ready Stack course"
  };
}

const BEGINNER_IDS = ["ai-workflow-audit", "build-first-automation", "compliance-first-ai"];
const ADVANCED_IDS = ["ai-sales-pipeline", "compliance-ready-stack"];

const outcomes = [
  {
    title: "Find your biggest bottleneck",
    body: "Learn the exact 5-step audit we use to spot the manual work that's bleeding time and money."
  },
  {
    title: "Build with confidence",
    body: "Map AI workflows that satisfy GDPR, MAS, and PDPA — no compliance surprises later."
  },
  {
    title: "Apply it today",
    body: "Every course includes templates and checklists you can use on a real process this afternoon."
  }
];

const whoItsFor = [
  {
    title: "Operations leaders",
    body: "You're tired of watching your team drown in repetitive work and want a clear plan to fix it."
  },
  {
    title: "Founders and SMEs",
    body: "You want automation wins without hiring a full AI team or committing to a massive transformation."
  },
  {
    title: "Compliance-minded teams",
    body: "You're in fintech, healthcare, or regulated services and can't afford to get AI compliance wrong."
  }
];

const howItWorks = [
  {
    step: "01",
    title: "Pick your course — or let the quiz choose",
    body: "Not sure where to start? Answer five quick questions and we'll point you at the course with your fastest win."
  },
  {
    step: "02",
    title: "Enroll with your email",
    body: "No credit card. No spam. Just your name, email, and the course PDF sent straight to your inbox."
  },
  {
    step: "03",
    title: "Download and apply",
    body: "Work through the framework on your own workflow. Most students finish in under an hour and use it the same day."
  }
];

const faqItems = [
  {
    question: "Are the courses really free?",
    answer:
      "Yes. No credit card, no paywall. We use them to introduce teams to practical AI automation, and we hope you'll come back when you're ready to build something bigger."
  },
  {
    question: "Do I need technical skills?",
    answer:
      "No. The beginner courses are written for operators, founders, and managers. The advanced courses assume some familiarity with automation tools, but you won't need to write code."
  },
  {
    question: "What happens after I enroll?",
    answer:
      "You'll get the course PDF by email within a few minutes, plus a short follow-up sequence with extra tips, templates, and ways to work with us if you want hands-on help."
  },
  {
    question: "Can my whole team use these?",
    answer:
      "Absolutely. Share the PDFs internally. If you want a private workshop or implementation support, book a free call and we'll tailor it to your stack."
  }
];

function CoursePanelBody({
  course,
  onEnroll
}: {
  course: (typeof courses)[0];
  onEnroll: () => void;
}) {
  return (
    <div className="space-y-5">
      <p className="text-sm leading-relaxed text-ink/78 sm:text-base">{course.description}</p>
      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
          What you&apos;ll learn
        </h4>
        <ul className="space-y-2">
          {course.topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink/80 sm:text-base">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={onEnroll} className="w-full sm:w-auto">
        Enroll for free
      </Button>
    </div>
  );
}

export default function AcademyContent() {
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null);
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [level, setLevel] = useState<"beginner" | "advanced">("beginner");

  const handleAnswerSelect = (questionId: string, value: number) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: value }));

    if (quizStep < quizQuestions.length - 1) {
      setTimeout(() => setQuizStep((prev) => prev + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers({});
    setShowResult(false);
    setQuizStarted(false);
  };

  const recommendation = showResult ? getRecommendation(quizAnswers) : null;

  const visibleCourses = courses.filter((c) =>
    (level === "beginner" ? BEGINNER_IDS : ADVANCED_IDS).includes(c.id)
  );

  return (
    <>
      <ScrollBot />

      <div
        data-bot-stop
        data-bot-fx="0.15"
        data-bot-say="This academy turns your team into AI operators in a weekend."
      >
        <PageHero
          eyebrow="TwoApps Academy"
          title="Free AI automation courses built from real client work"
          description="Practical mini-courses that show you what to automate, how to build it, and how to stay compliant — even if you're not technical."
          chips={["Free PDF downloads", "Self-paced", "Real frameworks", "No sign-up wall"]}
        />
      </div>

      {/* Outcomes */}
      <div
        data-bot-stop
        data-bot-fx="0.3"
        data-bot-say="Know exactly what to automate first — and what it's worth."
      >
        <Section className="py-8 sm:py-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {outcomes.map((item) => (
              <Card key={item.title} className="p-5 sm:p-6">
                <h3 className="text-base font-semibold text-ink sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 sm:text-base">{item.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      {/* Who it's for */}
      <div
        data-bot-stop
        data-bot-fx="0.35"
        data-bot-say="Built for operators, founders, and compliance-minded teams."
      >
        <Section className="bg-cream/30">
          <Heading
            align="center"
            eyebrow="Who it's for"
            title="Made for teams who want practical AI, not theory"
            subtitle="If you're responsible for making things run smoother, faster, or cheaper, these courses are for you."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {whoItsFor.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-ink/10 bg-white p-5 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-6"
              >
                <h3 className="text-base font-semibold text-ink sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-ink/70 sm:text-base">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* How it works */}
      <div
        data-bot-stop
        data-bot-fx="0.4"
        data-bot-say="Pick, enroll, download. That's the whole process."
      >
        <Section>
          <Heading
            align="center"
            eyebrow="How it works"
            title="From curious to capable in three simple steps"
            subtitle="No lengthy onboarding. No hidden upsells. Just useful frameworks you can apply immediately."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="relative flex h-full flex-col rounded-[22px] border border-ink/10 bg-white p-6 shadow-[0_1px_2px_rgba(22,21,15,0.04)] sm:p-7"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue">
                  Step {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Course finder quiz */}
      <div
        data-bot-stop
        data-bot-fx="0.7"
        data-bot-say="Not sure where to start? The quiz finds your fastest win."
      >
        <Section className="py-8 sm:py-10">
          <div className="mx-auto max-w-3xl">
            <Card className="p-5 sm:p-6 md:p-8">
              {!quizStarted ? (
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full border border-ink/10 bg-cream p-3">
                    <svg
                      className="h-6 w-6 text-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-ink sm:text-2xl">
                    Not sure where to start?
                  </h3>
                  <p className="mb-6 text-sm text-ink/70 sm:text-base">
                    Answer five quick questions and we&apos;ll recommend the course that matches your
                    level and biggest challenge.
                  </p>
                  <Button onClick={() => setQuizStarted(true)} className="w-full sm:w-auto">
                    Get a course recommendation in 2 minutes
                  </Button>
                </div>
              ) : showResult && recommendation ? (
                <div>
                  <div className="mb-6 text-center">
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-1.5 text-sm font-medium text-blue">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Your recommended course
                    </div>
                  </div>

                  <div className="mb-6 rounded-xl border border-ink/10 bg-cream p-5">
                    <p className="text-sm leading-relaxed text-ink/80">
                      {recommendation.message}
                    </p>
                  </div>

                  <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <Card className="border-blue/30 bg-cream p-4 sm:p-5">
                      <div className="mb-2 text-xs font-medium uppercase tracking-wider text-blue">
                        Start here
                      </div>
                      <h4 className="mb-1 text-base font-semibold text-ink sm:text-lg">
                        {recommendation.primary.title}
                      </h4>
                      <p className="mb-3 text-xs text-ink/60 sm:text-sm">
                        {recommendation.primary.subtitle}
                      </p>
                      <Button
                        onClick={() => setSelectedCourse(recommendation.primary)}
                        className="w-full text-sm"
                      >
                        Enroll for free
                      </Button>
                    </Card>

                    <Card className="p-4 sm:p-5">
                      <div className="mb-2 text-xs font-medium uppercase tracking-wider text-ink/50">
                        Then this
                      </div>
                      <h4 className="mb-1 text-base font-semibold text-ink sm:text-lg">
                        {recommendation.secondary.title}
                      </h4>
                      <p className="mb-3 text-xs text-ink/60 sm:text-sm">
                        {recommendation.secondary.subtitle}
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => setSelectedCourse(recommendation.secondary)}
                        className="w-full text-sm"
                      >
                        Enroll for free
                      </Button>
                    </Card>
                  </div>

                  <div className="text-center">
                    <Button variant="ghost" onClick={resetQuiz} className="text-sm">
                      Retake assessment
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="text-xs text-ink/60 sm:text-sm">
                      Question {quizStep + 1} of {quizQuestions.length}
                    </span>
                    <div className="flex gap-1">
                      {quizQuestions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 w-6 rounded-full transition-colors sm:w-8 ${
                            idx < quizStep
                              ? "bg-blue"
                              : idx === quizStep
                                ? "bg-blue/50"
                                : "bg-ink/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="mb-6 text-lg font-semibold text-ink sm:text-xl">
                    {quizQuestions[quizStep].question}
                  </h3>

                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(quizQuestions[quizStep].id, option.score)}
                        className={`min-h-12 w-full rounded-2xl border bg-white p-4 text-left transition-all hover:border-blue/55 hover:bg-cream ${
                          quizAnswers[quizQuestions[quizStep].id] === option.score
                            ? "border-blue bg-cream"
                            : "border-ink/10"
                        }`}
                      >
                        <span className="text-sm text-ink sm:text-base">{option.label}</span>
                      </button>
                    ))}
                  </div>

                  {quizStep > 0 && (
                    <button
                      onClick={() => setQuizStep((prev) => prev - 1)}
                      className="mt-4 inline-flex min-h-11 items-center text-sm text-ink/50 transition-colors hover:text-ink"
                    >
                      ← Previous question
                    </button>
                  )}
                </div>
              )}
            </Card>
          </div>
        </Section>
      </div>

      {/* Curriculum */}
      <div
        data-bot-stop
        data-bot-fx="0.5"
        data-bot-say="Every course is built from real builds, not theory."
      >
        <Section id="courses">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 sm:mb-8">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-blue">
                Curriculum
              </p>
              <h2 className="font-display text-2xl font-medium leading-[1.05] text-ink sm:text-3xl md:text-4xl lg:text-5xl">
                Five courses, ordered by where you are
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button
                variant={level === "beginner" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setLevel("beginner")}
              >
                Beginner
              </Button>
              <Button
                variant={level === "advanced" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setLevel("advanced")}
              >
                Advanced
              </Button>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {visibleCourses.map((course, index) => (
              <ExpandableDetailPanel
                key={course.id}
                title={course.title}
                summary={`${course.level} · ${course.duration} · ${course.subtitle}`}
                defaultOpen={index === 0}
              >
                <CoursePanelBody course={course} onEnroll={() => setSelectedCourse(course)} />
              </ExpandableDetailPanel>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <div
        data-bot-stop
        data-bot-fx="0.45"
        data-bot-say="Got questions? Most answers are here."
      >
        <FaqSection
          title="Questions about the Academy"
          eyebrow="FAQ"
          items={faqItems}
        />
      </div>

      {/* CTA band */}
      <div
        data-bot-stop
        data-bot-fx="0.85"
        data-bot-say="If you want it done for you, we build with you."
      >
        <CtaBand
          title="Want us to build it with you?"
          copy="Book a free call and we'll map the highest-ROI automations in your stack — no pitch deck required."
          primaryHref="/book"
          primaryLabel="Book a call"
          secondaryHref="/contact"
          secondaryLabel="Talk to us"
        />
      </div>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <EnrollmentModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </>
  );
}

function EnrollmentModal({
  course,
  onClose
}: {
  course: (typeof courses)[0];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <Card className="p-5 sm:p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink/50 transition-colors hover:bg-ink/[0.06] hover:text-ink"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mb-6 pr-10">
            <span className="mb-2 inline-block rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-medium text-blue">
              Free course
            </span>
            <h3 className="text-lg font-semibold text-ink sm:text-xl lg:text-2xl">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-ink/60 sm:text-base">{course.subtitle}</p>
          </div>

          <AcademyEnrollForm
            courseId={course.id}
            courseName={`${course.title}: ${course.subtitle}`}
            onSuccess={onClose}
          />
        </Card>
      </div>
    </div>
  );
}
