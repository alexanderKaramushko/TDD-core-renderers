import AbstractRenderer from '../Renderer';
import Field from '../Field';
import Snake from '../Snake';
import { GameInitializerModel } from './types';
import Segment from '../Segment';
import { getAppContainer } from '../../constants';

export default class GameInitializer implements GameInitializerModel {

  // eslint-disable-next-line no-useless-constructor
  constructor(
    // eslint-disable-next-line no-unused-vars
    private renderer: AbstractRenderer,
  ) {}

  createGame(): void {
    const segments = [
      new Segment(0, 10, 10, 10),
      new Segment(0, 20, 10, 10),
      new Segment(0, 30, 10, 10),
      new Segment(0, 40, 10, 10),
    ];

    const snake = new Snake(segments);
    const field = new Field(0, 200, 0, 200);

    getAppContainer()?.appendChild(this.renderer.render(field, snake));
  }

}
