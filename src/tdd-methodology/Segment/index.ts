/* eslint-disable no-underscore-dangle */
export default class Segment {

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private _x: number,
    private _y: number,
    private _width: number,
    private _height: number,
  ) {}

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  move(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }

}
