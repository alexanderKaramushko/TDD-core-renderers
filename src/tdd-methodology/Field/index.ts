import { SnakeModel } from '../Snake/types';
import { last } from '../utils';
import { FieldModel } from './types';

export default class Field implements FieldModel {

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private x1: number,
    private x2: number,
    private y1: number,
    private y2: number,
  ) {}

  findIntersection(snake: SnakeModel): [number, number] | null {
    const coords = snake.getCoords();
    const [x, y] = last(coords);

    if (x < this.x1 || x > this.x2 || y < this.y1 || y > this.y2) {
      return [x, y];
    }

    return null;
  }

}
