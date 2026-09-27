// /ueber-uns — who is behind Synapsio, and the company facts a German SMB checks before signing.
//
// FACT SOURCES, so nothing here is invented:
//  - Team (since 2026-09): identical to the pitch deck v2. All three are "Mitgründer" (roles are
//    deliberately open), bios describe what each person does. Arne's employer is NOT named (it is
//    a pilot candidate). Degrees: Jakob TU Berlin (Informatik), Luis HWR Berlin (BWL, studies from
//    WS 2026/27), Arne TH Wildau (BWL, B.A.), all confirmed by Jakob 2026-09-25.
//  - Company facts come from the footer legal line already published site-wide:
//    Synapsio UG (haftungsbeschränkt), Schönwalde-Glien, Amtsgericht Potsdam, HRB 42364 P.
//  - Photos: public/team/*.webp; Jakob and Luis re-encoded from the old repo's src/assets/team/*.png,
//    Arne from the portrait he supplied himself.
//
// A person with `bio: ""` renders NO card (see UeberUns.astro). That is how Arne stays off the
// page until his details arrive: a placeholder bio would be an invented claim about a real
// person, which is worse than an absent one.
//
// Copy rules: no em dashes, German quotes „…“, no buzzwords, never name the AI vendor or model.

export interface Person {
  name: string;
  role: string;
  /** empty string = not ready to publish, card is skipped */
  bio: string;
  photo: string;
  linkedin?: string;
}

export interface Partner {
  name: string;
  note: string;
  /**
   * false = written, deliberately not shown. Naming a partner publicly is a claim about a third
   * party, so it waits for the signature, not for the intent. The whole section disappears when
   * nothing in it is published (see UeberUns.astro), so flipping this to true is the only edit
   * needed once the agreement exists.
   */
  published: boolean;
}

export const ueberUnsCopy = {
  de: {
    meta: {
      title: "Über uns · Synapsio",
      description:
        "Wer hinter Synapsio steht: eine UG aus Schönwalde-Glien bei Berlin, die einen KI-Agenten für den Einkauf im Mittelstand baut.",
    },
    hero: {
      chip: "ÜBER SYNAPSIO",
      h1a: "Der Einkauf im Mittelstand läuft auf ",
      h1em: "Excel.",
      h1b: " Das war der Anlass.",
      sub: "Synapsio ist eine UG aus Schönwalde-Glien bei Berlin. Wir bauen einen KI-Agenten, der Beschaffung ausführt: Bedarf erkennen, Angebote vergleichen, bestellen, bis zu der Grenze, die Sie setzen.",
    },
    origin: {
      h2: "Warum es Synapsio gibt",
      p1: "In vielen Betrieben liegt der Einkauf zwischen zwei Systemen. Ein ERP führt den Bestand, und daneben steht eine Excel-Datei, in der die eigentliche Arbeit passiert. Dazwischen sitzt ein Mensch, der Lieferantenmails liest, Angebote vergleicht und Bestellungen tippt.",
      p2: "Software dagegen gibt es reichlich. Sie ist für Konzerne gebaut, beginnt mit einem Einführungsprojekt und zeigt am Ende an, was zu tun wäre. Die Arbeit bleibt.",
      statement: "Wir wollten das andere Ende: ein System, das die Arbeit macht und Ihnen die Ausnahmen vorlegt.",
      p3: "Was der Agent heute kann, steht auf der Produktseite. Was er noch nicht kann, steht dort ebenfalls. Wir halten das für die einzige Art, mit einem Betrieb zu arbeiten, der von seiner Lieferkette abhängt.",
      link: "Zum Produkt",
    },
    team: {
      h2: "Die Menschen",
      lede: "Ein kleines Team, das den Betrieb selbst kennt.",
      people: [
        {
          name: "Jakob Ibrahim",
          role: "Mitgründer",
          bio: "Informatikstudium an der TU Berlin. Baut Produkt und KI, von der Datenbank über die Agenten bis zur Oberfläche, und hat die Plattform allein geschrieben.",
          photo: "/team/jakob.webp",
          linkedin: "https://linkedin.com/in/jakob-ibrahim-62807721b",
        },
        {
          name: "Luis Boy",
          role: "Mitgründer",
          bio: "BWL-Studium an der HWR Berlin. Führt Vertrieb und Kundengespräche: gewinnt die Piloten und holt zurück, was Kunden im Betrieb wirklich brauchen.",
          photo: "/team/luis.webp",
          linkedin: "https://www.linkedin.com/in/luis-boy-a6b787378/",
        },
        {
          name: "Arne Schildmeyer",
          role: "Mitgründer",
          bio: "BWL (B.A.) an der TH Wildau. Plant Bedarf und Nachschub, steuert Lieferanten, Distribution und Lager. Früher bei Heineken und Stone Brewing, heute baut er Bestands- und Produktionssteuerung mit Stücklisten in der Medizintechnik.",
          photo: "/team/arne.webp", // his own portrait, published with his agreement (2026-09-27)
          linkedin: "https://www.linkedin.com/in/arne-schildmeyer-831766140/",
        },
      ] as Person[],
    },
    partners: {
      h2: "Partner",
      lede: "Wer Synapsio neben dem Team begleitet.",
      items: [
        {
          name: "28DIGITAL",
          note: "Synapsio ist im Accelerator-Programm, mit Zugang zum Netzwerk und operativer Begleitung.",
          published: true,
        },
      ] as Partner[],
    },
    principles: {
      h2: "Wie wir arbeiten",
      items: [
        {
          h: "Der Betrieb gehört Ihnen",
          p: "Grenzen, Freigaben und Protokoll setzen Sie. Der Agent handelt in diesem Rahmen und legt Ihnen vor, was darüber liegt.",
        },
        {
          h: "Wir sagen, was noch nicht geht",
          p: "Was in Arbeit ist, verkaufen wir nicht als Gegenwart. Im Gespräch hören Sie beides.",
        },
        {
          h: "Klartext statt Codes",
          p: "Keine Fehlernummern, keine Rohdaten in der Oberfläche. Jede Entscheidung steht als Satz da, mit dem Grund dahinter.",
        },
      ],
    },
    facts: {
      h2: "Das Unternehmen",
      rows: [
        ["Rechtsform", "Synapsio UG (haftungsbeschränkt)"],
        ["Sitz", "Schönwalde-Glien bei Berlin"],
        ["Register", "Amtsgericht Potsdam, HRB 42364 P"],
        ["Produkt", "app.synapsio.solutions"],
        ["Kontakt", "contact@synapsio.co.site"],
      ],
    },
    close: {
      h2: "Sprechen Sie mit uns",
      p: "Dreißig Minuten, unverbindlich. Wir schauen uns an, wie Sie heute bestellen, und sagen Ihnen ehrlich, ob ein Pilot Sinn ergibt.",
      cta: "Pilot-Gespräch buchen",
      alt: "Investoren",
    },
  },

  en: {
    meta: {
      title: "About · Synapsio",
      description:
        "The people behind Synapsio: a company near Berlin building an AI agent that runs procurement for mid-sized manufacturers.",
    },
    hero: {
      chip: "ABOUT SYNAPSIO",
      h1a: "Mid-sized procurement runs on ",
      h1em: "Excel.",
      h1b: " That was the starting point.",
      sub: "Synapsio is a company based in Schönwalde-Glien near Berlin. We build an AI agent that runs procurement: spot the need, compare quotes, place the order, up to the limit you set.",
    },
    origin: {
      h2: "Why Synapsio exists",
      p1: "In a lot of companies, purchasing sits between two systems. An ERP holds the stock, and next to it is a spreadsheet where the actual work happens. In between sits a person reading supplier mail, comparing quotes and typing orders.",
      p2: "Software for this is not scarce. It is built for large enterprises, it starts with an implementation project, and at the end it displays what ought to be done. The work stays.",
      statement: "We wanted the other end: a system that does the work and brings you the exceptions.",
      p3: "What the agent can do today is on the product page. What it cannot do yet is on that page too. We think that is the only way to work with a business that depends on its supply chain.",
      link: "See the product",
    },
    team: {
      h2: "The people",
      lede: "A small team that knows the operational side first hand.",
      people: [
        {
          name: "Jakob Ibrahim",
          role: "Co-founder",
          bio: "Computer science at TU Berlin. Builds the product and the AI, from the database through the agents to the interface, and wrote the platform on his own.",
          photo: "/team/jakob.webp",
          linkedin: "https://linkedin.com/in/jakob-ibrahim-62807721b",
        },
        {
          name: "Luis Boy",
          role: "Co-founder",
          bio: "Business studies at HWR Berlin. Runs sales and customer conversations: wins the pilots and brings back what customers actually need on the floor.",
          photo: "/team/luis.webp",
          linkedin: "https://www.linkedin.com/in/luis-boy-a6b787378/",
        },
        {
          name: "Arne Schildmeyer",
          role: "Co-founder",
          bio: "B.A. in business at TH Wildau. Plans demand and replenishment, runs suppliers, distribution and warehousing. Formerly at Heineken and Stone Brewing, today he builds inventory and production control with bills of materials in medtech manufacturing.",
          photo: "/team/arne.webp", // his own portrait, published with his agreement (2026-09-27)
          linkedin: "https://www.linkedin.com/in/arne-schildmeyer-831766140/",
        },
      ] as Person[],
    },
    partners: {
      h2: "Partners",
      lede: "Who supports Synapsio alongside the team.",
      items: [
        {
          name: "28DIGITAL",
          note: "Synapsio is in the accelerator programme, with access to the network and hands-on support.",
          published: true,
        },
      ] as Partner[],
    },
    principles: {
      h2: "How we work",
      items: [
        {
          h: "The operation is yours",
          p: "You set the limits, the approvals and the log. The agent acts inside that frame and brings you whatever sits above it.",
        },
        {
          h: "We say what does not work yet",
          p: "We do not sell the roadmap as the present. In a call you hear both halves.",
        },
        {
          h: "Plain sentences, not codes",
          p: "No error numbers, no raw data in the interface. Every decision reads as a sentence, with the reason behind it.",
        },
      ],
    },
    facts: {
      h2: "The company",
      rows: [
        ["Legal form", "Synapsio UG (haftungsbeschränkt)"],
        ["Registered office", "Schönwalde-Glien near Berlin, Germany"],
        ["Register", "Amtsgericht Potsdam, HRB 42364 P"],
        ["Product", "app.synapsio.solutions"],
        ["Contact", "contact@synapsio.co.site"],
      ],
    },
    close: {
      h2: "Talk to us",
      p: "Thirty minutes, no commitment. We look at how you order today and tell you honestly whether a pilot makes sense.",
      cta: "Book a pilot call",
      alt: "Investors",
    },
  },
} as const;
