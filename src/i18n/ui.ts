export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const CAL_URL = "https://cal.eu/synapsio/30min";
export const APP_URL = "https://app.synapsio.solutions";
export const CONTACT_EMAIL = "contact@synapsio.co.site";
export const LINKEDIN_URL = "https://www.linkedin.com/company/synapsioai";

export const ui = {
  de: {
    "nav.product": "Produkt",
    "nav.security": "Sicherheit",
    "nav.blog": "Blog",
    "nav.about": "Über uns",
    "nav.cta": "Pilot-Gespräch buchen",
    "footer.motto": "Connections you can rely on.",
    "footer.product": "Produkt",
    "footer.company": "Unternehmen",
    "footer.legal": "Rechtliches",
    "footer.app": "Zur App",
    "footer.pilot": "Pilotprogramm",
    "footer.investors": "Investors",
    "footer.contact": "Kontakt",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.terms": "AGB",
    "footer.legalline":
      "© 2026 Synapsio UG (haftungsbeschränkt), Schönwalde-Glien. Amtsgericht Potsdam, HRB 42364 P.",
  },
  en: {
    "nav.product": "Product",
    "nav.security": "Security",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.cta": "Book a pilot call",
    "footer.motto": "Connections you can rely on.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.app": "Open the app",
    "footer.pilot": "Pilot program",
    "footer.investors": "Investors",
    "footer.contact": "Contact",
    "footer.imprint": "Legal notice",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.legalline":
      "© 2026 Synapsio UG (haftungsbeschränkt), Schönwalde-Glien, Germany. Amtsgericht Potsdam, HRB 42364 P.",
  },
} as const;

export type UiKey = keyof (typeof ui)["de"];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

/** Path helper: DE lives at root, EN under /en/ */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return locale === "de" ? clean : `/en${clean === "/" ? "/" : clean}`;
}
