import {
  buildMetadata,
  makeBreadcrumbSchema,
  makeHowToSchema,
  organizationSchema
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

import AcademyContent from "./academy-content";

export const metadata = buildMetadata({
  title: "TwoApps Academy — Free AI Automation Courses",
  description:
    "Free, self-paced AI automation courses built from real client work. Learn what to automate, how to build it, and how to stay compliant — no technical team required.",
  canonicalPath: "/academy",
  keywords: [
    "free ai automation course",
    "ai workflow audit",
    "compliance first ai",
    "learn ai automation",
    "twoapps academy"
  ],
  ogImage: "/og-default.png"
});

const enrollmentSteps = [
  "Pick the course that matches your level, or take the 2-minute quiz to find your fastest win.",
  "Enroll with your email. No credit card, no spam — just the course PDF sent straight to your inbox.",
  "Download the framework and apply it to a real workflow in your business the same day."
];

export default function AcademyPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Academy", path: "/academy" }
          ]),
          makeHowToSchema({
            name: "How to enroll in a TwoApps Academy course",
            description:
              "Pick a course, enroll with your email, and download the free PDF framework to apply immediately.",
            steps: enrollmentSteps,
            totalTime: "PT5M"
          })
        ]}
      />
      <AcademyContent />
    </>
  );
}
