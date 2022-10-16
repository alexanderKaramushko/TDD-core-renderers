import AbstractRenderer from '../Renderer';
import Field from '../Field';
import Snake from '../Snake';
import { GameFacadeModel } from './types';
import Segment from '../Segment';
import { SnakeModel } from '../Snake/types';
import { FieldConstructorParameters, FieldModel } from '../Field/types';
import { FoodModel } from '../Food/types';
import Food from '../Food';
import { first, last } from '../../utils';
import { SegmentConstructorParameters } from '../Segment/types';

/**
 * @description entry point to core
 */
export default class GameFacade implements GameFacadeModel {

  private snake!: SnakeModel;
  private field!: FieldModel;
  private food!: FoodModel;

  private segmentWidth!: number;
  private segmentHeight!: number;

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

    const { segmentWidth, segmentHeight } = this;

    return new Food(
      segmentWidth - (x % segmentWidth) + x,
      segmentHeight - (y % segmentHeight) + y,
      segmentWidth,
      segmentHeight,
    );
  }

  createGame(
    segmentsParameters: SegmentConstructorParameters[],
    fieldParameters: FieldConstructorParameters,
  ): void {
    if (!segmentsParameters.length) {
      throw new Error('No segments parameters!');
    }

    if (!fieldParameters.length) {
      throw new Error('No field parameters!');
    }

    const segments = segmentsParameters.map((segmentParameters) => (
      new Segment(...segmentParameters)
    ));

    this.snake = new Snake(segments);

    this.field = new Field(...fieldParameters);

    const [,, segmentWidth, segmentHeight] = first(segmentsParameters);

    this.segmentWidth = segmentWidth;
    this.segmentHeight = segmentHeight;

    this.food = this.spawnFood();

    this.renderer.render(this.field, this.snake, this.food);
  }

}
