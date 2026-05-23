import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { hero } from "@/content";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-muted"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <PlaceholderImage
          src="https://placehold.co/1920x800/dbeafe/1e40af?text=+"
          alt=""
          width={1920}
          height={800}
          className="h-full w-full object-cover opacity-20"
          priority
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/services">{hero.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">{hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
