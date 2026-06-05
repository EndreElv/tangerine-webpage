import * as React from 'react';

/**
 * Checkbox with an inline label and optional description line. Pass `round`
 * for a circular check (used in single-select-style lists). Spreads native
 * input attributes (checked, defaultChecked, onChange, …).
 */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Inline label text. */
  label?: string;
  /** Secondary description shown under the label. */
  description?: string;
  /** Render a circular box instead of a rounded square. */
  round?: boolean;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
