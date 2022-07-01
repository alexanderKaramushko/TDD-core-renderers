import { injectable } from 'inversify';
import { appContainer } from '../constants';
import { toPx } from '../utils';
import classes from './styles.module.scss';
import { FoodModel } from './types';

@injectable()
export default class Food implements FoodModel {

  private node: HTMLDivElement | null = null;
  private size = 20;

  public render(): void {
    this.node = document.createElement('div');

    this.node.className = classes.food;

    this.node.style.width = toPx(this.size);
    this.node.style.height = toPx(this.size);

    appContainer?.append(this.node);
  }

  public destroy(): void {
    this.node?.remove();
  }

  public getCoords(): DOMRect | undefined {
    return this.node?.getBoundingClientRect();
  }

  public generateInDimensions(x: number, y: number): void {
    if (this.node) {
      (this.node as HTMLDivElement).style.top = toPx((this.size - (y % this.size)) + y);
      (this.node as HTMLDivElement).style.left = toPx((this.size - (x % this.size)) + x);
    }
  }

}
