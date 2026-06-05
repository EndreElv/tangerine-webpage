import * as React from 'react';

/**
 * Circular, icon-only button for toolbars and compact controls. Always pass
 * `label` for accessibility (used as aria-label + tooltip).
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "ghost" */
  variant?: 'ghost' | 'soft' | 'solid';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (aria-label + title). Required. */
  label: string;
  /** The icon node (SVG, icon-font glyph, or unicode). */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
