export type XDirections = 'left' | 'right';

export type YDirections = 'up' | 'down';

export type Direction = XDirections | YDirections;

export type Directions = {
  [K in Direction]?: () => void
}

export type SnakeModel = {
  setDirection(direction: Direction): void;
  getCoords(): [number, number][];
  findIntersection(): [number, number] | null;
  move(): void;
}
