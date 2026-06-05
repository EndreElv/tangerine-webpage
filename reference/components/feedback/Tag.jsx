import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);
    font-weight:var(--fw-semibold);font-size:var(--text-sm);line-height:1;color:var(--text-body);
    padding:6px 12px;border-radius:var(--radius-pill);background:var(--neutral-100);
    border:var(--border-width) solid transparent;transition:all var(--dur-fast) var(--ease-out);}
  .tg-tag--selected{background:var(--tangerine-50);color:var(--tangerine-700);border-color:var(--tangerine-300);}
  .tg-tag--clickable{cursor:pointer;}
  .tg-tag--clickable:hover{background:var(--neutral-200);}
  .tg-tag--selected.tg-tag--clickable:hover{background:var(--tangerine-100);}
  .tg-tag__remove{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;
    width:16px;height:16px;border-radius:50%;color:var(--text-muted);font-size:14px;line-height:1;border:none;background:transparent;}
  .tg-tag__remove:hover{background:var(--neutral-300);color:var(--text-strong);}`;
  const s = document.createElement('style');
  s.id = 'tg-tag-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Filter / selection tag chip.
 */
export function Tag({
  selected = false,
  onRemove,
  onClick,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const clickable = !!onClick || selected !== undefined && (!!onClick);
  const cls = ['tg-tag', selected ? 'tg-tag--selected' : '', onClick ? 'tg-tag--clickable' : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} onClick={onClick} {...rest}>
      {children}
      {onRemove && (
        <button type="button" className="tg-tag__remove" aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}>×</button>
      )}
    </span>
  );
}
