import { CSSProperties, ReactNode } from 'react';

import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export interface AnimatedCursorOptions {
  children?: ReactNode;
  color?: string;
  innerScale?: number;
  innerSize?: number;
  innerStyle?: CSSProperties;
  outerAlpha?: number;
  outerScale?: number;
  outerSize?: number;
  outerStyle?: CSSProperties;
}

export type Clickable = string | ({ target: string } & AnimatedCursorOptions);

export interface AnimatedCursorProps extends AnimatedCursorOptions {
  clickables?: Clickable[];
  showSystemCursor?: boolean;
  trailingSpeed?: number;
}

export interface AnimatedCursorCoordinates {
  x: number;
  y: number;
}
