import { contactInfo } from "./contact-info";

/** Skip-link felirat. */
export const skipLink = {
  label: "Ugrás a fő tartalomhoz",
} as const;

/** Lábléc szövegek (a navigációs linkeket a navigation.ts tartalmazza). */
export const footer = {
  brand: "TTGYT",
  tagline: "Személyre szabott gyógytorna az egészségéért és mozgásszabadságáért.",
  navAriaLabel: "Lábléc navigáció",
  contactTitle: "Elérhetőség",
  contact: contactInfo,
  facebookHref: "https://www.facebook.com/tilly.tamas.physio/",
  facebookLabel: "Facebook oldal megtekintése",
  copyright: (year: number) => `© ${year} TTGYT. Minden jog fenntartva.`,
};
