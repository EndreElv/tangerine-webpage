import React from 'react';

let injected = false;
function useStyles() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const css = `
  .tg-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans);}
  .tg-field__label{font-size:var(--text-sm);font-weight:var(--fw-bold);color:var(--text-strong);}
  .tg-field__req{color:var(--tangerine-600);margin-left:2px;}
  .tg-field__wrap{display:flex;align-items:center;gap:8px;background:var(--surface-card);
    border:var(--border-width) solid var(--border-default);border-radius:var(--radius-md);
    padding:0 14px;transition:border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out);}
  .tg-field__wrap:focus-within{border-color:var(--tangerine-500);box-shadow:0 0 0 3px var(--action-ring);}
  .tg-field__input{flex:1;border:none;outline:none;background:transparent;font:inherit;
    color:var(--text-strong);padding:11px 0;min-width:0;}
  .tg-field__input::placeholder{color:var(--text-subtle);}
  .tg-field__icon{color:var(--text-muted);display:inline-flex;font-size:18px;}
  .tg-field__help{font-size:var(--text-xs);color:var(--text-muted);}
  .tg-field--error .tg-field__wrap{border-color:var(--status-error);}
  .tg-field--error .tg-field__wrap:focus-within{box-shadow:0 0 0 3px var(--status-error-bg);}
  .tg-field--error .tg-field__help{color:var(--status-error-fg);}
  .tg-field--disabled{opacity:.55;pointer-events:none;}`;
  const s = document.createElement('style');
  s.id = 'tg-field-styles';
  s.textContent = css;
  document.head.appendChild(s);
}

/**
 * Labelled text input with helper / error states.
 */
export function Input({
  label,
  required = false,
  helpText,
  error,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  useStyles();
  const fieldId = id || `tg-${Math.random().toString(36).slice(2, 8)}`;
  const cls = ['tg-field', error ? 'tg-field--error' : '', disabled ? 'tg-field--disabled' : '', className]
    .filter(Boolean).join(' ');
  return (
    <div className={cls}>
      {label && (
        <label className="tg-field__label" htmlFor={fieldId}>
          {label}{required && <span className="tg-field__req">*</span>}
        </label>
      )}
      <div className="tg-field__wrap">
        {iconLeft && <span className="tg-field__icon">{iconLeft}</span>}
        <input id={fieldId} className="tg-field__input" disabled={disabled} aria-invalid={!!error} {...rest} />
        {iconRight && <span className="tg-field__icon">{iconRight}</span>}
      </div>
      {(error || helpText) && <span className="tg-field__help">{error || helpText}</span>}
    </div>
  );
}
