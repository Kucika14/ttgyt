import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { aboutPage } from "@/content";

export function AboutSection() {
  return (
    <SectionWrapper aria-labelledby="about-heading">
      <div className="mx-auto max-w-3xl">
        <h1
          id="about-heading"
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          {aboutPage.heading}
        </h1>

        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
          {aboutPage.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <blockquote className="mt-10 border-l-4 border-primary pl-6">
          <p className="text-lg font-medium italic text-foreground">
            &ldquo;{aboutPage.quote}&rdquo;
          </p>
        </blockquote>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/services">{aboutPage.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
