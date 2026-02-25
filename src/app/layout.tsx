import type { Metadata } from "next";
import "./globals.css";

import { PlausibleScript } from "@/components/plausible-script";
import { baseMetadata } from "@/lib/seo";

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
        {children}
      </body>
    </html>
  );
}
