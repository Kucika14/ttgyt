import { contactInfo } from "./contact-info";

/** Főoldal — Hero szekció. */
export const hero = {
  heading: "Professzionális megoldások az Ön sikeréért",
  description:
    "A TTGYT elkötelezett vállalkozása fejlődése mellett. Tapasztalt szakértőink stratégiai tanácsadással, folyamatoptimalizálással és személyre szabott megoldásokkal segítik céljainak elérését.",
  ctaPrimary: "Fedezze fel szolgáltatásainkat",
  ctaSecondary: "Kapcsolatfelvétel",
} as const;

/** Főoldal — Kiemelt szolgáltatások szekció. */
export const highlightedServices = {
  heading: "Kiemelt szolgáltatásaink",
  description: "Átfogó megoldásaink segítségével vállalkozása minden területén számíthat ránk.",
  listAriaLabel: "Kiemelt szolgáltatások",
  ctaButton: "Összes szolgáltatás megtekintése",
} as const;

/** Főoldal — Kapcsolat szekció. */
export const contactSection = {
  heading: "Vegye fel velünk a kapcsolatot",
  description:
    "Kérdése van, vagy személyes konzultációt szeretne? Keressen minket az alábbi elérhetőségeken!",
  emailLabel: "E-mail",
  phoneLabel: "Telefon",
  addressLabel: "Cím",
  contact: contactInfo,
};
