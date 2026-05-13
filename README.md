# Indsec — Marketing Site

Next.js (App Router · TypeScript) marketing site for **Indsec Securities &
Finance Limited**, built against the project sitemap and an internal design
system derived from the icicisecurities.com visual language and re-skinned
to Indsec's brand (deep crimson + navy on Mulish).

## Stack

- **Next.js** 14 (App Router, static export friendly)
- **TypeScript** (strict)
- **Plain CSS** with design tokens in `app/globals.css`
- No CSS framework — design system primitives live as utility classes
  (`btn--crimson`, `pillar`, `tabs`, `accordion`, `section`, …)

## Site map

```
/                           Home
/about                      About Us  (anchors: #history, #team)
/lines-of-business          Lines of Business — overview
  /institutional-broking    Institutional Broking
  /family-office            Family Office
  /gift-city                GIFT City / PMS
/research                   Research  (anchor: #reports)
/investor-relations         Investor Relations  (anchor: #disclosures)
/contact                    Contact
```

The top navbar reflects the same hierarchy with dropdowns for every parent
item.

## Design tokens

| Token                    | Value                                |
| ------------------------ | ------------------------------------ |
| Primary crimson          | `#9C1B1F`                            |
| Crimson dark             | `#6E0F12`                            |
| Crimson bright           | `#C42830`                            |
| Cream (footer / accents) | `#FAF1EC`                            |
| Navy                     | `#1B2A5E`                            |
| Body text                | `#353535`                            |
| Font                     | Mulish (400 / 500 / 600 / 700)       |
| Nav height               | `52px`, fixed, brand gradient        |
| Card radius              | `6px`, no shadow, `0.8px` grey border |
| Section H2               | 32 / 38.4 weight 500, black, centered |

Full guideline lives in the parent directory at
`../icici-securities-design-system.md`.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx          Root layout, header + footer + skip link
  globals.css         Design tokens + components
  page.tsx            Home
  about/page.tsx
  lines-of-business/page.tsx
  institutional-broking/page.tsx
  family-office/page.tsx
  gift-city/page.tsx
  research/page.tsx
  investor-relations/page.tsx
  contact/page.tsx
components/
  Header.tsx          Primary nav with hover/keyboard dropdowns
  Footer.tsx          Cream footer, 3-col + legal strip
  Logo.tsx            Inline SVG logo (light/dark modes)
  PageHero.tsx        Page-level navy→crimson hero
  SectionHeading.tsx  H2 + optional rule + lead
  LinesOfBusinessTabs.tsx   Home-page tabs widget
  Accordion.tsx       Reusable accordion (cream header)
```
