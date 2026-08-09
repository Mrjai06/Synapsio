// Copy for the 404 page. GitHub Pages serves ONE 404.html for every unknown URL in the whole
// site, so this page cannot be built per locale the way the other five are. Both languages are
// rendered and a tiny inline script picks the right one from the path (see 404.astro).
export const notFoundCopy = {
  de: {
    code: "Fehler 404",
    h1: "Diese Seite gibt es nicht.",
    p: "Die Adresse führt ins Leere. Möglicherweise ist der Link veraltet oder es hat sich ein Tippfehler eingeschlichen. Hier geht es weiter:",
    home: "Zur Startseite",
    contact: "Wenn Sie etwas Bestimmtes gesucht haben, schreiben Sie uns:",
  },
  en: {
    code: "Error 404",
    h1: "This page does not exist.",
    p: "The address leads nowhere. The link may be out of date, or there is a typo in it. Carry on here:",
    home: "Go to the homepage",
    contact: "If you were looking for something specific, write to us:",
  },
} as const;
