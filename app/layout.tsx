import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    "The Loken Group — #1 Large Team in Houston and #1 KW Team Worldwide. We guarantee to sell your home or we'll buy it.",
  keywords: [
    "Houston real estate",
    "sell home Houston",
    "buy home Houston",
    "guaranteed home sale",
    "The Woodlands real estate",
    "Katy TX homes",
    "Loken Group",
    "Keller Williams Houston",
  ],
  authors: [{ name: BRAND.name, url: BRAND.url }],
  creator: BRAND.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BRAND.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description:
      "#1 Large Team in Houston. We guarantee to sell your home or we'll buy it.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: "#1 Large Team in Houston. Guaranteed Home Sale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#BE1E2D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#BE1E2D] focus:text-white focus:font-sans focus:font-semibold focus:text-sm focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
