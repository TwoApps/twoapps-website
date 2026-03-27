import { buildMetadata } from "@/lib/seo";
import ReferralContent from "./referral-content";

export const metadata = buildMetadata({
  title: "Referral Program | Get $500 Credit",
  description:
    "Refer a business to TwoApps and you both win. You get $500 credit toward your next project, they get a free $2,000 workflow audit. No limits on referrals.",
  canonicalPath: "/refer",
  keywords: [
    "twoapps referral program",
    "ai automation referral",
    "workflow audit free",
    "business referral credit"
  ],
  ogImage: "/og-default.svg"
});

export default function ReferPage() {
  return <ReferralContent />;
}
