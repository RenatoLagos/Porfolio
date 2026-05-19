# MARATHON DESIGN SYSTEM

> **Dense · Tactical · Technical · Layered**
> Aesthetic: dark tactical HUD, telemetry, operations console.
> Inspiration: military/aerospace consoles, terminal interfaces, data dashboards, cyberpunk UIs.

This document is the canonical reference for the Marathon design language. Any new page, component, or refactor MUST respect these rules. No exceptions, no "minor tweaks", no "but it looks nice with rounded corners". The whole point of a design system is consistency.

---

## 1. CORE PHILOSOPHY

- **Information density over whitespace.** This is not a marketing landing page. Every pixel should communicate state, data, or affordance.
- **Hierarchy through typography + color, NOT size.** A 24px display number sits beside a 9px mono label. The size delta IS the hierarchy.
- **Hard edges, thin lines.** Radii are minimal (2–6px). Borders are subtle (8% opacity) until you hover (22%).
- **Monospace is structural.** All metadata, labels, IDs, timestamps, and chrome use IBM Plex Mono. Body content uses Inter. Headlines use Space Grotesk.
- **Color is signal, not decoration.** Accents (lime, teal, cyan, red) carry meaning — they're not "brand colors", they're status indicators.
- **The grid is visible.** The body has a 40px × 40px grid background. Embrace it; don't hide it.

---

## 2. DESIGN TOKENS

### 2.1 Fonts (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

| Token             | Family                     | Purpose                                   |
| ----------------- | -------------------------- | ----------------------------------------- |
| `--font-ui`       | Inter                      | Body text, paragraphs, UI copy            |
| `--font-mono`     | IBM Plex Mono              | Labels, IDs, metadata, badges, chrome     |
| `--font-display`  | Space Grotesk              | Headlines, KPI values, section titles     |

### 2.2 Surfaces (dark, layered)

```css
--bg-0: #050607;       /* page background — almost black */
--bg-1: #0a0d0f;
--bg-2: #101417;
--surface-0: #0d1114;  /* default panel */
--surface-1: #13191d;  /* raised panel / modal */
--surface-2: #182126;  /* input / button hover */
--surface-3: #1e2a30;  /* highest contrast surface */
```

### 2.3 Text

```css
--text-0: #f3f7f6;     /* primary — headlines, values */
--text-1: #c8d2cf;     /* body text */
--text-2: #8b9795;     /* secondary / dimmed */
--text-3: #64706d;     /* tertiary / labels, captions */
```

### 2.4 Lines

```css
--line-subtle: rgba(207, 255, 240, 0.08);  /* default borders */
--line-strong: rgba(207, 255, 240, 0.22);  /* hover / emphasized borders */
```

### 2.5 Accents (semantic — use with intent)

| Token              | Hex       | Semantic meaning                                         |
| ------------------ | --------- | -------------------------------------------------------- |
| `--accent-lime`    | `#d7ff3f` | Primary action, "active", positive emphasis              |
| `--accent-green`   | `#7bff6a` | Success, completed, healthy                              |
| `--accent-teal`    | `#00f0c8` | Focus state, progress fill, info                         |
| `--accent-cyan`    | `#49d8ff` | Secondary info, links, neutral signal                    |
| `--accent-magenta` | `#ff4fd8` | Special / exceptional state                              |
| `--accent-red`     | `#ff5a5a` | Danger, error, destructive action                        |
| `--accent-orange`  | `#ff8a3d` | Warning, attention, in-progress alert                    |

**Rule:** never invent new accent colors. If a status doesn't fit one of these seven, you're inventing a state that probably shouldn't exist.

### 2.6 Spacing & Radii

```css
--sp-1: 4px;   --sp-2: 8px;   --sp-3: 12px;  --sp-4: 16px;
--sp-5: 20px;  --sp-6: 24px;  --sp-8: 32px;

--r-sm: 2px;   --r-md: 4px;   --r-lg: 6px;
```

No `border-radius: 12px`. No `border-radius: 50%` except on intentionally circular controls (avatars, check buttons).

### 2.7 Motion

```css
--ease-sharp: cubic-bezier(0.25, 0.1, 0.25, 1);
--dur-fast: 120ms;   /* hover, micro-interactions */
--dur-med:  200ms;   /* panel reveal, modal */
--dur-slow: 320ms;   /* full transitions */
```

Animations are **sharp and brief**. No bouncy easing. No 500ms fades. This is a console, not a slideshow.

---

## 3. GLOBAL CHROME

### 3.1 Body background (the visible grid)

```css
body {
  font-family: var(--font-ui);
  background: var(--bg-0);
  color: var(--text-0);
  min-height: 100dvh;
  -webkit-font-smoothing: antialiased;
  background-image:
    linear-gradient(var(--line-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--line-subtle) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

The grid IS the brand. Don't remove it. Don't soften it.

### 3.2 Scrollbar

Thin (4px), dark track, subtle thumb. Never browser-default chunky scrollbars.

```css
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: var(--bg-0); }
::-webkit-scrollbar-thumb { background: var(--surface-3); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-3); }
```

### 3.3 Selection

```css
::selection { background: rgba(215, 255, 63, 0.2); color: var(--text-0); }
```

---

## 4. COMPONENTS

All component classes are prefixed `m-` (for **m**arathon). Never reuse the prefix for anything else.

### 4.1 Navigation `.m-nav`

- Sticky top, `surface-0`, 1px strong bottom border.
- Pseudo-element top-right: `SYS::NAV` in 9px mono, `text-3`. This is the telemetry-label motif applied everywhere.
- Title: Space Grotesk 16px, tight letter-spacing (`-0.02em`).
- Links: mono 11px, uppercase, letter-spacing `0.06em`, `text-3` → hover `accent-teal`.

### 4.2 Panels `.m-panel`

```
┌─ M-PANEL ──────────────────────────────┐
│ id  ID::SECTION                        │
│                                        │
│  content                               │
│                                        │
└────────────────────────────────────────┘
```

- `surface-0` background, `line-subtle` border, hover → `line-strong`.
- Optional left accent bar: `.m-panel-accent-{lime|teal|cyan|green|red|orange|magenta}` adds a 2px colored left border.
- Optional `.m-panel-id` element: mono 9px, uppercase, `text-3` — like a hardware ID tag on the panel.

### 4.3 Stats / KPI readouts `.m-stat`

```
┌────────────┐
│    1,247   │  ← Space Grotesk 24px / 700
│  REQUESTS  │  ← Mono 10px / uppercase / text-3
└────────────┘
```

- Display value: `font-display`, 24px, weight 700.
- Label: `font-mono`, 10px, uppercase, letter-spacing `0.08em`, `text-3`.
- The size contrast (24 ↔ 10) is the entire hierarchy. Don't soften it.

### 4.4 Buttons `.m-btn`

| Variant            | Look                                                     |
| ------------------ | -------------------------------------------------------- |
| `.m-btn`           | Transparent, `line-strong` border, mono 11px uppercase   |
| `.m-btn-primary`   | Lime fill, black text — primary action                   |
| `.m-btn-danger`    | Red border + red text, hover → translucent red bg        |
| `.m-btn-sm`        | Compact (4px × 10px, 10px font)                          |

- Active state: `transform: scale(0.97)`. Subtle press feedback.
- NEVER use buttons with rounded pill shapes. Radius is `--r-sm` (2px).

### 4.5 Filters / Chips `.m-filter`

Mono 11px uppercase. `surface-1` background, transparent border. Active = lime text + lime border + 6% lime bg fill.

### 4.6 Inputs `.m-input`, `.m-select`

- `surface-2` background, `line-subtle` border, Inter 13px.
- Focus border → `accent-teal`.
- Placeholder → `text-3`.

### 4.7 Modal `.m-modal` / `.m-modal-overlay`

- Overlay: full-screen `rgba(5, 6, 7, 0.85)`.
- Modal slides from bottom (`align-items: flex-end`), rounded top corners only (`r-lg r-lg 0 0`).
- Max width 600px, max-height 80dvh.

### 4.8 Badges `.m-badge`

Mono 9px, uppercase, letter-spacing `0.08em`. Variants per accent color (`m-badge-lime`, `m-badge-teal`, etc.). Use them like status tags: `ACTIVE`, `DRAFT`, `ARCHIVED`, `LIVE`.

### 4.9 Toast `.m-toast`

Right-aligned, top-anchored. Left-accent bar in orange (default) or red (urgent). Slides in 200ms, fades out at 8s.

### 4.10 Sidebar `.m-sidebar`

Left drawer, 280px wide, slides from `-280px`. Backdrop `rgba(5,6,7,0.7)`.

### 4.11 Section `.m-section` + `.m-section-header` + `.m-section-title`

Sections have an internal padding of `12px 16px`. Section titles are Space Grotesk 13px, uppercase, letter-spacing `0.04em`. Always uppercase. Always.

### 4.12 Meta strip `.m-meta-strip`

Mono 10px, uppercase, `text-3`. Used to label rows of data with stuff like `LAST UPDATED · 2026-05-15 · v0.4.2`. This is the "telemetry above the data" pattern — use it generously.

### 4.13 Progress `.m-progress` / `.m-progress-fill`

2px tall. That's it. Don't make it 8px. The whole point is to be a thin telemetry line, not a "loading bar".

### 4.14 Check button `.m-check`

24×24 circle, 2px border. Done state = filled green with black checkmark. The ONLY place a `border-radius: 50%` is allowed by default.

### 4.15 Empty / Loading states

- `.m-empty`: mono 12px, `text-3`, centered.
- `.m-loading`: mono 11px uppercase + 12px spinning ring in `accent-teal`.

---

## 5. TYPOGRAPHY RULES (the most-broken rules)

1. **All labels are MONO + UPPERCASE + letter-spaced.** No exceptions. `text-transform: uppercase; letter-spacing: 0.08em;`
2. **Body copy uses Inter.** Never mono for paragraph text. Mono is for chrome, labels, IDs, and code.
3. **Headlines use Space Grotesk** with negative letter-spacing (`-0.02em`) — tight, technical, modern.
4. **Numbers in stats / KPIs use Space Grotesk 700.** They should look like instrument readouts, not body copy.
5. **Never use a font-size you can't justify.** Stick to: 9, 10, 11, 12, 13, 14, 16, 24. If you want something between 16 and 24, the answer is no.

---

## 6. THE "SYS::" / "ID::" / "MOD::" MOTIF

This is the signature of the system. Every major surface has a small mono tag in the top-right corner — like a hardware label on a console.

```
┌─ PANEL ──────────────── SYS::NAV ─┐
│                                   │
│   ...content...                   │
│                                   │
└───────────────────────────────────┘
```

Examples already in use across the system:

- `SYS::NAV` — top of navigation
- `MOD::TRAINING` — training section
- `MOD::TO-DO` — task module
- `MOD::IDEAS` — ideas module
- `ID::FIN-001` — could label a panel ID

When you create a new section, **give it a code**. It cements the "console" feeling.

```css
.m-section::before {
  content: 'MOD::PROJECTS';
  position: absolute; top: 4px; right: 12px;
  font-family: var(--font-mono); font-size: 9px;
  color: var(--text-3); letter-spacing: 0.1em;
}
```

---

## 7. PORTFOLIO-SPECIFIC TRANSLATION

This portfolio is Astro-based and primarily a resume/portfolio site, not an internal app. Apply Marathon faithfully but adapt the *content density* to portfolio rhythm:

| Portfolio surface             | Marathon mapping                                                                         |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| Hero / above-the-fold         | Large Space Grotesk heading + mono `ID::HERO-001` tag in corner + grid background        |
| About / bio block             | `.m-panel` with `--accent-lime` left bar + `m-meta-strip` above with role/location/year  |
| Skills cluster                | Row of `.m-badge` (each skill is a badge — `m-badge-cyan`, `m-badge-teal`, etc.)         |
| Experience timeline           | Stack of `.m-panel` cards, each with `m-panel-id` (`ROLE::ACME-CORP / 2023-2025`)        |
| Project cards                 | `.m-panel` with accent border + `.m-badge` for tech stack + `.m-btn-sm` for "VIEW" link  |
| Stats (years, projects, etc.) | `.m-stat` grid                                                                           |
| Contact form                  | `.m-input` + `.m-btn-primary` with text `TRANSMIT` or `SEND::MSG`                        |
| Footer                        | `m-meta-strip` style: mono, uppercase, `text-3`                                          |

**Rule of thumb for content sites:** Marathon thrives on metadata. Above every block, add a mono strip — `// SECTION 03 · WORK · 2018–PRESENT` — and the page instantly feels like the system. Without it, it just feels like a generic dark theme.

---

## 8. WHAT NEVER TO DO

- ❌ Rounded card corners larger than 6px.
- ❌ Drop shadows. Marathon has zero shadows. Depth comes from surfaces and borders, not blur.
- ❌ Gradients on buttons or text (except the `::selection` highlight, which is lime at 20%).
- ❌ Icon-only buttons without a mono label nearby.
- ❌ Mixing fonts within the same element ("Inter for the word, mono for the number" — no, pick one).
- ❌ Centering long-form text. Left-aligned, monospace-friendly column widths (max ~72ch for body).
- ❌ Light mode. There is no light mode. Don't add one. The grid + accents only work on near-black.
- ❌ Inventing accent colors outside the seven defined.
- ❌ Animating layout (height/width). Animate `opacity` and `transform` only.

---

## 9. QUICK COPY-PASTE STARTER

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio · Marathon</title>
  <link rel="stylesheet" href="/styles/marathon-tokens.css" />
  <link rel="stylesheet" href="/styles/marathon-components.css" />
</head>
<body>
  <nav class="m-nav">
    <span class="m-nav-title">RENATO LAGOS</span>
    <div class="m-nav-links">
      <a href="#work">WORK</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  </nav>

  <main class="m-section">
    <div class="m-meta-strip">// SECTION 01 · OVERVIEW · v1.0</div>

    <div class="m-panel m-panel-accent-lime">
      <div class="m-panel-id">ID::HERO-001</div>
      <h1 class="m-display" style="font-size:48px; letter-spacing:-0.02em;">
        Software Engineer
      </h1>
      <p style="color: var(--text-1); margin-top: 12px;">
        Building tactical interfaces for systems that matter.
      </p>
    </div>

    <div class="m-grid m-grid-auto" style="margin-top: 16px;">
      <div class="m-stat">
        <div class="m-stat-value m-lime">8+</div>
        <div class="m-stat-label">YEARS</div>
      </div>
      <div class="m-stat">
        <div class="m-stat-value m-teal">42</div>
        <div class="m-stat-label">PROJECTS</div>
      </div>
      <div class="m-stat">
        <div class="m-stat-value m-cyan">12</div>
        <div class="m-stat-label">CLIENTS</div>
      </div>
    </div>
  </main>
</body>
</html>
```

---

## 10. WHEN IN DOUBT

Read this document again. If your instinct says "let me soften this corner / add a shadow / pick a friendlier color", **don't**. Marathon's identity comes from restraint and consistency. The discipline IS the design.

> *"This is not a website. It's a console."*
