Labelled text input with icon slots, helper text and an error state — the default form control across Tangerine apps.

```jsx
<Input label="Email" type="email" required placeholder="you@org.org"
       helpText="We'll send your trial link here." />
<Input label="Search students" iconLeft={<span>⌕</span>} placeholder="Name or ID" />
<Input label="Server URL" error="Can't reach this server." defaultValue="https://" />
```

Props: `label`, `required`, `helpText`, `error`, `iconLeft`, `iconRight`, plus native input attrs.
