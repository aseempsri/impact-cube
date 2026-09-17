# Impact Cube — Website (Concept Build)

Static HTML/CSS/JS, 12 pages, no build step or framework required.

## To preview locally
Open `index.html` directly in a browser, or serve the folder so relative
links resolve exactly as they will in production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

## Structure
```
index.html                 Home
the-cube.html               "The Cube" — brand philosophy + interactive cube
face-strategy.html          Face 01 — Strategy
face-systems.html           Face 02 — Systems
face-technology.html        Face 03 — Technology
face-insights.html          Face 04 — Insights
face-sustainability.html    Face 05 — Sustainability
face-communication.html     Face 06 — Communication
how-we-work.html            Diagnose · Design · Deliver + engagement models
our-work.html                Case studies (placeholder content)
about.html                  Org narrative + team (placeholder team)
contact.html                Contact form (front-end only, no backend wired)
assets/styles.css           All shared styles, design tokens at the top (:root)
assets/main.js              Nav toggle + interactive 3D cube logic
```

Every page shares the same header/footer markup and links to the same
`assets/styles.css` and `assets/main.js` — there is no templating layer,
so shared markup (nav, footer) was generated from a single source and is
duplicated per file. If you introduce a framework/CMS, that shared markup
is the obvious first thing to componentise.

## Design tokens
All colours, fonts and spacing constants live at the top of
`assets/styles.css` under `:root`. Two colour tiers per face:
- `--c-*` (not directly used in CSS, see inline `--accent`) — the bright
  brand hex per face, used for borders, backgrounds and tints.
- Each face also has a darker "ink" hex (set inline per component as
  `--ink`) used anywhere the colour appears as *text*, so contrast stays
  at or above WCAG AA (4.5:1) — the bright hexes alone were not high
  enough contrast for text/small UI on white.

Fonts are loaded from Google Fonts via `@import` at the top of
`styles.css` (Source Serif 4 for headings, Inter for body/UI). Swap to
self-hosted fonts there if preferred.

## Interactive cube
Home hero and the top of The Cube page both use a real CSS 3D cube
(`.cube-stage` / `.cube3d` / `.cube-face` in styles.css, logic in
main.js under "Interactive 3D cube module"). It:
- rotates to the selected face on click,
- idle-auto-rotates until the user interacts with it (then stops),
- respects `prefers-reduced-motion` (no animation for users who set it),
- hides below 680px width, where the button row + detail panel below it
  (already keyboard/touch accessible) serves as the fallback experience.

## Known gaps / not yet built
- **Contact form** posts to `#` — no backend/CRM wired up yet.
- **Health Check** is a homepage teaser only; the full interactive
  assessment tool is flagged as Phase 2 in the concept note and isn't built.
- **Solutions** and **Insights & Resources** sections (also Phase 2 per
  the concept note) are not built as pages.
- All placeholder images/team/case-study content is catalogued in
  `Impact_Cube_Website_Placeholder_Checklist.docx` (shared separately) —
  page-by-page, with what each placeholder is and what to replace it with.
