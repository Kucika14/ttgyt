import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { buildMetadata, SITE_NAME } from "@/lib/metadata";
import { services, serviceDetail, contactInfo } from "@/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.shortDescription,
    },
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const paragraphs = service.methodologySummary.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="service-detail-heading"
        className="bg-[oklch(0.95_0.04_196)] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="mb-6 inline-block text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {serviceDetail.backLink}
          </Link>
          <h1
            id="service-detail-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Methodology */}
      <SectionWrapper aria-labelledby="methodology-heading">
        <h2
          id="methodology-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          {serviceDetail.methodologyHeading}
        </h2>
        <div className="mt-6 max-w-3xl space-y-4">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-foreground">
              {para}
            </p>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section
        aria-labelledby="service-cta-heading"
        className="bg-[oklch(0.95_0.04_196)] py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="service-cta-heading"
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            {serviceDetail.ctaHeading}
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            {serviceDetail.ctaDescription}
          </p>
          <div className="mt-8">
            <a
              href={contactInfo.phoneHref}
              className="text-lg font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
