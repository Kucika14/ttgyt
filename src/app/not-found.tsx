import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/metadata";
import { notFoundPage, notFoundMetaContent } from "@/content";

export const metadata: Metadata = buildMetadata({
  title: notFoundMetaContent.title,
  description: notFoundMetaContent.description,
  robots: { index: false, follow: false },
});

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center sm:px-6"
    >
      <p className="text-5xl font-bold text-primary" aria-hidden="true">
        {notFoundPage.code}
      </p>
      <h1
        id="not-found-heading"
        className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {notFoundPage.heading}
      </h1>
      <p className="mt-4 max-w-md text-base text-muted-foreground">
        {notFoundPage.description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/">{notFoundPage.ctaHome}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/services">{notFoundPage.ctaServices}</Link>
        </Button>
      </div>
    </section>
  );
}
