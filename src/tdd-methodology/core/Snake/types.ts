export type XDirections = 'left' | 'right';

export type YDirections = 'up' | 'down';

export type Direction = XDirections | YDirections;

export type Directions = {
  // eslint-disable-next-line no-unused-vars
  [K in Direction]?: () => void
}

export type SnakeModel = {
  getCoords(): [number, number][];
  findIntersection(): [number, number] | null;
  moveDown(): void;
  moveUp(): void;
  moveRight(): void;
  moveLeft(): void;
  addSegment(): void;
}
