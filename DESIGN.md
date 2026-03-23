# Design System — mgsa

## Product Context
- **What this is:** Personal portfolio for a Technical Program Manager / founder working in robotics, hardware, and AI.
- **Who it's for:** Recruiters, collaborators, and potential co-founders in the deep-tech and hardware space. Audience is technical and discerning.
- **Space/industry:** Hardware engineering, robotics, AI — personal portfolio category.
- **Project type:** Marketing site / personal portfolio.

## Aesthetic Direction
- **Direction:** Industrial/Utilitarian with French modernist influence.
- **Decoration level:** Minimal — typography and whitespace do all the work. No icon grids, no background patterns, no gradients, no illustrations.
- **Mood:** Precision instrument, not tech startup. Considered and deliberate. The warmth of the palette humanizes the technical subject matter without softening the engineering credibility.
- **Competitive position:** Most hardware/robotics portfolios use dark themes with blue/teal accents and generic layouts. mgsa differentiates with a warm off-white background, a bold red accent, and pure typographic hierarchy.

## Typography
- **Display/Hero:** Space Grotesk 600 — technically precise, contemporary, distinctive without being decorative.
- **Section heads:** Space Grotesk 600, 20px — same weight, reduced scale, maintaining visual family.
- **Body:** Space Grotesk 400, 16px — readable, on-brand, consistent with display font.
- **UI labels/tags:** Space Grotesk 500, 12px — uppercase, 0.06em tracking. Used for tag text, metadata, section identifiers.
- **Terminal/code:** JetBrains Mono 400, 13px — authentic terminal feel; pairs with the hero animation.
- **Loading:** Self-hosted via `@fontsource/space-grotesk` and `@fontsource/jetbrains-mono` (already in package.json).
- **Type scale (px):** 12 · 13 · 14 · 16 · 20 · 24 · 32 · 48 · 56
- **Letter spacing:** Hero/display: -0.02em · Section heads: -0.01em · Body: 0 · Labels: 0.06em
- **Line height:** Hero: 1.05 · Body: 1.6 · UI: 1.4

## Color
- **Approach:** Restrained — one accent, warm neutrals. Color is rare and meaningful.
- **Background:** `#F7F6F3` — warm off-white (distinctive in this space; reads as considered, not clinical).
- **Text:** `#1C1C1A` — near-black with warm undertone. Avoids harsh pure black.
- **Muted:** `#6B6B67` — warm mid-gray for secondary text, labels, metadata.
- **Accent:** `#C41230` — French red. Bold, memorable, confident. Used sparingly: links on hover, the terminal cursor, active interactive states.
- **Border:** `#E5E4E0` — warm hairline. Separators and card outlines.
- **Surface:** `#EFEDE9` — one step darker than bg; used for preview bars, inline code backgrounds.
- **Semantic colors:**
  - Success: `#2D6A4F` (forest green — warm-toned to not clash)
  - Warning: `#B7791F` (amber)
  - Error: `#C41230` (same as accent — intentional; red is error in system context)
  - Info: `#6B6B67` (muted — informational states are quiet)
- **Dark mode strategy:** Invert warmly. Desaturate surfaces slightly, keep accent unchanged.
  - bg: `#1A1917` · text: `#F0EFE9` · muted: `#8A8A85` · accent: `#C41230` · border: `#2E2C2A` · surface: `#232220`

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous whitespace is part of the aesthetic.
- **Scale:**
  | Token | px  |
  |-------|-----|
  | xs    | 4   |
  | sm    | 8   |
  | md    | 16  |
  | lg    | 24  |
  | xl    | 32  |
  | 2xl   | 48  |
  | 3xl   | 64  |
  | 4xl   | 96  |

## Layout
- **Approach:** Grid-disciplined. Single column always.
- **Max content width:** 672px (42rem). Tight — this is a reading width, not a showcase width.
- **Alignment:** Left-aligned. Centered text is a slop pattern; avoid it.
- **Grid:** N/A — single column layout. No multi-column layouts on the main pages.
- **Border radius:**
  | Token | px       | Used for            |
  |-------|----------|---------------------|
  | sm    | 2px      | Focus rings, subtle rounding |
  | md    | 4px      | Cards, inputs, buttons |
  | lg    | 6px      | Modals, larger containers |
  | full  | 9999px   | Tags / pill badges only |

## Motion
- **Approach:** Minimal-functional. Every transition aids comprehension or confirms interaction. No decorative animation.
- **Principle:** The terminal typing animation in the hero earns its place — it sets the product's personality immediately. All other motion should be invisible when working and noticeable only when absent.
- **Easing:** enter → `ease-out` (cubic-bezier(0,0,0.2,1)) · exit → `ease-in` (cubic-bezier(0.4,0,1,1)) · move → `ease-in-out`
- **Duration:**
  | Name      | ms       | Used for                      |
  |-----------|----------|-------------------------------|
  | hover     | 150ms    | Color, border, opacity changes |
  | entrance  | 200ms    | Element fade-in after terminal |
  | cursor    | 1100ms   | Terminal cursor blink (step-end) |
- **`prefers-reduced-motion`:** Skip all animation; show final state immediately. Already implemented in Hero.

## Design Risks (intentional departures from category)
1. **Warm background** — Off-white instead of white or dark. Nobody in hardware/robotics does this. It reads as artisanal and human. Do not "fix" this to pure white.
2. **Red accent** — Hardware portfolios universally use blue or teal. The red is a deliberate identity choice. Do not change the accent to blue on the grounds that "red means error."
3. **Type-only decoration** — No icons, no illustrations, no feature grids. The typography hierarchy IS the design. If you're tempted to add a decorative element, write better copy instead.

## Decisions Log
| Date       | Decision                                  | Rationale |
|------------|-------------------------------------------|-----------|
| 2026-03-17 | Initial design system created             | Created by /design-consultation based on codebase analysis and competitive research in the hardware/robotics portfolio space. |
| 2026-03-17 | Retained existing Space Grotesk + JetBrains Mono | Both were already in use and are strong choices. No change needed. |
| 2026-03-17 | Retained warm palette (#F7F6F3, #C41230)  | Distinctive in the category. Competitive advantage, not a mistake. |
| 2026-03-17 | Removed header navigation                 | User decision — socials and About link moved to footer. Cleaner, less chrome. |
