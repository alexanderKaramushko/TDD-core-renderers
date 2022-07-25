export default class Segment {

  private x!: number;
  private y!: number;

  move(x: number, y: number): [number, number] {
    this.x = x;
    this.y = y;

    return [x, y];
  }

}
