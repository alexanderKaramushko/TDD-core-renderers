import { SnakeModel } from '../Snake/types';

export type FieldModel = {
  // eslint-disable-next-line no-unused-vars
  findIntersection(snake: SnakeModel): [number, number] | null;
  getCoords(): number[][];
}
