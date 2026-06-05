import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-card{background:var(--surface-card);border-radius:var(--radius-lg);
    border:var(--border-width) solid var(--border-subtle);overflow:hidden;
    transition:box-shadow var(--dur-base) var(--ease-out),transform var(--dur-base) var(--ease-out);}
  .tg-card--flat{box-shadow:none;}
  .tg-card--raised{box-shadow:var(--shadow-md);border-color:transparent;}
  .tg-card--interactive{cursor:pointer;}
  .tg-card--interactive:hover{box-shadow:var(--shadow-lg);transform:translateY(-3px);}
  .tg-card--accent{border-top:4px solid var(--tangerine-500);}
  .tg-card__body{padding:var(--space-5);}
  .tg-card__media{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;}`;
  const s = document.createElement('style');
  s.id = 'tg-card-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Surface container.
 */
export function Card({
  elevation = 'flat',
  interactive = false,
  accentTop = false,
  media = null,
  padded = true,
  className = '',
  children,
  ...rest
}) {
  useStyles();
  const cls = ['tg-card', `tg-card--${elevation}`, interactive ? 'tg-card--interactive' : '',
    accentTop ? 'tg-card--accent' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {media && (typeof media === 'string'
        ? <img className="tg-card__media" src={media} alt="" />
        : media)}
      {padded ? <div className="tg-card__body">{children}</div> : children}
    </div>
  );
}
