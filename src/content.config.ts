import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Posts live at src/content/blog/<locale>/<slug>.md. Both the locale and the slug are also
// declared in frontmatter rather than parsed out of the file path: the pair (slug, locale) is
// what links a post to its translation, and deriving that from a path breaks the moment someone
// renames a file. Every post exists in BOTH languages, so a missing counterpart is a bug.
const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
    // ⚠️ Load-bearing. The default id generator drops the directory, so de/<slug>.md and
    // en/<slug>.md both become "<slug>" and the second one silently OVERWRITES the first
    // ("Duplicate id ... Later items with the same id will overwrite earlier ones"). The German
    // blog then serves English posts, and the only sign is a warning in the build log. Keeping
    // the locale folder in the id makes the pair distinct.
    generateId: ({ entry }) => entry.replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    /** used as the meta description and as the teaser on the index */
    description: z.string(),
    date: z.coerce.date(),
    locale: z.enum(["de", "en"]),
    /** shared across translations, forms the URL */
    slug: z.string(),
    /** one short mono label on the index, e.g. „Bestandsführung" */
    tag: z.string(),
    /** minutes, shown on the index; write it, do not estimate it in code */
    readingTime: z.number(),
  }),
});

export const collections = { blog };
