import { RegionalPage } from "@/components/microsites/regional-page";
import { aeConfig } from "@/components/microsites/ae-config";

export const metadata = {
  title: aeConfig.meta.title,
  description: aeConfig.meta.description,
  keywords: aeConfig.meta.keywords,
  openGraph: {
    title: aeConfig.meta.title,
    description: aeConfig.meta.description,
    images: [aeConfig.meta.ogImage || "/og-default.svg"],
  },
  alternates: {
    canonical: aeConfig.meta.canonicalPath || "/ae",
    languages: {
      "en-ae": "/ae",
      "en-sg": "/sg",
      "en-au": "/au",
      "en-nz": "/nz",
      "en-eu": "/eu",
      "x-default": "/",
    },
  },
};

export default function UAEPage() {
  return (
    <RegionalPage config={aeConfig} />
  );
}
