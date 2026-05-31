import { contactInfo } from "./contact-info";

/** Főoldal — Hero szekció. */
export const hero = {
  heading: "Visszanyert mozgásszabadság az Ön egészségéért",
  description:
    "Gyógytornász szakemberként célom, hogy személyre szabott kezeléseimmel segítsem pácienseimet a fájdalommentes, aktív élethez való visszatérésben. Minden kezelés egyéni állapotfelmérésre épül.",
  ctaPrimary: "Kezelések",
  ctaSecondary: "Időpont foglalás",
} as const;

/** Főoldal — Kiemelt szolgáltatások szekció. */
export const highlightedServices = {
  heading: "Kiemelt kezelési területeink",
  description: "Mozgásszervi panaszoktól a sportrehabilitációig – átfogó gyógytornász ellátás az egészségéért.",
  listAriaLabel: "Kiemelt kezelési területek",
  ctaButton: "Összes kezelési terület",
} as const;

/** Főoldal — Árak szekció. */
export const pricingSection = {
  heading: "Árak",
  items: [
    { duration: "45 perc", price: "15 000 Ft" },
  ],
  note: "Házi kezelés esetén az útiköltséget külön számítom fel.",
} as const;

/** Főoldal — Kapcsolat szekció. */
export const contactSection = {
  heading: "Foglaljon időpontot!",
  description:
    "Kérdése van, vagy időpontot szeretne foglalni? Keressen minket az alábbi elérhetőségeken – örömmel segítünk!",
  emailLabel: "E-mail",
  phoneLabel: "Telefon",
  addressLabel: "Cím",
  contact: contactInfo,
};
