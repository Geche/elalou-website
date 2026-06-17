# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## What this is

The marketing website for **Elalou East Africa Limited** (market-entry advisory
+ commodity export, based in Nairobi). It is built on a commercial Next.js
template called **Bexon** (Theme Junction). The user deliberately chose to keep
the template's visual design and rebrand the content — so the rule of thumb is:
**preserve the existing look; change copy, data, and structure, not the styling
system.** Don't redesign components or swap the CSS framework.

Stack: Next.js 16 App Router, **JavaScript (no TypeScript)**, React 19,
Bootstrap 5 + SCSS, GSAP (ScrollSmoother / ScrollTrigger / SplitText), Swiper,
Lenis is **not** used here (that was an earlier, now-deleted custom build).

## Commands

```bash
npm run dev      # next dev --turbopack → http://localhost:3000
npm run build    # next build --turbopack
npm start        # serve the production build
```

There is no test runner, linter, or typechecker configured. Verification is done
by driving the running dev server with **puppeteer-core** (a devDependency)
against the user's installed Chrome. Headless Chrome needs
`--enable-unsafe-swiftshader` for any WebGL, and screenshots land in
`/tmp/elalou-shots/`. The Claude Preview tool's screenshots cannot capture
scrolled state on this site (GSAP ScrollSmoother uses transform-based scrolling),
so prefer puppeteer-core scripts run via Bash for visual checks.

## Architecture

**Route = page.** Each route is a folder under `src/app/<route>/page.js`. The
home page is `src/app/page.js`. Many template routes (shop, cart, careers, team,
pricing-plan, faq, home-02…home-10, etc.) still exist but are **not linked from
the nav** — they're leftover template pages, safe to ignore or delete.

**Home page = the template's "home-04" layout.** `src/app/page.js` renders
`Hero4 → Features3 → About4 → Services4 → Funfact2 → PricingPlan2 →
Testimonials4 → Blogs4 → Footer4` (the template's Portfolios4 section was
intentionally dropped). Each page wraps its content in
`#smooth-wrapper > #smooth-content` for GSAP ScrollSmoother and renders two
`<Header>` instances (one absolute, one `isStickyHeader`).

**Content lives in JSON, not JSX.** Editable data is in `public/fakedata/*.json`
(`nav-items.json`, `services.json`, `testimonials.json`, etc.) and read through
`src/libs/get*.js` helpers. Per-section headings and body copy are hardcoded in
the section components under `src/components/sections/**`.

**Navigation is data-driven and was rewritten.** `src/components/layout/header/`
holds `Header.js`, `Navbar.js` (desktop) and `MobileNavbar.js` + `MobileMenu.js`
(mobile). `Navbar.js`/`MobileNavbar.js` were rewritten to render **generically**
from `nav-items.json` (the stock versions hard-coded fixed menu slots by array
index). An item with a `submenu` becomes a dropdown; otherwise a plain link.
Current nav: Home, About, Services, Blog, Contact — all plain links. The header
is **always-sticky** past 300px scroll via `src/hooks/useIsSticky.js`.

**Styling.** `src/app/globals.scss` `@forward`s the SCSS partials in
`src/app/assets/sass/**`; precompiled vendor CSS is in `src/app/assets/css/**`.
Theme values are CSS/SCSS variables (`--tj-color-*`), generated from the Sass map in `src/app/assets/sass/utilities/_colors.scss` — the single source of truth for the palette. The official Elalou palette: **Deep Navy** `#0B1F3B` (`theme.primary` + `theme.dark`) is the dominant brand colour — nav, headings (`heading.primary`), buttons, links, and the immersive dark sections (hero, footer); **Soft White** `#F7F8FA` (`theme.bg`) is the page/section background; **Cool Grey** `#D7DCE3` (`border.1`) handles cards, dividers, and form borders; **Charcoal** `#111111` is the text/foundation ink; and **Muted Trade Green** `#4C6B5A` (`theme.accent`) is a sparse accent — button icon-circles + hover state, hero highlights (eyebrow icon/glow), and the progress ring. (A later all-grey "ink & navy" variant was tried and reverted — the navy + green palette is the chosen look.)
Edit the relevant `_*.scss` partial rather than adding inline styles.

**Imports use the `@/*` alias** → `src/*` (see `jsconfig.json`).

## Customizations already made (deviations from stock Bexon)

Know these so you don't "fix" them back to the template default:

- **Logo:** real Elalou artwork in `public/images/logos/elalou-h-{dark,light}.png`
  (horizontal lockups) and `elalou-stacked-{dark,light}.png`; favicon is
  `src/app/icon.png`. Wired into `Logo.js` and the footers.
- **Removed:** Portfolio page/route + its nav entry; the About and Services nav
  dropdowns; the header **search** bar; the **desktop** offcanvas hamburger
  (its `ContactMenu.js` is now orphaned). The mobile hamburger is kept.
- **Inner-page header banner removed.** `HeroInner` (the `.tj-page-header` title
  banner) was removed from About, Services, Blog (`BlogMain.js`) and Contact —
  those pages start straight into content after `<HeaderSpace />`. The home page
  never had it.
- **Contact page:** Google map removed; the `Contact3` form is full-width.
- Demo contact details replaced with Elalou's across Header/Footer/Contact/Mobile.

## Notes / known placeholders (pre-launch TODO)

- Many images are the template's gray "WxH" placeholders (hero, about, blog
  thumbnails, avatars) — real photography still needed.
- Contact details (`+254 700 000 000`, `info@elalou.co.ke`, Westlands Nairobi)
  and the stat figures are **invented placeholders**.
- Blog posts are still Bexon demo content.
