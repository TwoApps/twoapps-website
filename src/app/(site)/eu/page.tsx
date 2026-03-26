import { RegionalPage } from "@/components/microsites/regional-page";
import { euConfig } from "@/components/microsites/eu-config";

export const metadata = {
  title: euConfig.meta.title,
  description: euConfig.meta.description,
  keywords: euConfig.meta.keywords,
  openGraph: {
    title: euConfig.meta.title,
    description: euConfig.meta.description,
    images: [euConfig.meta.ogImage || "/og-default.svg"],
  },
  alternates: {
    canonical: euConfig.meta.canonicalPath || "/eu",
    languages: {
      "en-eu": "/eu",
      "en-sg": "/sg",
      "en-au": "/au",
      "en-nz": "/nz",
      "en-ae": "/ae",
      "x-default": "/",
    },
  },
};

export default function EuropePage() {
  return (
    <RegionalPage config={euConfig} />
  );
}
