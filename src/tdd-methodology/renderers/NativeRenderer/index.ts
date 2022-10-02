/* eslint-disable no-unused-vars */
import AbstractRenderer from '../../core/Renderer';

import './style.scss';

export default class NativeRenderer extends AbstractRenderer {

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

  /**
   * @override
   */
  // eslint-disable-next-line class-methods-use-this
  afterBuildHook(field: Element, snake: DocumentFragment): void {
    field.appendChild(snake);
  }

}
