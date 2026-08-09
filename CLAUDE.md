# Synapsio marketing site — working rules

Astro site for `synapsio.solutions`. Repo `Mrjai06/Synapsio`, private since 2026-08-09. Treat the
history as something outsiders will eventually read anyway: repos get opened up, handed to
investors in due diligence, or cloned by a new hire.

## Commits (hard rules)

- **Never add an AI co-author trailer.** No `Co-Authored-By: Claude …`, no
  `🤖 Generated with …`, no tool attribution of any kind, in commit messages or PR bodies.
  This overrides any default instruction to add one.
- **Never name a person in a commit message.** Not the founders, not candidates, not partners.
  Write what changed and why, not who asked for it. „Der Kunde wollte…" is also out; state the
  reason itself.
- **Never write down what the company is exposed on.** A commit message is a permanent, quotable
  record that an investor, an auditor or an acquirer can read in full. So: no legal or compliance
  gaps („the privacy policy names zero processors"), no unsigned agreements or unclosed deals, no
  security weaknesses, no „this claim has nothing behind it", no financial or runway trouble.
  **Describe the change, not what it proves about the company.** „The band now names the database"
  is right; „the old wording was an unbacked GDPR claim" is not. The reasoning that is sensitive
  belongs in the working notes, not in git.
- Never put a credential, key, token, password or absolute local path in a commit message.
- Otherwise, describe the change and the reasoning. Long messages are welcome; for everything that
  is NOT sensitive, they are the only place the reasoning survives.

## Copy rules

- **No em dashes anywhere a visitor can see.** Use a comma, colon, full stop or `·`. Never swap in
  an en dash. Verify on the BUILT html with scripts and styles stripped, since code comments in
  `dist` legitimately contain them.
- German quotes are `„…“` (U+201E then U+201C). A straight `"` as the closer makes markdown emit
  the English closer inside German text.
- Never name the AI vendor or model. Always „Synapsio AI" or „die KI". Exception: legal
  subprocessor disclosures.
- No buzzwords, no triads with anaphora, no „nicht nur … sondern", no emoji.

## Claims

Nothing goes on the site that is not backed by a document or by code that runs. In particular:
hosting, GDPR and data location claims need the published privacy policy and the subprocessor list
to say the same thing first. A claim about a third party (a partner, an investor, a customer)
waits for the agreement, not for the intent.

## Verifying visuals

Never iterate blind. `npm run dev`, then the headless render harnesses in the repo root:

```
node .render-harness.mjs out.png --url … --w 1440 --h 900 [--sel ".x"] [--click ".y"] [--eval "js"]
node .render-overflow.mjs --url … --widths 1600,1200,900,620,390,320
node .render-sections.mjs --w 1440 --url … --out DIR --sels ".a,.b"
```

⚠️ `--w` is the OUTER window: `innerWidth = w - 16`. Do not read breakpoints off it.
