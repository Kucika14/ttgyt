import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
  /** Heading level for the service title — h2 on the services page, h3 in lists */
  headingLevel?: "h2" | "h3";
  /** Controls how the methodology text is rendered */
  methodologyVariant?: "hidden" | "truncated" | "full";
}

export function ServiceCard({
  service,
  headingLevel: Heading = "h3",
  methodologyVariant = "full",
}: ServiceCardProps) {
  const paragraphs = service.methodologySummary.split("\n\n");

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
      {methodologyVariant !== "hidden" && (
        <CardContent className="flex flex-1 flex-col">
          {methodologyVariant === "truncated" ? (
            <p className="line-clamp-4 text-sm text-muted-foreground">
              {paragraphs[0]}
            </p>
          ) : (
            <div className="space-y-2">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-sm text-muted-foreground">{para}</p>
              ))}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
