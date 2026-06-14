import { easternEuropeConfig } from "@/components/microsites/eastern-europe-config";
import { RegionalPage } from "@/components/microsites/regional-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: easternEuropeConfig.meta.title,
  description: easternEuropeConfig.meta.description,
  canonicalPath: "/ee",
  keywords: easternEuropeConfig.meta.keywords,
  ogImage: easternEuropeConfig.meta.ogImage,
});

export default function EasternEuropePage() {
  return <RegionalPage config={easternEuropeConfig} />;
}
