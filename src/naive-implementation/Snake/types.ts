import Segment from '../Segment';

export interface SnakeModel {
  addSegments(segments: Segment[]): void;
  addSegment(segment: Segment): void;
  render(): void;
  moveAt(segment: Segment, segmentIndex: number): void | never;
  hasIntersection(segmentToCheck: Segment): boolean;
  getSegments(): Segment[];
  get lastSegment(): Segment;
}
