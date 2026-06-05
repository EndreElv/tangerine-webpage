import * as React from 'react';

/**
 * Big-number metric display for dashboards and impact sections (Tangerine is a
 * data product — these carry a lot of weight). Use `gradient` for hero stats.
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline value, e.g. "5.1M" or "65". */
  value: React.ReactNode;
  /** Caption beneath the value. */
  label?: string;
  /** Optional change indicator, e.g. "+12%". */
  delta?: string;
  /** Direction of the delta. @default "up" */
  trend?: 'up' | 'down';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Paint the value with the brand gradient (hero stats). */
  gradient?: boolean;
}

export function Stat(props: StatProps): JSX.Element;
