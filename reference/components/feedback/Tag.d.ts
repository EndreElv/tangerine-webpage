import * as React from 'react';

/**
 * Tag / chip for filters and multi-select. Becomes interactive when `onClick`
 * is supplied, and shows a remove "×" when `onRemove` is supplied.
 */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onClick'> {
  /** Selected (brand-tinted) state. */
  selected?: boolean;
  /** Click handler — makes the tag interactive. */
  onClick?: (e: React.MouseEvent) => void;
  /** Show a remove button and call this on remove. */
  onRemove?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
