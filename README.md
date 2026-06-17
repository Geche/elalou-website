# Elalou East Africa — Website

Marketing website for **Elalou East Africa Limited**, a Nairobi-based firm
offering market-entry advisory and commodity export services.

The site is built on the commercial **Bexon** Next.js template (Theme Junction),
rebranded for Elalou. The template's visual design is kept intentionally — work
on this project is about **content, data, and structure, not restyling**.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **JavaScript** (no TypeScript)
- **Bootstrap 5** + **SCSS** for styling
- **GSAP** (ScrollSmoother, ScrollTrigger, SplitText) for animation
- **Swiper** for carousels
- Supporting libs: Chart.js, GLightbox, Isotope, SweetAlert2, WOW.js

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm start        # serve the production build
```

There is no test runner, linter, or typechecker configured.

## Project structure

```
src/
  app/                 # one folder per route → page.js (App Router)
    page.js            # home page (the template's "home-04" layout)
    about/  services/  blogs/  contact/  ...
    globals.scss       # @forwards the SCSS partials
    assets/            # sass/ partials + precompiled vendor css/
  components/
    layout/            # header (Header, Navbar, MobileNavbar), footer
    sections/          # page sections grouped by type (hero, about, services…)
    shared/            # shared widgets and wrappers
  hooks/               # e.g. useIsSticky.js
  libs/                # data getters (get*.js) + animation helpers
public/
  fakedata/*.json      # editable site content (nav, services, testimonials…)
  images/              # logos and imagery
```

Imports use the `@/*` alias for `src/*` (see `jsconfig.json`).

### How content is wired

- **Structured content** (nav items, services, testimonials, blog posts, etc.)
  lives in `public/fakedata/*.json` and is read through the `src/libs/get*.js`
  helpers.
- **Section headings and body copy** are hardcoded in the relevant components
  under `src/components/sections/**`.
- The home page composes template sections in `src/app/page.js`:
  `Hero4 → Features3 → About4 → Services4 → Funfact2 → PricingPlan2 →
  Testimonials4 → Blogs4 → Footer4`, wrapped in `#smooth-wrapper >
  #smooth-content` for GSAP ScrollSmoother.
- The navbar renders **generically** from `public/fakedata/nav-items.json` — an
  item with a `submenu` becomes a dropdown, otherwise a plain link. Current nav:
  Home, About, Services, Blog, Contact.

### Styling

Theme values are CSS/SCSS variables (`--tj-color-*`), generated from the Sass map in `src/app/assets/sass/utilities/_colors.scss` (single source of truth). Official palette: Deep Navy `#0B1F3B` (primary — nav, headings, buttons, dark sections), Soft White `#F7F8FA` (background), Cool Grey `#D7DCE3` (cards/borders), Charcoal `#111111` (text), Muted Trade Green `#4C6B5A` (sparse accent — button icon-circles/hover, hero highlights, progress ring).
Edit the relevant `_*.scss` partial under `src/app/assets/sass/**` rather than
adding inline styles. Don't swap out the CSS framework or redesign components.

## Branding & customizations applied

The Elalou rebrand deviates from stock Bexon in these ways:

- **Logo:** `public/images/logos/elalou-h-{dark,light}.png` (horizontal) and
  `elalou-stacked-{dark,light}.png`; favicon `src/app/icon.png`.
- **Removed:** the Portfolio page + nav entry; About/Services nav dropdowns; the
  header search bar; the desktop offcanvas hamburger (mobile hamburger kept).
- **Inner-page header banners removed** from About, Services, Blog and Contact —
  those pages open straight into content.
- **Contact page:** map removed, form is full-width.
- Demo contact details replaced with Elalou's throughout.

Many leftover template routes (`shop`, `cart`, `careers`, `home-02…home-10`,
etc.) still exist but are **not linked from the nav** — safe to ignore or delete.

## Pre-launch TODO

These are placeholders that must be replaced before launch:

- Many images are the template's gray `WxH` placeholders (hero, about, blog
  thumbnails, avatars) — real photography still needed.
- Contact details (`+254 700 000 000`, `info@elalou.co.ke`, Westlands Nairobi)
  and the stat figures are **invented placeholders**.
- Blog posts are still Bexon demo content.
</content>