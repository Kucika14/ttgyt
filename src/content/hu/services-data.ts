import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "1",
    slug: "mckenzie-modszer",
    title: "Mechanikai Diagnózis és Terápia (Mckenzie módszer)",
    shortDescription:
      "Gerinc- és végtagízületi panaszok, derékfájdalom, gerincsérv és ínfájdalmak vizsgálata és kezelése az evidence-based Mckenzie módszerrel.",
    methodologySummary:
      "Az MDT, vagy szerzői nevén Mckenzie módszer Robin Mckenzie ausztrál gyógytornásztól származó vizsgálati és kezelési rendszer, melyet gyógytornászok széles köre használ eredményesen szerte a világon. Legtöbben a derékfájdalom és a gerincsérv kapcsán találkoznak vele, de végtagízületek és ínfájdalmak esetén is hatékonyan alkalmazható.\n\nA vizsgálat során a páciens alapos kikérdezése után a panaszok különböző terhelési stratégiákra adott reakcióit térképezzük fel, ez alapján állítjuk fel a kezelési protokollt. Az állapotfelmérést követő alkalmakon az elsődlegesen összeállított tornagyakorlatok hatását nyomon követve finomítjuk az alkalmazott tornát, amennyiben nem értük el a teljes gyógyulást.\n\nA Mckenzie módszer az önkezelésre buzdítja a pácienst, ezzel csökkentve a terapeutától való függést és hatékony eszközöket adva saját magunk kezelésére, amennyiben a panaszok a későbbiekben kiújulnának.",
    iconAlt: "Mckenzie módszer illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Mckenzie+módszer",
  },
  {
    id: "2",
    slug: "mulligan-manualterapia",
    title: "Mulligan manuálterápia",
    shortDescription:
      "Mechanikai ízületi problémák – fájdalmak és mozgásbeszűkülés – kezelése a passzív manuális és aktív torna határán álló Mulligan koncepcióval.",
    methodologySummary:
      "A Brian Mulligan által megalkotott manuálterápiás koncepció átmenetet képez a passzív, manuális kezelések és az aktív torna között. Mechanikai ízületi problémák (fájdalmak és mozgásbeszűkülés) kezelésre szolgál.\n\nA mulligan technikák jellemzője a terapeuta által létrehozott manuális korrekció, melyet fenntartva a páciens aktív gyakorlatokat végez. A helyesen kivitelezett mulligan technikákkal fájdalmatlanná tehetőek blokkolt, panaszos ízületi mozgások, a gyors és látványos javulás élményét nyújtva.\n\nA hagyományos manuálterápiás módszerekkel szemben a mulligan számos, egyedül is végrehajtható technikát tanít, aktívan bevonva a pácienst a saját terápiájába.\n\nA Mulligan koncepció a tudományos bizonyítékok legszélesebb körével rendelkező gyógytornász módszer, hivatalos weboldalán 370-nél is több publikáció található, mely a technikák hatékonyságát vizsgálja.",
    iconAlt: "Mulligan manuálterápia illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Mulligan+terápia",
  },
  {
    id: "3",
    slug: "lagyreszmanual-terapia",
    title: "Lágyrész manuálterápiás kezelések",
    shortDescription:
      "Feszes, kötött izmok és ínfájdalmak kezelése a bőrön, kötőszöveteken és izmokon végzett speciális manuális technikákkal.",
    methodologySummary:
      "A feszes, kötött izmok problémáját a gyógytornász gyakran a lágyrészeken, azaz a bőrön, kötőszöveteken és izmokon végzett manuális technikákkal oldja meg, ami laikus szemmel a masszázsra hasonlít. Az izmok és inak mechanikai receptorai ingerküszöbének emelésével a feszesség és a fájdalom jelentősen csökkenthető, ami ugyan átmeneti hatás csupán, de képessé teszi a pácienst az aktív tornára.\n\nFontos tudni, hogy a manuális kezelések, lazítás, masszázs nem okoz a szövetben strukturális változásokat, azaz nem \u201Eszabadít fel\u201D, \u201Enyújt ki\u201D vagy \u201Eszed szét\u201D izmokat; a tüneti javulás oka az idegrendszeri hatás folyománya. Ezzel együtt hatékony fájdalomcsillapító eszköz, mellékhatásprofil nélkül.",
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
      "A tervezett műtéteket, illetve a traumás sérüléseket jellemzően a mozgáskészség és a fittség átmeneti csökkenése kíséri. Jóllehet a szövetek idővel meggyógyulnak és a fájdalmak megszűnnek, az ízületi mozgáspálya és a fizikai terhelhetőség nem áll helyre magától.\n\nA gyógytornász által tervezett és végigkísért rehabilitációs program célja az egyéni panaszok, mozgásbeli hiányosságok és regenerációs sebesség figyelembe vételével a funkció tartós és teljes helyreállítása, a korábbi életminőség visszanyerése.",
    iconAlt: "Rehabilitáció illusztráció",
    imageSrc: "https://placehold.co/600x400/ccfbf1/0f766e?text=Rehabilitáció",
  },
];

/** Az első 3 szolgáltatás a főoldalon kiemelve. */
export const featuredServices = services.slice(0, 3);
