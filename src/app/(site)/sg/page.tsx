import { RegionalPage } from "@/components/microsites/regional-page";
import { sgConfig } from "@/components/microsites/sg-config";

export const metadata = {
  title: sgConfig.meta.title,
  description: sgConfig.meta.description,
  keywords: sgConfig.meta.keywords,
  openGraph: {
    title: sgConfig.meta.title,
    description: sgConfig.meta.description,
    images: [sgConfig.meta.ogImage || "/og-default.svg"],
  },
  alternates: {
    canonical: sgConfig.meta.canonicalPath || "/sg",
    languages: {
      "en-sg": "/sg",
      "en-au": "/au",
      "en-nz": "/nz",
      "en-ae": "/ae",
      "en-eu": "/eu",
      "x-default": "/",
    },
  },
};

export default function SingaporePage() {
  return (
    <RegionalPage config={sgConfig} />
  );
}
