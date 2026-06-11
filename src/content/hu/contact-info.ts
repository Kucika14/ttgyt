/**
 * Megosztott elérhetőségi adatok.
 * Ezt a fájlt importálja a Footer és a ContactSection is.
 * Csak itt kell módosítani, ha az elérhetőségek változnak.
 */
export const contactInfo = {
  email: "tilly.tamas@gmail.com",
  emailHref: "mailto:tilly.tamas@gmail.com",
  phone: "+36 30 294 3566",
  phoneHref: "tel:+36302943566",
  address: "2030 Érd, Budai út 6.",
  addressNote: "Form Pilates stúdió",
  areaServed: "Érd, Budaörs, Diósd, Törökbálint és környéke",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=2030+%C3%89rd%2C+Budai+%C3%BAt+6&t=&z=15&ie=UTF8&iwloc=&output=embed",
  streetViewHref:
    "https://www.google.com/maps?q=2030+%C3%89rd,+Budai+%C3%BAt+6&layer=c",
} as const;
