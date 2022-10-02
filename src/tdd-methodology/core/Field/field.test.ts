import Field from '.';
import Segment from '../Segment';
import Snake from '../Snake';
import { SnakeModel } from '../Snake/types';

let snake: SnakeModel = {} as SnakeModel;

/* eslint-disable no-undef */
describe('Field', () => {
  beforeEach(() => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    snake = new Snake(segments);
  });

  it('should detect field border x-intersection', () => {
    const field = new Field(0, 0, 50, 50);

    snake.moveLeft();

    expect(field.findIntersection(snake)).toEqual([-10, 40]);
  });

  it('should detect field border y-intersection', () => {
    const field = new Field(0, 0, 50, 50);

    snake.moveDown();
    snake.moveDown();

    expect(field.findIntersection(snake)).toEqual([0, 60]);
  });
});
