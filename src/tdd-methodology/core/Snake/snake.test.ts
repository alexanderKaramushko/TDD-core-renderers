import Snake from '.';
import Segment from '../Segment';
import { SnakeModel } from './types';

let snake: SnakeModel = {} as SnakeModel;
let segments: Segment[] = [];

/* eslint-disable no-undef */
describe('Snake', () => {
  beforeEach(() => {
    segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    snake = new Snake(segments);
  });

  it('should move segments down', () => {
    snake.moveDown();

    expect(snake.getCoords()).toEqual([[0, 20], [0, 30], [0, 40], [0, 50]]);
  });

  it('should move segments right -> up', () => {
    snake.moveRight();
    snake.moveUp();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [10, 40], [10, 30]]);
  });

  it('should move segments right -> down', () => {
    snake.moveRight();
    snake.moveDown();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [10, 40], [10, 50]]);
  });

  it('should move segments left -> up', () => {
    snake.moveLeft();
    snake.moveUp();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [-10, 40], [-10, 30]]);
  });

  it('should move segments left -> down', () => {
    snake.moveLeft();
    snake.moveDown();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [-10, 40], [-10, 50]]);
  });

  it('should move segments up -> left', () => {
    snake.moveLeft();
    snake.moveUp();
    snake.moveLeft();

    expect(snake.getCoords()).toEqual([[0, 40], [-10, 40], [-10, 30], [-20, 30]]);
  });

  it('should move segments up -> right', () => {
    snake.moveLeft();
    snake.moveUp();
    snake.moveRight();

    expect(snake.getCoords()).toEqual([[0, 40], [-10, 40], [-10, 30], [0, 30]]);
  });

  it('should find intersections', () => {
    snake.moveLeft();
    snake.moveUp();
    snake.moveRight();

    expect(snake.findIntersection()).toEqual([0, 30]);
  });

  it('shouldn`t move up when moving down', () => {
    snake.moveDown();
    snake.moveUp();

    expect(snake.getCoords()).toEqual([[0, 20], [0, 30], [0, 40], [0, 50]]);
  });

  it('shouldn`t move down when moving up', () => {
    snake.moveLeft();
    snake.moveUp();
    snake.moveDown();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [-10, 40], [-10, 30]]);
  });

  it('shouldn`t move right when moving left', () => {
    snake.moveLeft();
    snake.moveRight();

    expect(snake.getCoords()).toEqual([[0, 20], [0, 30], [0, 40], [-10, 40]]);
  });

  it('shouldn`t move left when moving right', () => {
    snake.moveRight();
    snake.moveLeft();

    expect(snake.getCoords()).toEqual([[0, 20], [0, 30], [0, 40], [10, 40]]);
  });

  it('should add new segment to end', () => {
    snake.moveDown();

    snake.addSegment();

    expect(snake.getCoords()).toEqual([[0, 10], [0, 20], [0, 30], [0, 40], [0, 50]]);
  });

});
