import type { Metadata } from "next";

import { ServicesListSection } from "@/components/sections/ServicesListSection";
import { buildMetadata } from "@/lib/metadata";
import { servicesMetaContent, servicesPage } from "@/content";

export const metadata: Metadata = buildMetadata({
  title: servicesMetaContent.title,
  description: servicesMetaContent.description,
  openGraph: {
    title: servicesMetaContent.ogTitle,
    description: servicesMetaContent.ogDescription,
  },
});

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        aria-labelledby="services-page-heading"
        className="bg-section-alt py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1
            id="services-page-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {servicesPage.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {servicesPage.description}
          </p>
        </div>
      </section>

      <ServicesListSection />
    </>
  );
}
