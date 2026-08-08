// Chrome around the posts. The posts themselves are markdown in src/content/blog/<locale>/.
export const blogCopy = {
  de: {
    meta: {
      title: "Blog · Synapsio",
      description:
        "Wie Beschaffung im Mittelstand tatsächlich läuft: Bestandsführung, Lieferanten und was Software daran ändert.",
    },
    h1: "Notizen aus dem Einkauf",
    // The index masthead splits the title: a mono kicker over a serif line, which is the
    // composition the tape was designed under.
    kicker: "Notizen",
    mast: "Aus dem Einkauf",
    lede: "Was wir beim Bauen über Bestandsführung, Lieferanten und Beschaffung im Mittelstand lernen. Ohne Vertriebsbroschüre.",
    readingTime: (m: number) => `${m} Min. Lesezeit`,
    back: "Alle Beiträge",
    empty: "Der erste Beitrag erscheint in Kürze.",
    ctaH: "Sprechen Sie mit uns",
    ctaP: "Dreißig Minuten, unverbindlich. Wir schauen uns an, wie Sie heute bestellen.",
    cta: "Pilot-Gespräch buchen",
  },
  en: {
    meta: {
      title: "Blog · Synapsio",
      description:
        "How procurement actually runs in mid-sized companies: inventory, suppliers, and what software changes about it.",
    },
    h1: "Notes from procurement",
    kicker: "Notes",
    mast: "From procurement",
    lede: "What we learn while building, about inventory, suppliers and procurement in mid-sized companies. Not a sales brochure.",
    readingTime: (m: number) => `${m} min read`,
    back: "All posts",
    empty: "The first post is coming shortly.",
    ctaH: "Talk to us",
    ctaP: "Thirty minutes, no commitment. We look at how you order today.",
    cta: "Book a pilot call",
  },
} as const;

/** Long-form date, in the reader's language. */
export function formatDate(d: Date, locale: "de" | "en"): string {
  return d.toLocaleDateString(locale === "de" ? "de-DE" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
