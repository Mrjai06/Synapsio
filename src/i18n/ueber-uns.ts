// /ueber-uns — who is behind Synapsio, and the company facts a German SMB checks before signing.
//
// FACT SOURCES, so nothing here is invented:
//  - Team names, titles and one-line bios are carried over VERBATIM from the previous site's
//    TeamSection (origin/main, src/components/premium/TeamSection.tsx). ⚠️ Jakob still has to
//    confirm Luis Boy's title, since the co-founder situation has moved since that page shipped.
//  - Company facts come from the footer legal line already published site-wide:
//    Synapsio UG (haftungsbeschränkt), Schönwalde-Glien, Amtsgericht Potsdam, HRB 42364 P.
//  - Photos: public/team/*.webp, re-encoded from the old repo's src/assets/team/*.png.
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
          role: "Gründer und Geschäftsführer",
          bio: "Informatikstudium an der TU Berlin. Davor Beratung in Vertrieb und Marketing. Baut das Produkt und führt die Pilotgespräche selbst.",
          photo: "/team/jakob.webp",
          linkedin: "https://linkedin.com/in/jakob-ibrahim-62807721b",
        },
        {
          name: "Luis Boy",
          role: "Operations",
          bio: "Koordiniert den E-Commerce-Betrieb bei Götze Gold. Bringt die Sicht von der Seite mit, auf der bestellt, gepackt und nachgefasst wird.",
          photo: "/team/luis.webp",
          linkedin: "https://www.linkedin.com/in/luis-boy-a6b787378/",
        },
        {
          name: "Arne Schildmeyer",
          role: "",
          bio: "",
          photo: "",
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
          role: "Founder and Managing Director",
          bio: "Computer science at TU Berlin. Before that, advisory work in sales and marketing. Builds the product and runs the pilot conversations himself.",
          photo: "/team/jakob.webp",
          linkedin: "https://linkedin.com/in/jakob-ibrahim-62807721b",
        },
        {
          name: "Luis Boy",
          role: "Operations",
          bio: "Coordinates e-commerce operations at Götze Gold. Brings the view from the side where things are ordered, packed and chased.",
          photo: "/team/luis.webp",
          linkedin: "https://www.linkedin.com/in/luis-boy-a6b787378/",
        },
        {
          name: "Arne Schildmeyer",
          role: "",
          bio: "",
          photo: "",
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
