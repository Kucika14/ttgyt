/**
 * Schema.org JSON-LD strukturált adatok.
 * A Google és más keresők ezeket olvassák a találati lista gazdagításához
 * (rich snippets, helyi keresés, Knowledge Panel, stb.).
 */

import { contactInfo, services } from "@/content";
import { BASE_URL } from "./metadata";

/**
 * BreadcrumbList séma egy service aloldalhoz.
 * Megjelenik a Google találatokban: tornatamas.hu › Kezelések › McKenzie módszer
 */
export function buildBreadcrumbSchema(serviceTitle: string, serviceSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Főoldal",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kezelési területek",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceTitle,
        item: `${BASE_URL}/services/${serviceSlug}`,
      },
    ],
  };
}

/** LocalBusiness + MedicalBusiness séma a rendelőhöz. */
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": `${BASE_URL}/#business`,
        name: "Tilly Tamás Gyógytornász",
        url: BASE_URL,
        telephone: contactInfo.phone,
        email: contactInfo.email,
        image: `${BASE_URL}/og-image.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Budai út 6.",
          addressLocality: "Érd",
          postalCode: "2030",
          addressCountry: "HU",
        },
        medicalSpecialty: "https://schema.org/Physiotherapy",
        areaServed: [
          { "@type": "City", name: "Érd" },
          { "@type": "City", name: "Budaörs" },
          { "@type": "City", name: "Diósd" },
          { "@type": "City", name: "Törökbálint" },
        ],
        employee: {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          name: "Tilly Tamás",
          jobTitle: "Gyógytornász",
          url: BASE_URL,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Gyógytornász kezelések",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "MedicalProcedure",
              name: service.title,
              description: service.shortDescription,
              url: `${BASE_URL}/services/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Tilly Tamás",
        jobTitle: "Gyógytornász",
        url: BASE_URL,
        email: contactInfo.email,
        telephone: contactInfo.phone,
        worksFor: { "@id": `${BASE_URL}/#business` },
      },
    ],
  };
}
