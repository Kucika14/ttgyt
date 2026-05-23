/**
 * SEO metadata szövegek oldalanként.
 * A buildMetadata() helper és a SITE_NAME / BASE_URL konstansok
 * továbbra is a src/lib/metadata.ts fájlban vannak.
 */

/** Root layout alapértelmezett metadata. */
export const siteMetaContent = {
  defaultDescription:
    "A TTGYT professzionális üzleti tanácsadást, folyamatoptimalizálást és stratégiai megoldásokat kínál vállalkozása fejlődéséhez.",
  ogImageAlt: "TTGYT – Professzionális üzleti megoldások",
} as const;

/** Főoldal metadata. */
export const homeMetaContent = {
  title: "Főoldal",
  description:
    "Üdvözöljük a TTGYT weboldalán! Professzionális üzleti tanácsadás, folyamatoptimalizálás és stratégiai megoldások vállalkozása számára.",
  ogTitle: "TTGYT – Professzionális üzleti megoldások",
  ogDescription:
    "Stratégiai tanácsadás, projektmenedzsment és HR-megoldások magyar vállalkozások számára.",
} as const;

/** Szolgáltatások oldal metadata. */
export const servicesMetaContent = {
  title: "Szolgáltatások",
  description:
    "Ismerje meg a TTGYT teljes szolgáltatási portfólióját: üzleti tanácsadás, folyamatoptimalizálás, projektmenedzsment, változásmenedzsment, HR tanácsadás és stratégiai tervezés.",
  ogTitle: "Szolgáltatások | TTGYT",
  ogDescription:
    "Átfogó üzleti megoldások: tanácsadástól a stratégiai tervezésig – minden, amire vállalkozásának szüksége van.",
} as const;

/** 404 oldal metadata. */
export const notFoundMetaContent = {
  title: "Az oldal nem található",
  description: "A keresett oldal nem létezik.",
} as const;
