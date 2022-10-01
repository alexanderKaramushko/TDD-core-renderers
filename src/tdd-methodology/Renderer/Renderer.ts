/* eslint-disable no-unused-vars */
import { FieldModel } from '../Field/types';
import { SnakeModel } from '../Snake/types';

import './style.scss';

export default class Renderer {

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private snake: SnakeModel,
    private field: FieldModel,
  ) {}

  buildField(): HTMLDivElement {
    const field = document.createElement('div');

    const [[x1, y1], [x2, y2]] = this.field.getCoords();

    field.id = 'field';
    field.style.left = `${x1}px`;
    field.style.top = `${y1}px`;

    field.style.width = `${x2 - x1}px`;
    field.style.height = `${y2 - y1}px`;

    return field;
  }

  buildSnake(): DocumentFragment {
    const snakeFragment = document.createDocumentFragment();

    const coords = this.snake.getCoords();

    coords.forEach(([x, y]) => {
      const segment = document.createElement('div');

      segment.style.left = `${x}px`;
      segment.style.top = `${y}px`;

      segment.className = 'segment';

      snakeFragment.appendChild(segment);
    });

    return snakeFragment;
  }

  render(): HTMLDivElement {
    const field = this.buildField();
    const snake = this.buildSnake();

    field.appendChild(snake);

    return field;
  }

}
