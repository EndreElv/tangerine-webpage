Chip for filters, multi-select and removable selections.

```jsx
<Tag selected onClick={toggle}>Reading</Tag>
<Tag onClick={toggle}>Math</Tag>
<Tag onRemove={() => drop('grade-3')}>Grade 3</Tag>
```

Props: `selected`, `onClick` (makes it interactive), `onRemove` (adds a × button).
