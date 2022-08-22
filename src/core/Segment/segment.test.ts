import Segment from '.';

let segment: Segment = {} as Segment;

/* eslint-disable no-undef */
describe('Segment', () => {
  beforeEach(() => {
    segment = new Segment(0, 0, 10, 10);
  });

  it('should move segment', () => {
    segment.move(5, 5);

    expect(segment.x).toEqual(5);
    expect(segment.y).toEqual(5);
  });
});
