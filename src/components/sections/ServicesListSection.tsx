import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services, servicesList } from "@/content";

export function ServicesListSection() {
  return (
    <SectionWrapper id="services-list" aria-labelledby="services-list-heading">
      <h2
        id="services-list-heading"
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {servicesList.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        {servicesList.description}
      </p>

      <ul
        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label={servicesList.listAriaLabel}
      >
        {services.map((service) => (
            <li key={service.slug} className="flex">
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
    </SectionWrapper>
  );
}
