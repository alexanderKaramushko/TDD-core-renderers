import { Keys } from './constants';
import GameFacade from './core/GameFacade';
import { RendererFactoryModel } from './core/RendererFactory/types';

/**
 * @description entrypoint
 */
export default function main(renderer: RendererFactoryModel): void {
  const game = new GameFacade(renderer.createRenderer());

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
  }, 1000000);

  window.addEventListener('keypress', (event: KeyboardEvent) => {
    direction = event.key as Keys;
  });
}
