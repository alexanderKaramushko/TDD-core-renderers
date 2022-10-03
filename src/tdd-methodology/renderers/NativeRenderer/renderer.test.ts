import Field from '../../core/Field';
import { FieldModel } from '../../core/Field/types';
import Segment from '../../core/Segment';
import Snake from '../../core/Snake';
import { SnakeModel } from '../../core/Snake/types';
import NativeRenderer from '.';

let snake: SnakeModel = {} as SnakeModel;
let field: FieldModel = {} as FieldModel;
let segments: Segment[] = [];

/* eslint-disable no-undef */
describe('NativeRenderer', () => {
  beforeEach(() => {
    segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    snake = new Snake(segments);
    field = new Field(0, 0, 200, 200);
  });

  it('should render field', () => {
    const renderer = new NativeRenderer();

    const fieldElement = renderer.buildField(field);

    expect(fieldElement).toBeInstanceOf(HTMLDivElement);
  });

  it('should render snake', () => {
    const renderer = new NativeRenderer();

    const snakeElement = renderer.buildSnake(snake);

    expect(snakeElement).toBeInstanceOf(DocumentFragment);
  });

  it('should render game', () => {
    document.body.innerHTML = '<div id="app"></div>';

    const renderer = new NativeRenderer();

    const game = renderer.render(field, snake);

    expect(game).toBeInstanceOf(HTMLDivElement);
    expect(game.querySelectorAll('.segment')).toHaveLength(segments.length);
  });
});
