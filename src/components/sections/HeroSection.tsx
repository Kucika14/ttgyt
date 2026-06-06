import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[oklch(0.95_0.04_255)]"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          {/* Text */}
          <div className="max-w-2xl flex-1">
            <p className="text-lg leading-relaxed text-muted-foreground">
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

          {/* Profile image */}
          <div className="w-[168px] shrink-0 overflow-hidden rounded-2xl shadow-md lg:w-[218px]">
            <Image
              src="/tilly_tamas.jpg"
              alt="Tilly Tamás gyógytornász"
              width={400}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
