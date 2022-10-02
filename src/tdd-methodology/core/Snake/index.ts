/* eslint-disable no-unused-vars */
/* eslint-disable sort-keys */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { SegmentModel } from '../Segment/types';
import { getNextIndexFromTarget, getTargetByIndex, last } from '../../utils';
import { Directions, Direction, SnakeModel } from './types';

export default class Snake implements SnakeModel {

  private direction!: Direction;

  // eslint-disable-next-line no-useless-constructor
  constructor(private segments: SegmentModel[]) {}

  getCoords(): [number, number][] {
    return this.segments.map(({ x, y }) => [x, y]);
  }

  findIntersection(): [number, number] | null {
    const lastSegment = last(this.segments);
    const intersectedSegment = this.segments
      .find(({ x, y }) => lastSegment.x === x && lastSegment.y === y);

    if (!intersectedSegment) {
      return null;
    }

    return [intersectedSegment.x, intersectedSegment.y];
  }

  private setDirection(direction: Direction): void {
    this.direction = direction;
  }

  private moveSegment(segment: SegmentModel): void {
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

  private moveByDirection(segment: SegmentModel): void {
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

  private move(): void {
    this.segments.forEach((segment) => {
      this.moveByDirection(segment);
    });
  }

  moveDown(): void {
    if (this.direction === 'up') {
      return;
    }

    this.setDirection('down');
    this.move();
  }

  moveUp(): void {
    if (this.direction === 'down') {
      return;
    }

    this.setDirection('up');
    this.move();
  }

  moveRight(): void {
    if (this.direction === 'left') {
      return;
    }

    this.setDirection('right');
    this.move();
  }

  moveLeft(): void {
    if (this.direction === 'right') {
      return;
    }

    this.setDirection('left');
    this.move();
  }

}
