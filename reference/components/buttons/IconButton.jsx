import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-iconbtn{display:inline-flex;align-items:center;justify-content:center;border:none;cursor:pointer;
    border-radius:var(--radius-circle);background:transparent;color:var(--text-body);
    transition:background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);}
  .tg-iconbtn:hover{background:var(--neutral-100);color:var(--text-strong);}
  .tg-iconbtn:active{transform:translateY(1px);}
  .tg-iconbtn:focus-visible{outline:var(--border-width-2) solid var(--focus-ring);outline-offset:2px;}
  .tg-iconbtn[disabled]{opacity:.4;cursor:not-allowed;pointer-events:none;}
  .tg-iconbtn--sm{width:32px;height:32px;font-size:16px;}
  .tg-iconbtn--md{width:40px;height:40px;font-size:20px;}
  .tg-iconbtn--lg{width:48px;height:48px;font-size:24px;}
  .tg-iconbtn--solid{background:var(--tangerine-500);color:#fff;}
  .tg-iconbtn--solid:hover{background:var(--tangerine-600);color:#fff;}
  .tg-iconbtn--soft{background:var(--tangerine-50);color:var(--tangerine-600);}
  .tg-iconbtn--soft:hover{background:var(--tangerine-100);color:var(--tangerine-700);}`;
  const s = document.createElement('style');
  s.id = 'tg-iconbtn-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Circular icon-only button.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['tg-iconbtn', `tg-iconbtn--${variant}`, `tg-iconbtn--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
