/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */

import { FieldModel } from '../Field/types';
import { SnakeModel } from '../Snake/types';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default abstract class AbstractRenderer {

  // eslint-disable-next-line no-useless-constructor
  constructor(
      protected snake: SnakeModel,
      protected field: FieldModel,
  ) {}

  abstract buildField(): Element;

  abstract buildSnake(): DocumentFragment;

  /**
   * template method
   */
  render(): Element {
    const field = this.buildField();
    const snake = this.buildSnake();

    this.afterBuildHook(field, snake);

    return field;
  }

  afterBuildHook(field: Element, snake: DocumentFragment): void {}

}
