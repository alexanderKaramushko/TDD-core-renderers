/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { getAppContainer } from '../../constants';
import { FieldModel } from '../../core/Field/types';
import { FoodModel } from '../../core/Food/types';
import AbstractRenderer from '../../core/Renderer';
import { SnakeModel } from '../../core/Snake/types';

import './style.scss';

export default class NativeRenderer extends AbstractRenderer {

  buildField(field: FieldModel): HTMLDivElement {
    const _field = document.createElement('div');

    const [[x1, y1], [x2, y2]] = field.getCoords();

    _field.id = 'field';
    _field.style.left = `${x1}px`;
    _field.style.top = `${y1}px`;

    _field.style.width = `${x2 - x1}px`;
    _field.style.height = `${y2 - y1}px`;

    return _field;
  }

  buildSnake(snake: SnakeModel): DocumentFragment {
    const snakeFragment = document.createDocumentFragment();

    const coords = snake.getCoords();

    coords.forEach(([x, y]) => {
      const segment = document.createElement('div');

      segment.style.left = `${x}px`;
      segment.style.top = `${y}px`;

      segment.classList.add('segment');

      snakeFragment.appendChild(segment);
    });

    return snakeFragment;
  }

  buildFood(food: FoodModel): Element {
    const [x, y] = food.getCoords();
    const [width, height] = food.getSize();

    const _food = document.createElement('div');

    _food.style.left = `${x}px`;
    _food.style.top = `${y}px`;

    _food.style.width = `${width}px`;
    _food.style.height = `${height}px`;

    _food.classList.add('food');

    return _food;
  }

  /**
   * @override
   */
  // eslint-disable-next-line class-methods-use-this
  afterBuildHook(field: Element, snake: DocumentFragment, food: Element): void {
    field.appendChild(snake);
    field.appendChild(food);

    getAppContainer()?.append(field);
  }

}
