/* eslint-disable sort-keys */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import Segment from '../Segment';
import { getNextIndexFromTarget, getTargetByIndex, last } from '../utils';
import { Directions, Direction } from './types';

export default class Snake {

  private direction!: Direction;

  // eslint-disable-next-line no-useless-constructor
  constructor(private segments: Segment[]) {}

  setDirection(direction: Direction): void {
    this.direction = direction;
  }

  getCoords(): number[][] {
    return this.segments.map(({ x, y }) => [x, y]);
  }

  moveSegment(segment: Segment): void {
    const moveFns: Directions = {
      up: (): void => {
        segment.move(
          segment.x,
          segment.y - segment.height,
        );
      },
      down: (): void => {
        segment.move(
          segment.x,
          segment.y + segment.height,
        );
      },
      right: (): void => {
        segment.move(
          segment.x + segment.width,
          segment.y,
        );
      },
      left: (): void => {
        segment.move(
          segment.x - segment.width,
          segment.y,
        );
      },
    };

    const moveFn = moveFns[this.direction];

    if (moveFn) {
      moveFn();
    }
  }

  moveByDirection(segment: Segment): void {
    const lastSegment = last(this.segments);

    if (segment === lastSegment) {
      this.moveSegment(segment);
    } else {
      const nextSegment = getTargetByIndex(this.segments, segment, getNextIndexFromTarget);

      if (!nextSegment) {
        return;
      }

      segment.move(nextSegment.x, nextSegment.y);
    }
  }

  move(): void {
    this.segments.forEach((segment) => {
      this.moveByDirection(segment);
    });
  }

}
