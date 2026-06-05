import * as React from 'react';

/**
 * Surface container for grouped content — the building block for product
 * cards, panels and list items.
 *
 * @startingPoint section="Surfaces" subtitle="Content card — flat, raised, accent, with media" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Elevation style. @default "flat" */
  elevation?: 'flat' | 'raised';
  /** Hover lift + pointer cursor. */
  interactive?: boolean;
  /** Brand accent bar along the top edge. */
  accentTop?: boolean;
  /** Image URL or node rendered full-bleed at the top. */
  media?: React.ReactNode;
  /** Wrap children in default padding. @default true */
  padded?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
