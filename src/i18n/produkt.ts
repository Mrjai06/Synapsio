/**
 * /produkt copy, DE + EN.
 *
 * Prose only. An earlier shape put this content in definition lists, numbered steps,
 * contrast columns and spec tables; all of it was rejected and those structures were
 * removed, so do not reintroduce them here. Each theme is: a lede, a few paragraphs
 * (`lead` may be empty, and is on the last one so sections close in plain prose), and
 * one `say` sentence carrying the section's argument.
 */
export const produktCopy = {
  de: {
    practical: {
      chip: "Praktisch",
      h: "Was Sie sonst noch fragen",
      paras: [
        { lead: "Wenn der Agent sich irrt, merken Sie es an derselben Stelle wie alles andere.", text: "Jede Bestellung wird vor dem Versand gegen Ihre Grenzen geprüft und hält an, sobald eine reißt. Was danach schiefgeht, weil ein Lieferant anders antwortet oder eine Lieferung nicht zur Bestellung passt, landet als Ausnahme in einer eigenen Liste, zusammen mit einem Vorschlag, was zu tun ist. Zu jeder Bestellung liegt außerdem der ganze Entscheidungsweg: welches Verfahren, welche Zahlen, welcher Lieferant und warum. Das ist das, womit Sie beim Lieferanten argumentieren." },
        { lead: "Der Agent fängt nicht mit voller Autonomie an.", text: "In der Grundeinstellung wartet jede Bestellung auf Ihre Freigabe. Sie entscheiden selbst, ab wann und bis zu welchem Betrag er ohne Rückfrage handeln darf, und Sie können das jederzeit wieder enger stellen. Was Sie ändern, gilt ab der nächsten Bestellung." },
        { lead: "", text: "Und Synapsio ist kein Aufsatz auf Ihr ERP. Es ist das System für den Einkauf und läuft auch, wenn Sie sonst nichts haben. Wenn Sie etwas haben, wird es angebunden: Shopify direkt, ein ERP über Schlüssel oder Zugangsdaten, eigene Systeme über Webhooks, der Wareneingang über Barcode-Scan und der Lieferantenverkehr über E-Mail." },
      ],
    },
    close: {
      chip: "Pilotprogramm",
      h: "Wenn das plausibel klingt, reden wir darüber.",
      p: "Sie haben jetzt gelesen, wie gerechnet wird, wer entscheidet und wo der Agent anhält. Der nächste Schritt ist ein Gespräch, kein Projekt: dreißig Minuten, in denen wir Ihren Einkauf durchgehen und Sie das fragen, was auf dieser Seite nicht steht. Vorbereiten müssen Sie nichts, mitbringen auch keine Daten, und verpflichtet sind Sie danach zu nichts.",
      cta: "Gespräch vereinbaren",
      alt: "Pitch-Deck ansehen",
    },
    curveCap: "Der Bestand fällt, bis er den Bestellpunkt kreuzt. Ab da läuft die Lieferzeit, und in genau dieser Spanne entscheidet sich, ob Ihnen die Ware ausgeht. Der Bestellpunkt ist keine feste Zahl, sondern wird je Artikel neu gerechnet.",
    meta: {
      title: "Produkt: wie die KI Ihren Einkauf führt",
      description:
        "Wie Synapsio den Bedarf rechnet, das Verfahren je Artikel wählt, Bestellungen auslöst und jede Entscheidung begründet. Im Detail.",
    },
    hero: {
      chip: "Produkt · Deep Dive",
      h1a: "Der Einkauf,",
      h1em: "den eine KI führt",
      h1b: ".",
      sub: "Die Startseite zeigt, was Synapsio für Sie tut. Diese Seite zeigt, wie: welche Zahlen hineingehen, nach welchem Verfahren gerechnet wird, wo die KI entscheidet und wo Sie.",
      cta: "Pilot-Gespräch buchen",
      alt: "Live ansehen →",
    },
    fold: {
      label: "Eine Entscheidung, aufgeklappt",
      cap: "Jede Bestellung des Agenten lässt sich aufklappen: das gewählte Verfahren, die Zahlen dahinter, die geprüften Grenzen und der Satz, warum es diese Bestellung wurde.",
      pill: "Warum diese Bestellung?",
      rows: [
        ["Artikel", "Gewindeeinsatz M8 · G-0442"],
        ["Verfahren", "Bestellpunkt (s,Q)"],
        ["Reichweite", "9 Tage"],
        ["Lieferzeit", "14 Tage"],
        ["Bestellpunkt", "erreicht"],
        ["Menge", "520 Stück"],
        ["Lieferant", "Nordschraube AG"],
        ["Grenzen", "unter Schwelle · unter Tageslimit"],
      ],
      why: "Reichweite unter der Lieferzeit. Nordschraube liefert in 6 Tagen und liegt unter Ihrer Schwelle, also ausgelöst.",
    },
    navLabel: "Themen",

    prose: {
      loop: {
        paras: [
          { lead: "Der Kreislauf läuft nach Zeitplan, nicht auf Knopfdruck.", text: "Die Bedarfsprognose und die Suche nach Auffälligkeiten im Verbrauch rechnet der Agent täglich, die Marktbeobachtung mehrmals am Tag, Saisonmuster einmal die Woche. Dazwischen bewertet er laufend, ob seine eigenen früheren Entscheidungen richtig waren. Sie starten nichts davon von Hand." },
          { lead: "Jede Runde besteht aus denselben fünf Schritten.", text: "Er liest, was hereinkommt: Lieferantenmails, Auftragsbestätigungen, Wareneingänge, Produktionsläufe, also alles, was den Bestand bewegt. Er rechnet daraus die Reichweite je Artikel, die Prognose, die Saison und das Lieferantenrisiko. Er entscheidet, welches Verfahren gilt, welche Menge nötig ist und welcher Lieferant liefern soll, und prüft das Ergebnis gegen alle Ihre Grenzen. Er handelt, legt die Bestellung an, verschickt Mail und PDF und hält den Termin nach. Und er schreibt mit, mit Zeitstempel und Begründung." },
          { lead: "", text: "Was er nicht sauber abschließen kann, verschwindet nicht. Es wandert als Ausnahme in eine eigene Liste, zusammen mit einem Vorschlag, was zu tun ist. Eine Bestellung, die hängt, eine Antwort, die nicht zur Bestellung passt, eine Menge, die beim Wareneingang nicht stimmt: nichts davon wird stillschweigend übergangen." },
        ],
        say: "Sie starten nichts davon von Hand. Das ist der Unterschied zwischen einem Werkzeug und einem Betrieb.",
      },
      ai: {
        paras: [
          { lead: "Diese eine Regel gilt dann für Schrauben wie für Dichtungen.", text: "Ein Mindestbestand, von Hand gepflegt, der sich ändert, wenn jemand daran denkt. Eine Begründung, warum gerade diese Zahl dort steht, gibt es nicht." },
          { lead: "Synapsio AI wählt das Verfahren je Artikel, nicht nur den Wert.", text: "Ein Artikel mit stetigem Verbrauch braucht einen anderen Rechenweg als einer, der dreimal im Jahr gezogen wird. Deshalb bekommt jeder Artikel eines von fünf Verfahren: den Bestellpunkt (s,Q) bei stetigem Verbrauch, Croston bei sporadischem Abgang, Newsvendor bei verderblicher Ware, die periodische Prüfung (R,S) bei festen Bestellrhythmen und eine Standortrechnung, wenn derselbe Artikel in mehreren Lägern liegt." },
          { lead: "Mit dem Verfahren setzt sie auch dessen Parameter.", text: "Lieferzeit, Sicherheitsbestand, Servicegrad und Prüfintervall stehen am Artikel und werden nachjustiert, wenn sich der Verbrauch ändert. Wenn Sie ein Verfahren festsetzen wollen, sperren Sie es, dann rührt die KI es nicht mehr an." },
          { lead: "", text: "Und sie schreibt dazu, warum. Am Artikel steht, welches Verfahren gilt, seit wann, auf welcher Grundlage es gewählt wurde und wie sicher sich die KI dabei war. Sie können das lesen, ohne die Rechnung dahinter zu kennen, und Sie können widersprechen." },
        ],
        say: "Eine Zahl kann man setzen. Ein Verfahren muss man begründen.",
      },
      read: {
        paras: [
          { lead: "Gelesen wird immer gegen die eigene Bestellung.", text: "Die Antwort wird der Bestellung zugeordnet, die der Agent selbst geschrieben hat. Menge, Preis und Termin werden herausgezogen, und ein bestätigter Liefertermin landet direkt an der Bestellung." },
          { lead: "Weicht die Antwort ab, wird sie nicht stillschweigend übernommen.", text: "Bestätigt der Lieferant eine andere Menge oder einen späteren Termin, wird daraus eine Ausnahme, mit beiden Zahlen nebeneinander. Dasselbe beim Wareneingang: gebucht wird gegen die Bestellung, Teilmengen sind möglich, und was nicht zusammenpasst, landet sichtbar auf dem Tisch statt in einer stillen Korrektur." },
          { lead: "", text: "Den Verbrauch kennt der Agent nicht aus dem Bestand, sondern aus der Stückliste. Er weiß, welcher Artikel in welchem Produkt steckt, und laufende Produktionsläufe ziehen den Bestand entsprechend herunter. Der Bestand selbst wird bis auf Standort, Lagerplatz und Charge geführt, nicht nur als eine Zahl je Artikel." },
        ],
        say: "Deshalb kennt der Agent den Verbrauch, bevor der Bestand ihn zeigt.",
      },
      calc: {
        paras: [
          { lead: "Die Rechnung dahinter ist keine Schätzung.", text: "Bestand geteilt durch den durchschnittlichen Tagesverbrauch, gemessen gegen die Lieferzeit, die der Lieferant tatsächlich einhält. Der Bestellpunkt fällt aus dieser Rechnung, statt fest im Artikelstamm zu stehen: Tagesverbrauch mal Lieferzeit, plus einen Sicherheitsbestand aus Ihrem Servicegrad und der Streuung des Verbrauchs." },
          { lead: "Verändert sich der Verbrauch, verschiebt sich der Punkt mit.", text: "Niemand muss eine Liste pflegen, damit die Zahl aktuell bleibt. Die Bestellmenge kommt anschließend aus dem Verfahren des Artikels und aus den Staffelpreisen, die beim Lieferanten hinterlegt sind." },
          { lead: "", text: "Daneben rechnet der Agent laufend weiter. Er erstellt eine Bedarfsprognose je Artikel, erkennt wiederkehrende Muster über das Jahr und meldet Ausreißer im Verbrauch, statt sie in den Durchschnitt einzurechnen. Aus Termintreue und Antwortverhalten entsteht ein Risikowert je Lieferant, der wiederum in den Angebotsvergleich einfließt." },
        ],
        say: "Ein Ausreißer soll die Prognose nicht verbiegen, also wird er gemeldet statt eingerechnet.",
      },
      buy: {
        paras: [
          { lead: "Sie sucht den Lieferanten aus, statt den ersten zu nehmen.", text: "Für denselben Bedarf vergleicht sie die hinterlegten Lieferanten mit ihren Staffelpreisen, ihrer Lieferzeit und ihrer bisherigen Termintreue, und schreibt dazu, warum es dieser wurde. Der Preis entscheidet nicht allein: ein Lieferant, der zwei Tage nach dem Engpass liefert, ist kein günstiger Lieferant." },
          { lead: "Sie bündelt, statt zu stückeln.", text: "Offene Bedarfe für denselben Lieferanten zieht sie zu einer Bestellung zusammen und hält sie bis zu Ihrem Bestellschluss, damit nicht fünf Einzelbestellungen an dieselbe Adresse gehen. Was danach anfällt, geht am nächsten Tag." },
          { lead: "Sie führt die Bestellung zu Ende.", text: "Sie legt sie mit allen Positionen an, verschickt Mail und PDF, ordnet die Antwort des Lieferanten der eigenen Bestellung zu und hält den bestätigten Termin nach. Beim Wareneingang wird gegen die Bestellung gebucht, Teilmengen eingeschlossen." },
          { lead: "Sie bewertet Ihre Lieferanten laufend.", text: "Aus Termintreue, Antwortverhalten und Abweichungen zwischen Bestellung und Lieferung entsteht ein Risikowert je Lieferant. Der liegt nicht in einem Bericht, sondern fließt in den nächsten Vergleich zurück." },
          { lead: "Und sie merkt, wenn ein Artikel ausläuft.", text: "Sie prüft, ob ein Teil abgekündigt oder durch ein Nachfolgeteil ersetzt wurde, trägt den Nachfolger am Artikel ein und meldet es, solange noch Zeit zum Umstellen bleibt. Ein Artikel, den es nicht mehr gibt, fällt sonst erst auf, wenn die Bestellung nicht mehr durchgeht." },
        ],
        say: "Das ist der Unterschied zwischen einem Vorschlag und einer Bestellung.",
      },
      gate: {
        paras: [
          { lead: "Vier Dinge stellen Sie ein, und sie greifen ab der nächsten Bestellung.", text: "Die Freigabeschwelle ist der Betrag, ab dem eine Bestellung zu Ihnen kommt: darunter löst der Agent selbst aus, darüber legt er vor. Die Autonomie-Stufe entscheidet, ob er überhaupt handeln darf oder nur vorschlägt, und lässt sich ohne Neustart umstellen. Die Ausgabenlimits gelten je Bestellung und je Tag, unabhängig voneinander; am Tageslimit stoppt er und meldet sich. Und nach dem Bestellschluss geht nichts mehr raus, der Rest folgt am nächsten Tag." },
          { lead: "", text: "Wer was darf, legen Sie je Person fest. Freigeben, bestellen oder nur ansehen sind getrennte Rechte, jederzeit änderbar. Was nicht glatt lief, geht nicht zwischen den Bestellungen unter, sondern steht in einer eigenen Liste mit einem Vorschlag zur Lösung, und Sie können dem Agenten dort direkt sagen, was er falsch verstanden hat." },
        ],
        say: "Reißt eine Grenze, wird die Bestellung nicht abgebrochen. Sie wird Ihnen vorgelegt, mit der Rechnung daneben.",
      },
      learn: {
        paras: [
          { lead: "Jede Bestellentscheidung wird gespeichert, nicht nur ausgeführt.", text: "Mit dem gewählten Verfahren, den Signalen, auf die sie sich gestützt hat, der gerechneten Menge, dem Bestellpunkt, der Abweichung vom Richtwert und dem Vermerk, ob eine Ihrer Grenzen berührt wurde. Das ist der Datensatz, der später bewertet wird." },
          { lead: "Später sieht sie nach, ob es richtig war.", text: "Dieselbe Entscheidung wird gegen den tatsächlichen Verlauf gehalten und mit einem Ergebnis versehen. Ein Fehlgriff bleibt an der Entscheidung stehen, statt im Durchschnitt zu verschwinden." },
          { lead: "Passt keines der fünf Verfahren, schreibt sie ein eigenes.", text: "Es bekommt einen Namen, Auslöser, ab wann es greift, und eine Version. Danach wird es wie jedes andere an seinem Ergebnis gemessen, und es verschwindet wieder, wenn es nichts bringt." },
          { lead: "Auch ihre Marktbeobachtung prüft sie gegen die Wirklichkeit.", text: "Was sie draußen aufliest, wird nicht ungeprüft zur Grundlage. Signale werden rückwärts gegen den tatsächlichen Verlauf getestet, bevor sie Gewicht bekommen." },
          { lead: "", text: "Sie behalten das letzte Wort. Ein Verfahren, das Sie festsetzen, rührt sie nicht mehr an, und was Sie freigeben oder ablehnen, ist selbst wieder ein Signal." },
        ],
        say: "Eine Entscheidung, die nie nachbewertet wird, ist eine Regel mit besserem Marketing.",
      },
      memory: {
        paras: [
          { lead: "Fragen stellen Sie in normaler Sprache.", text: "„Warum diese Bestellung?“ beantwortet der Agent von jeder Seite aus, mit der Reichweite, den geprüften Angeboten und der Schwellen-Prüfung. Sie müssen nicht wissen, wo etwas gespeichert ist, um danach zu fragen, und Sie müssen die Rechnung nicht selbst nachvollziehen können." },
          { lead: "", text: "Lesen, vergleichen, bestellen, buchen: jeder Schritt steht mit Zeitstempel im Protokoll, dazu kommen Auswertungen zu Beständen, Bestellungen und Lieferanten ohne den Umweg über Excel. Wenn in drei Monaten jemand fragt, warum diese Menge bei diesem Lieferanten bestellt wurde, ist das eine Abfrage und keine Rekonstruktion." },
        ],
        say: "Nachvollziehbar heißt prüfbar, nicht abrufbar.",
      },
    },
    themes: [
      {
        key: "loop", label: "Der Kreislauf", h: "Fünf Schritte, die nie aufhören",
        lede: { lead: "Ein Agent, den Sie anstoßen müssen, ist ein Werkzeug.",
                rest: " Synapsio läuft weiter, wenn niemand hinsieht: lesen, rechnen, entscheiden, handeln, mitschreiben. Jede Runde füttert die nächste." },
      },

      {
        key: "ai", label: "Die KI", h: "Wo die KI wirklich entscheidet",
        lede: { lead: "Der Unterschied liegt nicht darin, dass etwas automatisch passiert.",
                rest: " Er liegt darin, wer bestimmt, nach welcher Regel gerechnet wird. In den meisten Systemen ist das ein Mensch, einmal, für alle Artikel gleich." },
      },

      {
        key: "read", label: "Die Wahrnehmung", h: "Was hereinkommt, liest er",
        lede: { lead: "Eine Lieferantenmail ist kein Formular.",
                rest: " Jeder Lieferant schreibt anders, und kaum einer schreibt so, wie es ein Importfilter bräuchte. Genau deshalb liest hier eine KI und kein Parser." },
      },

      {
        key: "calc", label: "Das Rechnen", h: "Reichweite statt Bauchgefühl",
        lede: { lead: "Ein Mindestbestand ist eine Zahl, die einmal jemand gesetzt hat.",
                rest: " Reichweite ist eine Rechnung, die sich jeden Tag ändert: wie lange der Bestand beim aktuellen Verbrauch hält, gegen die Zeit, die der Lieferant braucht." },
      },

      {
        key: "buy", label: "Die Beschaffung", h: "Sie bestellt, ohne dass jemand sie anstößt",
        lede: { lead: "Bestellen ist der Schritt, den Software sonst dem Menschen überlässt.",
                rest: " Ein Vorschlag erscheint, jemand liest ihn, jemand klickt. Hier führt die KI den Vorgang selbst zu Ende, und Sie sehen nur, was über Ihrer Grenze liegt." },
      },

      {
        key: "gate", label: "Die Kontrolle", h: "Grenzen, die tatsächlich halten",
        lede: { lead: "Autonomie ohne Grenze ist ein Versprechen, das niemand einlösen kann.",
                rest: " Deshalb prüft der Agent jede Bestellung gegen alle Ihre Grenzen und hält an, sobald eine reißt. Das Anhalten ist der Normalfall, nicht der Fehlerfall." },
      },

      {
        key: "learn", label: "Das Lernen", h: "Sie bewertet ihre eigenen Entscheidungen",
        lede: { lead: "Automatisierung wiederholt sich. Lernen heißt, dass die nächste Runde anders ausfällt.",
                rest: " Deshalb ist hier jede Entscheidung ein Datensatz, den die KI später gegen das hält, was tatsächlich eingetreten ist." },
      },

      {
        key: "memory", label: "Das Gedächtnis", h: "Er merkt sich, was Sie entscheiden",
        lede: { lead: "Jede Freigabe und jede Ablehnung ist ein Signal.",
                rest: " Der Agent schreibt nicht nur mit, was er getan hat. Er bewertet später, ob es richtig war, und zieht daraus die nächste Entscheidung." },
      },
    ],

    status: {
      chip: "Ehrlich sortiert",
      h: "Was läuft, und was noch nicht",
      p: "Dieselbe Einteilung wie auf der Startseite. Was hier als „in Arbeit“ steht, können Sie heute noch nicht nutzen.",
      paras: [
        { lbl: "Live", cls: "live", text: "Alles, was diese Seite beschreibt, läuft heute. Der Kreislauf arbeitet im Hintergrund, die KI liest Lieferantenmails und schreibt Bestellungen, sie wählt das Verfahren je Artikel, vergleicht Lieferanten, bündelt offene Bedarfe, bewertet ihre eigenen Entscheidungen nachträglich und meldet abgekündigte Artikel. Sie rechnet Reichweite, Prognose und Auffälligkeiten. Ihre Grenzen greifen, Freigaben und Ausnahmen landen bei Ihnen, das Protokoll steht, und mehrere Standorte, Lagerplätze und Chargen sind abgebildet." },
        { lbl: "In Arbeit", cls: "wip", text: "Zwei Dinge können Sie heute noch nicht nutzen: den Verkauf mit Warenausgang, und die Rechnungsprüfung Position für Position. Beides ist begonnen und beides fehlt noch." },
        { lbl: "Vision", cls: "vis", text: "Und zwei Dinge halten wir für richtig, versprechen sie aber nicht: einen Marktplatz zwischen Firmen, und den Punkt, an dem ein Agent mit einem Agenten verhandelt." },
      ],
    },
  },

  en: {
    practical: {
      chip: "Practical",
      h: "What else you are going to ask",
      paras: [
        { lead: "If the agent gets it wrong, you find out in the same place as everything else.", text: "Every order is checked against your limits before it goes out, and it stops the moment one is breached. What goes wrong afterwards, because a supplier answers differently or a delivery does not match the order, lands as an exception in its own list, together with a proposal for what to do. Every order also carries its whole decision path: which method, which figures, which supplier and why. That is what you argue from when you call the supplier." },
        { lead: "The agent does not start at full autonomy.", text: "Out of the box every order waits for your approval. You decide when, and up to what amount, it may act without asking, and you can tighten that again at any time. What you change applies from the next order." },
        { lead: "", text: "And Synapsio is not an add-on to your ERP. It is the system for purchasing, and it runs even if you have nothing else. If you do have something, it connects: Shopify directly, an ERP by key or credentials, your own systems over webhooks, goods receipt by barcode scan and supplier traffic over email." },
      ],
    },
    close: {
      chip: "Pilot programme",
      h: "If that sounds plausible, let us talk about it.",
      p: "You have now read how the calculation works, who decides and where the agent stops. The next step is a conversation, not a project: thirty minutes going through your purchasing, with you asking whatever this page does not answer. Nothing to prepare, no data to bring, and no commitment afterwards.",
      cta: "Book a conversation",
      alt: "See the pitch deck",
    },
    curveCap: "Stock falls until it crosses the reorder point. From there the lead time runs, and that span is where a shortage is decided. The reorder point is not a fixed number; it is recalculated per item.",
    meta: {
      title: "Product: how the AI runs your purchasing",
      description:
        "How Synapsio works out demand, picks the method per item, places orders and explains every decision. In detail.",
    },
    hero: {
      chip: "Product · deep dive",
      h1a: "Purchasing,",
      h1em: "run by an AI",
      h1b: ".",
      sub: "The front page shows what Synapsio does for you. This page shows how: which figures go in, which method does the calculating, where the AI decides and where you do.",
      cta: "Book a call",
      alt: "See it live →",
    },
    fold: {
      label: "One decision, opened up",
      cap: "Every order the agent places opens up like this: the method it chose, the figures behind it, the limits it checked and the sentence explaining why this became an order.",
      pill: "Why this order?",
      rows: [
        ["Item", "Threaded insert M8 · G-0442"],
        ["Method", "Reorder point (s,Q)"],
        ["Cover", "9 days"],
        ["Lead time", "14 days"],
        ["Reorder point", "reached"],
        ["Quantity", "520 pcs"],
        ["Supplier", "Nordschraube AG"],
        ["Limits", "below threshold · below daily cap"],
      ],
      why: "Cover has fallen below the lead time. Nordschraube delivers in 6 days and sits below your threshold, so it was placed.",
    },
    navLabel: "Themes",

    prose: {
      loop: {
        paras: [
          { lead: "The loop runs on a schedule, not on a button.", text: "The agent calculates the demand forecast and looks for anomalies in consumption daily, scans the market several times a day, and works out seasonal patterns once a week. In between it keeps scoring whether its own earlier decisions were right. You start none of it by hand." },
          { lead: "Every lap is the same five steps.", text: "It reads what comes in: supplier email, order confirmations, goods receipts, production runs, everything that moves stock. From that it calculates days of cover per item, the forecast, the season and supplier risk. It decides which method applies, what quantity is needed and which supplier should deliver, then checks the result against all of your limits. It acts, raises the order, sends the email and the PDF and chases the date. And it records, with a timestamp and a reason." },
          { lead: "", text: "Anything it cannot close cleanly does not disappear. It moves into a separate list as an exception, together with a suggestion for what to do. An order that stalls, a reply that does not match the order, a quantity that is wrong at goods-in: none of it is quietly skipped." },
        ],
        say: "You start none of it by hand. That is the difference between a tool and an operation.",
      },
      ai: {
        paras: [
          { lead: "That one rule then covers screws and gaskets alike.", text: "A minimum level, maintained by hand, that changes when somebody remembers to change it. There is no record of why that particular number is the one sitting there." },
          { lead: "Synapsio AI picks the method per item, not just the number.", text: "An item with steady consumption needs a different calculation from one pulled three times a year. So each item gets one of five methods: reorder point (s,Q) for steady consumption, Croston for intermittent demand, Newsvendor for perishable goods, periodic review (R,S) for fixed ordering rhythms, and a multi-location calculation when the same item sits in several warehouses." },
          { lead: "With the method it also sets that method's parameters.", text: "Lead time, safety stock, service level and review interval sit on the item and are adjusted as consumption changes. If you want a method fixed in place, lock it and the AI will leave it alone." },
          { lead: "", text: "And it writes down why. The item carries which method applies, since when, what the choice rested on and how confident the AI was about it. You can read that without knowing the calculation behind it, and you can disagree with it." },
        ],
        say: "A number can be set. A method has to be argued for.",
      },
      read: {
        paras: [
          { lead: "It always reads against its own order.", text: "The reply is matched to the order the agent wrote itself. Quantity, price and date are pulled out, and a confirmed delivery date lands on the order." },
          { lead: "If the reply differs, it is not silently accepted.", text: "When a supplier confirms a different quantity or a later date, that becomes an exception with both figures side by side. The same at goods-in: receipts are booked against the order, partial quantities are allowed, and anything that does not line up lands visibly on the table instead of in a quiet correction." },
          { lead: "", text: "Consumption does not come from the stock level, it comes from the bill of material. The agent knows which item sits in which product, and live production runs draw stock down accordingly. Stock itself is kept down to location, bin and lot, not as one number per item." },
        ],
        say: "That is why the agent sees consumption before the stock level shows it.",
      },
      calc: {
        paras: [
          { lead: "The calculation behind it is not an estimate.", text: "Stock divided by average daily consumption, measured against the lead time the supplier actually keeps. The reorder point falls out of that calculation instead of sitting fixed in the item master: daily consumption times lead time, plus a safety stock derived from your service level and the variability of demand." },
          { lead: "When consumption changes, the point moves with it.", text: "Nobody has to maintain a list to keep the number current. The order quantity then comes from the item's method and from the volume prices held against the supplier." },
          { lead: "", text: "Alongside that the agent keeps calculating. It produces a demand forecast per item, recognises patterns that repeat across the year, and reports outliers in consumption rather than averaging them in. Delivery reliability and responsiveness produce a risk score per supplier, which in turn feeds into how quotes are compared." },
        ],
        say: "An outlier should not bend the forecast, so it is reported rather than absorbed.",
      },
      buy: {
        paras: [
          { lead: "It picks the supplier rather than taking the first one.", text: "For the same requirement it compares the suppliers on file with their price breaks, their lead time and how reliably they have hit dates before, and writes down why this one won. Price does not decide alone: a supplier who delivers two days after the shortage is not a cheap supplier." },
          { lead: "It consolidates rather than trickling orders out.", text: "Open requirements for the same supplier are pulled into one order and held until your cut-off, so five separate orders do not go to the same address. Whatever comes up after that goes the next day." },
          { lead: "It carries the order through.", text: "It raises the order with every line, sends the email and the PDF, matches the supplier's reply to its own order and follows up the confirmed date. Goods-in is booked against the order, part deliveries included." },
          { lead: "It scores your suppliers continuously.", text: "Delivery reliability, how they answer and the gaps between what was ordered and what arrived become a risk figure per supplier. It does not sit in a report; it flows back into the next comparison." },
          { lead: "And it notices when an item is being discontinued.", text: "It checks whether a part has been withdrawn or superseded, records the replacement on the item and flags it while there is still time to switch. An item that no longer exists otherwise shows up when the order stops going through." },
        ],
        say: "That is the difference between a suggestion and an order.",
      },
      gate: {
        paras: [
          { lead: "You set four things, and they apply from the next order.", text: "The approval threshold is the amount above which an order comes to you: below it the agent places the order, above it the agent puts it up. The autonomy level decides whether it may act at all or only suggest, and switches without a restart. Spend caps apply per order and per day, independently of each other; at the daily cap it stops and tells you. And after the order cut-off nothing goes out, with the rest following the next day." },
          { lead: "", text: "Who may do what is set per person. Approving, ordering and viewing are separate rights, changeable at any time. Anything that did not run cleanly does not get lost among the orders but sits in its own list with a suggested fix, and you can tell the agent right there what it misread." },
        ],
        say: "When a limit is breached the order is not cancelled. It is put to you, with the calculation beside it.",
      },
      learn: {
        paras: [
          { lead: "Every ordering decision is stored, not just executed.", text: "With the method it chose, the signals it leaned on, the quantity it worked out, the reorder point, the deviation from the baseline and a note on whether one of your limits was touched. That is the record that gets scored later." },
          { lead: "Later it goes back and checks whether it was right.", text: "The same decision is held against what actually happened and given an outcome. A bad call stays visible on the decision instead of disappearing into an average." },
          { lead: "If none of the five methods fits, it writes one.", text: "The new method gets a name, triggers that say when it applies, and a version. After that it is measured on its outcome like any other, and it disappears again if it earns nothing." },
          { lead: "It tests its own market signals against reality too.", text: "What it picks up outside does not become a basis unchecked. Signals are tested backwards against what actually happened before they carry weight." },
          { lead: "", text: "You keep the last word. A method you pin is left alone, and what you approve or reject is itself a signal." },
        ],
        say: "A decision that is never scored afterwards is a rule with better marketing.",
      },
      memory: {
        paras: [
          { lead: "You ask in plain language.", text: "\"Why this order?\" is answered from any page, with the cover, the quotes it checked and the threshold check. You do not have to know where anything is stored to ask about it, and you do not have to be able to follow the calculation yourself." },
          { lead: "", text: "Reading, comparing, ordering, booking: every step sits in the log with a timestamp, alongside analyses of stock, orders and suppliers without the detour through Excel. When somebody asks in three months why that quantity went to that supplier, it is a query rather than a reconstruction." },
        ],
        say: "Traceable means checkable, not merely retrievable.",
      },
    },
    themes: [
      {
        key: "loop", label: "The loop", h: "Five steps that never stop",
        lede: { lead: "An agent you have to trigger is a tool.",
                rest: " Synapsio keeps going when nobody is watching: read, calculate, decide, act, record. Every lap feeds the next one." },
      },

      {
        key: "ai", label: "The AI", h: "Where the AI actually decides",
        lede: { lead: "The difference is not that something happens automatically.",
                rest: " It is who decides which rule does the calculating. In most systems that is a person, once, the same for every item." },
      },

      {
        key: "read", label: "Perception", h: "It reads what comes in",
        lede: { lead: "A supplier email is not a form.",
                rest: " Every supplier writes differently, and almost none of them write the way an import filter would need. That is exactly why an AI reads this, not a parser." },
      },

      {
        key: "calc", label: "The maths", h: "Days of cover, not gut feel",
        lede: { lead: "A minimum stock level is a number somebody set once.",
                rest: " Cover is a calculation that changes every day: how long the stock lasts at current consumption, against the time the supplier needs." },
      },

      {
        key: "buy", label: "Procurement", h: "It orders without being asked",
        lede: { lead: "Placing the order is the step software usually leaves to a person.",
                rest: " A suggestion appears, somebody reads it, somebody clicks. Here the AI carries the job through itself, and you only see what sits above your limit." },
      },

      {
        key: "gate", label: "Control", h: "Limits that actually hold",
        lede: { lead: "Autonomy without a limit is a promise nobody can keep.",
                rest: " So the agent checks every order against all of your limits and stops the moment one is breached. Stopping is the normal case, not the failure case." },
      },

      {
        key: "learn", label: "Learning", h: "It scores its own decisions",
        lede: { lead: "Automation repeats itself. Learning means the next lap comes out differently.",
                rest: " So every decision here is a record the AI later holds against what actually happened." },
      },

      {
        key: "memory", label: "Memory", h: "It remembers what you decide",
        lede: { lead: "Every approval and every rejection is a signal.",
                rest: " The agent does not just record what it did. It scores later whether that was right, and draws the next decision from it." },
      },
    ],

    status: {
      chip: "Sorted honestly",
      h: "What runs, and what does not yet",
      p: 'The same split as on the front page. Anything listed here as "in progress" is not something you can use today.',
      paras: [
        { lbl: "Live", cls: "live", text: "Everything this page describes runs today. The loop works in the background, the AI reads supplier email and writes orders, it picks the method per item, compares suppliers, consolidates open requirements, scores its own decisions afterwards and flags discontinued items. It calculates cover, forecast and anomalies. Your limits hold, approvals and exceptions come to you, the log is there, and multiple sites, bins and batches are covered." },
        { lbl: "In progress", cls: "wip", text: "Two things you cannot use yet: sales with goods issue, and invoice checking line by line. Both are started and both are still missing." },
        { lbl: "Vision", cls: "vis", text: "And two we believe in but do not promise: a marketplace between companies, and the point where one agent negotiates with another." },
      ],
    },
  },
} as const;
