import { buildMetadata } from "@/lib/seo";
import CommunityContent from "./community-content";

export const metadata = buildMetadata({
  title: "Client Community",
  description:
    "Join the TwoApps Client Community — connect with peers, get exclusive content, early access to features, and direct support from the team.",
  canonicalPath: "/community",
  keywords: ["TwoApps community", "AI automation community", "workflow automation network"],
  ogImage: "/og-default.svg"
});

export default function CommunityPage() {
  return <CommunityContent />;
}
