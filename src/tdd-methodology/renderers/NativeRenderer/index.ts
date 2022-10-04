/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import { getAppContainer } from '../../constants';
import { FieldModel } from '../../core/Field/types';
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

      segment.className = 'segment';

      snakeFragment.appendChild(segment);
    });

    return snakeFragment;
  }

  /**
   * @override
   */
  // eslint-disable-next-line class-methods-use-this
  afterBuildHook(field: Element, snake: DocumentFragment): void {
    field.appendChild(snake);
    getAppContainer()?.append(field);
  }

}
