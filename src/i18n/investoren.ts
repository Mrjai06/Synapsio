// /investoren — the investor story, with every number carrying its source.
//
// WHERE THE FIGURES COME FROM (verified 2026-07-28, do not change one without re-checking):
//
//  Market pressure
//   · 82 % of German SMEs still run day-to-day operations mostly manually or semi-automated,
//     with paper, media breaks and disconnected spreadsheet silos. Bitkom, 2026.
//   · 42 % of German SMEs used an ERP in 2025 (EU average 45 %), and ERP use has stagnated
//     versus previous years. Institut für Mittelstandsforschung Bonn / EU comparison, 2025.
//   · Only about one company in four uses digital systems to optimise purchasing processes;
//     ERP is the most-used system in purchasing with spreadsheets immediately behind.
//     BME / Onventis, Einkaufsbarometer Mittelstand 2024.
//
//  Market size, bottom-up (since 2026-09, identical to the pitch deck v2):
//   · Eurostat sbs_sc_ovw 2023, 10-249 employees: manufacturing 318,709 + wholesale 145,876
//     = 464,585 firms; retail (G47) 163,317 shown as "later", NOT in the sum.
//   · Subscription at today's blended price 4,848 €/yr (45 % Start 199 · 40 % Base 449 ·
//     15 % Advanced 899 €/month) → 2.25 bn €. Marketplace 1 % of the manufacturers' purchasing
//     (1.78 tn €, Eurostat 2023) → 17.8 bn €. Together ≈ 20 bn €.
//
//  Plan and funding: the pitch deck v2 and Synapsio_Budget_PreSeed.xlsx (OneDrive\SYNAPSIO).
//     ARR 2032: 23 / 145 / 610 M€ (computed in Synapsio_Pitchdeck_2026-09_v2_build.py).
//     Round 410 T€ for 18 months, derived from the budget. ⚠️ Change a number there first, then here.
//     The August financial model (breakeven 2030, 3.5 M€ peak need) is SUPERSEDED, not quoted.
//
// ⚠️ The previous site published a TAM of 847 bn USD (an unused stale component) and a DACH SOM
// of 25 to 60 M USD that never reconciled with the deck. Neither is carried over. The three ARR
// cases replace the SOM band, because a revenue plan we underwrite is a more honest object than
// a market slice we assert.
//
// ⚠️ NO hosting or GDPR claim on this page. The published privacy policy covers website visitors
// only and names no subprocessors, so any „Server in der EU“ line is currently unbacked.

export const investorenCopy = {
  de: {
    meta: {
      title: "Investoren · Synapsio",
      description:
        "Markt, Produkt und Plan von Synapsio: ein KI-Agent, der Beschaffung im Mittelstand ausführt. Mit Pitchdeck und Zahlen.",
    },
    hero: {
      chip: "INVESTOREN",
      h1a: "Ein Agent, der den Einkauf ",
      h1em: "ausführt.",
      h1b: " Nicht noch ein Dashboard.",
      sub: "Das Produkt ist live, die ersten Kundengespräche laufen. Auf dieser Seite stehen der Markt, was heute tatsächlich funktioniert, und der Plan mit seinen drei Fällen.",
      cta: "Pitchdeck ansehen",
      alt: "Gespräch vereinbaren",
    },

    problem: {
      h2: "Das Problem, in Zahlen",
      lede: "Der deutsche Mittelstand hat kein Erkenntnisproblem. Er hat ein Ausführungsproblem.",
      stats: [
        {
          v: "82 %",
          k: "der KMU arbeiten im Tagesgeschäft überwiegend manuell oder teilautomatisiert, mit Papier, Medienbrüchen und getrennten Excel-Inseln.",
          src: "Bitkom, 2026",
        },
        {
          v: "42 %",
          k: "der deutschen KMU nutzten 2025 überhaupt ein ERP. Der EU-Schnitt liegt bei 45 %, und die Nutzung stagniert.",
          src: "IfM Bonn, EU-Vergleich 2025",
        },
        {
          v: "1 von 4",
          k: "Unternehmen setzt digitale Systeme zur Prozessoptimierung im Einkauf ein. Meistgenutztes System im Einkauf ist das ERP, direkt dahinter Excel.",
          src: "BME / Onventis, Einkaufsbarometer Mittelstand 2024",
        },
      ],
      statement:
        "Der Engpass ist nicht die fehlende Software. Es ist Software, die anzeigt, statt auszuführen.",
    },

    markt: {
      h2: "Der Markt",
      p1: "Wir rechnen von unten, statt einen Marktbericht zu zitieren: Firmen mal Preis. In der EU haben 465.000 Hersteller und Großhändler zwischen 10 und 249 Beschäftigte.",
      p2: "Zur heutigen Preisleiter ergibt das Abo 2,3 Mrd. € im Jahr. Der größere Teil ist der Einkauf selbst: Allein die Hersteller kaufen für 1,78 Bio. € im Jahr ein, 1 % davon über den Marktplatz sind 17,8 Mrd. €. Der Einzelhandel ist noch nicht eingerechnet.",
      scaleMax: "20 Mrd. €",
      rings: [
        {
          k: "Firmen",
          v: "465.000",
          d: "Herstellung 318.709 und Großhandel 145.876, je 10 bis 249 Beschäftigte. Später dazu: Einzelhandel mit 163.317.",
          src: "Eurostat, 2023",
        },
        {
          k: "Abo",
          v: "2,3 Mrd. €",
          n: 2.25,
          d: "465.000 Firmen zum heutigen Mischpreis von 4.848 € im Jahr.",
          src: "Preisleiter, Stand September 2026",
        },
        {
          k: "Marktplatz",
          v: "17,8 Mrd. €",
          n: 17.8,
          d: "1 % des Einkaufs der Hersteller.",
          src: "Eurostat, 2023 · Gebühr = Annahme",
        },
        {
          k: "Zusammen",
          v: "20 Mrd. €",
          n: 20.05,
          d: "Im Jahr adressierbar in der EU.",
          src: "gerechnet",
        },
      ],
    },

    heute: {
      h2: "Was heute schon läuft",
      p1: "Synapsio ist keine Präsentation. Das Produkt läuft unter app.synapsio.solutions, mit Bestand, Lieferanten, Bestellungen und Protokoll in einem System.",
      p2: "Der Agent liest Lieferantenmails und Auftragsbestätigungen, rechnet Reichweite und Bestellpunkt pro Artikel, schreibt echte Bestellungen per Mail und legt jede Entscheidung mit ihrem Grund ins Protokoll. Pro Artikel wählt er ein benanntes Verfahren, von Bestellpunkt über Croston bis Newsvendor, und begründet die Wahl.",
      statement:
        "Ein Chatfenster kann Croston nicht gegen Newsvendor abwägen. Dafür braucht es den Bestand, die Historie und die Ausführung im selben System.",
      // Margin notes beside the two paragraphs. They pull out the two facts an investor extracts
      // from that prose, nothing new: the product is reachable, and the method is chosen per item.
      // Keep it at two. A third turns the column into a restatement of the paragraph.
      notes: [
        { k: "Live", v: "app.synapsio.solutions" },
        { k: "Fünf Verfahren", v: "je Artikel gewählt" },
      ],
      link: "Die Details stehen auf der Produktseite",
      // Register of what is actually built. Every line is verifiable in the running system.
      // ⚠️ NO usage numbers here: the only numbers that exist come from the demo company, and
      // publishing seeded counts as traction would be inventing traction.
      registerK: "Gebaut und im Betrieb",
      register: [
        {
          k: "Verfahren pro Artikel",
          d: "Der Agent wählt je Artikel ein benanntes Nachbestellverfahren: Bestellpunkt (s,Q), Croston für sporadischen Bedarf, Newsvendor für Verderbliches, periodische Prüfung oder mehrstufig. Begründung und Konfidenz legt er dazu, und der Mensch kann jede Wahl festsetzen.",
        },
        {
          k: "Nachbewertung",
          d: "Jede Bestellentscheidung wird mit ihren Signalen gespeichert und später gegen das tatsächliche Ergebnis nachbewertet. Das System weiß, welche seiner Entscheidungen gut waren.",
        },
        {
          k: "Lieferantenmail in beide Richtungen",
          d: "Bestellung raus, Antwort rein: eingehende Mails werden gelesen, der Bestellstatus wird daraus gesetzt. Der Lieferant muss sich nirgends anmelden und nichts installieren.",
        },
        {
          k: "Mehrere Standorte",
          d: "Bestände je Lager, eigenes Lager und Logistikdienstleister, Umlagerungen mit Freigabe, und eine Nachbestellung, die den Standort kennt.",
        },
        {
          k: "Stückliste und Fertigung",
          d: "Verbrauch wird aus echten Fertigungsaufträgen abgeleitet statt geschätzt, inklusive Änderungshistorie an der Stückliste.",
        },
        {
          k: "Freigabe und Protokoll",
          d: "Betragsschwelle, Freigabe direkt aus der Mail, und jede Aktion des Agenten steht mit Zeitpunkt und Grund im Protokoll.",
        },
        {
          k: "Mandantentrennung",
          d: "Auf Datenbankebene erzwungen, auf jeder Tabelle. Ein Mandant lässt sich vollständig und nachvollziehbar löschen.",
        },
        {
          k: "Kostendeckel je Kunde",
          d: "Der Rechenaufwand des Agenten wird pro Unternehmen gemessen und begrenzt. Das ist zugleich die Mechanik, auf der die Abrechnung aufsetzt.",
        },
      ],
    },

    modell: {
      h2: "Wie Synapsio verdient",
      lede: "Zwei Ebenen. Die erste trägt heute, die zweite entsteht mit dem Marktplatz.",
      rows: [
        {
          k: "Abonnement",
          h: "Monatlich, nach Artikelzahl, Nutzer frei",
          d: "Start 199 € bis 300 Artikel, Base 449 € bis 1.500, Advanced 899 € bis 6.000, Enterprise mit Preis je Kunde. Wer über die Grenze seiner Stufe kommt, wird benachrichtigt. Bestellungen hält der Tarif nie an: Bei Software, die Bestellungen auslöst, wäre ein harter Stopp kein vertretbares Verhalten.",
        },
        {
          k: "Transaktion",
          h: "1 bis 1,5 % je Kauf über den Marktplatz, später",
          d: "Wenn ein Unternehmen über Synapsio einkauft, fällt eine Gebühr an, die mit steigendem Volumen sinkt. Diese Ebene gehört zum Marktplatz und ist noch nicht gebaut. Zahlungsdienstleister-Gebühren sind davon getrennt und keine Einnahme von uns.",
        },
      ],
      note: "Alle Preise netto, Stand September 2026. Die Mechanik darunter ist gebaut: Artikelzahl, Verbrauch und Budget werden je Unternehmen gemessen und durchgesetzt. Abrechnung ist damit kein zweites System, sondern dieselbe Grundlage mit einem Preis daran.",
      noteNotes: [
        { k: "Preise", v: "ab 199 € im Monat" },
        { k: "Achse", v: "Artikelzahl, nicht Nutzer" },
      ],
    },

    plan: {
      h2: "Der Plan",
      lede: "Drei Fälle für 2032, alle mit der heutigen Preisleiter gerechnet.",
      cases: [
        {
          k: "Vorsichtig",
          v: 23,
          label: "23 Mio. €",
          d: "1 % der Firmen zu heutigen Preisen, ohne Marktplatz.",
        },
        {
          k: "Plan",
          v: 145,
          label: "145 Mio. €",
          d: "3 % der Firmen zu heutigen Preisen, 10 % ihres Einkaufs über den Marktplatz zu 1 %, also 7,8 Mrd. € Volumen. Das ist der Fall, den wir unterschreiben.",
        },
        {
          k: "Ambition",
          v: 610,
          label: "610 Mio. €",
          d: "6 % der Firmen, alle auf Advanced, 20 % ihres Einkaufs über den Marktplatz zu 1 %, also 31 Mrd. € Volumen.",
        },
      ],
      caseAxis: "ARR 2032",
      honest:
        "Der frühe Hochlauf bleibt bewusst konservativ: die ersten zahlenden Kunden drei Monate nach der Runde, 20 zahlende Kunden nach 18 Monaten. Synapsio wird vertrieblich verkauft, nicht per Selbstregistrierung, und die schnellen Hochlaufkurven aus dem KI-Umfeld stammen aus Produkten, die sich selbst ausrollen. Keiner der Fälle setzt höhere Preise voraus als die, die heute auf der Preisliste stehen.",
      honestNotes: [
        { k: "Monat 18", v: "20 Kunden, ~100 T€ ARR" },
        { k: "Rechnung", v: "heutige Preisleiter" },
      ],
      peak: "Diese Runde: 410 T€ für 18 Monate, bis zur Seed-Runde.",
    },

    funding: {
      h2: "Finanzierung",
      // The axis carries the time now, so the date is no longer repeated inside `d`. `c` is the
      // start column and `s` the span on the 24-column grid described in Investoren.astro; both
      // are derived from `when`, so change them together.
      years: ["2026", "2027", "2028", "2029"],
      steps: [
        { k: "Pre-Seed", when: "jetzt, 18 Monate", v: "410 T€", d: "Entwickler, Supply-Chain-Team, die ersten 20 Kunden.", c: 5, s: 9 },
        { k: "Seed", when: "ab Frühjahr 2028", v: "1,5 bis 2 Mio. €", d: "Vertrieb in DACH, Marktplatz.", c: 14, s: 5 },
        { k: "Series A", when: "2029", v: "5 bis 8 Mio. €", d: "EU-Expansion.", c: 19, s: 6 },
      ],
    },

    close: {
      h2: "Deck und Gespräch",
      p: "Das Pitchdeck liegt offen als PDF. Für Zahlen im Detail, den Finanzplan und den Stand der Kundengespräche sprechen wir am besten direkt.",
      cta: "Pitchdeck ansehen",
      alt: "Gespräch vereinbaren",
      mail: "contact@synapsio.co.site",
    },
  },

  en: {
    meta: {
      title: "Investors · Synapsio",
      description:
        "Market, product and plan for Synapsio: an AI agent that runs procurement for mid-sized manufacturers. With the deck and the numbers.",
    },
    hero: {
      chip: "INVESTORS",
      h1a: "An agent that ",
      h1em: "runs",
      h1b: " procurement. Not another dashboard.",
      sub: "The product is live and the first customer conversations are under way. This page holds the market, what actually works today, and the plan with its three cases.",
      cta: "Read the deck",
      alt: "Book a call",
    },

    problem: {
      h2: "The problem, in numbers",
      lede: "The German Mittelstand does not have an insight problem. It has an execution problem.",
      stats: [
        {
          v: "82 %",
          k: "of SMEs still run day-to-day operations mostly manually or semi-automated, with paper, media breaks and disconnected spreadsheet silos.",
          src: "Bitkom, 2026",
        },
        {
          v: "42 %",
          k: "of German SMEs used an ERP at all in 2025. The EU average is 45 %, and adoption has stagnated.",
          src: "IfM Bonn, EU comparison 2025",
        },
        {
          v: "1 in 4",
          k: "companies uses digital systems to optimise purchasing. The most-used system in purchasing is the ERP, with spreadsheets immediately behind.",
          src: "BME / Onventis, Einkaufsbarometer Mittelstand 2024",
        },
      ],
      statement: "The bottleneck is not missing software. It is software that displays instead of executing.",
    },

    markt: {
      h2: "The market",
      p1: "We compute it from the bottom up instead of quoting a market report: firms times price. The EU has 465,000 manufacturers and wholesalers with 10 to 249 employees.",
      p2: "At today's price ladder the subscription comes to €2.3B a year. The larger part is purchasing itself: manufacturers alone buy €1.78T a year, and 1 % of that through the marketplace is €17.8B. Retail is not counted yet.",
      scaleMax: "€20B",
      rings: [
        {
          k: "Firms",
          v: "465,000",
          d: "Manufacturing 318,709 and wholesale 145,876, each with 10 to 249 employees. Later: retail, another 163,317.",
          src: "Eurostat, 2023",
        },
        {
          k: "Subscription",
          v: "€2.3B",
          n: 2.25,
          d: "465,000 firms at today's blended price of €4,848 a year.",
          src: "Price ladder, September 2026",
        },
        {
          k: "Marketplace",
          v: "€17.8B",
          n: 17.8,
          d: "1 % of the manufacturers' purchasing.",
          src: "Eurostat, 2023 · fee = assumption",
        },
        {
          k: "Together",
          v: "€20B",
          n: 20.05,
          d: "Addressable per year in the EU.",
          src: "computed",
        },
      ],
    },

    heute: {
      h2: "What already runs",
      p1: "Synapsio is not a presentation. The product runs at app.synapsio.solutions, holding stock, suppliers, orders and the log in one system.",
      p2: "The agent reads supplier mail and order confirmations, computes cover and reorder point per item, writes real orders by mail, and puts every decision in the log with its reason. Per item it picks a named method, from reorder point through Croston to newsvendor, and explains the choice.",
      statement:
        "A chat window cannot weigh Croston against newsvendor. That needs the stock, the history and the execution in one system.",
      notes: [
        { k: "Live", v: "app.synapsio.solutions" },
        { k: "Five methods", v: "chosen per item" },
      ],
      link: "The detail is on the product page",
      registerK: "Built and running",
      register: [
        {
          k: "A method per item",
          d: "The agent picks a named replenishment method for each item: reorder point (s,Q), Croston for intermittent demand, newsvendor for perishables, periodic review or multi-echelon. It records the reason and its confidence alongside, and a person can pin any choice.",
        },
        {
          k: "Scored afterwards",
          d: "Every ordering decision is stored with the signals behind it and later scored against what actually happened. The system knows which of its own decisions were good ones.",
        },
        {
          k: "Supplier mail both ways",
          d: "Order out, reply in: incoming mail is read and the order status follows from it. The supplier signs up for nothing and installs nothing.",
        },
        {
          k: "Several locations",
          d: "Stock per site, own warehouse and third-party logistics, transfers with approval, and replenishment that knows where the stock sits.",
        },
        {
          k: "Bills of material",
          d: "Consumption is derived from real production runs instead of estimated, including the change history on the bill of material.",
        },
        {
          k: "Approval and log",
          d: "A value threshold, approval straight from the mail, and every action the agent takes recorded with its time and its reason.",
        },
        {
          k: "Tenant separation",
          d: "Enforced in the database, on every table. A tenant can be deleted completely and verifiably.",
        },
        {
          k: "A cost ceiling per customer",
          d: "The agent's compute is metered and capped per company. That is also the mechanism billing sits on.",
        },
      ],
    },

    modell: {
      h2: "How Synapsio earns",
      lede: "Two layers. The first carries today, the second arrives with the marketplace.",
      rows: [
        {
          k: "Subscription",
          h: "Monthly, by number of items, users free",
          d: "Start €199 up to 300 items, Base €449 up to 1,500, Advanced €899 up to 6,000, Enterprise priced per customer. Going past a tier's limit means a notice. The plan never holds an order back: for software that places orders, a hard stop is not defensible behaviour.",
        },
        {
          k: "Transaction",
          h: "1 to 1.5 % per marketplace purchase, later",
          d: "When a company buys through Synapsio a fee applies, falling as volume grows. This layer belongs to the marketplace and is not built yet. Payment processor fees are separate and are not our revenue.",
        },
      ],
      note: "All prices net, as of September 2026. The mechanism underneath is built: items, usage and budget are metered and enforced per company. Billing is therefore not a second system, only the same foundation with a price attached.",
      noteNotes: [
        { k: "Prices", v: "from €199 a month" },
        { k: "Axis", v: "items, not users" },
      ],
    },

    plan: {
      h2: "The plan",
      lede: "Three cases for 2032, all computed at today's price ladder.",
      cases: [
        { k: "Cautious", v: 23, label: "€23M", d: "1 % of firms at today's prices, no marketplace." },
        {
          k: "Plan",
          v: 145,
          label: "€145M",
          d: "3 % of firms at today's prices, 10 % of their purchasing through the marketplace at 1 %, i.e. €7.8B volume. This is the case we underwrite.",
        },
        {
          k: "Ambition",
          v: 610,
          label: "€610M",
          d: "6 % of firms, all on Advanced, 20 % of their purchasing through the marketplace at 1 %, i.e. €31B volume.",
        },
      ],
      caseAxis: "ARR 2032",
      honest:
        "The early ramp stays deliberately measured: first paying customers three months after the round, 20 paying customers after 18 months. Synapsio is sold by a sales team, not by self-registration, and the fast ramp curves from the AI world come from products that roll themselves out. None of the cases assumes higher prices than today's price list.",
      honestNotes: [
        { k: "Month 18", v: "20 customers, ~€100K ARR" },
        { k: "Basis", v: "today's price ladder" },
      ],
      peak: "This round: €410K for 18 months, up to the seed round.",
    },

    funding: {
      h2: "Funding",
      years: ["2026", "2027", "2028", "2029"],
      steps: [
        { k: "Pre-seed", when: "now, 18 months", v: "€410K", d: "A developer, a supply chain team, the first 20 customers.", c: 5, s: 9 },
        { k: "Seed", when: "from spring 2028", v: "€1.5 to 2M", d: "Sales in DACH, marketplace.", c: 14, s: 5 },
        { k: "Series A", when: "2029", v: "€5 to 8M", d: "EU expansion.", c: 19, s: 6 },
      ],
    },

    close: {
      h2: "Deck and conversation",
      p: "The pitch deck is open as a PDF. For the detailed numbers, the financial model and the state of customer conversations, a direct conversation works better.",
      cta: "Read the deck",
      alt: "Book a call",
      mail: "contact@synapsio.co.site",
    },
  },
} as const;
