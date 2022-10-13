import Food from '.';
import { FoodModel } from './types';

let food: FoodModel = {} as FoodModel;

/* eslint-disable no-undef */
describe('Food', () => {
  beforeEach(() => {
    food = new Food(10, 10, 10, 10);
  });

  it('should get coords', () => {
    expect(food.getCoords()).toEqual([10, 10]);
  });

  it('should get size', () => {
    expect(food.getSize()).toEqual([10, 10]);
  });
});
