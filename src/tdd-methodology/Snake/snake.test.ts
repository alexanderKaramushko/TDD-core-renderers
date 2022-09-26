import Snake from '.';
import Segment from '../Segment';

/* eslint-disable no-undef */
describe('Snake', () => {
  it('should create segments', () => {
    const segments = [
      new Segment(0, 0, 10, 10),
      new Segment(0, 0, 10, 10),
      new Segment(0, 0, 10, 10),
      new Segment(0, 0, 10, 10),
    ];

    const snake = new Snake(segments);

    expect(snake).toEqual(new Snake(segments));
  });

  it('should move segments down', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('down');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 20], [0, 30], [0, 40], [0, 50]]);
  });

  it('should move segments right -> up', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('right');
    snake.move();

    snake.setDirection('up');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [10, 40], [10, 30]]);
  });

  it('should move segments right -> down', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('right');
    snake.move();

    snake.setDirection('down');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [10, 40], [10, 50]]);
  });

  it('should move segments left -> up', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('left');
    snake.move();

    snake.setDirection('up');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [-10, 40], [-10, 30]]);
  });

  it('should move segments left -> down', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('left');
    snake.move();

    snake.setDirection('down');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 30], [0, 40], [-10, 40], [-10, 50]]);
  });

  it('should move segments up -> left', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('left');
    snake.move();

    snake.setDirection('up');
    snake.move();

    snake.setDirection('left');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 40], [-10, 40], [-10, 30], [-20, 30]]);
  });

  it('should move segments up -> right', () => {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);

    snake.setDirection('left');
    snake.move();

    snake.setDirection('up');
    snake.move();

    snake.setDirection('right');
    snake.move();

    expect(snake.getCoords()).toEqual([[0, 40], [-10, 40], [-10, 30], [0, 30]]);
  });

});
