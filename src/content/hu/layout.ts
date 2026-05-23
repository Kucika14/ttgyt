import { contactInfo } from "./contact-info";

/** Skip-link felirat. */
export const skipLink = {
  label: "Ugrás a fő tartalomhoz",
} as const;

/** Lábléc szövegek (a navigációs linkeket a navigation.ts tartalmazza). */
export const footer = {
  brand: "TTGYT",
  tagline: "Professzionális megoldások az Ön vállalkozása számára.",
  navAriaLabel: "Lábléc navigáció",
  contactTitle: "Elérhetőség",
  contact: contactInfo,
  copyright: (year: number) => `© ${year} TTGYT. Minden jog fenntartva.`,
};
