import type { Metadata } from "next";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.tornatamas.hu";
export const SITE_NAME = "TTGYT";

/**
 * Merges page-specific metadata with site-wide defaults.
 * Use this in every page's `generateMetadata` or `metadata` export.
 */
export function buildMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    applicationName: SITE_NAME,
    robots: { index: true, follow: true },
    openGraph: {
      siteName: SITE_NAME,
      locale: "hu_HU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@tornatamas",
    },
    ...overrides,
  };
}
