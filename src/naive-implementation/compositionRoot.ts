import 'reflect-metadata';

import { Container } from 'inversify';
import { DITypes } from './constants';

import FieldFacade from './FieldFacade';
import Food from './Food/Food';
import Snake from './Snake';
import Segment from './Segment';
import { SnakeModel } from './Snake/types';
import { FoodModel } from './Food/types';
import { SegmentModel } from './Segment/types';

export function initCompositionRoot(): Container {
  const compositionRoot = new Container();

  compositionRoot.bind<FieldFacade>(DITypes.FieldFacade).to(FieldFacade);
  compositionRoot.bind<SnakeModel>(DITypes.Snake).to(Snake);
  compositionRoot.bind<FoodModel>(DITypes.Food).to(Food);
  compositionRoot.bind<SegmentModel>(DITypes.Segment).toConstructor(Segment);

  return compositionRoot;
}
