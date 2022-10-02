export type SegmentModel = {
  get x(): number;
  get y(): number;
  get width(): number;
  get height(): number;
  move(x: number, y: number): void;
}
