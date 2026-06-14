import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Bricolage_Grotesque, Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { PlausibleScript } from "@/components/plausible-script";
import { baseMetadata, siteGraph } from "@/lib/seo";
import { getGa4MeasurementId } from "@/lib/site-config";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f5ef"
};

const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-display",
  display: "swap"
});

const fontBody = Instrument_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-body",
  display: "swap"
});

const fontSerifAccent = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-accent",
  display: "swap"
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Warm the analytics origins early so the deferred (lazyOnload) gtag fetch is
  // cheaper. Only emit hints for origins actually used, to stay within the
  // recommended ≤4 preconnects and avoid speculative connections.
  const preconnectGa4 = Boolean(getGa4MeasurementId()) && process.env.NODE_ENV === "production";
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontSerifAccent.variable} ${fontMono.variable}`}
    >
      <head>
        {preconnectGa4 ? (
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        ) : null}
        {plausibleDomain ? (
          <link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
        ) : null}
      </head>
      <body className="font-body antialiased">
        <PlausibleScript />
        <Analytics />
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
