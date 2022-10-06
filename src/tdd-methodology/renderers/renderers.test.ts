import Field from '../core/Field';
import { FieldModel } from '../core/Field/types';
import RendererFactory from '../core/RendererFactory';
import Segment from '../core/Segment';
import Snake from '../core/Snake';
import { SnakeModel } from '../core/Snake/types';
import NativeRenderer from './NativeRenderer/Renderer';

let snake: SnakeModel = {} as SnakeModel;
let field: FieldModel = {} as FieldModel;
let segments: Segment[] = [];

// renderer, field type, snake type, game type, segments count
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderers: Array<[RendererFactory, any, any, any, number]> = [
  [new NativeRenderer(), HTMLDivElement, DocumentFragment, HTMLDivElement, 4],
];

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

  test.each(renderers)(
    'should render field through %p',
    (renderer, fieldType) => {
      const fieldElement = renderer.createRenderer().buildField(field);

      expect(fieldElement).toBeInstanceOf(fieldType);
    },
  );

  test.each(renderers)(
    'should render snake',
    (renderer, fieldType, snakeType) => {
      const fieldElement = renderer.createRenderer().buildSnake(snake);

      expect(fieldElement).toBeInstanceOf(snakeType);
    },
  );

  test.each(renderers)(
    'should render game',
    (renderer, fieldType, snakeType, gameType) => {
      document.body.innerHTML = '<div id="app"></div>';

      const game = renderer.createRenderer().render(field, snake);

      expect(game).toBeInstanceOf(gameType);
    },
  );

  test.each(renderers)(
    'should render segments',
    (renderer, fieldType, snakeType, gameType, segmentsCount) => {
      document.body.innerHTML = '<div id="app"></div>';

      const game = renderer.createRenderer().render(field, snake);

      expect(game.querySelectorAll('.segment')).toHaveLength(segmentsCount);
    },
  );
});
