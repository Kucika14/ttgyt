import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-section-alt"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          {/* Profile image – mobile/tablet: fölül, desktop: jobbra */}
          <div className="w-[168px] shrink-0 overflow-hidden rounded-2xl shadow-md lg:order-last lg:w-[218px]">
            <Image
              src="/tilly_tamas.jpg"
              alt="Tilly Tamás gyógytornász"
              width={400}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="w-full flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {hero.heading}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {hero.description}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto">
                <Link href="/services">{hero.ctaPrimary}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto lg:w-auto">
                <Link href="/#contact">{hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
