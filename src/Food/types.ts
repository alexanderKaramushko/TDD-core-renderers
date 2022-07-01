export interface FoodModel {
  render(): void;
  getCoords(): DOMRect | undefined;
  destroy(): void;
  generateInDimensions(x: number, y: number): void;
}
