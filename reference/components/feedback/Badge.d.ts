import * as React from 'react';

/**
 * Small pill badge for status and categories (e.g. "Synced", "Offline",
 * "Draft"). Use `dot` for a leading status dot, `solid` for high emphasis.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "neutral" */
  tone?: 'neutral' | 'brand' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  /** Filled high-emphasis style (brand / success / error). */
  solid?: boolean;
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
