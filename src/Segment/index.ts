import { injectable } from 'inversify';
import { appContainer } from '../constants';
import { toPx } from '../utils';

import classes from './styles.module.scss';
import { SegmentModel } from './types';

export type DirType = 'left' | 'top' | 'right' | 'bottom';

export type Positions = Record<'left' | 'top', string>;

@injectable()
export default class Segment implements SegmentModel {

  public dir: DirType = 'bottom';
  public node: HTMLDivElement | undefined;

  public nodeSize = 20;

  constructor(dir: DirType) {
    this.node = document.createElement('div');
    this.dir = dir;
  }

  public getPositions(segment: Segment | undefined, before = false): Positions | null | never {
    if (!segment) {
      return null;
    }

    const rect = segment.node?.getBoundingClientRect();

    if (!rect) {
      throw new Error('No segment coords were found!');
    }

    if (!this.node) {
      throw new Error('No segment was found!');
    }

    if (this.dir === 'left') {
      return {
        left: toPx(before ? rect.left + this.nodeSize : rect.left - this.nodeSize),
        top: toPx(rect.top),
      };
    }

    if (this.dir === 'top') {
      return {
        left: toPx(rect.left),
        top: toPx(before ? rect.top + this.nodeSize : rect.top - this.nodeSize),
      };
    }

    if (this.dir === 'right') {
      return {
        left: toPx(before ? rect.left - this.nodeSize : rect.left + this.nodeSize),
        top: toPx(rect.top),
      };
    }

    if (this.dir === 'bottom') {
      return {
        left: toPx(rect.left),
        top: toPx(before ? rect.top - this.nodeSize : rect.top + this.nodeSize),
      };
    }

    return null;
  }

  public getCoords(): DOMRect | undefined {
    return this.node?.getBoundingClientRect();
  }

  public render(): void {
    appContainer?.append(this.node as HTMLDivElement);
  }

  public updateStyles(segment: Segment | undefined, options: { insertBefore?: boolean } = {}): this {
    const { insertBefore } = options;

    if (!this.node) {
      throw new Error('No node was found!');
    }

    const { left = 'auto', top = 'auto' } = this.getPositions(segment, insertBefore) ?? {};

    this.node.style.left = left;
    this.node.style.top = top;

    this.node.style.width = toPx(this.nodeSize);
    this.node.style.height = toPx(this.nodeSize);

    this.node.className = classes.segment;

    return this;
  }

  public updatePositions(segment: Segment): this | never {
    if (!this.node) {
      throw new Error('No node was found!');
    }

    const { left = 'auto', top = 'auto' } = this.getPositions(segment) ?? {};

    this.node.style.left = left;
    this.node.style.top = top;

    return this;
  }

  public updateDir(newDirType: DirType): void | never {
    this.dir = newDirType;
  }

  public moveTo(positions: { left?: number; top?: number }): this {
    if (this.node) {
      const { left, top } = positions;

      this.node.style.left = left !== undefined ? toPx(left) : toPx(this.getCoords()?.left);
      this.node.style.top = top !== undefined ? toPx(top) : toPx(this.getCoords()?.top);
    }

    return this;
  }

}
