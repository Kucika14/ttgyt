import type { Service } from "@/types/service";

/**
 * Statikus szolgáltatás adatok.
 * Jövőbeli CMS integráció esetén ez a tömb helyettesíthető
 * egy API/fetch hívással a lib/services-data.ts-ben.
 */
export const services: Service[] = [
  {
    id: "1",
    slug: "gerinc-terapia",
    title: "Gerinc terápia",
    shortDescription:
      "Hát- és nyaki panaszok, porckorongproblémák és gerincelváltozások kezelése célzott gyógytornával.",
    methodologySummary:
      "Részletes mozgásvizsgálatot követően egyéni kezelési tervet állítunk össze. A terápia manuális technikákat, mobilizációs és stabilizációs gyakorlatokat ötvöz a tartós javulás érdekében.",
    iconAlt: "Gerinc terápia illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Gerinc+terápia",
  },
  {
    id: "2",
    slug: "sportrehabilitacio",
    title: "Sportrehabilitáció",
    shortDescription:
      "Szalag-, ín- és izomproblémák, sportos sérülések utáni biztonságos és gyors visszatérés az aktív élethez.",
    methodologySummary:
      "A sérülés jellegéhez igazított, fokozatos program az erő, rugalmasság és propriocepció visszaállítására összpontosít, hogy a sporthoz a lehető leghamarabb és legbiztonságosabban visszatérhessen.",
    iconAlt: "Sportrehabilitáció illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Sportrehabilitáció",
  },
  {
    id: "3",
    slug: "manualterapia",
    title: "Manuálterápia",
    shortDescription:
      "Ízületi blokádok, mozgáskorlátozottságok és izomfeszültségek feloldása speciális kézi technikákkal.",
    methodologySummary:
      "Célzott kézi fogások segítségével oldjuk fel az ízületi blokádokat és csökkentjük a fájdalmat. A kezelés javítja az ízületi mozgásterjedelmet és helyreállítja a normális mozgásmintát.",
    iconAlt: "Manuálterápia illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Manuálterápia",
  },
  {
    id: "4",
    slug: "posztoperativ-rehabilitacio",
    title: "Posztoperatív rehabilitáció",
    shortDescription:
      "Műtétet követő gyógyulás gyorsítása és a teljes mozgásfunkció visszaállítása szakszerű gyógytornával.",
    methodologySummary:
      "Az operáló orvossal szorosan együttműködve, a sebészeti protokollt figyelembe véve tervezzük meg a rehabilitációs folyamatot. Célunk a mielőbbi, biztonságos és teljes funkcióvisszaállás.",
    iconAlt: "Posztoperatív rehabilitáció illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Posztoperatív+rehab",
  },
  {
    id: "5",
    slug: "neurologiai-rehabilitacio",
    title: "Neurológiai rehabilitáció",
    shortDescription:
      "Stroke, Parkinson-kór vagy idegrendszeri sérülés utáni mozgásterápia és funkcióvisszaállítás.",
    methodologySummary:
      "Az idegrendszer plaszticitására épülő komplex mozgásterápia segít a mozgásfunkció, az egyensúly és a koordináció visszaállításában. A terápiát az egyéni képességekhez és célokhoz igazítjuk.",
    iconAlt: "Neurológiai rehabilitáció illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Neurológiai+rehab",
  },
  {
    id: "6",
    slug: "artozis-terapia",
    title: "Artrózisos ízületek kezelése",
    shortDescription:
      "Térd-, csípő- és vállízületi kopás konzervatív kezelése a fájdalom csökkentése és a mozgásképesség megőrzése érdekében.",
    methodologySummary:
      "Egyéni terhelési program kidolgozásával erősítjük az ízületet körülvevő izmokat, csökkentjük a mechanikai terhelést és lassítjuk a kopást. A cél a fájdalommentes, aktív mindennapi élet.",
    iconAlt: "Artrózisos ízületek kezelése illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Artrózisos+ízületek",
  },
];

/** Az első 3 szolgáltatás a főoldalon kiemelve. */
export const featuredServices = services.slice(0, 3);
