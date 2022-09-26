import { injectable } from 'inversify';
import Segment from '../Segment';
import { SnakeModel } from './types';

@injectable()
export default class Snake implements SnakeModel {

  private segments: Segment[] = [];

  get lastSegment(): Segment {
    return this.segments[this.segments.length - 1];
  }

  public getSegments(): Segment[] {
    return this.segments;
  }

  public addSegments(segments: Segment[]): void {
    this.segments = segments;
  }

  public addSegment(segment: Segment): void {
    this.segments = [segment, ...this.segments];
  }

  public render(): void {
    this.segments.forEach((segment, index) => {
      segment.updateStyles(this.segments[index - 1]).render();
    });
  }

  public moveAt = (segment: Segment, segmentIndex: number): void | never => {
    const segmentToInsertAfter = this.segments[segmentIndex];
    const segmentToInsertIndex = this.segments.indexOf(segment);

    if (segmentToInsertIndex === -1 || !segmentToInsertAfter.node) {
      throw new Error('Segment target was not found!');
    }

    const newSegments = [...this.segments];

    newSegments.splice(segmentToInsertIndex, 1);
    newSegments.splice(segmentIndex, 1, segment);

    this.segments = newSegments;

    segment.updatePositions(segmentToInsertAfter);
  }

  public hasIntersection(segmentToCheck: Segment): boolean {
    if (!this.segments.length) {
      throw new Error('No segments to check intersection with!');
    }

    const segmentIndex = this.segments.indexOf(segmentToCheck);

    if (segmentIndex === -1) {
      throw new Error('Segment to check intersection with is`t included in segments!');
    }

    const segmentToCheckCoords = segmentToCheck.getCoords();

    return this.segments.slice(0, segmentIndex).some((segment) => {
      const currCoords = segment.getCoords();

      return currCoords?.x === segmentToCheckCoords?.x && currCoords?.y === segmentToCheckCoords?.y;
    });
  }

}
