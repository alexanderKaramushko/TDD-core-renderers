/* eslint-disable no-unused-vars */
import { FoodModel } from './types';

export default class Food implements FoodModel {

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private x: number,
    private y: number,
    private width: number,
    private height: number,
  ) {}

  getCoords(): number[] {
    return [this.x, this.y];
  }

  getSize(): [number, number] {
    return [this.width, this.height];
  }

}
