import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { featuredServices, highlightedServices } from "@/content";

export function HighlightedServicesSection() {
  return (
    <SectionWrapper id="services-preview" aria-labelledby="services-preview-heading" className="bg-[oklch(0.95_0.04_255)]">
      <div className="text-center">
        <h2
          id="services-preview-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {highlightedServices.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          {highlightedServices.description}
        </p>
      </div>

      <ul
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label={highlightedServices.listAriaLabel}
      >
        {featuredServices.map((service) => (
          <li key={service.id} className="flex">
            <Link
              href={`/services/${service.slug}`}
              className="flex w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
              aria-label={`${service.title} – részletek megtekintése`}
            >
              <ServiceCard service={service} headingLevel="h3" methodologyVariant="truncated" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/services">{highlightedServices.ctaButton}</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
