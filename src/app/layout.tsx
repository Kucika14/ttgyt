import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata, SITE_NAME, BASE_URL } from "@/lib/metadata";
import { siteMetaContent } from "@/content";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildLocalBusinessSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = buildMetadata({
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteMetaContent.defaultDescription,
  openGraph: {
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteMetaContent.ogImageAlt,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
});

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <JsonLd data={buildLocalBusinessSchema()} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SkipLink />
        <Header />
        {/* tabIndex={-1} allows focus via the skip link without a visible outline */}
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
