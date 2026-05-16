import type { Metadata } from "next";
import "./globals.css";

import { JsonLd } from "@/components/json-ld";
import { PlausibleScript } from "@/components/plausible-script";
import { baseMetadata, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <PlausibleScript />
        <JsonLd data={websiteSchema()} />
        {children}
      </body>
    </html>
  );
}
