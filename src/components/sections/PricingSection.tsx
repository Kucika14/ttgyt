import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { pricingSection } from "@/content";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="pricing-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {pricingSection.heading}
        </h2>
      </div>

      <ul
        className="mx-auto mt-10 max-w-sm divide-y divide-border rounded-xl border border-border"
        role="list"
      >
        {pricingSection.items.map(({ duration, price }) => (
          <li
            key={duration}
            className="flex items-center justify-between px-6 py-4"
          >
            <span className="text-sm text-muted-foreground">{duration}</span>
            <span className="text-lg font-semibold text-foreground">{price}</span>
          </li>
        ))}
      </ul>

      {pricingSection.note && (
        <p className="mx-auto mt-4 max-w-sm text-center text-xs text-muted-foreground">
          {pricingSection.note}
        </p>
      )}
    </SectionWrapper>
  );
}
