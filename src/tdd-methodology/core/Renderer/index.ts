/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */

import { FieldModel } from '../Field/types';
import { FoodModel } from '../Food/types';
import { SnakeModel } from '../Snake/types';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default abstract class AbstractRenderer {

  abstract buildField(field: FieldModel): Element;

  abstract buildSnake(snake: SnakeModel): DocumentFragment;

  abstract buildFood(food: FoodModel): Element;

  /**
   * template method
   */
  render(field: FieldModel, snake: SnakeModel, food: FoodModel): Element {
    const _field = this.buildField(field);
    const _snake = this.buildSnake(snake);
    const _food = this.buildFood(food);

    this.afterBuildHook(_field, _snake, _food);

    return _field;
  }

  afterBuildHook(field: Element, snake: DocumentFragment, food: Element): void {}

}
