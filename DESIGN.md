---
version: alpha
name: Dropbox
description: "A cloud storage and collaboration platform with a clean, minimalist canvas anchored in Dropbox blue (#0061FF) on predominantly white surfaces with cool gray accents. The interface prioritizes file-and-folder clarity: simple list views, thumbnail previews, and a sharing model that feels trustworthy and straightforward. Typography uses Sharp Grotesk (or system sans) with strong weight contrast between headings and body. Dropbox's visual language shifted toward creative-professional as they repositioned from pure storage to collaboration — marketing now uses bold typography, creative campaign imagery, and the Dropbox Sans custom font at expressive display sizes."

colors:
  primary: "#0061FF"
  on-primary: "#ffffff"
  primary-hover: "#0052D9"
  ink: "#1E1919"
  ink-muted: "#637282"
  canvas: "#ffffff"
  surface-1: "#F7F7F7"
  surface-2: "#EFEFEF"
  border: "#E2E2E2"
  folder-color: "#0061FF"
  success: "#28A745"
  danger: "#DC3545"

typography:
  display:
    fontFamily: "Dropbox Sans, Sharp Grotesk, -apple-system, sans-serif"
    fontSize: 48px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.03em
  body:
    fontFamily: "Atlas Grotesk, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

spacing:
  base: 8px
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96]

radius:
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

shadows:
  card: "0 1px 4px rgba(0,0,0,0.08)"
  elevated: "0 4px 16px rgba(0,0,0,0.1)"

motion:
  duration-fast: 100ms
  duration-base: 200ms
  easing: cubic-bezier(0.4, 0, 0.2, 1)
---

## 1. Visual Theme & Atmosphere
Dropbox started as pure utility and evolved into a creative platform. The file browser is clean and white — list rows with file type icons, shared indicators, and modified dates. Blue (#0061FF) appears on folder icons, primary actions, and navigation active states. The product never gets in the way: it's ambient, accessible, and trusted. The marketing brand is more expressive — bold, tight display type and campaign photography that speaks to creative professionals.

## 2. Color System
Simple and restrained:
- **Blue**: #0061FF — folder icon color, primary buttons, active nav, links
- **Canvas**: Pure white for all file browser surfaces
- **Surfaces**: Very light grays (#F7F7F7 / #EFEFEF) for hover states and panel backgrounds
- **Ink**: #1E1919 — very dark, slightly warm near-black
- **Muted**: #637282 — file metadata, secondary labels
- **File type colors**: Each file type icon (PDF red, image blue, video purple, etc.) uses a standard palette

## 3. Typography
Dropbox Sans (marketing display) — an ultra-heavy, ultra-compressed grotesque used at massive sizes in campaigns. Atlas Grotesk for product UI — clean, neutral, highly legible in file list contexts. The contrast between the expressive marketing type and functional product type mirrors a broader brand evolution.

## 4. Components & Patterns
- **File list row**: File icon (type-colored) + name + size + modified date + shared avatar stack + action menu
- **Grid view**: Thumbnail tiles with filename overlay on hover
- **Folder breadcrumb**: Compact path navigation with arrow separators
- **Share modal**: Access level dropdown (viewer/editor), copy link button, email invite field
- **Left sidebar**: All files / Shared / Recent / Deleted — minimal icon + label nav
- **Upload drop zone**: Full-browser drag target with dashed overlay

## 5. Spacing & Layout
File list: 12px row padding, 1px separator, 100% width. Sidebar: 220px fixed. Content area: flex. Thumbnail grid: 4-column with 16px gap. Modal: 480px wide.

## 6. Motion & Interaction
File upload shows progress ring on file icon. Rename field inline-edits in place. Share modal slides up. Drag-and-drop shows ghost + drop target highlight. File type icon animates on new upload confirmation.

## Rationale

**Blue folder icon as product metaphor** — #0061FF on folder icons is a deliberate callback to the physical file folder as organizational metaphor. The color anchors the product's core organizing concept visually and makes the file browser feel navigable — users find their folders faster when the navigation element has a distinct, consistent color.

**Ultra-compressed display type for marketing** — Dropbox Sans at extreme weights in marketing campaigns is a response to the brand's evolution from utility to creative platform. Where the product interface stays deliberately invisible, the marketing identity compensates with typographic ambition, signaling that Dropbox is now for creative professionals, not just storage.

**White as the universal file browser surface** — The near-pure white product environment lets file type icons (PDF red, image blue, video purple) do the work of content identification. Any surface color would shift the perceived meaning of those type colors. White is the only neutral that lets the file content system work without interference.

**Atlas Grotesk for product, Dropbox Sans for marketing** — Using different typefaces for product and marketing acknowledges that they serve fundamentally different purposes: Atlas Grotesk disappears in file list rows, Dropbox Sans commands attention on billboards. The typographic split mirrors the brand's dual personality.

**Invisible sharing model** — The share modal's simplicity (viewer/editor dropdown, copy link, email field) reflects Dropbox's core trust challenge: sharing must feel safe and controllable, not complex. Every additional field or option in that modal increases abandonment; the minimalist design is a conversion optimization as much as a design philosophy.

## Accessibility

### Contrast Ratios
- **Primary on background** (#0061FF on #ffffff): 5.0:1 — passes AA, fails AAA
- **Text on surface** (#1E1919 on #ffffff): 18.5:1 — passes AA
- **Muted on background** (#637282 on #ffffff): 5.0:1 — passes AA (decorative)

### Minimum Requirements
- **Touch target**: 44×44px minimum for all interactive elements
- **Focus indicator**: #0061FF outline, 2px, 2px offset
- **Focus contrast**: 5.0:1 against #ffffff background

### Motion
- Respects `prefers-reduced-motion`: yes — drag-and-drop ghost transitions, share modal slide-up, and file icon upload animation should be suppressed
- All transitions use `@media (prefers-reduced-motion: reduce)` guard

### Notes
- The Dropbox blue (#0061FF) passes AA at 5.0:1 on white — safe for normal body text and interactive labels, though it falls short of AAA (7:1); avoid relying on it for critical small-print text
- Muted text (#637282) at 5.0:1 passes AA — acceptable for secondary metadata at 14px and above
- File type icons use color alone to differentiate type (PDF red, image blue, video purple) — always accompany with text labels or tooltips for color-blind users
- Hover-reveal action menus (visible only on row hover) must also be reachable and visible via keyboard focus; do not rely solely on mouse hover to expose controls
