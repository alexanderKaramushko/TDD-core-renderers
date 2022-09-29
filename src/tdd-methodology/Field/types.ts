import { SnakeModel } from "../Snake/types";

export type FieldModel = {
  findIntersection(snake: SnakeModel): [number, number] | null;
}
