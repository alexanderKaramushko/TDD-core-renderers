import { getAppContainer } from './constants';
import Field from './core/Field';
import NativeRenderer from './renderers/NativeRenderer';
import Segment from './core/Segment';
import Snake from './core/Snake';

/**
 * @description entrypoint
 */
export default function main(): void {
  const segments = [
    new Segment(0, 10, 10, 10),
    new Segment(0, 20, 10, 10),
    new Segment(0, 30, 10, 10),
    new Segment(0, 40, 10, 10),
  ];

  const snake = new Snake(segments);
  const field = new Field(0, 200, 0, 200);

  // const snakeFacade = new SnakeFacade();

  const renderer = new NativeRenderer(snake, field);

  // pass renderer to Snake
  // snakeFacade.initSnake();
  // snakeFacade.initRenderer(renderer);
  // snakeFacade.startMove();

  getAppContainer()?.appendChild(renderer.render());
}
