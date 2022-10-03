import { GameInitializerModel } from './core/GameInitializer/types';

/**
 * @description entrypoint
 */
export default function main(gameInitializer: GameInitializerModel): void {
  gameInitializer.createGame();
}
