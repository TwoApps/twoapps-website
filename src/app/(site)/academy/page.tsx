"use client";

import { useState } from "react";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/common/cta-band";
import { DetailPanelsSection } from "@/components/scenes/detail-panels-section";
import { AcademyEnrollForm } from "@/components/academy/academy-enroll-form";
import { ScrollBot } from "@/components/shared/scroll-bot";

// Course definitions
const courses = [
  {
    id: "ai-workflow-audit",
    title: "AI Workflow Audit",
    subtitle: "Find Your Bottlenecks in 30 Minutes",
    description: "A 5-step framework to identify automation opportunities in your business. Includes checklists for common manual workflows and an ROI calculator template.",
    duration: "30 min read",
    level: "Beginner",
    topics: [
      "5-step audit framework",
      "Common workflow patterns checklist",
      "ROI calculator template",
      "Quick wins identification"
    ],
    cta: "Book a Free Audit with TwoApps",
    ctaHref: "/book",
    color: "accent-1"
  },
  {
    id: "build-first-automation",
    title: "Build Your First Automation",
    subtitle: "A Non-Technical Guide",
    description: "Learn what can be automated with a simple decision tree. See 5 real workflow examples with before/after comparisons and implementation timelines.",
    duration: "45 min read",
    level: "Beginner",
    topics: [
      "Automation decision tree",
      "5 real workflow examples",
      "Implementation timeline template",
      "Tool selection guide"
    ],
    cta: "Start a Pilot with TwoApps",
    ctaHref: "/book",
    color: "accent-2"
  },
  {
    id: "compliance-first-ai",
    title: "Compliance-First AI",
    subtitle: "A Guide for Regulated Industries",
    description: "Navigate GDPR, MAS, and PDPA requirements for AI automation. Learn how to build compliant workflows with our comprehensive checklist.",
    duration: "40 min read",
    level: "Intermediate",
    topics: [
      "GDPR, MAS, PDPA requirements",
      "Compliant automation patterns",
      "AI compliance review checklist",
      "Documentation templates"
    ],
    cta: "Get a Compliance Review",
    ctaHref: "/book",
    color: "accent-1"
  },
  {
    id: "ai-sales-pipeline",
    title: "AI-Powered Sales Pipeline",
    subtitle: "From Lead to Close",
    description: "Discover how AI transforms your sales pipeline — from lead scoring to automated follow-ups. 5 real pipeline automation examples with measurable results.",
    duration: "50 min read",
    level: "Intermediate",
    topics: [
      "AI lead scoring & qualification",
      "5 pipeline automation examples",
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
    subtitle: "Architecture for Regulated AI",
    description: "Map regulatory requirements to AI components. Learn architecture patterns, vendor evaluation checklists, and compliance audit templates.",
    duration: "55 min read",
    level: "Advanced",
    topics: [
      "GDPR/MAS/PDPA mapped to AI",
      "Compliant architecture patterns",
      "Vendor evaluation checklist",
      "Compliance audit template"
    ],
    cta: "Get a Compliance Review",
    ctaHref: "/book",
    color: "accent-1"
  }
];

// Quiz questions
const quizQuestions = [
  {
    id: "company_size",
    question: "What's your company size?",
    options: [
      { label: "1-10 employees", value: 1, score: 1 },
      { label: "11-50 employees", value: 2, score: 2 },
      { label: "51-200 employees", value: 3, score: 3 },
      { label: "200+ employees", value: 4, score: 4 }
    ]
  },
  {
    id: "automation_level",
    question: "What's your current level of automation?",
    options: [
      { label: "Mostly manual processes", value: 1, score: 1 },
      { label: "Some basic automation (spreadsheets, templates)", value: 2, score: 2 },
      { label: "Using automation tools (Zapier, etc.)", value: 3, score: 3 },
      { label: "Advanced automation with custom integrations", value: 4, score: 4 }
    ]
  },
  {
    id: "pain_points",
    question: "What's your biggest automation challenge?",
    options: [
      { label: "Don't know where to start", value: 1, score: 1, recommendation: "audit" },
      { label: "Need to understand what's possible", value: 2, score: 2, recommendation: "first-automation" },
      { label: "Compliance concerns holding us back", value: 3, score: 3, recommendation: "compliance" },
      { label: "Need to scale existing automation", value: 4, score: 4, recommendation: "advanced" }
    ]
  },
  {
    id: "budget",
    question: "What scale of automation are you considering?",
    options: [
      { label: "Just exploring what's possible", value: 1, score: 1 },
      { label: "Targeted automation projects", value: 2, score: 2 },
      { label: "Comprehensive automation programme", value: 3, score: 3 },
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

// Recommendation logic
function getRecommendation(answers: Record<string, number>): {
  primary: typeof courses[0];
  secondary: typeof courses[0];
  message: string;
  cta: string;
} {
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const painPoint = answers.pain_points;

  // Pain point driven recommendations
  if (painPoint === 1) {
    return {
      primary: courses[0], // Workflow Audit
      secondary: courses[1], // First Automation
      message: "You're at the perfect starting point. Begin with the Workflow Audit to identify your biggest opportunities, then move to First Automation to learn what's possible.",
      cta: "Start with the Workflow Audit course"
    };
  }

  if (painPoint === 3) {
    return {
      primary: courses[2], // Compliance-First AI
      secondary: courses[4], // Compliance-Ready Stack
      message: "Compliance is critical for your situation. Start with Compliance-First AI to understand the landscape, then dive into the Compliance-Ready Stack for implementation.",
      cta: "Start with the Compliance-First AI course"
    };
  }

  // Score-based recommendations
  if (totalScore <= 8) {
    return {
      primary: courses[0], // Workflow Audit
      secondary: courses[1], // First Automation
      message: "You're just getting started. Focus on identifying quick wins with the Workflow Audit, then learn to implement them with First Automation.",
      cta: "Start with the Workflow Audit course"
    };
  }

  if (totalScore <= 12) {
    return {
      primary: courses[1], // First Automation
      secondary: courses[3], // Sales Pipeline
      message: "You have the basics. Now it's time to build real automation. Start with First Automation for the framework, then explore Sales Pipeline for high-ROI applications.",
      cta: "Start with the First Automation course"
    };
  }

  if (totalScore <= 16) {
    return {
      primary: courses[3], // Sales Pipeline
      secondary: courses[4], // Compliance-Ready Stack
      message: "You're ready for advanced automation. The Sales Pipeline course shows high-ROI implementations, while Compliance-Ready Stack prepares you for enterprise scale.",
      cta: "Start with the AI-Powered Sales Pipeline course"
    };
  }

  return {
    primary: courses[4], // Compliance-Ready Stack
    secondary: courses[3], // Sales Pipeline
    message: "You're operating at enterprise level. Focus on building a compliant, scalable AI stack with the Compliance-Ready Stack course, then optimize your pipeline.",
    cta: "Start with the Compliance-Ready Stack course"
  };
}

const BEGINNER_IDS = ["ai-workflow-audit", "build-first-automation", "compliance-first-ai"];
const ADVANCED_IDS = ["ai-sales-pipeline", "compliance-ready-stack"];

const outcomes = [
  { title: "Spot what to automate first", body: "Identify the manual work that's costing you the most." },
  { title: "Build without breaking compliance", body: "Stay on the right side of GDPR, MAS, and PDPA from day one." },
  { title: "Use it the same day", body: "Practical frameworks you can apply to a real workflow today." }
];

function CoursePanelBody({
  course,
  onEnroll
}: {
  course: typeof courses[0];
  onEnroll: () => void;
}) {
  return (
    <div className="space-y-5">
      <p className="text-sm sm:text-base leading-relaxed text-ink/78">{course.description}</p>
      <div>
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
          What you&apos;ll learn
        </h4>
        <ul className="space-y-2">
          {course.topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-ink/80">
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
      <Button onClick={onEnroll} className="w-full sm:w-auto">Enroll</Button>
    </div>
  );
}

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [level, setLevel] = useState<"beginner" | "advanced">("beginner");

  const handleAnswerSelect = (questionId: string, value: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: value }));

    if (quizStep < quizQuestions.length - 1) {
      setTimeout(() => setQuizStep(prev => prev + 1), 300);
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

      <div data-bot-stop data-bot-fx="0.15" data-bot-say="This academy turns your team into AI operators in a weekend.">
        <PageHero
          eyebrow="TwoApps Academy"
          title="Free AI automation courses for operators"
          description="Practical mini-courses that show you what to automate, how to build it, and how to stay compliant. Pick a course and start in five minutes."
          chips={["Free PDF downloads", "Self-paced", "Practical frameworks", "No sign-up wall"]}
        />
      </div>

      {/* Outcomes strip */}
      <div data-bot-stop data-bot-fx="0.3" data-bot-say="Know exactly what to automate first — and what it's worth.">
        <Section className="pt-8 sm:pt-10 pb-8 sm:pb-10">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-ink/10 bg-white p-5 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-ink/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Course finder (quiz, collapsed by default) */}
      <div data-bot-stop data-bot-fx="0.7" data-bot-say="Not sure where to start? The quiz finds your fastest win.">
        <Section className="pt-4 pb-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[22px] border border-ink/10 bg-white p-5 sm:p-6 md:p-8 shadow-[0_1px_2px_rgba(22,21,15,0.04)]">
            {!quizStarted ? (
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full border border-ink/10 bg-cream p-3">
                  <svg className="h-6 w-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl sm:text-2xl font-semibold text-ink">
                  Not sure where to start?
                </h3>
                <p className="mb-6 text-sm sm:text-base text-ink/70">
                  Answer five quick questions. We&apos;ll point you at the right course.
                </p>
                <Button onClick={() => setQuizStarted(true)} className="w-full sm:w-auto">
                  Get a course recommendation in 2 minutes
                </Button>
              </div>
            ) : showResult && recommendation ? (
              <div>
                <div className="mb-6 text-center">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-cream px-4 py-1.5 text-sm font-medium text-blue">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Your recommended course
                  </div>
                </div>

                <div className="mb-6 rounded-xl bg-cream border border-ink/10 p-5">
                  <p className="text-sm text-ink/80 leading-relaxed mb-4">
                    {recommendation.message}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
                  <Card className="p-4 sm:p-5 bg-cream border-blue/30">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-blue">
                      Start here
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-ink mb-1">
                      {recommendation.primary.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink/60 mb-3">
                      {recommendation.primary.subtitle}
                    </p>
                    <Button
                      onClick={() => setSelectedCourse(recommendation.primary)}
                      className="w-full text-sm"
                    >
                      Enroll
                    </Button>
                  </Card>

                  <Card className="p-4 sm:p-5">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-ink/50">
                      Then this
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-ink mb-1">
                      {recommendation.secondary.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink/60 mb-3">
                      {recommendation.secondary.subtitle}
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedCourse(recommendation.secondary)}
                      className="w-full text-sm"
                    >
                      Enroll
                    </Button>
                  </Card>
                </div>

                <div className="text-center">
                  <Button variant="ghost" onClick={resetQuiz} className="text-sm">
                    Retake Assessment
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm text-ink/60">
                    Question {quizStep + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex gap-1">
                    {quizQuestions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 w-6 sm:w-8 rounded-full transition-colors ${
                          idx < quizStep ? "bg-blue" : idx === quizStep ? "bg-blue/50" : "bg-ink/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="mb-6 text-lg sm:text-xl font-semibold text-ink">
                  {quizQuestions[quizStep].question}
                </h3>

                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(quizQuestions[quizStep].id, option.score)}
                      className={`w-full min-h-12 rounded-2xl border bg-white p-4 text-left transition-all hover:border-blue/55 hover:bg-cream ${
                        quizAnswers[quizQuestions[quizStep].id] === option.score
                          ? "border-blue bg-cream"
                          : "border-ink/10"
                      }`}
                    >
                      <span className="text-sm sm:text-base text-ink">{option.label}</span>
                    </button>
                  ))}
                </div>

                {quizStep > 0 && (
                  <button
                    onClick={() => setQuizStep(prev => prev - 1)}
                    className="mt-4 inline-flex min-h-11 items-center text-sm text-ink/50 hover:text-ink transition-colors"
                  >
                    ← Previous question
                  </button>
                )}
              </div>
            )}
            </div>
          </div>
        </Section>
      </div>

      {/* Curriculum (panels with beginner/advanced toggle) */}
      <div data-bot-stop data-bot-fx="0.5" data-bot-say="Every course is built from real builds, not theory.">
        <div id="courses">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
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
          <DetailPanelsSection
            eyebrow="Curriculum"
            title="Five courses, ordered by where you are"
            items={visibleCourses.map((c) => ({
              title: c.title,
              summary: `${c.level} · ${c.duration} · ${c.subtitle}`,
              content: <CoursePanelBody course={c} onEnroll={() => setSelectedCourse(c)} />
            }))}
          />
        </div>
      </div>

      {/* CTA band */}
      <div data-bot-stop data-bot-fx="0.85" data-bot-say="If you want it done for you, we build with you.">
        <CtaBand
          title="Want us to build it with you?"
          copy="Book a call and we'll map the highest-ROI automations in your stack."
          primaryHref="/book"
          primaryLabel="Book a call"
          secondaryHref="/contact"
          secondaryLabel="Talk to us"
        />
      </div>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <EnrollmentModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}

function EnrollmentModal({
  course,
  onClose
}: {
  course: typeof courses[0];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <Card className="p-5 sm:p-6 md:p-8">
          {/* Header */}
          <div className="mb-6 pr-10">
            <button
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink/50 hover:text-ink hover:bg-ink/[0.06] transition-colors"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="mb-2 inline-block rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-medium text-blue">
              Free Course
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-ink">
              {course.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-ink/60">
              {course.subtitle}
            </p>
          </div>

          {/* Form */}
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
