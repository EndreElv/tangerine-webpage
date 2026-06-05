---
name: tangerine-design
description: Use this skill to generate well-branded interfaces and assets for Tangerine® (open-source, offline-first education data collection), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Tangerine® — *"Actionable insights, anywhere."* Warm, mission-driven, open-source, offline-first.
- **Colors:** Primary tangerine `#F05424`, accent gold `#FCB40C`, signature gradient between them. Warm (brown-tinted) neutrals — never blue-gray.
- **Type:** Display **Baloo 2** (rounded, echoes logo), UI/body **Mulish**, data **Roboto Mono**. Sentence case headlines.
- **Shape language:** pill buttons, 16px rounded cards with a 4px tangerine top-accent, warm shadows, quick gentle motion.
- **No emoji.** Big round numbers as social proof.
- **Tokens:** link `styles.css` and use the CSS custom properties (`--tangerine-500`, `--text-strong`, `--surface-card`, `--radius-pill`, `--shadow-brand`, `--gradient-brand`, …).
- **Components:** load `_ds_bundle.js`, then `const { Button, Card, Stat, Badge, Tag, Avatar, Input, Checkbox, IconButton } = window.TangerineDesignSystem_c907c9`.
- **Assets:** logos, product icons, illustrations, photography and partner logos live in `assets/`.

See `readme.md` for full content/voice and visual-foundation guidance.
