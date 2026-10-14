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
//  Market size, bottom-up (since 2026-10-14, identical to the pitch deck v6; the arithmetic lives
//  in Synapsio_Pitchdeck_2026-09_v6_build.py, change it there first, then here):
//   · Eurostat sbs_sc_ovw 2023, Germany + Austria. 10-249 employees: manufacturers (without food)
//     ~60,000 + wholesale ~28,000 + specialist retail with own stock ~32,000 = ~120,000 firms.
//     2-9 employees: wholesale + retail ~193,000 (Eurostat withholds small manufacturers).
//     Together 313,864, shown as "über 300.000".
//   · 10-249 at the blended price 4,848 €/yr (45 % Start · 40 % Base · 15 % Advanced, assumption)
//     → ~580 M€. 2-9 at the Start price 2,388 €/yr → ~460 M€. Together ~1.05 bn €.
//   · Without an ERP (Eurostat isoc_eb_iip 2025/2023, per size class and country): ~230,000.
//   · EU (seed round, roadmap only): ~1.7 M firms, ~5.3 bn €, same method, Eurostat 2023.
//   · The marketplace is shown, never counted: no figure until orders run through it.
//
//  Plan and funding: the pitch deck v6 and the budget (Synapsio_Budget_build.py).
//     Round 440 T€ for 18 months. Targets only up to month 18; nothing after is quoted.
//     The 2032 ARR cases (23 / 145 / 610 M€) and the dated seed / Series A amounts were REMOVED
//     on 2026-10-14: the deck no longer carries them, and the page must not say more than the deck.
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
      sub: "Das Produkt ist live, die ersten Kundengespräche laufen. Auf dieser Seite stehen der Markt, was heute tatsächlich funktioniert, und der Plan bis zur Seed-Runde.",
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
      p1: "Wir rechnen von unten, statt einen Marktbericht zu zitieren: Firmen mal Preis. In Deutschland und Österreich führen über 300.000 Hersteller und Händler ihren Bestand selbst.",
      p2: "Zur heutigen Preisleiter ergibt das Abo über 1 Mrd. € im Jahr. Rund 230.000 dieser Firmen arbeiten ohne ERP, dort ist der Bedarf am größten. Der Marktplatz ist eingebaut, aber nicht eingerechnet: Eine Zahl nennen wir erst, wenn Bestellungen darüber laufen.",
      scaleMax: "1,05 Mrd. €",
      rings: [
        {
          k: "Firmen",
          v: "über 300.000",
          d: "Mit 10 bis 249 Beschäftigten rund 60.000 Hersteller, 28.000 Großhändler und 32.000 Fachhändler mit eigenem Bestand. Dazu rund 193.000 Groß- und Fachhändler mit 2 bis 9 Beschäftigten.",
          src: "Eurostat, 2023 · Deutschland und Österreich",
        },
        {
          k: "10 bis 249 Beschäftigte",
          v: "580 Mio. €",
          n: 0.58,
          d: "120.000 Firmen zum Mischpreis von 4.848 € im Jahr: 45 % Start, 40 % Base, 15 % Advanced.",
          src: "Preisleiter, Stand September 2026 · Mischung = Annahme",
        },
        {
          k: "2 bis 9 Beschäftigte",
          v: "460 Mio. €",
          n: 0.46,
          d: "193.000 Groß- und Fachhändler zum Start-Preis von 2.388 € im Jahr. Kleine Hersteller weist Eurostat nicht aus.",
          src: "Eurostat, 2023 · Preisleiter",
        },
        {
          k: "Zusammen",
          v: "über 1 Mrd. €",
          n: 1.05,
          d: "Im Jahr, in Deutschland und Österreich.",
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
      lede: "Ziele setzen wir nur bis Monat 18. Was danach kommt, hängt an den Kunden, die wir bis dahin gewinnen.",
      // Milestones in months after closing, identical to the deck's roadmap slide. `v` is the
      // month and places the mark on the rail; the last one is the seed milestone and carries the accent.
      cases: [
        { k: "Monat 3", v: 3, label: "Monat 3", d: "Vertriebsleitung an Bord, erste Firmen nutzen Synapsio." },
        { k: "Monat 6", v: 6, label: "Monat 6", d: "Erste zahlende Kunden." },
        { k: "Monat 12", v: 12, label: "Monat 12", d: "10 zahlende Kunden." },
        { k: "Monat 18", v: 18, label: "Monat 18", d: "20 zahlende Kunden, rund 100 T€ ARR. Damit gehen wir in die Seed-Runde." },
      ],
      caseAxis: "Monate nach Abschluss",
      honest:
        "Der Hochlauf bleibt bewusst konservativ. Synapsio wird vertrieblich verkauft, nicht per Selbstregistrierung, und die schnellen Hochlaufkurven aus dem KI-Umfeld stammen aus Produkten, die sich selbst ausrollen. Die rund 100 T€ ARR rechnen mit dem heutigen Mischpreis, nicht mit höheren Preisen.",
      honestNotes: [
        { k: "Monat 18", v: "20 zahlende Kunden, ~100 T€ ARR" },
        { k: "Rechnung", v: "heutige Preisleiter" },
      ],
      peak: "Diese Runde: 440 T€ für 18 Monate, bis zur Seed-Runde.",
    },

    funding: {
      h2: "Finanzierung und Märkte",
      // Months after closing, not calendar years: the closing date is not fixed. Four labels of six
      // columns each = 12 months per label. `c` is the start column and `s` the span on the
      // 24-column grid; pre-seed 0-18 = columns 1-9, seed from 18 = column 10 to the end.
      years: ["Monat 0", "Monat 12", "Monat 24", "Monat 36"],
      steps: [
        { k: "Pre-Seed", when: "jetzt, Monat 0 bis 18", v: "440 T€", d: "Deutschland und Österreich: über 300.000 Firmen, über 1 Mrd. € im Jahr. Vertrieb, Supply-Chain-Team, die ersten 20 zahlenden Kunden.", c: 1, s: 9 },
        { k: "Seed", when: "ab Monat 18", v: "Europäische Union", d: "Über 1,7 Mio. Firmen, über 5 Mrd. € im Jahr (Eurostat 2023). Land für Land, dorthin, wo Nachfrage und Partner sind.", c: 10, s: 15 },
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
      sub: "The product is live and the first customer conversations are under way. This page holds the market, what actually works today, and the plan up to the seed round.",
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
      p1: "We compute it from the bottom up instead of quoting a market report: firms times price. In Germany and Austria, over 300,000 manufacturers and distributors run their own inventory.",
      p2: "At today's price ladder the subscription comes to over €1B a year. About 230,000 of these firms work without an ERP, which is where the need is greatest. The marketplace is built in but not counted: we put a figure on it only once orders run through it.",
      scaleMax: "€1.05B",
      rings: [
        {
          k: "Firms",
          v: "over 300,000",
          d: "With 10 to 249 employees, about 60,000 manufacturers, 28,000 wholesalers and 32,000 specialist retailers with their own stock. Plus about 193,000 wholesalers and retailers with 2 to 9 employees.",
          src: "Eurostat, 2023 · Germany and Austria",
        },
        {
          k: "10 to 249 staff",
          v: "€580M",
          n: 0.58,
          d: "120,000 firms at the blended price of €4,848 a year: 45 % Start, 40 % Base, 15 % Advanced.",
          src: "Price ladder, September 2026 · mix = assumption",
        },
        {
          k: "2 to 9 staff",
          v: "€460M",
          n: 0.46,
          d: "193,000 wholesalers and retailers at the Start price of €2,388 a year. Eurostat does not publish small manufacturers.",
          src: "Eurostat, 2023 · price ladder",
        },
        {
          k: "Together",
          v: "over €1B",
          n: 1.05,
          d: "Per year, in Germany and Austria.",
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
      lede: "We set targets only up to month 18. What comes after depends on the customers we win by then.",
      cases: [
        { k: "Month 3", v: 3, label: "Month 3", d: "Sales lead on board, first companies using Synapsio." },
        { k: "Month 6", v: 6, label: "Month 6", d: "First paying customers." },
        { k: "Month 12", v: 12, label: "Month 12", d: "10 paying customers." },
        { k: "Month 18", v: 18, label: "Month 18", d: "20 paying customers, about €100K ARR. That takes us into the seed round." },
      ],
      caseAxis: "Months after closing",
      honest:
        "The ramp stays deliberately measured. Synapsio is sold by a sales team, not by self-registration, and the fast ramp curves from the AI world come from products that roll themselves out. The roughly €100K ARR uses today's blended price, not higher prices.",
      honestNotes: [
        { k: "Month 18", v: "20 paying customers, ~€100K ARR" },
        { k: "Basis", v: "today's price ladder" },
      ],
      peak: "This round: €440K for 18 months, up to the seed round.",
    },

    funding: {
      h2: "Funding and markets",
      years: ["Month 0", "Month 12", "Month 24", "Month 36"],
      steps: [
        { k: "Pre-seed", when: "now, month 0 to 18", v: "€440K", d: "Germany and Austria: over 300,000 firms, over €1B a year. Sales, a supply chain team, the first 20 paying customers.", c: 1, s: 9 },
        { k: "Seed", when: "from month 18", v: "European Union", d: "Over 1.7M firms, over €5B a year (Eurostat 2023). Country by country, where demand and partners are.", c: 10, s: 15 },
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
