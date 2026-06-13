# Early Winter — Design Language (v2)

The single source of truth for type, layout, copy, and color across `index.html`,
`work.html`, `about.html`. If a page disagrees with this document, the page is wrong.

Goal: a calm, confident editorial magazine. Swiss structure, one quiet voice.

---

## 0. Hard rules (these are not suggestions)

1. **Two typefaces. That is all.** Inter for everything structural. Caveat only for the
   occasional handwritten margin note. **No third font.**
2. **No italic serif. Anywhere.** EB Garamond is removed from the project. Emphasis is done with
   **weight (500)** or the label style — never with a slanted serif word.
3. **Five sizes, no others.** Everything is `--t-display / --t-lead / --t-body / --t-caption / --t-label`.
   No 36px, no 56px, no `.7rem`, no one-off sizes.
4. **Body text is the default voice.** Most text on most pages is 18px body. Big type is rare
   and earns its place by being alone.
5. **Cut the copy in half, then cut the adjectives.** Every line makes one point. No "calm,
   present, a little nostalgic." Concrete nouns, active verbs, short sentences.
6. **One first read per spread.** Decide it before you place anything.

---

## 1. Type — two fonts

| Font | Role |
|------|------|
| **Inter** | Display, lead, body, caption, label, page numbers — all structural text |
| **Caveat** | Handwritten margin notes only. Sparingly. One per spread at most. |

```css
--sans:  'Inter', system-ui, sans-serif;
--scrib: 'Caveat', cursive;
```

Emphasis = `font-weight:500` and `color:var(--ink)`. That's the `.t-emph` utility. Never italic, never serif.

---

## 2. Scale — five tokens

| Token | Size | Weight | LH | Tracking | Use |
|-------|------|--------|----|----|-----|
| `--t-display` | **40px** (2.5rem) | 400 | 1.0 | -1.5px | Section openers only. Once per spread, max. Often not at all. |
| `--t-lead` | **24px** (1.5rem) | 400 | 1.3 | -.2px | One opening statement. Sparingly. |
| `--t-body` | **18px** (1.125rem) | 400 | 1.55 | 0 | The default. 90% of all text. |
| `--t-caption` | **14px** (.875rem) | 400 | 1.5 | 0 | Dense/secondary text, image captions. |
| `--t-label` | **12px** (.75rem) | 500 | 1.4 | .1em | Eyebrows, running heads, metadata keys, fol`io labels. UPPERCASE. |

- **Folio (page number):** uses `--t-display` size, color `rgba(21,17,14,.18)` — a quiet graphic, parked in a corner.
- **Margin note (Caveat):** ~1.4rem, `#C8385A`, slight rotation, off the grid on purpose.

If body "feels too big," the column is too narrow or the copy is too long — fix those, not the size.

---

## 3. Standard component CSS — paste identically into every file

This block lives in the `<style>` of all three files, byte-for-byte. Consistency is structural,
not a matter of each page's discretion.

```css
:root{
  --page:#FEFEFB; --ink:#15110E; --head:#2E2A25;
  --mu:rgba(21,17,14,.55); --line:rgba(21,17,14,.14); --table:#0B0908;
  --pink:#FF85B0; --green:#2DF952; --blue:#DCE8EF; --warm:#F2EADC; --yellow:#F5E10A;
  --sans:'Inter',system-ui,sans-serif; --scrib:'Caveat',cursive;
  --t-display:2.5rem; --t-lead:1.5rem; --t-body:1.125rem; --t-caption:.875rem; --t-label:.75rem;
  --ease-out:cubic-bezier(.23,1,.32,1);
}
.t-display{font:400 var(--t-display)/1.0 var(--sans);letter-spacing:-1.5px;color:var(--head);}
.t-lead   {font:400 var(--t-lead)/1.3 var(--sans);letter-spacing:-.2px;color:var(--head);}
.t-body   {font:400 var(--t-body)/1.55 var(--sans);color:rgba(21,17,14,.7);}
.t-caption{font:400 var(--t-caption)/1.5 var(--sans);color:var(--mu);}
.t-label  {font:500 var(--t-label)/1.4 var(--sans);letter-spacing:.1em;text-transform:uppercase;color:var(--mu);}
.t-emph   {font-weight:500;color:var(--ink);}                 /* emphasis — never italic */
.eyebrow  {display:flex;justify-content:space-between;align-items:baseline;
           border-bottom:1px solid var(--line);padding-bottom:.7rem;}
.folio    {font:400 var(--t-display)/1 var(--sans);letter-spacing:-1px;color:rgba(21,17,14,.18);}
.meta     {display:grid;grid-template-columns:auto 1fr;gap:.5rem 1.4rem;align-items:baseline;}
.note     {font:400 1.4rem/1.05 var(--scrib);color:#C8385A;}  /* Caveat scribble */
/* on dark/color pages, set parent class `.on-dark`: */
.on-dark .t-display,.on-dark .t-lead{color:var(--page);}
.on-dark .t-body{color:rgba(254,254,251,.8);}
.on-dark .t-label,.on-dark .t-caption,.on-dark .meta dt{color:rgba(254,254,251,.6);}
.on-dark .t-emph,.on-dark .meta dd{color:var(--page);}
.on-dark .eyebrow{border-bottom-color:rgba(254,254,251,.25);}
.on-dark .folio{color:rgba(254,254,251,.4);}
```

Use the utilities. A new page should add almost no new type CSS — only layout (positioning) rules.

---

## 4. Layout — invisible 6-column grid, content in chunks

- Page-half margin ~9%. Six columns, 24px gutter. All vertical spacing in multiples of 8px.
- A spread is **2–4 self-contained chunks**, each anchored to a *different* grid region. Never flow
  everything from the top-left margin.
- Anchors to mix: eyebrow (full width, top) · main chunk (a column span, anchored high OR low) ·
  image chunk (opposite side) · metadata stack (beside/under image) · folio (a corner).
- Whitespace is the composition. A near-empty page with one lead is finished, not unfinished.

**Standard spread template** (most pages use this; vary the anchor, not the parts):
```
EYEBROW (brand · section)            ─── hairline ───
                                                       FOLIO (faint, corner)
      ┌ main chunk ┐         ┌ image / data chunk ┐
      │ lead/body  │         │                    │
      └────────────┘         └────────────────────┘
```

---

## 5. Copy — voice & rules

The studio is "Early Winter." First person, plain, a little dry. Write like a designer who
respects the reader's time.

- **One point per block.** If a sentence doesn't change what the reader thinks, cut it.
- **Concrete over poetic.** "I sweat the parts users never notice" > "calm, present, a little nostalgic."
- **Active and direct.** "I run a studio of one." not "Early Winter was founded as a small studio."
- **No filler labels.** No "SECTION 01", no "a note before the work", no mock-humble taglines.
- **Numbers are facts, state them flat.** 3.5 years. 4 sectors. Studio of one.
- **Length caps:** lead ≤ 12 words · body block ≤ 45 words · caption ≤ 12 words · label ≤ 4 words.

Rewrite examples:
- ❌ "Hemant Singh is a UX designer with 3.5 years across ed tech, fintech, e-commerce and B2B SaaS.
  Based in New Delhi, he founded Early Winter as a small, slow, intentional studio. His work is shaped
  by Don Norman, by cinema, and by the belief that good design should feel like the first cold morning
  of the season — present, calm, and a little nostalgic."
- ✅ "UX designer in New Delhi. 3.5 years across ed tech, fintech, commerce and B2B SaaS. I run Early
  Winter — a studio of one, slow on purpose. I sweat the parts users never notice."

---

## 6. Color

Cream by default. One color-block page is a *moment* (contact = pink). Don't habitually color pages.

| Token | Value | Use |
|-------|-------|-----|
| `--page` | `#FEFEFB` | Default surface |
| `--ink` | `#15110E` | Emphasis, full-strength marks |
| `--head` | `#2E2A25` | Display & lead text (warm darkest grey) |
| `--mu` | `rgba(21,17,14,.55)` | Labels, captions |
| `--line` | `rgba(21,17,14,.14)` | Hairlines |
| `--pink` `--yellow` `--green` `--blue` | — | Accent pages — one per spread, rarely |

On any color/dark page, add `.on-dark` to the page-half so the type utilities flip to light automatically.

---

## 7. Page archetypes

1. **Cover** — full-bleed media + display title + eyebrow.
2. **Body page** (the default) — eyebrow + body chunk + image/meta chunk + folio. No big heading.
3. **Lead page** — one 24px lead, lots of air, folio. Used to open a section.
4. **Index** — TOC rows: label left · hairline · faint display-size number right.
5. **Work item** — image + metadata stack + 18px description. Lead, not heading.
6. **Contact** — display title + one-line invite + link rows (label · destination). Make it pointed, not empty.

---

## 8. Motion (built — keep)

Page-turn shading, staggered first-load reveal, spring-follow paw cursor, hover micro-feedback,
`prefers-reduced-motion`. Easing `--ease-out`. UI feedback < 300ms. No infinite loops, no parallax.

---

## 9. Don't

- Don't use a serif, or italics, or a third font.
- Don't use a size off the five-token scale.
- Don't put a 40px heading on every page — most pages are body-led.
- Don't write three sentences where one works.
- Don't flow everything from the top-left. Don't fill the page. Don't tie two elements for first read.

---

*Tokens for Figma live in `design-tokens.json` (Tokens Studio format). Import via the Tokens Studio
plugin to get this exact scale, color, and type as Figma styles.*
