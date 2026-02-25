import { getBookingUrl } from "@/lib/site-config";
import { buildMetadata, localBusinessSchema, organizationSchema } from "@/lib/seo";

import { CtaBand } from "@/components/common/cta-band";
import { JsonLd } from "@/components/json-ld";
import { AnimatedHero } from "@/components/home/animated-hero";
import {
  AudienceSplitSection,
  FounderProofSection,
  IndustriesAndRegionsSection,
  ProcessSection,
  ServicesOverviewSection,
  WorkPreviewSection
} from "@/components/home/home-sections";

export const metadata = buildMetadata({
  title: "Agentic AI Software House in Dubai",
  description:
    "Two Apps is a Dubai-based agentic AI software house building AI automations, Claude-powered delivery workflows, and white-label AI implementation for agencies and software houses.",
  canonicalPath: "/",
  keywords: [
    "dubai agentic ai software house",
    "claude code automation partner",
    "white label ai delivery partner",
    "uae ai automation agency"
  ],
  ogImage: "/og-default.svg"
});

export default function HomePage() {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
      <AnimatedHero bookingHref={bookingHref} />
      <AudienceSplitSection />
      <ServicesOverviewSection />
      <FounderProofSection />
      <WorkPreviewSection />
      <IndustriesAndRegionsSection />
      <ProcessSection />
      <CtaBand
        title="Start with one high-value workflow or one white-label AI pilot"
        copy="The fastest path is a focused pilot: one workflow, one client scope, one measurable outcome. Build credibility and systems first, then expand."
        primaryHref={bookingHref}
        primaryLabel="Book discovery call"
      />
    </>
  );
}
