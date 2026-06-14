import {
  buildMetadata,
  makeBreadcrumbSchema,
  makeFaqPageSchema,
  makeHowToSchema,
  organizationSchema
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import { CommunityContent } from "./community-content";

export const metadata = buildMetadata({
  title: "TwoApps Client Community",
  description:
    "Join the TwoApps Client Community — a private Slack space for operators and agency founders shipping AI automation. Get peer playbooks, early access, and direct team support.",
  canonicalPath: "/community",
  keywords: [
    "TwoApps community",
    "AI automation community",
    "workflow automation network",
    "AI automation Slack community",
    "agency automation peer network"
  ],
  ogImage: "/og-default.svg"
});

const joinSteps = [
  "Request access using the form on this page. We review every application to keep the room relevant.",
  "Once approved, you'll receive a Slack invite at the email you provided — usually within 24-48 hours.",
  "Join the workspace, say hello in #welcome, and start tapping into playbooks, AMAs, and peer support."
];

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

export default function CommunityPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Community", path: "/community" }
          ]),
          makeHowToSchema({
            name: "How to join the TwoApps Client Community",
            description:
              "Request access, get approved, and join our private Slack community for AI automation operators and agency partners.",
            steps: joinSteps,
            totalTime: "P2D"
          }),
          makeFaqPageSchema(faqs)
        ]}
      />
      <CommunityContent />
    </>
  );
}
