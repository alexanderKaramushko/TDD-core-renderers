/* eslint-disable no-unused-vars */

import { FieldConstructorParameters } from '../Field/types';
import { SegmentConstructorParameters } from '../Segment/types';

export type GameFacadeModel = {
  createGame(
    segmentsParameters: SegmentConstructorParameters[],
    fieldParameters: FieldConstructorParameters,
  ): void;
  moveLeft(): void;
  moveRight(): void;
  moveUp(): void
  moveDown(): void;
}
