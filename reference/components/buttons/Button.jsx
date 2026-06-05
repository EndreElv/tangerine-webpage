import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-btn{--_bg:var(--tangerine-500);--_bgh:var(--tangerine-600);--_bga:var(--tangerine-700);--_fg:#fff;
    display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);
    font-family:var(--font-sans);font-weight:var(--fw-bold);border:none;cursor:pointer;
    border-radius:var(--radius-pill);background:var(--_bg);color:var(--_fg);
    transition:background var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out);
    text-decoration:none;white-space:nowrap;line-height:1;}
  .tg-btn:hover{background:var(--_bgh);}
  .tg-btn:active{background:var(--_bga);transform:translateY(1px);}
  .tg-btn:focus-visible{outline:var(--border-width-2) solid var(--focus-ring);outline-offset:2px;}
  .tg-btn[disabled]{opacity:.45;cursor:not-allowed;pointer-events:none;}
  .tg-btn--sm{font-size:var(--text-sm);padding:8px 16px;}
  .tg-btn--md{font-size:var(--text-md);padding:11px 22px;}
  .tg-btn--lg{font-size:var(--text-lg);padding:15px 30px;}
  .tg-btn--primary{box-shadow:var(--shadow-brand);} 
  .tg-btn--primary:hover{box-shadow:0 12px 28px rgba(240,84,36,.38);}
  .tg-btn--accent{--_bg:var(--gold-400);--_bgh:var(--gold-500);--_bga:var(--gold-600);--_fg:var(--neutral-900);box-shadow:var(--shadow-sm);}
  .tg-btn--secondary{--_bg:transparent;--_bgh:var(--tangerine-50);--_bga:var(--tangerine-100);--_fg:var(--tangerine-600);
    box-shadow:inset 0 0 0 var(--border-width-2) var(--tangerine-500);}
  .tg-btn--ghost{--_bg:transparent;--_bgh:var(--neutral-100);--_bga:var(--neutral-200);--_fg:var(--text-body);}
  .tg-btn--block{width:100%;}`;
  const s = document.createElement('style');
  s.id = 'tg-btn-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Tangerine primary action button.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const Tag = as;
  const cls = [
    'tg-btn',
    `tg-btn--${variant}`,
    `tg-btn--${size}`,
    block ? 'tg-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
