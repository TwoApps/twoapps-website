import { getBookingUrl } from "@/lib/site-config";
import { buildMetadata, localBusinessSchema, organizationSchema } from "@/lib/seo";

import { JsonLd } from "@/components/json-ld";
import { CinematicHomeExperience } from "@/components/home/cinematic-home";

export const metadata = buildMetadata({
  title: "UAE-Based AI Automation & Software Delivery",
  description:
    "TwoApps is a UAE-based AI automation and software delivery partner serving clients worldwide. We help businesses reduce manual work and help agencies deliver AI projects faster.",
  canonicalPath: "/",
  keywords: [
    "uae ai automation partner",
    "middle east ai automation company",
    "claude code automation partner",
    "white label ai delivery partner",
    "global ai workflow implementation"
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
