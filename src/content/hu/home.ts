import { contactInfo } from "./contact-info";

/** Főoldal — Hero szekció. */
export const hero = {
  heading: "Visszanyert mozgásszabadság az Ön egészségéért",
  description:
    "Gyógytornász szakemberként célom, hogy személyre szabott kezeléseimmel segítsem pácienseimet a fájdalommentes, aktív élethez való visszatérésben.",
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
  emailLabel: "E-mail",
  phoneLabel: "Telefon",
  addressLabel: "Cím",
  areaLabel: "Ellátási terület",
  streetViewLabel: "Utcakép megtekintése (Street View) →",
  contact: contactInfo,
};
