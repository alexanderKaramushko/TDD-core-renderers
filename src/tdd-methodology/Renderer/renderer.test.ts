import Field from '../Field';
import { FieldModel } from '../Field/types';
import Segment from '../Segment';
import Snake from '../Snake';
import { SnakeModel } from '../Snake/types';
import Renderer from './Renderer';

let snake: SnakeModel = {} as SnakeModel;
let field: FieldModel = {} as FieldModel;
let segments: Segment[] = [];

/* eslint-disable no-undef */
describe('Renderer', () => {
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
    const renderer = new Renderer(snake, field);

    const fieldElement = renderer.buildField();

    expect(fieldElement).toBeInstanceOf(HTMLDivElement);
  });

  it('should render snake', () => {
    const renderer = new Renderer(snake, field);

    const snakeElement = renderer.buildSnake();

    expect(snakeElement).toBeInstanceOf(DocumentFragment);
  });

  it('should render game', () => {
    document.body.innerHTML = '<div id="app"></div>';

    const renderer = new Renderer(snake, field);

    const game = renderer.render();

    expect(game).toBeInstanceOf(HTMLDivElement);
    expect(game.querySelectorAll('.segment')).toHaveLength(segments.length);
  });
});
