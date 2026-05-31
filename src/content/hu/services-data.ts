import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "1",
    slug: "mckenzie-modszer",
    title: "Mechanikai Diagnózis és Terápia (McKenzie módszer)",
    shortDescription:
      "Gerinc- és végtagízületi panaszok, derékfájdalom, gerincsérv és ínfájdalmak vizsgálata és kezelése az evidence-based McKenzie módszerrel.",
    methodologySummary:
      "A páciens alapos kikérdezése után a panaszok különböző terhelési stratégiákra adott reakcióit térképezzük fel, és ez alapján állítjuk össze az egyéni kezelési protokollt és tornagyakorlatokat. A módszer az önkezelésre buzdítja a pácienst, csökkentve a terapeutától való függést.",
    iconAlt: "McKenzie módszer illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=McKenzie+módszer",
  },
  {
    id: "2",
    slug: "mulligan-manualterapia",
    title: "Mulligan manuálterápia",
    shortDescription:
      "Mechanikai ízületi problémák – fájdalmak és mozgásbeszűkülés – kezelése a passzív manuális és aktív torna határán álló Mulligan koncepcióval.",
    methodologySummary:
      "A terapeuta által létrehozott manuális korrekció alatt a páciens aktív gyakorlatokat végez. A helyesen kivitelezett technikákkal fájdalmatlanná tehetők blokkolt ízületi mozgások. A Mulligan koncepció a tudományos bizonyítékok legszélesebb körével rendelkező gyógytornász módszer – 370-nél is több publikáció vizsgálja hatékonyságát.",
    iconAlt: "Mulligan manuálterápia illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Mulligan+terápia",
  },
  {
    id: "3",
    slug: "lagyrész-manualterapia",
    title: "Lágyrész manuálterápiás kezelések",
    shortDescription:
      "Feszes, kötött izmok és ínfájdalmak kezelése a bőrön, kötőszöveteken és izmokon végzett speciális manuális technikákkal.",
    methodologySummary:
      "Az izmok és inak mechanikai receptorainak ingerküszöb-emelésével a feszesség és fájdalom jelentősen csökkenthető. A manuális kezelés hatékony fájdalomcsillapító eszköz mellékhatásprofil nélkül, amely képessé teszi a pácienst az aktív tornára.",
    iconAlt: "Lágyrész manuálterápia illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Lágyrész+terápia",
  },
  {
    id: "4",
    slug: "seruleses-rehabilitacio",
    title: "Sérülések, műtétek utáni rehabilitáció",
    shortDescription:
      "Tervezett műtétek és traumás sérülések utáni teljes funkcióvisszaállítás: ízületi mozgáspálya, fizikai terhelhetőség és életminőség helyreállítása.",
    methodologySummary:
      "Az egyéni panaszokat, mozgásbeli hiányosságokat és regenerációs sebességet figyelembe véve tervezett rehabilitációs program célja a funkció tartós és teljes helyreállítása. Az ízületi mozgáspálya és fizikai terhelhetőség nem áll helyre magától – szakszerű gyógytorna szükséges.",
    iconAlt: "Rehabilitáció illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Rehabilitáció",
  },
];

/** Az első 3 szolgáltatás a főoldalon kiemelve. */
export const featuredServices = services.slice(0, 3);
