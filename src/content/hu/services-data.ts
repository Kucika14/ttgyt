import type { Service } from "@/types/service";

/**
 * Statikus szolgáltatás adatok.
 * Jövőbeli CMS integráció esetén ez a tömb helyettesíthető
 * egy API/fetch hívással a lib/services-data.ts-ben.
 */
export const services: Service[] = [
  {
    id: "1",
    slug: "uzleti-tanacsadas",
    title: "Üzleti tanácsadás",
    shortDescription:
      "Stratégiai útmutatás és személyre szabott tanácsadás vállalkozása növekedéséhez és hatékonyságának javításához.",
    methodologySummary:
      "Részletes helyzetfelmérést követően közösen azonosítjuk a fejlesztési lehetőségeket, majd mérhető célokat és konkrét cselekvési tervet dolgozunk ki. Az eredményeket rendszeres visszacsatolással követjük nyomon.",
    iconAlt: "Üzleti tanácsadás ikon",
    imageSrc: "https://placehold.co/600x400/dbeafe/1e40af?text=Üzleti+tanácsadás",
  },
  {
    id: "2",
    slug: "folyamatoptimalizalas",
    title: "Folyamatoptimalizálás",
    shortDescription:
      "Üzleti folyamatainak feltérképezése és újratervezése a hatékonyság növelése, a felesleges lépések kiiktatása és a költségek csökkentése érdekében.",
    methodologySummary:
      "A meglévő munkafolyamatok feltérképezésével és értékelésével kezdünk, azonosítjuk a szűk keresztmetszeteket, majd lean és agile elvek alapján javaslatokat dolgozunk ki a fejlesztésre.",
    iconAlt: "Folyamatoptimalizálás ikon",
    imageSrc: "https://placehold.co/600x400/dbeafe/1e40af?text=Folyamatoptimalizálás",
  },
  {
    id: "3",
    slug: "projektmenedzsment",
    title: "Projektmenedzsment",
    shortDescription:
      "Komplex projektek tervezése, koordinálása és felügyelete – a kezdeti ötlettől az eredményes megvalósításig.",
    methodologySummary:
      "Strukturált projektterv elkészítésével, felelősök kijelölésével és mérföldkövek meghatározásával biztosítjuk az időben és költségkereten belüli teljesítést. Rendszeres státuszjelentésekkel tartjuk naprakészen az érintetteket.",
    iconAlt: "Projektmenedzsment ikon",
    imageSrc: "https://placehold.co/600x400/dbeafe/1e40af?text=Projektmenedzsment",
  },
  {
    id: "4",
    slug: "valtozasmenedzsment",
    title: "Változásmenedzsment",
    shortDescription:
      "Szervezeti változások sikeres vezetése – az ellenállás kezelésétől az új megoldások elfogadtatásáig.",
    methodologySummary:
      "Az érintett csoportok bevonásával, kommunikációs stratégia kialakításával és képzési programok tervezésével segítünk abban, hogy a szervezeti átalakulás zökkenőmentesen és tartósan valósuljon meg.",
    iconAlt: "Változásmenedzsment ikon",
    imageSrc: "https://placehold.co/600x400/dbeafe/1e40af?text=Változásmenedzsment",
  },
  {
    id: "5",
    slug: "hr-tanacsadas",
    title: "HR tanácsadás",
    shortDescription:
      "Toborzási folyamatok fejlesztése, teljesítményértékelési rendszerek kialakítása és munkavállalói elköteleződés növelése.",
    methodologySummary:
      "Az igényfelmérést követően személyre szabott HR-megoldásokat dolgozunk ki: a munkaköri leírásoktól a beillesztési programokon át az éves értékelési keretrendszerig minden területen támogatjuk a szervezetet.",
    iconAlt: "HR tanácsadás ikon",
    imageSrc: "https://placehold.co/600x400/dbeafe/1e40af?text=HR+tanácsadás",
  },
  {
    id: "6",
    slug: "strategiai-tervezes",
    title: "Stratégiai tervezés",
    shortDescription:
      "Hosszú távú vállalati stratégia kidolgozása a piaci trendek, versenykörnyezet és belső erőforrások elemzése alapján.",
    methodologySummary:
      "SWOT-analízissel és piackutatással megalapozva, a vezetői csapattal közösen alkotjuk meg a 3–5 éves stratégiai irányvonalat, amelyet éves operatív tervekre bontunk le a megvalósíthatóság érdekében.",
    iconAlt: "Stratégiai tervezés ikon",
    imageSrc: "https://placehold.co/600x400/dbeafe/1e40af?text=Stratégiai+tervezés",
  },
];

/** Az első 3 szolgáltatás a főoldalon kiemelve. */
export const featuredServices = services.slice(0, 3);
