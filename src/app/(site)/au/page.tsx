import { RegionalPage } from "@/components/microsites/regional-page";
import { auConfig } from "@/components/microsites/au-config";

export const metadata = {
  title: auConfig.meta.title,
  description: auConfig.meta.description,
  keywords: auConfig.meta.keywords,
  openGraph: {
    title: auConfig.meta.title,
    description: auConfig.meta.description,
    images: [auConfig.meta.ogImage || "/og-default.svg"],
  },
  alternates: {
    canonical: auConfig.meta.canonicalPath || "/au",
    languages: {
      "en-au": "/au",
      "en-sg": "/sg",
      "en-nz": "/nz",
      "en-ae": "/ae",
      "en-eu": "/eu",
      "x-default": "/",
    },
  },
};

export default function AustraliaPage() {
  return (
    <RegionalPage config={auConfig} />
  );
}
