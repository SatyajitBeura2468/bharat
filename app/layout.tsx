import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader, Noto_Serif_Devanagari } from "next/font/google";
import Script from "next/script";

import { SearchProvider } from "@/components/search/search-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BHARAT — A living atlas of a civilization",
    template: "%s · BHARAT",
  },
  description: siteConfig.description,
  applicationName: "BHARAT",
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "BHARAT",
    title: "BHARAT — A living atlas of a civilization",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "BHARAT — A living atlas of a civilization",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07111D" },
    { media: "(prefers-color-scheme: light)", color: "#F2EEE5" },
  ],
};

const themeScript = `
try {
  const stored = localStorage.getItem("bharat-theme");
  const theme = stored || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
} catch {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${sans.variable} ${devanagari.variable}`}>
        <Script id="bharat-theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <SearchProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SearchProvider>
      </body>
    </html>
  );
}
