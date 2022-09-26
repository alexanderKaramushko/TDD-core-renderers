export type XDirections = 'left' | 'right';

export type YDirections = 'up' | 'down';

export type Direction = XDirections | YDirections;

export type Directions = {
  [K in Direction]?: () => void
}
