---
name: edit-site-content
description: Locate and edit the copy, data, or imagery for any section of the Elalou site, editing the correct layer (public/fakedata JSON via get* helpers vs hardcoded section component copy) without touching the template's styling. Use when changing site content — services, testimonials, blog posts, nav, hero/about copy, contact details, or swapping placeholder images.
---

# Edit Site Content

Workflow for safely changing what the Elalou East Africa site *says and shows*,
without disturbing the Bexon template's design. Always honor the golden rule:
**change content, data, and structure — never the styling system.**

## Step 1 — Identify the content layer

Two places content lives. Pick the right one:

| Content type | Where it lives | How to edit |
|---|---|---|
| Nav, services, testimonials, blogs, brands, team, socials, marquees, products | `public/fakedata/<name>.json`, read via `src/libs/get<Name>.js` | Edit the JSON file |
| Section headings & body paragraphs | hardcoded in `src/components/sections/**/<Section>.js` | Edit the JSX text |
| Contact details, logo, footer links | `src/components/layout/**` (Header*, Footer*, Mobile*) and `contacts/` sections | Edit the JSX |

To find a getter's data file: each `src/libs/get*.js` just imports the matching
`public/fakedata/*.json` and returns it. Trace section → getter → JSON.

## Step 2 — Make the edit

- **JSON content**: keep the existing object shape — match the keys other
  entries use so the section renders. Validate after editing:
  `node -e "require('./public/fakedata/<file>.json')"`.
- **Hardcoded copy**: change only the text nodes; leave class names, wrappers,
  and `data-*` attributes intact (they drive Bootstrap layout and GSAP).
- **Images**: drop real assets into `public/images/...` and update the path in
  JSON or the component. Don't restyle around them — keep the existing markup.

## Step 3 — Do NOT

- Add inline styles, Tailwind, or new CSS frameworks.
- Edit `src/app/assets/css/**` (precompiled vendor CSS) or redefine
  `--tj-color-*` theme tokens.
- Remove `#smooth-wrapper` / `#smooth-content` wrappers or the dual `<Header>`
  instances (GSAP ScrollSmoother depends on them).
- Re-introduce stock Bexon features that were intentionally removed (Portfolio
  nav, About/Services dropdowns, header search, desktop offcanvas, inner-page
  header banners, contact-page map).

## Step 4 — Verify

Run `npm run dev` and confirm the section renders. For a content review, dispatch
the `content-reviewer` agent; to confirm no styling regressed, dispatch the
`design-preservation-reviewer` agent.
