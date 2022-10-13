import AbstractRenderer from '../Renderer';
import Field from '../Field';
import Snake from '../Snake';
import { GameFacadeModel } from './types';
import Segment from '../Segment';
import { SnakeModel } from '../Snake/types';
import { FieldModel } from '../Field/types';
import { FoodModel } from '../Food/types';
import Food from '../Food';
import { last } from '../../utils';

/**
 * @description entry point to core
 */
export default class GameFacade implements GameFacadeModel {

  private snake!: SnakeModel;
  private field!: FieldModel;
  private food!: FoodModel;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    // eslint-disable-next-line no-unused-vars
    private renderer: AbstractRenderer,
  ) {}

  isFoodEaten(): boolean {
    const [foodX, foodY] = this.food.getCoords();
    const [segmentX, segmentY] = last(this.snake.getCoords());

    return foodX === segmentX && foodY === segmentY;
  }

  private tryAddSegment(): void {
    if (this.isFoodEaten()) {
      this.snake.addSegment();
      this.food = this.spawnFood();
    }
  }

  moveLeft(): void {
    this.snake.moveLeft();
    this.tryAddSegment();
    this.renderer.render(this.field, this.snake, this.food);
  }

  moveRight(): void {
    this.snake.moveRight();
    this.tryAddSegment();
    this.renderer.render(this.field, this.snake, this.food);
  }

  moveUp(): void {
    this.snake.moveUp();
    this.tryAddSegment();
    this.renderer.render(this.field, this.snake, this.food);
  }

  moveDown(): void {
    this.snake.moveDown();
    this.tryAddSegment();
    this.renderer.render(this.field, this.snake, this.food);
  }

  private spawnFood(): FoodModel {
    const [, [x2, y2]] = this.field.getCoords();
    const x = Math.round(Math.random() * x2);
    const y = Math.round(Math.random() * y2);

    // todo hardcoded
    return new Food(10 - (x % 10) + x, 10 - (y % 10) + y, 10, 10);
  }

  createGame(): void {
    // todo hardcoded
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    this.snake = new Snake(segments);

    // todo hardcoded
    this.field = new Field(0, 200, 0, 200);

    this.food = this.spawnFood();

    this.renderer.render(this.field, this.snake, this.food);
  }

}
