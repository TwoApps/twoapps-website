import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Bricolage_Grotesque, Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { PlausibleScript } from "@/components/plausible-script";
import { baseMetadata, siteGraph } from "@/lib/seo";

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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontSerifAccent.variable} ${fontMono.variable}`}
    >
      <body className="font-body antialiased">
        <PlausibleScript />
        <Analytics />
        <JsonLd data={siteGraph()} />
        {children}
      </body>
    </html>
  );
}
