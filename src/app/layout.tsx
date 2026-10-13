import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – UK Visa Sponsorship Jobs`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2f4bff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={cn("font-sans", geist.variable)}>
      <body id="top" suppressHydrationWarning>
       
        {children}
      </body>
    </html>
  );
}
