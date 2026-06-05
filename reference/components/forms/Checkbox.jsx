import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-sans);
    cursor:pointer;color:var(--text-body);font-size:var(--text-md);line-height:1.4;}
  .tg-check__box{flex:none;width:22px;height:22px;border-radius:var(--radius-sm);
    border:var(--border-width-2) solid var(--border-strong);background:var(--surface-card);
    display:inline-flex;align-items:center;justify-content:center;color:#fff;
    transition:background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out);}
  .tg-check__box svg{width:14px;height:14px;opacity:0;transform:scale(.6);transition:all var(--dur-fast) var(--ease-spring);}
  .tg-check input{position:absolute;opacity:0;width:0;height:0;}
  .tg-check input:checked + .tg-check__box{background:var(--tangerine-500);border-color:var(--tangerine-500);}
  .tg-check input:checked + .tg-check__box svg{opacity:1;transform:scale(1);}
  .tg-check input:focus-visible + .tg-check__box{outline:var(--border-width-2) solid var(--focus-ring);outline-offset:2px;}
  .tg-check--round .tg-check__box{border-radius:var(--radius-circle);}
  .tg-check--disabled{opacity:.5;cursor:not-allowed;pointer-events:none;}
  .tg-check__text small{display:block;color:var(--text-muted);font-size:var(--text-sm);}`;
  const s = document.createElement('style');
  s.id = 'tg-check-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Checkbox with label + optional description.
 */
export function Checkbox({
  label,
  description,
  round = false,
  disabled = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['tg-check', round ? 'tg-check--round' : '', disabled ? 'tg-check--disabled' : '', className]
    .filter(Boolean).join(' ');
  return (
    <label className={cls}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="tg-check__box">
        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      {(label || description) && (
        <span className="tg-check__text">{label}{description && <small>{description}</small>}</span>
      )}
    </label>
  );
}
