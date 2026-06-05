import * as React from 'react';

/**
 * Circular avatar — shows the image when `src` is given, otherwise initials
 * derived from `name` on the brand gradient.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — used for initials and the tooltip. */
  name?: string;
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Show a brand ring around the avatar. */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
