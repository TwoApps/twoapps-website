import { getBookingUrl } from "@/lib/site-config";
import { buildMetadata, localBusinessSchema, organizationSchema } from "@/lib/seo";

import { JsonLd } from "@/components/json-ld";
import { CinematicHomeExperience } from "@/components/home/cinematic-home";

export const metadata = buildMetadata({
  title: "AI Automation for Marketing, Analytics & Operations Teams",
  description:
    "TwoApps is a UAE-based AI automation partner. We help business teams cut 20+ hours of manual work every week by automating marketing, analytics, and operations workflows.",
  canonicalPath: "/",
  keywords: [
    "ai automation uae",
    "marketing automation dubai",
    "analytics automation gcc",
    "ai workflow automation middle east",
    "ai delivery for agencies",
    "mvp development uae"
  ],
  ogImage: "/og-default.png"
});

export default function HomePage() {
  const bookingHref = getBookingUrl() ?? "/book";

  return (
    <>
      <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
      <CinematicHomeExperience bookingHref={bookingHref} />
    </>
  );
}
