# Early Winter — Visual Guidelines

The single source of truth for type, grid, hierarchy, and layout across `index.html`,
`work.html`, and `about.html`. When in doubt, this document wins. The goal: a calm,
confident editorial magazine — Swiss structure, nostalgic warmth.

---

## 0. The five principles

1. **One grotesque does the work.** Inter carries 90% of the page — headings, captions,
   body, labels, numbers. Consistency comes from *one* voice at many sizes, not many fonts.
2. **A heading is a privilege, not a default.** Most pages do NOT need a 48–56px heading.
   A 24px lead caption can open a page. Reserve big headings for section openers and key moments.
3. **Place chunks on an invisible grid.** Never flow everything from the same top-left point.
   Anchor self-contained blocks to *different* grid positions. Asymmetry creates interest.
4. **Hierarchy = size jump + isolation + position.** What the eye hits first must be the most
   important thing. Rank with big size contrast and whitespace, not with five mid-sizes.
5. **Big jumps, no mud.** Use the scale below and skip steps. 56 next to 12 reads as designed;
   56 / 40 / 32 / 24 / 18 all on one page reads as indecision.

---

## 1. Type system — exactly 3 fonts

| Role | Font | Used for |
|------|------|----------|
| **Grotesque** (workhorse) | **Inter** | Headings, sub-heads, leads, body, captions, labels, page numbers — everything structural |
| **Serif** (accent) | **EB Garamond**, italic | Pull-quotes and the rare editorial display moment. Sparingly — never body. |
| **Script** (signature) | **Caveat** | Handwritten margin notes only (e.g. "est. one cold morning ❅"). Never structural. |

> **Change to apply:** Outfit is retired. Headings move to Inter (tight tracking, large size).
> This is the only way to honor "3 fonts" + the reference look.

CSS variables (already in `:root`):
```css
--sans: 'Inter', system-ui, sans-serif;   /* grotesque workhorse */
--book: 'EB Garamond', Georgia, serif;     /* serif accent */
--scrib: 'Caveat', cursive;                /* signature script */
--head: #2E2A25;                           /* heading ink — darkest warm grey */
```

---

## 2. The scale — five sizes, big jumps

| Token | Size | Font / weight | LH | Tracking | Case | When it appears |
|-------|------|---------------|----|----|------|-----------------|
| `--h-max` Display | **56px** (3.5rem) | Inter 400 | 1.0 | -2px | — | Section openers ONLY. Once per spread, at most. |
| `--h-sub` Sub-head | **48px** (3rem) | Inter 400 | 1.05 | -1px | — | A spread's headline when it genuinely needs one. |
| `--lead` Lead | **24px** (1.5rem) | Inter 400 | 1.35 | -.2px | — | Page-carrying caption. **Use this instead of a heading** on most pages. |
| `--body` Body | **18px** (1.125rem) | Inter 400 | 1.5 | 0 | — | Reading text, standard captions. |
| `--label` Label | **12px** (.75rem) | Inter 500 | 1.4 | .1em | UPPER | Eyebrows, running heads, metadata keys, credits. |

**Accent tokens** (off the main scale, used rarely):
- **Folio / page number:** 48px Inter 400, `-1px` — a *graphic* element, not a footnote. Park it in a corner.
- **Pull-quote:** 24–32px EB Garamond italic, `-.5px`, LH 1.3 — isolated, lots of margin.
- **Margin note:** 20–28px Caveat — set at a slight rotation, off the grid on purpose.

**Forbidden:** 40px, 36px, 32px (except quotes), 14px, 16px as type sizes. They blur the jumps.
If text feels "too big at 18" or "too small at 24," fix the *line length and whitespace*, not the size.

---

## 3. Grid — content lives in chunks

Each book page-half is its own canvas. **Six columns**, consistent gutter, generous margin.

```
margin: ~9% of page-half on all sides
columns: 6
gutter: 24px
baseline rhythm: 8px (all vertical spacing is a multiple of 8)
```

**The rule that matters:** a page is built from 2–4 *chunks*, each anchored to a grid region —
NOT a single column flowing top to bottom. A chunk is self-contained: it has its own top edge,
its own width (a column span), and its own alignment.

Anchor regions to mix between (never all the same on one spread):
```
┌─────────────────────────────┐
│ ① eyebrow (full width, top)        │
│                                     │
│   ② lead / text chunk               │
│      (cols 1–3, anchored ~40% down) │
│                          ③ image    │
│                          (cols 4–6) │
│                          ④ meta     │
│                          stack      │
│                                     │
│ ⑤ folio (corner)            running │
└─────────────────────────────┘
```
- Some chunks start low. Some hug the right edge. The empty space is the composition.
- Align chunks to column edges, but vary *which* column and *which* vertical anchor.

---

## 4. Hierarchy — design the first read

Every spread has exactly **three tiers**. Decide them before placing anything.

1. **Primary (first read).** The one thing the visitor should see first. Make it win by *size*
   (biggest), *isolation* (most whitespace around it), or *position* (upper-left, or dramatically
   placed). Only one per spread.
2. **Secondary.** Supporting block — the body chunk, the image. Clearly subordinate.
3. **Tertiary.** Eyebrows, running heads, metadata, folio. Quiet, in corners or edges, 12px.

If two elements compete for first read, the spread has failed — shrink or move one.

---

## 5. Chunk patterns (the reusable blocks)

**Eyebrow pair** — top of page, 12px label, brand left + section/edition right, hairline under:
```
EARLY WINTER                                    ISSUE Nº 01
─────────────────────────────────────────────────────────
```

**Lead-only page** (no heading) — a 24px lead does the talking, anchored low-left:
```


              (empty — this is intentional)


  Hemant is Sanskrit for the early cold — the hush
  between autumn and winter. A threshold.
                                                    124
```

**Index / TOC row** — label left, hairline, big folio right (huge size contrast):
```
Selected Work                                          ── 02
Uphold · ed tech                                       ── 36
```

**Image + metadata stack** — image chunk, tiny labeled data beside or under it:
```
┌────────────┐   UPHOLD
│            │   ──────────────
│   image    │   ROLE      UX / UI
│            │   YEAR      2025
└────────────┘   SECTOR    Ed Tech
```
Metadata keys are 12px UPPER label; values 18px body. Keys and values align in two micro-columns.

**Pull-quote** — serif italic, isolated, never inside a text column:
```
        Design is not invention.
        It is recognition.
```

**Masthead / credits** — 12px label caps in a 3–4 column grid, bottom of a closing page.

**Folio** — 48px number, parked in the outer corner. Same position every spread = rhythm.

---

## 6. Color

| Token | Value | Use |
|-------|-------|-----|
| `--page` | `#FEFEFB` | Default page surface (cream) |
| `--ink` | `#15110E` | Body text, full-strength marks |
| `--head` | `#2E2A25` | Headings (darkest warm grey, softer than pure black) |
| `--table` | `#0B0908` | Dark spreads, video margins |
| `--pink` | `#FF85B0` | One color-block page (contact) |
| `--green` `--blue` `--warm` | tints | Accent / filler spreads, one per spread max |

- **One color-block page is a moment, not a habit** (like the pink Catalys spread). Most pages cream.
- Body text on cream: `rgba(21,17,14,.72)`. Labels: `rgba(21,17,14,.5)`. Never pure black on cream.
- On a color/dark page, flip to `--page` text and `rgba(254,254,251,.55)` labels.

---

## 7. Spacing & rhythm

- All vertical gaps are multiples of **8px** (8 / 16 / 24 / 40 / 64).
- Whitespace is a design element — a near-empty page with one 24px lead is *correct*, not unfinished.
- Hairlines: `1px solid rgba(21,17,14,.14)`. Use to separate TOC rows and under eyebrows. Never box things in.
- Line length for body: 45–70 characters. If a column is wider, the size is wrong or it needs columns.

---

## 8. Page archetypes (pick one per spread — don't invent every time)

1. **Cover** — full-bleed media one side, title (56px) + eyebrow + lead other side.
2. **Lead page** — no heading; a single 24px lead anchored low, huge whitespace, folio corner.
3. **Index / contents** — TOC rows: label left + hairline + 48px folio right.
4. **Work item** — image chunk + metadata stack + 18px description; 24px lead, no big heading.
5. **Quote / pause** — one EB Garamond pull-quote isolated on color or cream.
6. **Section opener** — the rare 56px display moment + eyebrow. Earns its size by being alone.
7. **Closing / masthead** — sub-head + 12px credit grid, optional color block.

---

## 9. Motion (already built — keep)

Page-turn shading, staggered first-load reveal, spring-follow paw cursor, hover micro-feedback,
`prefers-reduced-motion` support. Easing token `--ease-out: cubic-bezier(.23,1,.32,1)`. UI feedback
under 300ms. Don't add infinite loops or parallax.

---

## 10. Don't

- Don't put a 48–56px heading on every page. Most pages are lead-led (24px).
- Don't flow all content from the top-left margin. Place chunks on the grid.
- Don't use more than 3 fonts, or sizes off the scale.
- Don't use pure black, AI-grey gradients, or center everything.
- Don't fill the page. Whitespace is the layout.
- Don't let two elements tie for first read.

---

*Build from this. When a page feels off, check it against §0 and §4 first — it's almost always
a hierarchy or chunk-placement problem, not a font problem.*
