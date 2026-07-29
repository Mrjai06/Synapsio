import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// German feed at /blog/rss.xml. Hand-rolled rather than pulling in @astrojs/rss: this is ~30
// lines, and the repo already keeps its dependency list deliberately short.
//
// Why a feed at all, with two posts: it is the one "flexibility" affordance that costs the
// visitor no interaction and the site no UI. The critique scored flexibility 1/4 because a reader
// who wants to follow along has no way to do it except returning by hand. Search and pagination
// would be building for a problem two posts do not have; a feed is useful from post one, and the
// technical half of this audience still uses one.

const SITE = "https://synapsio.solutions";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = async () => {
  const posts = (await getCollection("blog", (e) => e.data.locale === "de")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escape(p.data.title)}</title>
      <link>${SITE}/blog/${p.data.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.data.slug}</guid>
      <description>${escape(p.data.description)}</description>
      <category>${escape(p.data.tag)}</category>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Synapsio, Notizen aus dem Einkauf</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Was wir beim Bauen über Bestandsführung, Lieferanten und Beschaffung im Mittelstand lernen.</description>
    <language>de-DE</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
