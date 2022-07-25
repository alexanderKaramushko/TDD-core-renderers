import Segment from '.';

let segment: null | Segment = null;

/* eslint-disable no-undef */
describe('Segment', () => {
  beforeEach(() => {
    segment = new Segment();
  });

  it('should move segment', () => {
    const coords = (segment as Segment).move(5, 5);

    expect(coords).toEqual([5, 5]);
  });
});
