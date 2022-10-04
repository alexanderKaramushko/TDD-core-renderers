import { Keys } from './constants';
import { GameInitializerModel } from './core/GameInitializer/types';

/**
 * @description entrypoint
 */
export default function main(gameInitializer: GameInitializerModel): void {
  gameInitializer.createGame();

  let direction: Keys = Keys.DOWN;

  setInterval(() => {
    if (direction === Keys.LEFT) {
      gameInitializer.moveLeft();
    }

    if (direction === Keys.UP) {
      gameInitializer.moveUp();
    }

    if (direction === Keys.RIGHT) {
      gameInitializer.moveRight();
    }

    if (direction === Keys.DOWN) {
      gameInitializer.moveDown();
    }
  }, 1000);

  window.addEventListener('keypress', (event: KeyboardEvent) => {
    direction = event.key as Keys;
  });
}
