import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Service } from "@/types/service";
import { serviceCard } from "@/content";

interface ServiceCardProps {
  service: Service;
  /** Heading level for the service title — h2 on the services page, h3 in lists */
  headingLevel?: "h2" | "h3";
  showMethodology?: boolean;
}

export function ServiceCard({
  service,
  headingLevel: Heading = "h3",
  showMethodology = true,
}: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="overflow-hidden">
        <PlaceholderImage
          src={service.imageSrc}
          alt={service.iconAlt}
          width={600}
          height={300}
          className="w-full transition-transform duration-300 motion-safe:hover:scale-105"
        />
      </div>
      <CardHeader>
        <Heading className="text-lg font-semibold leading-snug">{service.title}</Heading>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-3">
        <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
        {showMethodology && (
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {serviceCard.methodologyLabel}
            </p>
            <p className="text-sm text-muted-foreground">{service.methodologySummary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
