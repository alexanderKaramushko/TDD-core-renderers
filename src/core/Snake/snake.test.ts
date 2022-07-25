import Snake from '.';
import Segment from '../Segment';

let snake: null | Snake = null;

/* eslint-disable no-undef */
describe('Snake', () => {
  beforeEach(() => {
    snake = new Snake();
  });

  it('should get segments', () => {
    const segments = (snake as Snake).getSegments();

    expect(segments).toEqual([
      new Segment(),
      new Segment(),
      new Segment(),
      new Segment(),
      new Segment(),
      new Segment(),
    ]);
  });
});
