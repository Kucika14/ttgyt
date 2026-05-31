import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/AboutSection";
import { buildMetadata } from "@/lib/metadata";
import { aboutMetaContent } from "@/content";

export const metadata: Metadata = buildMetadata({
  title: aboutMetaContent.title,
  description: aboutMetaContent.description,
  openGraph: {
    title: aboutMetaContent.ogTitle,
    description: aboutMetaContent.ogDescription,
  },
});

export default function AboutPage() {
  return <AboutSection />;
}
