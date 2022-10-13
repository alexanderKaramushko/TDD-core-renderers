import GameFacade from '.';
import Snake from '../Snake';

let gameFacade: GameFacade = {} as GameFacade;

const Renderer = jest.fn().mockImplementation(() => ({
  buildField: jest.fn(),
  buildFood: jest.fn(),
  buildSnake: jest.fn(),
  render: jest.fn(),
}));

jest.mock('../Food');

/* eslint-disable no-undef */
describe('GameFacade', () => {
  beforeAll(() => {
    jest.spyOn(Snake.prototype, 'addSegment').mockImplementation();
  });

  beforeEach(() => {
    gameFacade = new GameFacade(new Renderer());
    gameFacade.createGame();
  });

  it('should detect intersection with food', () => {
    gameFacade.moveDown();

    expect(gameFacade.isFoodEaten()).toBe(true);
  });

  it('should add new segment if intersection with food', () => {
    gameFacade.moveDown();

    expect(Snake.prototype.addSegment).toBeCalled();
  });
});