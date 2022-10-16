/* eslint-disable no-unused-vars */
export type SegmentModel = {
  get x(): number;
  get y(): number;
  get width(): number;
  get height(): number;
  move(x: number, y: number): void;
}

export type SegmentConstructor = {
  new(_x: number, _y: number, _width: number, _height: number): SegmentModel;
}

export type SegmentConstructorParameters = ConstructorParameters<SegmentConstructor>;
