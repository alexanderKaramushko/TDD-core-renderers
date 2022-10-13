/* eslint-disable no-unused-vars */
export type SegmentModel = {
  get x(): number;
  get y(): number;
  get width(): number;
  get height(): number;
  move(x: number, y: number): void;
}

export type SegmentConstructor = {
  new(x: number, y: number, width: number, height: number): SegmentModel;
}
