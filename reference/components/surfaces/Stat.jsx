import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-stat{display:flex;flex-direction:column;gap:2px;font-family:var(--font-sans);}
  .tg-stat__value{font-family:var(--font-display);font-weight:var(--fw-extra);line-height:1;
    color:var(--text-strong);font-size:var(--text-4xl);letter-spacing:-0.02em;}
  .tg-stat__value--gradient{background:var(--gradient-brand);-webkit-background-clip:text;background-clip:text;color:transparent;}
  .tg-stat__label{font-size:var(--text-sm);color:var(--text-muted);font-weight:var(--fw-semibold);}
  .tg-stat__delta{display:inline-flex;align-items:center;gap:3px;font-size:var(--text-xs);
    font-weight:var(--fw-bold);margin-top:4px;}
  .tg-stat__delta--up{color:var(--status-success);}
  .tg-stat__delta--down{color:var(--status-error);}
  .tg-stat--sm .tg-stat__value{font-size:var(--text-2xl);}
  .tg-stat--lg .tg-stat__value{font-size:var(--text-6xl);}`;
  const s = document.createElement('style');
  s.id = 'tg-stat-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Big-number metric display.
 */
export function Stat({
  value,
  label,
  delta,
  trend = 'up',
  size = 'md',
  gradient = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['tg-stat', `tg-stat--${size}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <span className={`tg-stat__value${gradient ? ' tg-stat__value--gradient' : ''}`}>{value}</span>
      {label && <span className="tg-stat__label">{label}</span>}
      {delta && (
        <span className={`tg-stat__delta tg-stat__delta--${trend}`}>
          {trend === 'up' ? '▲' : '▼'} {delta}
        </span>
      )}
    </div>
  );
}
