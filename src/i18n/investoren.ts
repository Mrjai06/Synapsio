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
//  Market size
//   · AI in supply chain, global, by 2030: 40.5 bn USD at 28.2 % CAGR (MarketsandMarkets, 2024)
//     to 51.1 bn USD at 38.9 % CAGR (Grand View Research, 2024). The page states the RANGE,
//     because the two credible houses disagree and pretending to one number would be false
//     precision.
//   · Europe took 24.6 % of global supply chain management software revenue in 2025.
//   · Germany held 26.2 % of the European ERP software market in 2025.
//
//  Plan and funding: Synapsio_Business_and_Financial_Plan_2026.docx +
//     Synapsio_Financial_Model_2026.xlsx (OneDrive\SYNAPSIO). Three ARR cases at 2030,
//     breakeven 2030, peak cumulative funding need ≈ 3.5 M€, ~12 paying customers by end 2026.
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
      sub: "Das Produkt ist live, die ersten Pilotgespräche laufen. Auf dieser Seite stehen der Markt, was heute tatsächlich funktioniert, und der Plan mit seinen drei Fällen.",
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
      p1: "Die Ebene, auf der wir spielen, ist der KI-Anteil an Lieferketten-Software. Die beiden belastbaren Häuser sind sich über die Größe nicht einig, deshalb steht hier die Spanne und nicht eine Scheingenauigkeit.",
      p2: "Europa ist dabei kein Randmarkt, und Deutschland trägt den europäischen Anteil. Genau dort sitzt zugleich der stagnierende ERP-Bestand aus dem Abschnitt darüber. Das ist die Lücke, in die Synapsio hineinbaut.",
      scaleMax: "60 Mrd. USD",
      rings: [
        {
          k: "TAM",
          v: "40,5 bis 51,1 Mrd. USD",
          d: "KI in der Lieferkette, weltweit, 2030",
          src: "MarketsandMarkets (28,2 % CAGR) · Grand View Research (38,9 % CAGR)",
        },
        {
          k: "SAM",
          v: "24,6 %",
          d: "Anteil Europas am weltweiten Umsatz mit Lieferketten-Software, 2025",
          src: "Marktberichte 2025",
        },
        {
          k: "Einstieg",
          v: "26,2 %",
          d: "Anteil Deutschlands am europäischen ERP-Markt, 2025. Unser Startmarkt ist DACH.",
          src: "Europe ERP Market, 2025",
        },
      ],
    },

    heute: {
      h2: "Was heute schon läuft",
      p1: "Synapsio ist keine Präsentation. Das Produkt läuft unter app.synapsio.solutions, mit Bestand, Lieferanten, Bestellungen und Protokoll in einem System.",
      p2: "Der Agent liest Lieferantenmails und Auftragsbestätigungen, rechnet Reichweite und Bestellpunkt pro Artikel, schreibt echte Bestellungen per Mail und legt jede Entscheidung mit ihrem Grund ins Protokoll. Pro Artikel wählt er ein benanntes Verfahren, von Bestellpunkt über Croston bis Newsvendor, und begründet die Wahl.",
      statement:
        "Ein Chatfenster kann Croston nicht gegen Newsvendor abwägen. Dafür braucht es den Bestand, die Historie und die Ausführung im selben System.",
      link: "Die Details stehen auf der Produktseite",
      // Register of what is actually built. Every line is verifiable in the running system.
      // ⚠️ NO usage numbers here: the only numbers that exist come from the demo company, and
      // publishing seeded counts as traction would be inventing traction.
      registerK: "Gebaut und im Betrieb",
      register: [
        {
          k: "Verfahren pro Artikel",
          d: "Der Agent wählt je Artikel ein benanntes Nachbestellverfahren — Bestellpunkt (s,Q), Croston für sporadischen Bedarf, Newsvendor für Verderbliches, periodische Prüfung, mehrstufig — und legt Begründung und Konfidenz dazu. Der Mensch kann jede Wahl festsetzen.",
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
          h: "Monatlich, gestaffelt nach Geschäftsvolumen",
          d: "Vier Stufen vom Einstieg bis Enterprise. Jede Stufe hat ein Monatslimit, das weich ist: Wer darüber liegt, wird benachrichtigt und zahlt einen kleinen Mehrverbrauch, statt mitten im Betrieb abgeschaltet zu werden. Bei Software, die Bestellungen auslöst, ist ein harter Stopp kein vertretbares Verhalten.",
        },
        {
          k: "Transaktion",
          h: "Anteil an Käufen über den Marktplatz, später",
          d: "Wenn ein Unternehmen über Synapsio einkauft, fällt eine Gebühr an, die mit steigendem Volumen sinkt und für ausgewählte Branchen ermäßigt ist. Diese Ebene gehört zum Marktplatz und ist noch nicht gebaut. Zahlungsdienstleister-Gebühren sind davon getrennt und keine Einnahme von uns.",
        },
      ],
      note: "Die Preise legen wir zum Launch fest. Was bereits steht, ist die Mechanik darunter: Verbrauch und Budget werden pro Unternehmen gemessen und durchgesetzt. Abrechnung ist damit kein zweites System, sondern dieselbe Grundlage mit einem Preis daran.",
    },

    plan: {
      h2: "Der Plan",
      lede: "Drei Fälle für 2030, statt einer Zahl, die alles tragen muss.",
      cases: [
        {
          k: "Boden",
          v: 9,
          label: "9 Mio. €",
          d: "Nur DACH, nur Abo. Ohne Transaktionsebene und ohne EU-Expansion.",
        },
        {
          k: "Basis",
          v: 42,
          label: "42 Mio. €",
          d: "DACH in der Tiefe, EU ab 2028, Transaktionsebene aktiv. Das ist der Fall, den wir unterschreiben. Breakeven 2030.",
        },
        {
          k: "Ambition",
          v: 115,
          label: "115 Mio. €",
          d: "EU vollständig, Marktplatz-Effekt und Abwicklung zwischen Systemen.",
        },
      ],
      caseAxis: "ARR 2030",
      honest:
        "Der frühe Hochlauf bleibt bewusst konservativ: rund zwölf zahlende Kunden bis Ende 2026. Synapsio wird vertrieblich verkauft, nicht per Selbstregistrierung, und die schnellen Hochlaufkurven aus dem KI-Umfeld stammen aus Produkten, die sich selbst ausrollen. Wir heben die Ambition im fünften Jahr, nicht die Geschwindigkeit im ersten.",
      peak: "Spitzenbedarf an kumulierter Finanzierung bis zum Breakeven: rund 3,5 Mio. €.",
    },

    funding: {
      h2: "Finanzierung",
      steps: [
        { k: "Pre-Seed", v: "150 bis 300 T€", d: "Jetzt. Produkt, erste Piloten, Nachweis im Betrieb." },
        { k: "Seed", v: "1,5 bis 2 Mio. €", d: "Q2 bis Q3 2027. Vertrieb in DACH, Transaktionsebene." },
        { k: "Series A", v: "5 bis 8 Mio. €", d: "2028 bis 2029. EU-Expansion." },
      ],
    },

    close: {
      h2: "Deck und Gespräch",
      p: "Das Pitchdeck liegt offen als PDF. Für Zahlen im Detail, den Finanzplan und den Stand der Piloten sprechen wir am besten direkt.",
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
      sub: "The product is live and the first pilot conversations are under way. This page holds the market, what actually works today, and the plan with its three cases.",
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
      p1: "The layer we play on is the AI share of supply chain software. The two credible houses disagree about its size, so this page states the range rather than a false precision.",
      p2: "Europe is not a side market in this, and Germany carries the European share. That is also where the stagnating ERP base from the section above sits. That gap is what Synapsio builds into.",
      scaleMax: "60 bn USD",
      rings: [
        {
          k: "TAM",
          v: "40.5 to 51.1 bn USD",
          d: "AI in supply chain, global, 2030",
          src: "MarketsandMarkets (28.2 % CAGR) · Grand View Research (38.9 % CAGR)",
        },
        {
          k: "SAM",
          v: "24.6 %",
          d: "Europe's share of global supply chain software revenue, 2025",
          src: "Market reports 2025",
        },
        {
          k: "Entry",
          v: "26.2 %",
          d: "Germany's share of the European ERP market, 2025. Our starting market is DACH.",
          src: "Europe ERP Market, 2025",
        },
      ],
    },

    heute: {
      h2: "What already runs",
      p1: "Synapsio is not a presentation. The product runs at app.synapsio.solutions, holding stock, suppliers, orders and the log in one system.",
      p2: "The agent reads supplier mail and order confirmations, computes cover and reorder point per item, writes real orders by mail, and puts every decision in the log with its reason. Per item it picks a named method, from reorder point through Croston to newsvendor, and explains the choice.",
      statement:
        "A chat window cannot weigh Croston against newsvendor. That needs the stock, the history and the execution in one system.",
      link: "The detail is on the product page",
      registerK: "Built and running",
      register: [
        {
          k: "A method per item",
          d: "The agent picks a named replenishment method for each item — reorder point (s,Q), Croston for intermittent demand, newsvendor for perishables, periodic review, multi-echelon — and records the reason and its confidence. A person can pin any choice.",
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
          h: "Monthly, tiered by business volume",
          d: "Four tiers from entry to enterprise. Each has a monthly limit, and the limit is soft: going past it means a notice and a small overage, not being switched off mid-operation. For software that places orders, a hard stop is not defensible behaviour.",
        },
        {
          k: "Transaction",
          h: "A share of marketplace purchases, later",
          d: "When a company buys through Synapsio a fee applies, falling as volume grows and reduced for selected industries. This layer belongs to the marketplace and is not built yet. Payment processor fees are separate and are not our revenue.",
        },
      ],
      note: "Prices are set closer to launch. What already stands is the mechanism underneath: usage and budget are metered and enforced per company. Billing is therefore not a second system, only the same foundation with a price attached.",
    },

    plan: {
      h2: "The plan",
      lede: "Three cases for 2030, rather than one number carrying everything.",
      cases: [
        { k: "Floor", v: 9, label: "€9M", d: "DACH only, subscription only. No transaction layer, no EU expansion." },
        {
          k: "Base",
          v: 42,
          label: "€42M",
          d: "DACH in depth, EU from 2028, transaction layer live. This is the case we underwrite. Breakeven 2030.",
        },
        { k: "Ambition", v: 115, label: "€115M", d: "Full EU, marketplace effect, and settlement between systems." },
      ],
      caseAxis: "ARR 2030",
      honest:
        "The early ramp stays deliberately measured: around twelve paying customers by the end of 2026. Synapsio is sold by a sales team, not by self-registration, and the fast ramp curves from the AI world come from products that roll themselves out. We raise the ambition in year five, not the velocity in year one.",
      peak: "Peak cumulative funding need before breakeven: around €3.5M.",
    },

    funding: {
      h2: "Funding",
      steps: [
        { k: "Pre-seed", v: "€150 to 300K", d: "Now. Product, first pilots, proof in live operation." },
        { k: "Seed", v: "€1.5 to 2M", d: "Q2 to Q3 2027. Sales in DACH, transaction layer." },
        { k: "Series A", v: "€5 to 8M", d: "2028 to 2029. EU expansion." },
      ],
    },

    close: {
      h2: "Deck and conversation",
      p: "The pitch deck is open as a PDF. For the detailed numbers, the financial model and the state of the pilots, a direct conversation works better.",
      cta: "Read the deck",
      alt: "Book a call",
      mail: "contact@synapsio.co.site",
    },
  },
} as const;
