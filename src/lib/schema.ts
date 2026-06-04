/**
 * Schema.org JSON-LD strukturált adatok.
 * A Google és más keresők ezeket olvassák a találati lista gazdagításához
 * (rich snippets, helyi keresés, Knowledge Panel, stb.).
 */

import { contactInfo, services } from "@/content";
import { BASE_URL } from "./metadata";

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
              url: `${BASE_URL}/services#${service.slug}`,
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
