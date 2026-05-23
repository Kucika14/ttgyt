/**
 * SEO metadata szövegek oldalanként.
 * A buildMetadata() helper és a SITE_NAME / BASE_URL konstansok
 * továbbra is a src/lib/metadata.ts fájlban vannak.
 */

/** Root layout alapértelmezett metadata. */
export const siteMetaContent = {
  defaultDescription:
    "Szakszerű gyógytorna és rehabilitáció: gerinc terápia, sportrehabilitáció, manuálterápia és neurológiai kezelések. Foglaljon időpontot!",
  ogImageAlt: "TTGYT – Gyógytornász szakrendelő",
} as const;

/** Főoldal metadata. */
export const homeMetaContent = {
  title: "Főoldal",
  description:
    "Üdvözöljük a TTGYT gyógytornász oldalán! Személyre szabott gyógytorna kezelések – gerinc terápiától sportrehabilitációig és neurológiai kezelésekig.",
  ogTitle: "TTGYT – Gyógytornász szakrendelő",
  ogDescription:
    "Visszanyert mozgásszabadság – gerinc terápia, sportrehabilitáció, manuálterápia és neurológiai kezelések. Foglaljon időpontot!",
} as const;

/** Szolgáltatások oldal metadata. */
export const servicesMetaContent = {
  title: "Kezelési területek",
  description:
    "Ismerje meg a TTGYT kezelési területeit: gerinc terápia, sportrehabilitáció, manuálterápia, posztoperatív és neurológiai rehabilitáció, artrózisos ízületek kezelése.",
  ogTitle: "Kezelési területek | TTGYT",
  ogDescription:
    "Átfogó gyógytornász ellátás: a gerinc terápiától a neurológiai rehabilitációig – egyéni állapotfelmérés alapján.",
} as const;

/** 404 oldal metadata. */
export const notFoundMetaContent = {
  title: "Az oldal nem található",
  description: "A keresett oldal nem létezik.",
} as const;
