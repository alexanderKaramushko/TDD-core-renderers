import { getAppContainer } from './constants';
import Field from './Field';
import Renderer from './Renderer/Renderer';
import Segment from './Segment';
import Snake from './Snake';

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

  const renderer = new Renderer(snake, field);

  getAppContainer()?.appendChild(renderer.render());
}