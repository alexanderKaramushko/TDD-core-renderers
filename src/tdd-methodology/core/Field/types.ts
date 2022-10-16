/* eslint-disable no-unused-vars */
import { SnakeModel } from '../Snake/types';

export type FieldModel = {
  // eslint-disable-next-line no-unused-vars
  findIntersection(snake: SnakeModel): [number, number] | null;
  getCoords(): number[][];
};

export type FieldConstructor = {
  new(x1: number, x2: number, y1: number, y2: number): FieldModel;
}

export type FieldConstructorParameters = ConstructorParameters<FieldConstructor>;
