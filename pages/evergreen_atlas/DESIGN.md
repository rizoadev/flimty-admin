# Design System: Botanical Architect

### 1. Overview & Creative North Star
**Creative North Star: The Urban Conservatory**
Botanical Architect is a design system that marries the precision of modern architecture with the organic warmth of the natural world. It rejects the sterility of standard SaaS interfaces in favor of a "Curated Editorial" feel. The system utilizes deep forest greens, crisp sky-blue neutrals, and high-contrast typography to create an environment that feels both professional and revitalizing.

The system breaks the "standard grid" through **Intentional Asymmetry**: search bars are pill-shaped and weighted with deep shadows, while content cards use subtle elevation to float above a multi-tiered cool background.

### 2. Colors
The palette is rooted in a "Deep Forest" primary green (`#2a6c2c`) set against a "Mist" background (`#f7f9ff`).

*   **The "No-Line" Rule:** Visual separation is strictly managed via background shifts. Use `surface_container_low` for background groupings and `surface_container_lowest` for interactive cards. Avoid 1px borders; if a boundary is required for accessibility, use a 15% opacity `outline_variant`.
*   **Surface Hierarchy & Nesting:**
    *   **Base:** `surface` (#f7f9ff)
    *   **Nesting Level 1:** `surface_container_high` (Horizontal chips, filters)
    *   **Nesting Level 2:** `surface_container_highest` (Search bars, inputs)
    *   **Floating Elements:** `surface_container_lowest` (Cards, map buttons)
*   **The "Glass & Gradient" Rule:** Use `primary-gradient` (135deg, #2a6c2c to #1d5f21) for high-impact CTAs. Use `glass-effect` (80% opacity surface + 20px blur) for floating navigation and action triggers.

### 3. Typography
The system uses a dual-font approach to balance authoritative structure with approachable readability.
*   **Headline Font:** *Manrope* (Bold/Extrabold). Used for high-impact editorial statements.
*   **Body/Label Font:** *Inter*. Used for utility, data, and descriptions.

**Typographic Rhythm (Extracted Scale):**
*   **Display/Hero:** 1.875rem (30px) - Extrabold, tracking-tighter.
*   **Section Headlines:** 1.5rem (24px) - Bold.
*   **Title/Card Header:** 1.125rem (18px) or 1.25rem (20px) - Bold.
*   **Body Large:** 1rem (16px) - Regular.
*   **Body Small:** 0.875rem (14px) - Regular/Medium.
*   **Micro-Label:** 0.75rem (12px) to 10px - Bold, Uppercase, Tracking-wider.

### 4. Elevation & Depth
Elevation is achieved through **Tonal Layering** and soft, ambient occlusion rather than harsh lighting.

*   **The Layering Principle:** Use color steps (e.g., `surface` to `surface_container_low`) to imply structure.
*   **Ambient Shadows:** 
    *   *Search/Floating:* `0px 12px 32px rgba(43,51,60,0.06)` — Extra-diffused, focusing on the bottom-weighted spread.
    *   *Cards:* `0px 4px 16px rgba(43,51,60,0.04)` — Subtle lift.
*   **Glassmorphism:** Floating action buttons (like "Lihat Peta") must use a 20px backdrop blur and a thin, semi-transparent border to separate from the background content.

### 5. Components
*   **Buttons:** 
    *   *Primary:* 135-degree green gradient with rounded-md (8px) corners.
    *   *Ghost/Utility:* `surface_container` background with primary-colored icons.
*   **Chips:** Pill-shaped, high-contrast. Use `tertiary_container` (pale yellow) for functional tags like "INSTANT COURIER" to provide a visual "pop" against the greens.
*   **Search Input:** Fully rounded (pill), `surface_container_highest` background, with an integrated leading icon and trailing action.
*   **Cards:** White (`surface_container_lowest`) with 16px padding, subtle 4px elevation, and no border.

### 6. Do's and Don'ts
*   **Do:** Use 10px uppercase labels for category headers to create an editorial metadata feel.
*   **Do:** Use "verified" symbols in the primary green to build trust.
*   **Don't:** Use solid black text. Always use `on_surface` (#2b333c) for better tonal integration.
*   **Don't:** Overuse the primary green. Reserve it for CTAs, brand icons, and active states to maintain visual breathing room.
*   **Do:** Apply `active:scale-95` transitions to all interactive elements to simulate tactile feedback.