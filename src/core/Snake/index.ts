import Segment from '../Segment';

export default class Snake {

  getSegments(): unknown[] {
    return [
      new Segment(),
      new Segment(),
      new Segment(),
      new Segment(),
      new Segment(),
      new Segment(),
    ];
  }

}
