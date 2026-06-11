/**
 * SEO metadata szövegek oldalanként.
 * A buildMetadata() helper és a SITE_NAME / BASE_URL konstansok
 * továbbra is a src/lib/metadata.ts fájlban vannak.
 */

/** Root layout alapértelmezett metadata. */
export const siteMetaContent = {
  defaultDescription:
    "Gyógytornász Érd, Budaörs, Diósd és Törökbálint környékén – Tilly Tamás. Mckenzie módszer, Mulligan manuálterápia, lágyrész kezelés, rehabilitáció. Foglaljon időpontot!",
  ogImageAlt: "Tilly Tamás Gyógytornász – Érd, Budaörs, Diósd, Törökbálint",
} as const;

/** Főoldal metadata. */
export const homeMetaContent = {
  title: "Főoldal",
  description:
    "Tilly Tamás gyógytornász – Érd, Budaörs, Diósd, Törökbálint. Mckenzie módszer, Mulligan manuálterápia, lágyrész kezelés és rehabilitáció. Személyre szabott kezelési terv.",
  ogTitle: "Tilly Tamás Gyógytornász – Érd és környéke",
  ogDescription:
    "Visszanyert mozgásszabadság – Mckenzie módszer, Mulligan manuálterápia, rehabilitáció Érd, Budaörs, Diósd és Törökbálint területén.",
} as const;

/** Szolgáltatások oldal metadata. */
export const servicesMetaContent = {
  title: "Kezelési területek",
  description:
    "Gyógytornász kezelések Érd, Budaörs, Diósd és Törökbálint környékén: Mckenzie módszer, Mulligan manuálterápia, lágyrész kezelés, sérülések és műtétek utáni rehabilitáció.",
  ogTitle: "Kezelési területek | Tilly Tamás Gyógytornász",
  ogDescription:
    "Mckenzie módszer, Mulligan manuálterápia és rehabilitáció – egyéni állapotfelmérés alapján, Érd és környékén.",
} as const;

/** 404 oldal metadata. */
export const notFoundMetaContent = {
  title: "Az oldal nem található",
  description: "A keresett oldal nem létezik.",
} as const;
