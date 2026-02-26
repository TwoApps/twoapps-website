import { getBookingUrl } from "@/lib/site-config";
import { buildMetadata, localBusinessSchema, organizationSchema } from "@/lib/seo";

import { JsonLd } from "@/components/json-ld";
import { CinematicHomeExperience } from "@/components/home/cinematic-home";

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
      <CinematicHomeExperience bookingHref={bookingHref} />
    </>
  );
}
