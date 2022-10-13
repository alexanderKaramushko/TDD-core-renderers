import { getAppContainer } from '../constants';
import Field from '../core/Field';
import { FieldModel } from '../core/Field/types';
import Food from '../core/Food';
import { FoodModel } from '../core/Food/types';
import GameFacade from '../core/GameFacade';
import RendererFactory from '../core/RendererFactory';
import Segment from '../core/Segment';
import { SegmentModel } from '../core/Segment/types';
import Snake from '../core/Snake';
import { SnakeModel } from '../core/Snake/types';
import NativeRenderer from './NativeRenderer/Renderer';

jest.mock('../core/Food');

let snake: SnakeModel = {} as SnakeModel;
let field: FieldModel = {} as FieldModel;
let segments: SegmentModel[] = [];
let food: FoodModel = {} as FoodModel;

// renderer, field type, snake type, game type, segments count
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderers: Array<[RendererFactory, any, any, any, any, number]> = [
  [new NativeRenderer(), HTMLDivElement, DocumentFragment, HTMLDivElement, HTMLDivElement, 4],
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
    food = new Food(50, 50, 10, 10);
  });

  test.each(renderers)(
    'should render field through %p',
    (renderer, fieldType, snakeType, gameType, foodType, segmentsCount) => {
      const fieldElement = renderer.createRenderer().buildField(field);
      const snakeElement = renderer.createRenderer().buildSnake(snake);
      const foodElement = renderer.createRenderer().buildFood(food);

      const game = renderer.createRenderer().render(field, snake, food);

      expect(fieldElement).toBeInstanceOf(fieldType);
      expect(snakeElement).toBeInstanceOf(snakeType);
      expect(foodElement).toBeInstanceOf(foodType);

      expect(game).toBeInstanceOf(gameType);
      expect(game.querySelectorAll('.segment')).toHaveLength(segmentsCount);
      expect(game.querySelector('.food')).toBeInstanceOf(foodType);
    },
  );

  test.each(renderers)(
    'should create snapshot for %p',
    (renderer) => {
      document.body.innerHTML = '<div id="app"></div>';

      const game = new GameFacade(renderer.createRenderer());

      game.createGame();

      expect(getAppContainer()).toMatchSnapshot();
    },
  );
});
