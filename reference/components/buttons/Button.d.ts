import * as React from 'react';

/**
 * Tangerine primary action button — pill-shaped, brand gradient-glow on the
 * primary variant. Use for the single most important action in a view.
 *
 * @startingPoint section="Buttons" subtitle="Pill button — primary, accent, secondary, ghost" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to full width of container. */
  block?: boolean;
  /** Icon element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
