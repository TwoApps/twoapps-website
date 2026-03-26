import { buildMetadata } from "@/lib/seo";

import { PageHero } from "@/components/common/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { AcademyEnrollForm } from "@/components/academy/academy-enroll-form";
import { useState } from "react";

// Course definitions
const courses = [
  {
    id: "ai-workflow-audit",
    title: "AI Workflow Audit",
    subtitle: "Find Your Bottlenecks in 30 Minutes",
    description: "A 5-step framework to identify automation opportunities in your business. Includes checklists for common manual workflows and an ROI calculator template.",
    duration: "30 min read",
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
    topics: [
      "GDPR, MAS, PDPA requirements",
      "Compliant automation patterns",
      "AI compliance review checklist",
      "Documentation templates"
    ],
    cta: "Get a Compliance Review",
    ctaHref: "/book",
    color: "accent-1"
  }
];

export const metadata = buildMetadata({
  title: "TwoApps Academy — Free AI Automation Courses",
  description:
    "Learn AI automation with free mini-courses from TwoApps. Practical guides for workflow audits, building your first automation, and compliance-first AI implementation.",
  canonicalPath: "/academy",
  keywords: [
    "ai automation course",
    "free ai training",
    "workflow automation guide",
    "ai compliance training",
    "automation certification"
  ],
  ogImage: "/og-default.svg"
});

function CourseCard({ 
  course, 
  onSelect 
}: { 
  course: typeof courses[0];
  onSelect: (course: typeof courses[0]) => void;
}) {
  return (
    <Card className="flex flex-col p-6 sm:p-8">
      {/* Course Header */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-ink/70">
            {course.duration}
          </span>
          <span className="rounded-full bg-accent-1/20 px-3 py-1 text-xs font-medium text-accent-1">
            Free
          </span>
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
  course: typeof courses[0] | null;
  onClose: () => void;
}) {
  if (!course) return null;

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

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  return (
    <>
      <PageHero
        eyebrow="TwoApps Academy"
        title="Learn AI Automation — Free Courses for Modern Teams"
        description="Practical mini-courses to help you identify automation opportunities, build your first workflows, and stay compliant. No fluff — just actionable guides you can use today."
        chips={["Free PDF Downloads", "No LMS Required", "Self-Paced", "Practical Frameworks"]}
      />

      <Section className="pt-8 pb-16">
        {/* Courses Grid */}
        <div className="mx-auto max-w-6xl">
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
            <Button href="/book" variant="link" className="px-0">
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
