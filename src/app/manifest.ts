import type { MetadataRoute } from "next";

import { BRAND_NAME } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND_NAME,
    short_name: BRAND_NAME,
    description: "UAE-based AI automation and software delivery partner",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5ef",
    theme_color: "#f7f5ef",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}
