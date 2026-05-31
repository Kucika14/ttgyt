import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightedServicesSection } from "@/components/sections/HighlightedServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata } from "@/lib/metadata";
import { homeMetaContent } from "@/content";

export const metadata: Metadata = buildMetadata({
  title: homeMetaContent.title,
  description: homeMetaContent.description,
  openGraph: {
    title: homeMetaContent.ogTitle,
    description: homeMetaContent.ogDescription,
  },
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightedServicesSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
