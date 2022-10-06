import { Keys } from './constants';
import GameInitializer from './core/GameInitializer';
import { RendererFactoryModel } from './core/RendererFactory/types';

/**
 * @description entrypoint
 */
export default function main(renderer: RendererFactoryModel): void {
  const game = new GameInitializer(renderer.createRenderer());

  game.createGame();

  let direction: Keys = Keys.DOWN;

  setInterval(() => {
    if (direction === Keys.LEFT) {
      game.moveLeft();
    }

    if (direction === Keys.UP) {
      game.moveUp();
    }

    if (direction === Keys.RIGHT) {
      game.moveRight();
    }

    if (direction === Keys.DOWN) {
      game.moveDown();
    }
  }, 1000);

  window.addEventListener('keypress', (event: KeyboardEvent) => {
    direction = event.key as Keys;
  });
}
