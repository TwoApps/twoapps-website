import { latamConfig } from "@/components/microsites/latam-config";
import { RegionalPage } from "@/components/microsites/regional-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: latamConfig.meta.title,
  description: latamConfig.meta.description,
  canonicalPath: "/latam",
  keywords: latamConfig.meta.keywords,
  ogImage: latamConfig.meta.ogImage,
});

export default function LatamPage() {
  return <RegionalPage config={latamConfig} />;
}
