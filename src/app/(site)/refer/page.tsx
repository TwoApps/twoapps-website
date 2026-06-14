import {
  buildMetadata,
  makeBreadcrumbSchema,
  makeHowToSchema,
  organizationSchema
} from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

import { ReferralContent } from "./referral-content";

export const metadata = buildMetadata({
  title: "Referral Program — Earn $500 project credit",
  description:
    "Refer a business to TwoApps and you both win. They get a free workflow audit; you get $500 in project credit. No limits on referrals.",
  canonicalPath: "/refer",
  keywords: [
    "twoapps referral program",
    "ai automation referral",
    "workflow audit free",
    "business referral credit",
    "earn project credit twoapps"
  ],
  ogImage: "/og-default.png"
});

const referralSteps = [
  "Fill in the referral form with your details and the business you're recommending.",
  "We'll reach out and book them a free workflow audit.",
  "Once they complete the audit, your $500 project credit is activated."
];

export default function ReferPage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          makeBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Referral Program", path: "/refer" }
          ]),
          makeHowToSchema({
            name: "How to refer a business to TwoApps",
            description:
              "Submit a referral, we'll book the business a free workflow audit, and you'll earn $500 in project credit when the audit is complete.",
            steps: referralSteps,
            totalTime: "PT5M"
          })
        ]}
      />
      <ReferralContent />
    </>
  );
}
