/**
 * Header navigációs szövegek és ARIA-feliratok.
 */
export const navigation = {
  logoLabel: "TTGYT – Vissza a főoldalra",
  mainNavAriaLabel: "Főnavigáció",
  mobileNavAriaLabel: "Mobil navigáció",
  mobileMenuToggleLabel: "Navigációs menü megnyitása",
  links: [
    { href: "/", label: "Főoldal" },
    { href: "/services", label: "Kezelések" },
  ],
} as const;
