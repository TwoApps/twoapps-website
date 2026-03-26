import { RegionalPage } from "@/components/microsites/regional-page";
import { nzConfig } from "@/components/microsites/nz-config";

export const metadata = {
  title: nzConfig.meta.title,
  description: nzConfig.meta.description,
  keywords: nzConfig.meta.keywords,
  openGraph: {
    title: nzConfig.meta.title,
    description: nzConfig.meta.description,
    images: [nzConfig.meta.ogImage || "/og-default.svg"],
  },
  alternates: {
    canonical: nzConfig.meta.canonicalPath || "/nz",
    languages: {
      "en-nz": "/nz",
      "en-sg": "/sg",
      "en-au": "/au",
      "en-ae": "/ae",
      "en-eu": "/eu",
      "x-default": "/",
    },
  },
};

export default function NewZealandPage() {
  return (
    <RegionalPage config={nzConfig} />
  );
}
