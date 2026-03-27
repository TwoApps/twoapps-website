"use client";

import { useState } from "react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AcademyEnrollForm } from "@/components/academy/academy-enroll-form";

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
    question: "What's your budget range for automation?",
    options: [
      { label: "Looking for DIY / low-cost options", value: 1, score: 1 },
      { label: "$5K - $25K for key projects", value: 2, score: 2 },
      { label: "$25K - $100K for comprehensive automation", value: 3, score: 3 },
      { label: "$100K+ for enterprise-scale transformation", value: 4, score: 4 }
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

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [quizStep, setQuizStep] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

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

  return (
    <>
      <PageHero
        eyebrow="TwoApps Academy"
        title="Learn AI Automation — Free Courses for Modern Teams"
        description="Practical mini-courses to help you identify automation opportunities, build your first workflows, and stay compliant. No fluff — just actionable guides you can use today."
        chips={["Free PDF Downloads", "No LMS Required", "Self-Paced", "Practical Frameworks"]}
      />

      <Section className="pt-8 pb-16">
        {/* Lead Assessment Quiz Section */}
        <div className="mx-auto max-w-3xl mb-16">
          <div className="rounded-2xl border border-accent-1/30 bg-gradient-to-br from-accent-1/10 to-transparent p-6 sm:p-8">
            {!quizStarted ? (
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-accent-1/20 p-3">
                  <svg className="h-6 w-6 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-ink">
                  Not Sure Which Course Is Right for You?
                </h3>
                <p className="mb-6 text-sm text-ink/70">
                  Answer 5 quick questions and we&apos;ll recommend the perfect starting point for your automation journey.
                </p>
                <Button onClick={() => setQuizStarted(true)}>
                  Take the Assessment — 2 Minutes
                </Button>
              </div>
            ) : showResult && recommendation ? (
              <div>
                <div className="mb-6 text-center">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-1/20 px-4 py-1.5 text-sm font-medium text-accent-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Your Personalized Recommendation
                  </div>
                </div>
                
                <div className="mb-6 rounded-xl bg-white/5 p-5 border border-white/10">
                  <p className="text-sm text-ink/80 leading-relaxed mb-4">
                    {recommendation.message}
                  </p>
                </div>
                
                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <Card className="p-4 border-accent-1/50 bg-accent-1/5">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-accent-1">
                      Primary Recommendation
                    </div>
                    <h4 className="text-base font-semibold text-ink mb-1">
                      {recommendation.primary.title}
                    </h4>
                    <p className="text-xs text-ink/60 mb-3">
                      {recommendation.primary.subtitle}
                    </p>
                    <Button 
                      onClick={() => setSelectedCourse(recommendation.primary)}
                      className="w-full text-sm"
                    >
                      Enroll Free
                    </Button>
                  </Card>
                  
                  <Card className="p-4 border-white/10">
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-ink/50">
                      Also Recommended
                    </div>
                    <h4 className="text-base font-semibold text-ink mb-1">
                      {recommendation.secondary.title}
                    </h4>
                    <p className="text-xs text-ink/60 mb-3">
                      {recommendation.secondary.subtitle}
                    </p>
                    <Button 
                      variant="secondary" 
                      onClick={() => setSelectedCourse(recommendation.secondary)}
                      className="w-full text-sm"
                    >
                      Enroll Free
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
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm text-ink/60">
                    Question {quizStep + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex gap-1">
                    {quizQuestions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1.5 w-8 rounded-full transition-colors ${
                          idx < quizStep ? "bg-accent-1" : idx === quizStep ? "bg-accent-1/50" : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="mb-6 text-lg font-semibold text-ink">
                  {quizQuestions[quizStep].question}
                </h3>
                
                <div className="space-y-3">
                  {quizQuestions[quizStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(quizQuestions[quizStep].id, option.score)}
                      className={`w-full rounded-lg border p-4 text-left transition-all hover:border-accent-1/50 hover:bg-white/5 ${
                        quizAnswers[quizQuestions[quizStep].id] === option.score
                          ? "border-accent-1 bg-accent-1/10"
                          : "border-white/10"
                      }`}
                    >
                      <span className="text-sm text-ink">{option.label}</span>
                    </button>
                  ))}
                </div>
                
                {quizStep > 0 && (
                  <button
                    onClick={() => setQuizStep(prev => prev - 1)}
                    className="mt-4 text-sm text-ink/50 hover:text-ink transition-colors"
                  >
                    ← Previous question
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink">All Courses</h2>
            <div className="flex gap-2 text-xs">
              <span className="rounded-full bg-accent-1/20 px-3 py-1 text-accent-1">Beginner</span>
              <span className="rounded-full bg-accent-2/20 px-3 py-1 text-accent-2">Intermediate</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-ink/70">Advanced</span>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={setSelectedCourse}
              />
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h3 className="mb-4 text-center text-lg font-semibold text-ink">
              Why Learn with TwoApps Academy?
            </h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-1/20">
                  <svg className="h-5 w-5 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-ink">Practical Content</h4>
                <p className="mt-1 text-xs text-ink/60">Real frameworks, not theory</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-1/20">
                  <svg className="h-5 w-5 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-ink">Compliance-Ready</h4>
                <p className="mt-1 text-xs text-ink/60">GDPR, MAS, PDPA aligned</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-1/20">
                  <svg className="h-5 w-5 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-ink">Immediate Value</h4>
                <p className="mt-1 text-xs text-ink/60">Use it today, see results</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Band */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm text-ink/60">
            Want personalized help implementing these frameworks?{" "}
            <Button href="/book" variant="ghost" className="px-0">
              Book a free workflow audit
            </Button>
          </p>
        </div>
      </Section>

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

function CourseCard({ 
  course, 
  onSelect 
}: { 
  course: typeof courses[0];
  onSelect: (course: typeof courses[0]) => void;
}) {
  const levelColor = {
    "Beginner": "bg-accent-1/20 text-accent-1",
    "Intermediate": "bg-accent-2/20 text-accent-2",
    "Advanced": "bg-white/10 text-ink/70"
  }[course.level || "Beginner"];

  return (
    <Card className="flex flex-col p-6 sm:p-8">
      {/* Course Header */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-ink/70">
            {course.duration}
          </span>
          {course.level && (
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${levelColor}`}>
              {course.level}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-ink sm:text-2xl">
          {course.title}
        </h3>
        <p className="mt-1 text-base text-accent-1">
          {course.subtitle}
        </p>
      </div>

      {/* Course Description */}
      <p className="mb-6 text-sm leading-relaxed text-ink/70">
        {course.description}
      </p>

      {/* Topics List */}
      <div className="mb-6 flex-1">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
          What You&apos;ll Learn
        </h4>
        <ul className="space-y-2">
          {course.topics.map((topic, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink/80">
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-1"
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

      {/* CTA Button */}
      <Button
        onClick={() => onSelect(course)}
        className="w-full"
      >
        Enroll Free — Get PDF
      </Button>
    </Card>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-ink/50 hover:text-ink hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span className="mb-2 inline-block rounded-full bg-accent-1/20 px-3 py-1 text-xs font-medium text-accent-1">
              Free Course
            </span>
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">
              {course.title}
            </h3>
            <p className="mt-1 text-sm text-ink/60">
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
