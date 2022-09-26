import { injectable, inject } from 'inversify';
import { appContainer, DITypes, Keys } from '../constants';
import type { FoodModel } from '../Food/types';
import Segment, { DirType } from '../Segment';
import type { SnakeModel } from '../Snake/types';
import { FieldFacadeModel } from './types';

@injectable()
export default class FieldFacade implements FieldFacadeModel {

  @inject(DITypes.Snake) private snake!: SnakeModel;
  @inject(DITypes.Food) private food!: FoodModel;
  @inject(DITypes.Segment) private Segment!: typeof Segment;

  private dir: DirType = 'bottom';

  private fieldSize = 320;

  public intersectsWithFood(segment: Segment): boolean {
    const foodCoords = this.food?.getCoords();
    const segmentCoords = segment?.getCoords();

    return segmentCoords?.x === foodCoords?.x && segmentCoords?.y === foodCoords?.y;
  }

  public addSegmentIfFoodEaten(): void {
    const segments = this.snake.getSegments();
    const { lastSegment } = this.snake;

    if (this.intersectsWithFood(lastSegment)) {
      const segment = new this.Segment(segments[0].dir);

      segment
        .updateStyles(segments[0], { insertBefore: true })
        .render();

      this.snake.addSegment(segment);

      this.food.destroy();
      this.renderFood();
    }
  }

  public move(): void {
    const appCoords = appContainer?.getBoundingClientRect() as DOMRect;

    const intervalId = setInterval(() => {
      const { lastSegment } = this.snake;
      const segments = this.snake.getSegments();

      this.addSegmentIfFoodEaten();

      const lastSegmentCoords = lastSegment?.getCoords();

      if (!lastSegmentCoords) {
        return;
      }

      if (lastSegment.dir === 'bottom' && lastSegmentCoords.bottom > appCoords.bottom) {
        lastSegment.moveTo({ top: 0 });
      } else if (lastSegment.dir === 'top' && lastSegmentCoords.top < appCoords.top) {
        lastSegment.moveTo({ top: appCoords.bottom - lastSegment.nodeSize });
      } else if (lastSegment.dir === 'left' && lastSegmentCoords.left < appCoords.left) {
        lastSegment.moveTo({ left: appCoords.right - lastSegment.nodeSize });
      } else if (lastSegment.dir === 'right' && lastSegmentCoords.right > appCoords.right) {
        lastSegment.moveTo({ left: 0 });
      } else {
        segments[0].updateDir(this.dir);
        this.snake.moveAt(segments[0], segments.length - 1);
      }

      if (this.snake.hasIntersection(lastSegment)) {
        clearInterval(intervalId);
        document.body.innerHTML = 'Game over';
      }
    }, 1000);
  }

  public updateDir = (event: KeyboardEvent): void => {
    if (event.key === Keys.LEFT) {
      this.dir = 'left';
    }

    if (event.key === Keys.TOP) {
      this.dir = 'top';
    }

    if (event.key === Keys.RIGHT) {
      this.dir = 'right';
    }

    if (event.key === Keys.BOTTOM) {
      this.dir = 'bottom';
    }
  }

  public init(): void {
    this.renderSnake();
    this.renderFood();

    this.move();

    window.removeEventListener('keypress', this.updateDir);
    window.addEventListener('keypress', this.updateDir);
  }

  renderSnake(): void {
    this.snake.addSegments([
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
      new this.Segment('bottom'),
    ]);
    this.snake.render();
  }

  public renderFood(): void {
    this.food.render();

    const randomY = Math.random() * this.fieldSize;
    const randomX = Math.random() * this.fieldSize;

    this.food.generateInDimensions(randomX, randomY);
  }

}
