import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-sans);
    font-weight:var(--fw-bold);font-size:var(--text-xs);line-height:1;
    padding:5px 10px;border-radius:var(--radius-pill);white-space:nowrap;}
  .tg-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
  .tg-badge--neutral{background:var(--neutral-100);color:var(--neutral-700);}
  .tg-badge--brand{background:var(--tangerine-50);color:var(--tangerine-700);}
  .tg-badge--accent{background:var(--gold-100);color:var(--gold-700);}
  .tg-badge--success{background:var(--status-success-bg);color:var(--status-success-fg);}
  .tg-badge--warning{background:var(--status-warning-bg);color:var(--status-warning-fg);}
  .tg-badge--error{background:var(--status-error-bg);color:var(--status-error-fg);}
  .tg-badge--info{background:var(--status-info-bg);color:var(--status-info-fg);}
  .tg-badge--solid.tg-badge--brand{background:var(--tangerine-500);color:#fff;}
  .tg-badge--solid.tg-badge--success{background:var(--status-success);color:#fff;}
  .tg-badge--solid.tg-badge--error{background:var(--status-error);color:#fff;}`;
  const s = document.createElement('style');
  s.id = 'tg-badge-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Status / category badge.
 */
export function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['tg-badge', `tg-badge--${tone}`, solid ? 'tg-badge--solid' : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="tg-badge__dot" />}
      {children}
    </span>
  );
}
