import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-avatar{display:inline-flex;align-items:center;justify-content:center;flex:none;
    font-family:var(--font-display);font-weight:var(--fw-bold);color:#fff;overflow:hidden;
    border-radius:var(--radius-circle);background:var(--gradient-brand-diag);position:relative;}
  .tg-avatar img{width:100%;height:100%;object-fit:cover;}
  .tg-avatar--sm{width:28px;height:28px;font-size:11px;}
  .tg-avatar--md{width:40px;height:40px;font-size:15px;}
  .tg-avatar--lg{width:56px;height:56px;font-size:21px;}
  .tg-avatar--xl{width:80px;height:80px;font-size:30px;}
  .tg-avatar__ring{box-shadow:0 0 0 2px var(--surface-card),0 0 0 4px var(--tangerine-300);}`;
  const s = document.createElement('style');
  s.id = 'tg-avatar-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

/**
 * Circular avatar with image or initials fallback.
 */
export function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['tg-avatar', `tg-avatar--${size}`, ring ? 'tg-avatar__ring' : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
