/**
 * Startpage copy, DE + EN. `ui.ts` holds the small shared nav/footer keys; this file holds the
 * page's long-form copy and the demo data inside the product mock, because the mock is part of
 * the argument and an English visitor should not be reading a German screenshot.
 *
 * House style, both languages (see the AI-tell pass): NO em dashes. Use a comma, a colon, a full
 * stop or a middot. German quotes are „…“, English are "…".
 */

export const homeCopy = {
  de: {
    nav: { product: "Produkt", about: "Über uns", investors: "Investoren", blog: "Blog", cta: "Pilot-Gespräch", menu: "Menü", menuClose: "Menü schließen", language: "Sprache" },

    hero: {
      chip: "KI-Agent für den Einkauf",
      h1a: "Die meisten Bestellungen brauchen",
      h1em: "keine Freigabe",
      h1b: " mehr.",
      sub: "Synapsio führt den Einkauf im Mittelstand: liest Lieferantenmails, erkennt Engpässe, bestellt selbst. Vorgelegt wird Ihnen nur, was über Ihrer Schwelle liegt.",
      linkTag: "Live",
      link: "Produkt ansehen →",
    },

    app: {
      tagline: "Connections you can rely on",
      sample: "Beispieldaten",
      worker: "Worker online",
      notifications: "Notifications",
      signout: "Abmelden",
      groups: { ops: "Operations", net: "Network", intel: "Intelligence", set: "Settings", admin: "Admin" },
      nav: {
        dashboard: "Dashboard", inventory: "Inventar", orders: "Bestellungen", approvals: "Freigaben",
        exceptions: "Ausnahmen", suppliers: "Lieferanten", marketplace: "Marktplatz", supplierView: "Lieferantensicht",
        brain: "Business Brain", intelligence: "Intelligence", reports: "Berichte", settings: "Einstellungen", admin: "Admin",
      },
      updated: "Aktualisiert vor 2 Min.",
      autobar: "Autonomer Modus aktiv · Synapsio führt Ihre Lieferkette",
      needsTitle: "Braucht Sie heute",
      needs: [
        { t: "Neuer Lieferant · Frässtahl 42CrMo4", s: "€ 3.800 · über Ihrer Freigabeschwelle" },
        { t: "Bestand knapp · Gewindeeinsatz M8", s: "Reichweite 9 Tage · Bestellvorschlag liegt bereit" },
      ],
      kpis: [
        { lbl: "Bestandswert", sub: "45 Artikel geführt" },
        { lbl: "Engpass-Risiko", sub: "weniger als 7 Tage Reichweite" },
        { lbl: "Aktive Hinweise", sub: "2 davon heute neu" },
        { lbl: "Bestellungen", sub: "Lieferantenbestellungen · Monat" },
        { lbl: "Für Sie erledigt", sub: "diese Woche, ohne Freigabe" },
      ],
      brain: { lbl: "Brain-Lernstatus", meta: "6 Produkte · 51 Stücklisten zugeordnet →" },
      impact: {
        h: "Synapsio Impact", s: "Automatisierungs-Kennzahlen für Ihr Geschäft",
        caps: ["Bestellungen automatisiert", "Wert verwaltet", "Stunden gespart"],
        chart: "KI-Bestellungen pro Woche · letzte 8 Wochen",
      },
      inv: {
        actions: ["Kürzlich gelöscht", "Export CSV", "+ Artikel"],
        search: "Nach Name oder SKU suchen …",
        locations: "Alle Standorte",
        filters: ["Alle", "Gefährdet", "Kritisch", "Gesund"],
        head: ["SKU / Artikel", "Kategorie", "Bestand", "Min.", "Bedarf/T", "Reichw.", "Kosten", "Risiko", "Lieferant"],
        usedIn: "Verbaut in:",
        aisle: "Gang", rack: "Regal", perUnit: "St./Einheit", days: "T",
        rows: [
          { sku: "H-2841", pn: "Frässtahl 42CrMo4", loc: "4 · A-03", used: "Voltaris Rahmen (2", cat: "Rohmaterial", stock: "120", min: "300", need: "30,0", cov: "4", covCls: "crit", cost: "€ 56,21", risk: "Kritisch", riskCls: "crit", sup: "Steel Precision" },
          { sku: "S-1180", pn: "Sechskantschraube M8", loc: "2 · A-04", used: "Voltaris Rahmen (8", cat: "Normteile", stock: "8.400", min: "2.000", need: "270", cov: "31", covCls: "ok", cost: "€ 0,30", risk: "Gesund", riskCls: "low", sup: "Nordschraube AG" },
          { sku: "G-0442", pn: "Gewindeeinsatz M8", loc: "8 · A-06", used: "Voltaris Deckel (1", cat: "Normteile", stock: "640", min: "500", need: "71", cov: "9", covCls: "warn", cost: "€ 1,80", risk: "Knapp", riskCls: "warn", sup: "Nordschraube AG" },
          { sku: "D-3310", pn: "Dichtring 22mm", loc: "3 · A-06", used: "Voltaris Pumpe (4", cat: "Dichtungen", stock: "2.100", min: "800", need: "78", cov: "27", covCls: "ok", cost: "€ 0,65", risk: "Gesund", riskCls: "low", sup: "Dichttech GmbH" },
          { sku: "V-0071", pn: "Verpackung Typ B", loc: "9 · A-02", used: "Versand (1", cat: "Verpackung", stock: "310", min: "400", need: "52", cov: "6", covCls: "warn", cost: "€ 2,80", risk: "Knapp", riskCls: "warn", sup: "Möller Verpackung" },
        ],
      },
      ord: {
        newOrder: "+ Neue Bestellung",
        subtabs: ["Bestellungen", "Mail-Log", "Rückgaben"],
        tracking: "Bestellverfolgung",
        filters: ["Offen (5)", "Unterwegs", "Erledigt", "Alle"],
        head: ["PO-Nr.", "Lieferant", "Artikel", "Betrag", "Status", "Aktion"],
        steps: ["Offen", "Warteschl.", "Gesendet", "Bestätigt"],
        prep: "In Vorbereitung", why: "Warum?", portal: "Portal",
        rows: [
          { po: "PO-2841", sup: "steel-precision.de", item: "Frässtahl 42CrMo4", amt: "€ 3.800", done: 1, prep: true, why: true },
          { po: "PO-2838", sup: "Möller Verpackung", item: "Verpackung Typ B", amt: "€ 620", done: 3, prep: false, why: false },
          { po: "PO-2836", sup: "Nordschraube AG", item: "Sechskantschraube M8", amt: "€ 2.550", done: 4, prep: false, why: true },
          { po: "PO-2831", sup: "Dichttech GmbH", item: "Dichtring 22mm", amt: "€ 1.240", done: 2, wait: true, prep: false, why: false },
          { po: "PO-2829", sup: "steel-precision.de", item: "Werkzeugsatz", amt: "€ 4.900", done: 1, prep: true, why: true },
        ],
        repliesTitle: "Lieferanten-Antworten",
        replies: [
          { from: "orders@steel-precision.de", subj: "Re: Bestellung PO-2841, Termin bestätigt", badge: "Verarbeitet", cls: "parsed", ago: "vor 2 Std." },
          { from: "shipping@moeller-verpackung.de", subj: "Versandavis: Verpackung Typ B", badge: "Ausstehend", cls: "pending", ago: "vor 1 Tag" },
          { from: "sales@nordschraube.de", subj: "Update: Q3 Lieferzeiten & Preise", badge: "Ausstehend", cls: "pending", ago: "vor 2 Tagen" },
        ],
      },
    },

    band: ["Datenbank in Frankfurt (EU)", "Lückenloser Audit-Trail", "Entwickelt in Berlin", "Live unter app.synapsio.solutions"],

    figs: {
      chip: "So arbeitet der KI-Agent",
      ledeB: "Ein KI-Agent, der den Einkauf führt, nicht nur unterstützt.",
      ledeP: " Er liest Lieferantenmails, erkennt Engpässe, vergleicht Angebote und bestellt, Tag und Nacht. Immer nur bis zu der Grenze, die Sie setzen.",
      items: [
        { label: "Wahrnehmen", title: "Er liest, was hereinkommt.", text: "Mails und Auftragsbestätigungen der Lieferanten: der Agent liest sie und erfasst jede Position." },
        { label: "Verbrauch", title: "Er kennt Ihren Verbrauch.", text: "Produktionsläufe ziehen Bestand vom Regal. Der Agent zählt mit und weiß, wann Nachschub fällig ist." },
        { label: "Handeln", title: "Er bestellt, bis zu Ihrer Schwelle.", text: "Unter Ihrer Freigabeschwelle laufen die Bestellungen durch. Was darüber liegt, hebt er für Sie heraus." },
        { label: "Lernen", title: "Er wird jede Woche besser.", text: "Jede Freigabe, jede Korrektur fließt zurück. Die Treffer des Agenten rücken näher an Ihr Ziel." },
      ],
    },

    ctrl: {
      chip: "Kontrolle",
      h2: "Und wer entscheidet? Sie.",
      sub: "Der Agent handelt nur in dem Rahmen, den Sie setzen: vier Regler, jederzeit änderbar.",
      nav: [
        { b: "Freigabeschwelle", s: "Ab welchem Betrag Sie gefragt werden." },
        { b: "Autonomie-Stufe", s: "Vorschlagen oder selbst handeln." },
        { b: "Ausgabenlimits", s: "Grenzen pro Bestellung und pro Tag." },
        { b: "Audit-Trail", s: "Jede Aktion, mit Begründung." },
      ],
      b1: {
        h: "Ihre Freigabeschwelle",
        p: "Bis zu diesem Betrag bestellt der Agent selbst. Alles darüber legt er Ihnen vor.",
        cap: "automatisch bis hier", lo: "0 €", hi: "10.000 €", val: "5.000 €",
        orders: [
          { n: "Frässtahl 42CrMo4", a: "3.800 €", b: "automatisch" },
          { n: "Sechskantschraube M8", a: "2.550 €", b: "automatisch" },
          { n: "Werkzeugsatz komplett", a: "6.400 €", b: "Freigabe" },
        ],
        sub: [
          { h: "Frei einstellbar", p: "Von 0 € bis beliebig hoch. Bei 0 € wird jede Bestellung vorgelegt. Sie bestimmen die Grenze." },
          { h: "Sofort wirksam", p: "Änderungen greifen ab der nächsten Bestellung. Kein Neustart, keine Wartezeit." },
        ],
      },
      b2: {
        h: "Was im Autopilot passiert",
        p: "Im Autopilot durchläuft jede Bestellung dieselben Schritte: Bedarf, Angebote und eine Prüfung gegen alle Ihre Grenzen. Erst wenn alles passt, löst der Agent selbst aus.",
        n1b: "Auslöser", n1t: "Bedarf erkannt", n1s: "Frässtahl · Reichweite noch 8 Tage",
        n2b: "Agent", n2t: "Angebote eingeholt", n2s: "3 Lieferanten · bester: Nordschraube",
        n3b: "Prüfung", n3t: "Alle Grenzen geprüft",
        checks: ["Unter Freigabeschwelle · 5.000 €", "Unter Tageslimit · 20.000 €", "Lieferant freigegeben"],
        yes: "Ja", no: "Nein",
        n4b: "✓ Automatisch", n4t: "Bestellt", n4s: "Nordschraube · 2.550 € · sofort ausgelöst.",
        n5b: "Wartet", n5t: "Zu Ihrer Freigabe", n5s: "Reißt eine Grenze, geht es an Sie.",
        note: "„Nur vorschlagen“ oder „selbst handeln“: ein Regler in den Einstellungen.",
        sub: [
          { h: "Zwei Stufen", p: "Nur vorschlagen: Sie geben jede Bestellung frei. Oder selbst handeln bis zu Ihrer Schwelle." },
          { h: "Jederzeit umstellbar", p: "Ein Regler in den Einstellungen, vom vollen Autopilot bis zur reinen Empfehlung." },
        ],
      },
      b3: {
        h: "Harte Grenzen",
        p: "Betrag pro Bestellung, Ausgaben pro Tag, Bestellschluss. Erreicht der Agent eine Grenze, hält er an.",
        used: "ausgeschöpft", cap: "Ausgaben heute · 12.400 / 20.000 €",
        t1l: "Pro Bestellung", t1v: "5.000 €", t1s: "Maximum",
        t2l: "Bestellschluss", t2v: "16:00", t2s: "täglich",
        t3l: "Diese Woche", t3v: "48.900 €",
        t3n: "Am Limit stoppt der Agent und meldet sich. Ohne Sie läuft nichts weiter.",
        sub: [
          { h: "Zwei Grenzen", p: "Pro Bestellung und pro Tag, unabhängig voneinander gesetzt." },
          { h: "Bestellschluss", p: "Nach der eingestellten Uhrzeit löst der Agent nichts mehr aus." },
        ],
      },
      b4: {
        h: "Alles nachvollziehbar",
        p: "Jeder Schritt wird protokolliert, mit dem Grund dahinter. Fragen Sie „Warum?“, sehen Sie die Entscheidung.",
        term: "audit-trail · steel-precision",
        log: [
          { t: "08:12", s: "Lieferantenmail gelesen · AB #A-2841" },
          { t: "08:14", s: "Angebote verglichen · Nordschraube gewählt" },
          { t: "08:31", s: "Bestellt 2.550 € · unter Schwelle · automatisch" },
          { t: "09:02", s: "6.400 € · über Schwelle · zur Freigabe vorgelegt", hot: true },
          { t: "09:14", s: "Wareneingang gebucht · PO-2836" },
        ],
        whyH: "Warum diese Bestellung?",
        why: ["Reichweite unter 9 Tage, Nachschub nötig", "3 Angebote geprüft · Nordschraube: bester Preis + Termin", "2.550 € liegt unter Ihrer Schwelle (5.000 €)"],
        sub: [
          { h: "Jede Aktion", p: "Lesen, vergleichen, bestellen, buchen: jeder Schritt landet im Protokoll." },
          { h: "Begründung auf Klick", p: "„Warum?“ zeigt Reichweite, Angebote und die Schwellen-Prüfung hinter jeder Entscheidung." },
        ],
      },
    },

    sec: {
      chip: "Sicherheit & Datenschutz",
      h2: "Ihre Lieferkette bleibt geschützt und unter Ihrer Kontrolle.",
      ledeB: "Ein Agent mit Zugriff auf Ihren Einkauf muss vertrauenswürdig sein.",
      ledeP: " Deshalb läuft bei Synapsio jeder Schritt in einer abgeschotteten, verschlüsselten Umgebung. Jede Firma arbeitet für sich, und jede Aktion steht im Protokoll.",
      mapLbl: "Geschützter Raum", mapRegion: "verschlüsselt",
      mapH: "Ihre Lieferkette, rundum abgesichert.",
      mapP: "Vom Lieferanten bis ins Lager arbeitet der Agent in einem geschlossenen, verschlüsselten Raum. Zugriff haben nur Sie und die Menschen, die Sie berechtigen. Sonst niemand.",
      facts: [
        { lbl: "Mandantentrennung", h: "Jede Firma abgeschottet", p: "Ihre Zahlen liegen in einer eigenen, isolierten Umgebung. Auf Datenbankebene kann keine Firma die Daten einer anderen sehen." },
        { lbl: "Rollen & Rechte", h: "Sie vergeben die Rechte", p: "Wer freigeben, bestellen oder nur ansehen darf, bestimmen Sie: pro Person, jederzeit änderbar." },
        { lbl: "Zugangsdaten", h: "Geheimnisse bleiben geheim", p: "Lieferanten-Zugänge und Schlüssel sieht niemand im Klartext, auch nicht in der Oberfläche." },
        { lbl: "Recht auf Löschung", h: "Ihre Daten, Ihre Wahl", p: "Auf Wunsch entfernen wir alle Daten Ihrer Firma vollständig und endgültig, Konto und Inhalte." },
      ],
      stripLbl: "Infrastruktur", stripH: "Auf geprüfter Infrastruktur gebaut.",
      strip: ["TLS-verschlüsselte Verbindungen", "Verschlüsselung im Ruhezustand", "Automatische Sicherungen", "Lückenloser Audit-Trail", "Datenbank in Frankfurt · EU"],
    },

    hz: {
      chip: "Drei Horizonte",
      h2: "Heute ein Agent. Bald eine Plattform. Eines Tages ein Netzwerk.",
      ledeB: "Synapsio ist heute schon im Einsatz.",
      ledeP: " Und wir sind ehrlich, was noch kommt. Was live ist, können Sie sofort nutzen. Was in Arbeit oder Vision ist, sagen wir auch so.",
      tabs: [
        { t: "Der Agent", chip: "Heute · Live", cls: "live" },
        { t: "Die Plattform", chip: "In Arbeit", cls: "wip" },
        { t: "Das Netzwerk", chip: "Vision", cls: "vis" },
      ],
      panels: [
        {
          h: "Der Agent, der Ihren Einkauf führt",
          p: "Er liest Bestätigungen und Lieferanten-Mails, kennt Ihren Verbrauch aus laufenden Aufträgen und bestellt selbstständig, bis zu der Freigabeschwelle, die Sie setzen. Und er wird mit jeder Woche besser.",
          li: ["Bestellungen ohne manuelles Nachfassen", "Engpässe früh erkannt", "Jede Entscheidung nachvollziehbar"],
        },
        {
          h: "Vom Einkauf zum ganzen Betrieb",
          p: "Als Nächstes wächst der Agent über den Einkauf hinaus. Auch Ihr Verkauf und Ihre ganze Lieferkette laufen dann über eine Oberfläche, vom Wareneingang bis zum Warenausgang. Ein Betrieb, der sich selbst führt.",
          li: ["Einkauf und Verkauf über einen Agenten", "Die ganze Lieferkette an einem Ort", "Vorhersagen, die zu Handlungen werden"],
        },
        {
          h: "Ein Marktplatz, auf dem Agenten handeln",
          p: "Langfristig verbinden sich die Agenten verschiedener Firmen. Ihr Agent fragt an, der Agent des Lieferanten antwortet. Angebote und Bestellungen laufen direkt zwischen den Systemen. Die Regeln geben Sie vor.",
          li: ["Agent spricht mit Agent", "Marktplatz für Angebot und Nachfrage", "Kontrolle bleibt bei Ihnen"],
        },
      ],
    },

    pilot: {
      chip: "Pilotprogramm · begrenzte Plätze",
      h2a: "30 Minuten. Danach wissen Sie,", h2b: "ob es passt.",
      p: "Wir nehmen eine kleine Zahl an Pilotkunden auf. Davor steht immer ein Gespräch. Unverbindlich, und vorbereiten müssen Sie dafür nichts.",
      lbl: "Worüber wir sprechen",
      steps: [
        { t: "Wie Sie heute bestellen", d: "Excel, Telefon, ERP. Und wo dabei die Zeit draufgeht." },
        { t: "Was Synapsio heute übernimmt", d: "Und was noch nicht. Wir sagen Ihnen beides." },
        { t: "Ob ein Pilot für Sie Sinn ergibt", d: "Wenn nicht, sagen wir das. Entscheiden können Sie danach in Ruhe." },
      ],
      cardLbl: "Das Gespräch",
      cta: "Pilot-Gespräch buchen",
      spec: [["Dauer", "30 Minuten"], ["Verbindlichkeit", "Keine"], ["Vorbereitung", "Keine"], ["Danach", "Sie entscheiden"]],
      alt: "Lieber erst lesen? Pitchdeck ansehen →",
    },

    foot: {
      tag: "Der KI-Agent, der Ihre Beschaffung führt, von der Bedarfserkennung bis zur Bestellung.",
      entity: "Synapsio UG (haftungsbeschränkt) · Schönwalde-Glien",
      colProduct: "Produkt", overview: "Übersicht", app: "Zur App",
      colCompany: "Unternehmen", about: "Über uns",
      colLegal: "Rechtliches", imprint: "Impressum", privacy: "Datenschutz", terms: "AGB",
      cpy: "© 2026 Synapsio UG (haftungsbeschränkt), Schönwalde-Glien · Amtsgericht Potsdam, HRB 42364 P",
      status: "Live · app.synapsio.solutions",
    },

    js: {
      inbox: "Posteingang",
      gut: {
        dashboard: {
          a: { vb: "weniger Freigabe-Aufwand", sub: "Sie entscheiden nur die Ausnahmen", rows: [["", "Routine unter Ihrer Schwelle läuft ohne Sie."], ["", "Diese Woche: 44 automatisch · nur 3 zur Freigabe."]] },
          b: { from: "orders@steel-precision.de", subj: "Re: PO-2841, Liefertermin bestätigt", badge: ["ok", "Verarbeitet"] },
          c: { lines: [["05:02", "Rechnung geprüft · PO-2836"], ["05:41", "Prognose aktualisiert · 40 Artikel"], ["06:47", "Zur Freigabe vorgelegt · €3.800", 1]] },
        },
        inventory: {
          a: { vb: "Engpässe früher sehen", sub: "Reichweite statt starrer Mindestbestand", rows: [["", "Verbrauch × Lieferzeit, pro Artikel, täglich."], ["", "So trifft Sie kein Engpass unvorbereitet."]] },
          b: { from: "Ava · Nachbestellung", subj: "Gewindeeinsatz M8 · 520 St. bei Nordschraube", badge: ["wait", "Vorschlag bereit"] },
          c: { lines: [["", "scan_inventory --coverage"], ["", "3 Artikel < Nachbestellpunkt"], ["", "→ Bestellvorschläge erzeugt", 1]] },
        },
        orders: {
          a: { vb: "nie wieder nachtelefonieren", sub: "Der Agent liest die Antworten selbst", rows: [["", "Auftragsbestätigungen gelesen, Termine übernommen."], ["", "Sie hören nur, wenn etwas abweicht."]] },
          b: { from: "sales@nordschraube.de", subj: "Update: Q3 Lieferzeiten & Preise", badge: ["wait", "Ausstehend"] },
          c: { lines: [["08:12", "Lieferantenmail gelesen · AB #A-2841"], ["08:14", "Rechnung: Position 3 weicht ab", 1], ["08:31", "Freigegeben. Erledigt."]] },
        },
      },
      nudge: {
        dashboard: { cls: "", lbl: "Braucht Freigabe", bd: "2 Bestellungen warten auf Ihre Freigabe.", act: "Prüfen →" },
        inventory: { cls: "amber", lbl: "Bestand", bd: "3 Artikel unter dem Nachbestellpunkt. Bestellvorschläge liegen bereit.", act: "Ansehen →" },
        orders: { cls: "", lbl: "Lieferant", bd: "steel-precision.de hat geantwortet. Liefertermin 12.08. automatisch übernommen.", act: "Öffnen →" },
      },
    },
  },

  en: {
    nav: { product: "Product", about: "About", investors: "Investors", blog: "Blog", cta: "Book a call", menu: "Menu", menuClose: "Close menu", language: "Language" },

    hero: {
      chip: "AI agent for purchasing",
      h1a: "Most purchase orders no longer",
      h1em: "need your approval",
      h1b: ".",
      sub: "Synapsio runs purchasing for mid-sized manufacturers: it reads supplier email, spots shortages and orders on its own. The only thing it puts in front of you is what sits above your threshold.",
      linkTag: "Live",
      link: "See the product →",
    },

    app: {
      tagline: "Connections you can rely on",
      sample: "Sample data",
      worker: "Worker online",
      notifications: "Notifications",
      signout: "Sign out",
      groups: { ops: "Operations", net: "Network", intel: "Intelligence", set: "Settings", admin: "Admin" },
      nav: {
        dashboard: "Dashboard", inventory: "Inventory", orders: "Orders", approvals: "Approvals",
        exceptions: "Exceptions", suppliers: "Suppliers", marketplace: "Marketplace", supplierView: "Supplier view",
        brain: "Business Brain", intelligence: "Intelligence", reports: "Reports", settings: "Settings", admin: "Admin",
      },
      updated: "Updated 2 min ago",
      autobar: "Autonomous mode on · Synapsio is running your supply chain",
      needsTitle: "Needs you today",
      needs: [
        { t: "New supplier · Tool steel 42CrMo4", s: "€3,800 · above your approval threshold" },
        { t: "Stock low · Threaded insert M8", s: "9 days of cover · order draft ready" },
      ],
      kpis: [
        { lbl: "Inventory value", sub: "45 items tracked" },
        { lbl: "Shortage risk", sub: "less than 7 days of cover" },
        { lbl: "Open alerts", sub: "2 of them new today" },
        { lbl: "Purchase orders", sub: "supplier orders · this month" },
        { lbl: "Handled for you", sub: "this week, without approval" },
      ],
      brain: { lbl: "Brain learning status", meta: "6 products · 51 bills of material mapped →" },
      impact: {
        h: "Synapsio Impact", s: "Automation figures for your business",
        caps: ["Orders automated", "Value managed", "Hours saved"],
        chart: "AI orders per week · last 8 weeks",
      },
      inv: {
        actions: ["Recently deleted", "Export CSV", "+ Item"],
        search: "Search by name or SKU …",
        locations: "All locations",
        filters: ["All", "At risk", "Critical", "Healthy"],
        head: ["SKU / Item", "Category", "Stock", "Min.", "Use/day", "Cover", "Cost", "Risk", "Supplier"],
        usedIn: "Used in:",
        aisle: "Aisle", rack: "Rack", perUnit: "pcs/unit", days: "d",
        rows: [
          { sku: "H-2841", pn: "Tool steel 42CrMo4", loc: "4 · A-03", used: "Voltaris frame (2", cat: "Raw material", stock: "120", min: "300", need: "30.0", cov: "4", covCls: "crit", cost: "€56.21", risk: "Critical", riskCls: "crit", sup: "Steel Precision" },
          { sku: "S-1180", pn: "Hex bolt M8", loc: "2 · A-04", used: "Voltaris frame (8", cat: "Standard parts", stock: "8,400", min: "2,000", need: "270", cov: "31", covCls: "ok", cost: "€0.30", risk: "Healthy", riskCls: "low", sup: "Nordschraube AG" },
          { sku: "G-0442", pn: "Threaded insert M8", loc: "8 · A-06", used: "Voltaris cover (1", cat: "Standard parts", stock: "640", min: "500", need: "71", cov: "9", covCls: "warn", cost: "€1.80", risk: "Low", riskCls: "warn", sup: "Nordschraube AG" },
          { sku: "D-3310", pn: "Sealing ring 22mm", loc: "3 · A-06", used: "Voltaris pump (4", cat: "Seals", stock: "2,100", min: "800", need: "78", cov: "27", covCls: "ok", cost: "€0.65", risk: "Healthy", riskCls: "low", sup: "Dichttech GmbH" },
          { sku: "V-0071", pn: "Packaging type B", loc: "9 · A-02", used: "Shipping (1", cat: "Packaging", stock: "310", min: "400", need: "52", cov: "6", covCls: "warn", cost: "€2.80", risk: "Low", riskCls: "warn", sup: "Möller Verpackung" },
        ],
      },
      ord: {
        newOrder: "+ New order",
        subtabs: ["Orders", "Mail log", "Returns"],
        tracking: "Order tracking",
        filters: ["Open (5)", "In transit", "Done", "All"],
        head: ["PO no.", "Supplier", "Item", "Amount", "Status", "Action"],
        steps: ["Open", "Queued", "Sent", "Confirmed"],
        prep: "Being prepared", why: "Why?", portal: "Portal",
        rows: [
          { po: "PO-2841", sup: "steel-precision.de", item: "Tool steel 42CrMo4", amt: "€3,800", done: 1, prep: true, why: true },
          { po: "PO-2838", sup: "Möller Verpackung", item: "Packaging type B", amt: "€620", done: 3, prep: false, why: false },
          { po: "PO-2836", sup: "Nordschraube AG", item: "Hex bolt M8", amt: "€2,550", done: 4, prep: false, why: true },
          { po: "PO-2831", sup: "Dichttech GmbH", item: "Sealing ring 22mm", amt: "€1,240", done: 2, wait: true, prep: false, why: false },
          { po: "PO-2829", sup: "steel-precision.de", item: "Tool set", amt: "€4,900", done: 1, prep: true, why: true },
        ],
        repliesTitle: "Supplier replies",
        replies: [
          { from: "orders@steel-precision.de", subj: "Re: order PO-2841, date confirmed", badge: "Parsed", cls: "parsed", ago: "2h ago" },
          { from: "shipping@moeller-verpackung.de", subj: "Dispatch note: packaging type B", badge: "Pending", cls: "pending", ago: "1d ago" },
          { from: "sales@nordschraube.de", subj: "Update: Q3 lead times & prices", badge: "Pending", cls: "pending", ago: "2d ago" },
        ],
      },
    },

    band: ["Database in Frankfurt (EU)", "Complete audit trail", "Built in Berlin", "Live at app.synapsio.solutions"],

    figs: {
      chip: "How the AI works",
      ledeB: "An AI that runs purchasing, not just assists with it.",
      ledeP: " It reads supplier email, spots shortages, compares quotes and places orders, day and night. Never beyond the limit you set.",
      items: [
        { label: "Reading", title: "It reads what comes in.", text: "Supplier email and order confirmations: the agent reads them and captures every line." },
        { label: "Consumption", title: "It knows what you use.", text: "Production runs pull stock off the shelf. The agent counts along and knows when a reorder is due." },
        { label: "Acting", title: "It orders, up to your threshold.", text: "Below your approval threshold, orders simply go through. Anything above it, the agent pulls out for you." },
        { label: "Learning", title: "It gets better every week.", text: "Every approval and every correction feeds back. The agent's calls move closer to your target." },
      ],
    },

    ctrl: {
      chip: "Control",
      h2: "So who decides? You do.",
      sub: "The agent acts only inside the frame you set: four controls, changeable at any time.",
      nav: [
        { b: "Approval threshold", s: "The amount above which you get asked." },
        { b: "Autonomy level", s: "Suggest only, or act on its own." },
        { b: "Spend limits", s: "Caps per order and per day." },
        { b: "Audit trail", s: "Every action, with its reason." },
      ],
      b1: {
        h: "Your approval threshold",
        p: "Up to this amount the agent orders on its own. Anything above it comes to you.",
        cap: "automatic up to here", lo: "€0", hi: "€10,000", val: "€5,000",
        orders: [
          { n: "Tool steel 42CrMo4", a: "€3,800", b: "automatic" },
          { n: "Hex bolt M8", a: "€2,550", b: "automatic" },
          { n: "Complete tool set", a: "€6,400", b: "Approval" },
        ],
        sub: [
          { h: "Set it where you like", p: "From €0 to as high as you want. At €0 every order is put to you. You set the limit." },
          { h: "Takes effect at once", p: "Changes apply from the next order. No restart, no waiting." },
        ],
      },
      b2: {
        h: "What happens on autopilot",
        p: "On autopilot every order runs the same steps: demand, quotes and a check against all of your limits. Only when everything fits does the agent act on its own.",
        n1b: "Trigger", n1t: "Demand detected", n1s: "Tool steel · 8 days of cover left",
        n2b: "Agent", n2t: "Quotes collected", n2s: "3 suppliers · best: Nordschraube",
        n3b: "Check", n3t: "All limits checked",
        checks: ["Below approval threshold · €5,000", "Below daily cap · €20,000", "Supplier approved"],
        yes: "Yes", no: "No",
        n4b: "✓ Automatic", n4t: "Ordered", n4s: "Nordschraube · €2,550 · placed immediately.",
        n5b: "Waiting", n5t: "For your approval", n5s: "Breach a limit and it comes to you.",
        note: '"Suggest only" or "act on its own": one control in the settings.',
        sub: [
          { h: "Two levels", p: "Suggest only: you release every order. Or act on its own up to your threshold." },
          { h: "Switch any time", p: "One control in the settings, from full autopilot to recommendations only." },
        ],
      },
      b3: {
        h: "Hard limits",
        p: "Amount per order, spend per day, daily cut-off. When the agent reaches a limit, it stops.",
        used: "used", cap: "Spend today · €12,400 / €20,000",
        t1l: "Per order", t1v: "€5,000", t1s: "Maximum",
        t2l: "Order cut-off", t2v: "16:00", t2s: "daily",
        t3l: "This week", t3v: "€48,900",
        t3n: "At the limit the agent stops and tells you. Nothing continues without you.",
        sub: [
          { h: "Two caps", p: "Per order and per day, set independently of each other." },
          { h: "Cut-off time", p: "After the time you set, the agent places nothing further." },
        ],
      },
      b4: {
        h: "Everything traceable",
        p: 'Every step is logged, with the reason behind it. Ask "Why?" and you see the decision.',
        term: "audit-trail · steel-precision",
        log: [
          { t: "08:12", s: "Supplier email read · confirmation #A-2841" },
          { t: "08:14", s: "Quotes compared · Nordschraube chosen" },
          { t: "08:31", s: "Ordered €2,550 · below threshold · automatic" },
          { t: "09:02", s: "€6,400 · above threshold · put up for approval", hot: true },
          { t: "09:14", s: "Goods receipt booked · PO-2836" },
        ],
        whyH: "Why this order?",
        why: ["Cover below 9 days, reorder needed", "3 quotes checked · Nordschraube: best price + date", "€2,550 sits below your threshold (€5,000)"],
        sub: [
          { h: "Every action", p: "Reading, comparing, ordering, booking: every step lands in the log." },
          { h: "Reason on click", p: '"Why?" shows the cover, the quotes and the threshold check behind each decision.' },
        ],
      },
    },

    sec: {
      chip: "Security & privacy",
      h2: "Your supply chain stays protected and under your control.",
      ledeB: "An agent with access to your purchasing has to be trustworthy.",
      ledeP: " That is why every step in Synapsio runs in a sealed, encrypted environment. Each company works on its own, and every action is in the log.",
      mapLbl: "Protected space", mapRegion: "encrypted",
      mapH: "Your supply chain, secured end to end.",
      mapP: "From the supplier to the warehouse, the agent works inside a closed, encrypted space. Only you and the people you authorise have access. Nobody else.",
      facts: [
        { lbl: "Tenant isolation", h: "Every company sealed off", p: "Your figures sit in their own isolated environment. At database level, no company can see another company's data." },
        { lbl: "Roles & rights", h: "You assign the rights", p: "Who may approve, order or only view is up to you: per person, changeable at any time." },
        { lbl: "Credentials", h: "Secrets stay secret", p: "Supplier logins and keys are never shown in plain text, not even in the interface." },
        { lbl: "Right to erasure", h: "Your data, your call", p: "On request we remove all of your company's data completely and permanently, account and contents." },
      ],
      stripLbl: "Infrastructure", stripH: "Built on audited infrastructure.",
      strip: ["TLS-encrypted connections", "Encryption at rest", "Automatic backups", "Complete audit trail", "Database in Frankfurt · EU"],
    },

    hz: {
      chip: "Three horizons",
      h2: "An agent today. A platform soon. A network one day.",
      ledeB: "Synapsio is already in use today.",
      ledeP: " And we are straight about what is still to come. What is live, you can use right away. What is in progress or still a vision, we say so.",
      tabs: [
        { t: "The agent", chip: "Today · Live", cls: "live" },
        { t: "The platform", chip: "In progress", cls: "wip" },
        { t: "The network", chip: "Vision", cls: "vis" },
      ],
      panels: [
        {
          h: "The agent that runs your purchasing",
          p: "It reads confirmations and supplier email, knows your consumption from live production orders and places orders on its own, up to the approval threshold you set. And it gets better every week.",
          li: ["Orders without chasing by hand", "Shortages caught early", "Every decision traceable"],
        },
        {
          h: "From purchasing to the whole operation",
          p: "Next, the agent grows beyond purchasing. Your sales and your entire supply chain run through one surface too, from goods in to goods out. An operation that runs itself.",
          li: ["Buying and selling through one agent", "The whole supply chain in one place", "Forecasts that turn into actions"],
        },
        {
          h: "A marketplace where agents trade",
          p: "In the long run the agents of different companies connect. Your agent asks, the supplier's agent answers. Quotes and orders run directly between the systems. You set the rules.",
          li: ["Agent talks to agent", "A marketplace for supply and demand", "Control stays with you"],
        },
      ],
    },

    pilot: {
      chip: "Pilot program · limited places",
      h2a: "30 minutes. After that you know", h2b: "whether it fits.",
      p: "We are taking on a small number of pilot customers. There is always a conversation first. No obligation, and nothing for you to prepare.",
      lbl: "What we talk about",
      steps: [
        { t: "How you order today", d: "Excel, phone, ERP. And where the time goes." },
        { t: "What Synapsio handles today", d: "And what it does not. We tell you both." },
        { t: "Whether a pilot makes sense for you", d: "If it does not, we say so. You can decide afterwards, in your own time." },
      ],
      cardLbl: "The call",
      cta: "Book a call",
      spec: [["Length", "30 minutes"], ["Obligation", "None"], ["Preparation", "None"], ["Afterwards", "You decide"]],
      alt: "Rather read first? See the pitch deck →",
    },

    foot: {
      tag: "The AI agent that runs your procurement, from spotting demand to placing the order.",
      entity: "Synapsio UG (haftungsbeschränkt) · Schönwalde-Glien, Germany",
      colProduct: "Product", overview: "Overview", app: "Open the app",
      colCompany: "Company", about: "About",
      colLegal: "Legal", imprint: "Legal notice", privacy: "Privacy", terms: "Terms",
      cpy: "© 2026 Synapsio UG (haftungsbeschränkt), Schönwalde-Glien · Amtsgericht Potsdam, HRB 42364 P",
      status: "Live · app.synapsio.solutions",
    },

    js: {
      inbox: "Inbox",
      gut: {
        dashboard: {
          a: { vb: "less approval work", sub: "You only decide the exceptions", rows: [["", "Routine below your threshold runs without you."], ["", "This week: 44 automatic · only 3 for approval."]] },
          b: { from: "orders@steel-precision.de", subj: "Re: PO-2841, delivery date confirmed", badge: ["ok", "Parsed"] },
          c: { lines: [["05:02", "Invoice checked · PO-2836"], ["05:41", "Forecast updated · 40 items"], ["06:47", "Put up for approval · €3,800", 1]] },
        },
        inventory: {
          a: { vb: "see shortages sooner", sub: "Days of cover, not a fixed minimum", rows: [["", "Usage × lead time, per item, daily."], ["", "So no shortage catches you unprepared."]] },
          b: { from: "Ava · reorder", subj: "Threaded insert M8 · 520 pcs from Nordschraube", badge: ["wait", "Draft ready"] },
          c: { lines: [["", "scan_inventory --coverage"], ["", "3 items < reorder point"], ["", "→ order drafts created", 1]] },
        },
        orders: {
          a: { vb: "no more chasing by phone", sub: "The agent reads the replies itself", rows: [["", "Order confirmations read, dates taken over."], ["", "You only hear about it when something differs."]] },
          b: { from: "sales@nordschraube.de", subj: "Update: Q3 lead times & prices", badge: ["wait", "Pending"] },
          c: { lines: [["08:12", "Supplier email read · confirmation #A-2841"], ["08:14", "Invoice: line 3 differs", 1], ["08:31", "Approved. Done."]] },
        },
      },
      nudge: {
        dashboard: { cls: "", lbl: "Needs approval", bd: "2 orders are waiting for your approval.", act: "Review →" },
        inventory: { cls: "amber", lbl: "Stock", bd: "3 items below the reorder point. Order drafts are ready.", act: "View →" },
        orders: { cls: "", lbl: "Supplier", bd: "steel-precision.de replied. Delivery date 12 Aug taken over automatically.", act: "Open →" },
      },
    },
  },
} as const;

export type HomeCopy = (typeof homeCopy)["de"];
