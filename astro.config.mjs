// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://synapsio.solutions",
  trailingSlash: "ignore",
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // /prototypes/ are throwaway variant harnesses and must never be indexed. They were
      // reaching the sitemap because only /dev/ was filtered.
      filter: (page) => !page.includes("/dev/") && !page.includes("/prototypes/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
