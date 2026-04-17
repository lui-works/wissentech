# Design System Document

## 1. Overview & Creative North Star: "The Obsidian Architect"
This design system is engineered to position İstanbul Eğitim Akademi not just as a school, but as a prestigious career engine. The "Creative North Star" is **The Obsidian Architect**: a visual language that feels monolithic, precise, and structurally superior. 

To break the "standard SaaS" mold, we move away from flat boxes and rigid grids. We embrace **intentional asymmetry**, where large editorial typography overlaps subtle glass containers, and **tonal depth**, where the interface feels like it’s carved out of dark basalt rather than printed on a screen. This is a high-end, editorial approach to software education—minimalist in form, but maximalist in intent.

---

## 2. Colors: Tonal Depth & Radiant Accents
We reject the "grey-on-black" default. Our palette uses deep charcoals with blue-tinted undertones to create a sense of infinite space.

### The Palette
- **Core Surfaces**: `surface` (#0E0E0E) is our foundation. For depth, we use `surface_container_lowest` (#000000) to "sink" elements and `surface_container_highest` (#262626) to "lift" them.
- **Electric Accents**: `primary` (#69DAFF) and `secondary` (#17C0FD) are high-energy blues. Use these sparingly to guide the eye toward "transformation" actions (Enroll, Start Coding).
- **The "No-Line" Rule**: 1px solid borders are strictly prohibited for sectioning. Definition must be achieved through:
    1. **Value Shifts**: A `surface_container_low` card sitting on a `surface` background.
    2. **Negative Space**: Using the spacing scale to create distinct islands of content.
- **Glass & Gradient Rule**: Floating elements (modals, dropdowns) must use a backdrop-blur (12px - 20px) with a semi-transparent `surface_variant`. 
- **Signature Textures**: Use a subtle linear gradient for primary CTAs: `primary` (#69DAFF) to `primary_container` (#00CFFC) at a 135° angle. This adds a "lithographic" sheen that feels premium.

---

## 3. Typography: Editorial Authority
We use a dual-typeface system to balance "Startup Speed" with "Academic Prestige."

- **The Voice (Display & Headlines)**: **Plus Jakarta Sans**. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections. Headlines should feel "heavy" and authoritative, anchoring the page.
- **The Engine (Body & Labels)**: **Inter**. Chosen for its mathematical precision. 
- **The Editorial Shift**: In high-end layouts, overlap a `display-sm` headline over a `surface_container` card by 24px. This "breaking of the box" signals a custom, non-template experience.

---

## 4. Elevation & Depth: Tonal Layering
In this system, light doesn't come from a "drop shadow"—it comes from the material itself.

- **The Layering Principle**: Instead of shadows, stack your tokens. 
    - Base: `surface`
    - Section: `surface_container_low`
    - Card: `surface_container_high`
- **Ambient Shadows**: Shadows are reserved only for elements that physically float above the UI (e.g., Tooltips, Popovers). Use a 32px blur, 8% opacity, tinted with `#000000`. It should feel like an "aura" rather than a shadow.
- **The "Ghost Border" Fallback**: If contrast is legally required for accessibility, use the `outline_variant` token at **15% opacity**. This creates a "whisper" of an edge that preserves the "No-Line" philosophy.
- **Glassmorphism**: High-end education requires focus. Use `surface_variant` with 60% opacity and a `backdrop-filter: blur(10px)` for navigation bars to let the vibrant content scroll beneath like a liquid.

---

## 5. Components: Precision Primitives

### Buttons: The "Action Pill"
- **Primary**: Gradient fill (`primary` to `primary_dim`), `roundness-full`, no border.
- **Secondary**: `ghost-border` (15% `outline_variant`) with `on_surface` text.
- **Interaction**: On hover, the primary button should "glow"—add a 15px outer blur using the `primary` color at 30% opacity.

### Cards & Lists: The "Seamless" Approach
- **Forbid Dividers**: Never use a line to separate list items. Use a 4px background shift (`surface_container_low` vs `surface_container_highest`) on hover.
- **Cards**: Use `roundness-xl` (0.75rem). Content should have generous padding (minimum 32px) to convey a "luxury" sense of space.

### Input Fields: The "Minimalist Entry"
- **Style**: Only a bottom-border using `outline_variant` (20% opacity). When focused, the border transforms into a 2px `primary` line that glows slightly.
- **Error State**: Use `error` (#FF716C) for text, but never a red box. Use a subtle `error_container` glow behind the input.

### Signature Component: The "Progress Monolith"
For career transformation tracking, use a thick, 8px `primary` stroke with `surface_container_highest` as the track. Avoid thin, spindly progress bars; the UI should feel robust and "weighty."

---

## 6. Do’s and Don’ts

### Do:
- **Do** use `primary_fixed_dim` for icons to give them a "lit from within" look.
- **Do** use asymmetrical margins (e.g., 80px left, 120px right) for hero text to create a high-end editorial feel.
- **Do** treat "White Space" as a paid asset. Use it generously to signify the premium nature of the academy.

### Don’t:
- **Don't** use pure white (#FFFFFF) for long-form body text. Use `on_surface_variant` (#ADAAAA) to reduce eye strain and maintain the dark-mode "mood."
- **Don't** use standard `md` or `sm` roundedness for cards. High-end SaaS requires the "sophisticated curve" of `xl` (0.75rem).
- **Don't** use "Alert Yellow" or "Standard Green." Stick to the system’s `tertiary` and `primary` ranges to maintain the signature color story.