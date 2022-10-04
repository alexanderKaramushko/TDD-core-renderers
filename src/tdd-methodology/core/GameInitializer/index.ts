import AbstractRenderer from '../Renderer';
import Field from '../Field';
import Snake from '../Snake';
import { GameInitializerModel } from './types';
import Segment from '../Segment';
import { SnakeModel } from '../Snake/types';
import { FieldModel } from '../Field/types';

export default class GameInitializer implements GameInitializerModel {

  private snake!: SnakeModel;
  private field!: FieldModel;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    // eslint-disable-next-line no-unused-vars
    private renderer: AbstractRenderer,
  ) {}

  moveLeft(): void {
    this.snake.moveLeft();
    this.renderer.render(this.field, this.snake);
  }

  moveRight(): void {
    this.snake.moveRight();
    this.renderer.render(this.field, this.snake);
  }

  moveUp(): void {
    this.snake.moveUp();
    this.renderer.render(this.field, this.snake);
  }

  moveDown(): void {
    this.snake.moveDown();
    this.renderer.render(this.field, this.snake);
  }

  createGame(): void {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    this.snake = new Snake(segments);
    this.field = new Field(0, 200, 0, 200);

    this.renderer.render(this.field, this.snake);
  }

}
