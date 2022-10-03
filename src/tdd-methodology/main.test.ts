import { getAppContainer } from './constants';
import GameInitializer from './core/GameInitializer';
import main from './main';
import NativeRenderer from './renderers/NativeRenderer';

/* eslint-disable no-undef */
describe('main', () => {
  it('should take app snapshot to detect undesirable changes', () => {
    document.body.innerHTML = '<div id="app"></div>';

    main(new GameInitializer(new NativeRenderer()));

    expect(getAppContainer()).toMatchSnapshot();
  });
});
