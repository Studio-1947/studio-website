---
name: Studio 1947
description: Design & Brand Identity Studio — Local Wisdom for Global Impact
colors:
  signal-red: "#D80000"
  signal-red-deep: "#B30000"
  signal-red-muted: "#AE3C3C"
  signal-red-blush: "#FFEAEA"
  signal-red-pale: "#FFFAFA"
  ink: "#383649"
  amber: "#FF9D3C"
  teal: "#00BCD4"
  surface: "#F9FAFB"
  surface-card: "#F8F9FA"
  border: "#E5E7EB"
  border-hover: "#D1D5DB"
  muted-deep: "#374151"
  muted: "#6B7280"
  success: "#10B981"
  warning: "#F59E0B"
  error: "#EF4444"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.125rem)"
    fontWeight: 500
    lineHeight: 1.625
  label:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(0.75rem, 1vw, 0.875rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  pill: "9999px"
  card: "32px"
  surface: "16px"
  sm: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.signal-red-pale}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "#4a4860"
    textColor: "{colors.signal-red-pale}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.signal-red-pale}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
  button-ghost-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 32px"
---

# Design System: Studio 1947

## 1. Overview

**Creative North Star: "The Red Thread"**

Studio 1947's design system is built around a single irreducible signal: the red thread that connects local knowledge to global consequence. This is not an accent color. It is the organizing logic of the system: structural, directional, sparing. The thread appears where something matters. A call to action, a hover state that transforms a card title, a 2px divider that scales from 48px to full width. Its restraint is the point.

The system operates on a near-white canvas tinted almost imperceptibly warm. Body backgrounds draw from #FFFAFA to #FFEAEA as a fixed gradient: not blank white, not gray. Everything is slightly alive, slightly warm. Primary text is not black but Ink (#383649): a dark slate with a faint purple-warm undertone. Surfaces feel printed, not rendered. Components are designed to feel like physical materials. Buttons are stamps. Cards are slabs. Hover states do not animate to be delightful; they move because something real is about to happen. Motion is concentrated on state changes that carry meaning, delivered at deliberate pace.

This system explicitly rejects: Webflow template friendliness (rounded cards with friendly icons, gradient CTAs, "Modern. Fast. Scalable." copy, testimonial carousels); Linear/Stripe minimalism (immaculate whitespace, single-accent precision that implies design serves a product rather than IS the product); generic agency portfolio patterns (identical case-study card grids, award-badge rows, centered hero stacks); consultant-corporate whitepaper aesthetics (sans-serif earnestness, blue-tinted professionalism, slide-deck information hierarchy).

**Key Characteristics:**
- One dominant signal: Signal Red (#D80000), used where it matters, never decoratively
- Near-white warm canvas: body gradient from #FFFAFA to #FFEAEA, fixed in viewport
- Ink not black: #383649 is the ground color for text and UI elements, warm-shifted
- Flat by default: surfaces rest at the same elevation; interaction lifts
- Variable type at scale: Bricolage Grotesque from 200 to 800 weight, with tight tracked headings and deliberate label uppercase
- Motion as confirmation: 300–700ms ease-out transitions; GSAP power3.out for scroll reveals

## 2. Colors: The Signal Palette

Three primary roles: Signal Red (directive), Ink (ground), Warm Canvas (receptive). The amber secondary and teal accent appear on surfaces that need a second axis of meaning. They are not decorative; they have specific jobs.

### Primary
- **Signal Red** (#D80000): The brand's irreducible signal. Used on hover states, expanding dividers, active CTA text, and wherever the interface is asking for attention or action. Never background-washed. Never used to make something look interesting.
- **Signal Red Deep** (#B30000): The darker value for pressed states and high-contrast contexts where Signal Red at full saturation reads too close to adjacent surfaces.
- **Signal Red Muted** (#AE3C3C): The warmth variant. Appears in the nav scroll halo (`rgba(174, 59, 59, 0.10)`) and in hero sections where full Signal Red would overwhelm the composition. Not a semantic downgrade; a tonal modulation.

### Secondary
- **Amber** (#FF9D3C): Warm attention signal. Used for secondary highlights, tags, and status indicators where Signal Red's urgency would be semantically misread. Warmer and more approachable, but still directive. Not decorative.

### Tertiary
- **Teal** (#00BCD4): Cool counterpoint. Applied on /products/* surfaces, data visualizations, and anywhere a third informational axis is needed. This is the product register's color. On brand-register surfaces, its presence signals that something belongs to a different system.

### Neutral
- **Ink** (#383649): Primary text, button fills, navigation elements, icon strokes. Dark but warm-shifted: not cold, not black. The system's ground.
- **Muted Deep** (#374151): Secondary text; labels and supporting copy that need to read but not compete with Ink.
- **Muted** (#6B7280): Tertiary text, captions, subtext at reduced opacity. Use Muted for elements that support but should not attract attention.
- **Border** (#E5E7EB): 1px structural dividers between surfaces. Hover transitions to Border Hover (#D1D5DB).
- **Surface Card** (#F8F9FA): Service card backgrounds; the faintest step above the warm canvas.
- **Surface** (#F9FAFB): Secondary UI backgrounds; ghost and secondary button fills.
- **Signal Red Pale** (#FFFAFA) to **Signal Red Blush** (#FFEAEA): The body gradient. Fixed to the viewport via `background-attachment: fixed`. Not a component token; the environment every component sits in.

### Named Rules
**The One Thread Rule.** Signal Red (#D80000) occupies no more than 15% of any given screen by area. Its rarity is the mechanism. Used casually, it becomes decoration. Used deliberately, it becomes direction.

**The No Void Rule.** Pure black (#000000) and pure white (#FFFFFF) are not used on surfaces. Ink (#383649) is the darkest value; #FFFAFA is the lightest. Everything exists in warm light.

## 3. Typography

**Primary Font:** Bricolage Grotesque (variable: weight 200–800, optical size 12–96pt)
**Navigation Body Font:** Inter (15px / 500 weight, used inline in desktop nav links only)
**Fallback:** system-ui, sans-serif

**Character:** Bricolage Grotesque carries the full hierarchy as a single family. Its variable weight axes create a 200-weight subtext and 800-weight display that feel related rather than clashing. The tight-tracked uppercase label treatment creates a second typographic register without introducing a second typeface. The variable optical size axis means that at large display sizes, the type remains optically balanced without manual adjustment.

### Hierarchy
- **Display** (800 weight, clamp(2.25rem, 5vw, 3.5rem), line-height 1.1, tracking -0.02em): Hero headings only. Large enough to anchor a section; tight enough to feel architectural rather than decorative. Never used inside card components.
- **Headline** (700 weight, clamp(1.875rem, 4vw, 3rem), line-height 1.1, tracking -0.02em): Section headings, primary page titles. Shares tight tracking with Display; reduced scale.
- **Title** (700 weight, clamp(1.5rem, 3vw, 2.25rem), line-height 1.375, tracking -0.02em): Sub-section headings, feature card titles in the upper range of the content hierarchy.
- **Title Small** (600 weight, clamp(1.25rem, 2vw, 1.5rem), line-height 1.375): In-card headings, team names, secondary titles.
- **Body** (500 weight, clamp(1rem, 1.5vw, 1.125rem), line-height 1.625): Primary prose. Medium weight rather than regular gives body copy presence without heaviness. Cap line length at 65–75ch.
- **Subtext** (400 weight, clamp(0.875rem, 1.2vw, 1rem), line-height 1.625, opacity 70%): Supporting descriptions, captions, secondary card text. The opacity reduction does the hierarchy work; weight and size changes alone are not enough at small scales.
- **Label** (600 weight, clamp(0.75rem, 1vw, 0.875rem), uppercase, tracking 0.1em, line-height 1): Category tags, navigation labels, status chips. The uppercase + wide tracking makes Label optically distinct from Subtext at similar sizes.

### Named Rules
**The No Gradient Text Rule.** `background-clip: text` with a gradient value is prohibited. All text uses a single solid color. Hierarchy is communicated through scale, weight, and opacity. Gradient text exists in the codebase (the `gradient` prop on `<Typography>`); do not use it.

**The Three-Tracking Rule.** Headings always track at -0.02em. Labels always track at 0.1em in uppercase. Body and subtext have no explicit tracking. Three states, used consistently; no fourth tracking value is introduced.

## 4. Elevation

This system is flat by default and expressively lifted on interaction. Stillness signals groundedness; lift signals invitation.

At rest, surfaces are separated by tonal difference and border: service cards sit on #F8F9FA with a 1px #E5E7EB border; vertical cards sit on white with a 1px #F3F4F6 border. Nothing casts a shadow at rest. When the user interacts or the page enters a scroll-triggered state, elevation arrives as confirmation, not as ambient decoration.

### Shadow Vocabulary
- **Nav Halo** (`0 0 14px 3px rgba(174, 59, 59, 0.10)`): Appears on the navigation bar's scrolled state. An ambient glow using Signal Red Muted at 10% opacity. Marks the nav as the highest-elevation fixed surface in the system. Red-tinted, barely perceptible: it should feel like warmth from above, not a design choice.
- **Mobile Nav Drop** (`0 8px 24px rgba(174, 59, 59, 0.10)`): Directional shadow for the mobile menu panel. Same hue as the Nav Halo, directional rather than ambient.
- **Portrait Card Lift** (Tailwind shadow-xl: `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)`): The highest resting elevation in the system. Portrait cards of people are given the system's most expressive lift because photographs of people deserve presence.
- **Content Card Hover** (Tailwind shadow-lg: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`): Applied on hover to vertical and blog cards, combined with a -4px Y translate. Shadow and movement arrive simultaneously.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. Shadows appear only as responses to state: hover, scroll position, or active interaction. A component that is always lifted has surrendered its ability to lift.

**The Red Halo Exception.** The only ambient shadow in the system is the navigation's red-tinted halo. It is the single instance of Signal Red used tonally on a structural element. This exception does not extend to cards, modals, dropdowns, or any other surface.

## 5. Components

### Buttons

Buttons are stamps: weighted, precise, cut cleanly into the surface. The pill shape (border-radius 9999px) is the system's only fully rounded form. Everything else uses 32px or 16px corners. The roundness on buttons signals a different material, not a friendlier one.

- **Shape:** Full pill (border-radius: 9999px), 2px solid border on Primary and Outline variants
- **Primary:** Background Ink (#383649), text Signal Red Pale (#FFFAFA), 2px solid Ink border. Padding: 12px / 32px (default size). Hover: background retreats to 90% opacity.
- **Outline:** No fill, Ink border 2px, Ink text. Hover: background fills with Ink, text inverts to Signal Red Pale.
- **Secondary:** Surface (#F9FAFB) background, Ink text. Hover: background at 80% opacity.
- **Ghost:** No border, no background. Ink text at 80% opacity. Hover: Surface background appears; text reaches full opacity.
- **Animate Variant (Primary only):** An arrow icon slides in from the left as the button text translates right on hover. Duration 300ms ease-out. Reserved for hero CTAs and the site's primary conversion actions. Not a default behavior.
- **Loading state:** 16px spinner (2px border, white / transparent top, spin animation) inserted before the button label. Active state: scale-95 on click.

### Cards

Cards are slabs. Their corners are architecturally considered (32px for feature surfaces, 16px for utility surfaces). Borders are structural; they define the slab's edge, not its importance. The card does not justify its existence by being a card.

**Service Card:**
- Background #F8F9FA, 1px #E5E7EB border, 32px radius, 450px fixed height, 32px internal padding
- Image sits behind content at 30% opacity, grayscale, at rest. Hover: color returns, opacity rises to 50%, scale increases to 105% (700ms ease-out). The image is present but doesn't compete until invited.
- A 2px divider line begins at 48px width. On hover it scales to full card width in Signal Red at 50% opacity (700ms ease-out). This is the first explicit Signal Red appearance inside the card.
- Card title transitions to #D60000 on hover (500ms). Title and divider shift together.
- Mouse-tracking glow (`radial-gradient(circle, rgba(214,0,0,0.12), transparent)`, 800px diameter) follows cursor position via GSAP power2.out. Purposeful: attention pulls the color. Not a decorative effect.

**Portrait Card (Team):**
- Aspect ratio 3:4 (mobile) / 4:5 (tablet+), 32px radius, shadow-xl at rest
- Full-bleed image underneath a gradient overlay (`linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)`) covering the bottom 2/3
- Frosted info panel: `backdrop-blur-md`, `background: rgba(0,0,0,0.3)`, `border: 1px solid rgba(255,255,255,0.15)`, 16px radius, 12px inset from card edges. This is the system's single sanctioned use of backdrop-blur.
- Name: 16–18px, 700 weight, white. Role: 12–14px, 700 weight, white at 90%. Bio: 12px, white at 65%, clamped to 2 lines.

**Vertical / Blog / Work Card:**
- White background, 1px #F3F4F6 border, 16px radius, shadow-sm at rest
- Hover: -4px Y translate + shadow-lg (300ms ease-out)
- Aspect-ratio image slot (4:3) at top; image scales to 103% on hover (700ms ease-out)
- Animated accent divider: 1px height, gradient from `accent-color-at-70%` to transparent, originates from left edge. Enters via scaleX 0-to-1 on scroll trigger (GSAP power3.out, 700ms).
- CTA link: 11px, 600 weight, uppercase, tracking 0.12em, Signal Red. Arrow translates +4px on hover (200ms).

### Navigation

- Desktop: Pill-shaped container (border-radius 50px) with backdrop blur and white-tinted background. Ink-colored links at 15px / 500 weight (Inter). Logo SVG rotates continuously at 8-second period.
- Scroll state: border-color, background-color, and Nav Halo shadow appear together (400ms ease-in-out). The nav's visual weight increases as the user moves down the page.
- Active/hover link: transitions to Signal Red. The only persistent-state Signal Red usage in the navigation.
- Mobile: Full-width slide-down panel, links at 18px. Hamburger animates to X (25ms). Mobile Nav Drop shadow appears on panel.

### Typography Component

The `<Typography>` component is the sole gateway for all text rendering. Eight variants map to the hierarchy above. The `gradient` prop (which applies `background-clip: text`) violates the No Gradient Text Rule and must not be used in production.

## 6. Do's and Don'ts

### Do:
- **Do** use Signal Red (#D80000) as a state signal: hover transitions, expanding elements, active links, conversion actions. It is directional, not decorative. Reserve it.
- **Do** use Ink (#383649) for all primary UI elements: button fills, nav text, body copy, borders. Ink is the system's ground state.
- **Do** maintain the warm canvas: place no component on pure white (#FFFFFF) or untinted gray without pulling the background toward the brand hue. The minimum tint is #FFFAFA.
- **Do** let images start in grayscale at reduced opacity and reveal color on hover. This is the system's primary interaction metaphor: depth is revealed through attention, not announced.
- **Do** vary card sizes and internal structures. Service cards are 450px fixed height, portrait cards are aspect-ratio constrained, vertical cards are fluid. Three card formats coexist; they are not interchangeable.
- **Do** animate with deliberate easing: power3.out and power2.out for scroll reveals (GSAP); ease-out for state transitions (CSS). Duration range is 300–700ms. Slower is usually better.
- **Do** cap body prose at 65–75ch line length. Bricolage Grotesque reads well at width; lines longer than 75ch lose rhythm.
- **Do** apply product-register rules on /products/* routes: clearer hierarchy, reduced decorative intensity, task-first layout. The product pages serve a different audience mode.

### Don't:
- **Don't** build Webflow-template patterns: rounded cards with icon + heading + body text repeated in a uniform grid, gradient CTA buttons, testimonial carousels with star ratings. Studio 1947 is not a vendor.
- **Don't** apply Linear/Stripe minimalism: immaculate whitespace as primary aesthetic, single-accent at under 5%, system-font precision. This system requires presence, not restraint.
- **Don't** use `background-clip: text` with a gradient. All text uses a single solid color. If a heading needs emphasis, use weight, size, or Signal Red on a focused element. No exceptions.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on cards, callouts, alerts, or list items. Rewrite with full borders, tinted backgrounds, leading numbers or icons, or nothing.
- **Don't** build identical card grids. Three cards of identical size with identical internal structure means the design problem has not been solved.
- **Don't** use glassmorphism outside the Portrait Card frosted panel. The team card frosted panel is the single sanctioned backdrop-blur instance. Adding it elsewhere makes the exception the rule.
- **Don't** use the hero-metric template: large number, small label, supporting stats row, gradient accent. This is a SaaS pattern in direct conflict with Studio 1947's brand principles.
- **Don't** use pure black (#000000) or pure white (#FFFFFF) on UI surfaces. Tint everything. The minimum perceptible tint is enough.
- **Don't** rush motion: ease-in curves, elastic or bounce easings, and durations under 150ms feel cheap against this system's deliberate pace.
- **Don't** use modals for low-commitment or secondary content. The system has two modals (TalkToUsModal, ContactModal); both are deliberate, high-commitment actions. Do not add modals for disclosures, tooltips, or confirmations that can live inline.
- **Don't** use Teal (#00BCD4) on brand-register surfaces (the marketing site, portfolio pages). Teal belongs to the product register. Its presence on brand surfaces signals misattribution.
