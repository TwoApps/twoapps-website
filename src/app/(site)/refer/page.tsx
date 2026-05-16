import { buildMetadata } from "@/lib/seo";
import ReferralContent from "./referral-content";

export const metadata = buildMetadata({
  title: "Referral Program — Earn project credit",
  description:
    "Refer a business and you both win. You get a project credit when they take an audit. They get automation insights. No limits on referrals.",
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
