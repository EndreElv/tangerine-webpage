import * as React from 'react';

/**
 * Labelled text input with optional leading/trailing icons, helper text and
 * an error state. Spreads native input attributes (type, value, onChange, …).
 *
 * @startingPoint section="Forms" subtitle="Text field with label, help & error states" viewport="700x200"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Show a required asterisk. */
  required?: boolean;
  /** Helper text shown beneath the field. */
  helpText?: string;
  /** Error message — switches the field to its error style and replaces helpText. */
  error?: string;
  /** Icon node rendered inside, before the input. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered inside, after the input. */
  iconRight?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
