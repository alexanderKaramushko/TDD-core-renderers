import Segment from '../Segment';

export interface FieldFacadeModel {
  intersectsWithFood(segment: Segment): boolean;
  addSegmentIfFoodEaten(): void;
  move(): void;
  updateDir(event: KeyboardEvent): void;
  init(): void;
}
