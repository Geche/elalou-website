---
name: placeholder-audit
description: Scan the Elalou site for leftover pre-launch placeholders — invented contact details, gray WxH placeholder images, and Bexon demo blog/team content — and report everything still to be replaced before launch. Use when the user asks what's left before launch, to audit placeholders, or runs /placeholder-audit.
disable-model-invocation: true
---

# Placeholder Audit

Produce a pre-launch checklist of every placeholder still in the Elalou East
Africa site. This is read-only reporting — do not edit files unless the user
asks you to fix something afterward.

## Run these scans

From the project root:

```bash
# 1. Invented contact details (replace with real Elalou contact info)
grep -rn '700 000 000\|info@elalou\|Westlands' src public 2>/dev/null

# 2. Gray "WxH" placeholder images and generic template image refs
grep -rniE 'placeholder|/images/(hero|about|blog|team|portfolio)/' public/fakedata src/components 2>/dev/null

# 3. Bexon / Theme Junction demo copy still in place
grep -rniE 'lorem|ipsum|theme.?junction|bexon|demo|dummy|john doe|jane' src public/fakedata 2>/dev/null

# 4. Stat / funfact figures (often invented placeholders)
grep -rn 'data-count\|odometer\|counter' src/components/sections/funfacts 2>/dev/null
```

Also open `public/fakedata/blogs.json`, `team-members.json`, and
`testimonials.json` and judge whether the entries are still template demo
content or real Elalou material.

## Report format

Group findings into a checklist the user can work through:

- **Contact details** — files/lines still showing the placeholder phone, email,
  or address.
- **Imagery** — components/JSON still pointing at gray `WxH` placeholders; list
  the image slots that need real photography.
- **Copy & data** — sections, blog posts, team, testimonials still carrying
  Bexon demo content.
- **Figures** — stat/funfact numbers that look invented.

End with a count of outstanding items. If a category is clean, say so.
