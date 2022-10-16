import { Keys } from './constants';
import GameFacade from './core/GameFacade';
import { RendererFactoryModel } from './core/RendererFactory/types';

/**
 * @description entrypoint
 */
export default function main(renderer: RendererFactoryModel): void {
  const game = new GameFacade(renderer.createRenderer());

  game.createGame(
    [
      [0, 10, 10, 10],
      [0, 20, 10, 10],
      [0, 30, 10, 10],
      [0, 40, 10, 10],
    ],
    [0, 200, 0, 200],
  );

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
