Pill-shaped action button in the Tangerine brand — use for the primary action in any view; the `primary` variant carries the brand orange glow.

```jsx
<Button variant="primary" size="md" onClick={save}>Get Tangerine</Button>
<Button variant="secondary" iconLeft={<span>↓</span>}>Export data</Button>
<Button variant="accent">Start free trial</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (tangerine, glow), `accent` (gold), `secondary` (outline), `ghost` (quiet). Sizes: `sm` / `md` / `lg`. Props: `block` for full width, `iconLeft` / `iconRight`, `as="a"` for link buttons, plus all native button attributes (`disabled`, `onClick`, …).
