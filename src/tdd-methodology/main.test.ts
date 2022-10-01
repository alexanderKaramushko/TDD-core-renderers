import { getAppContainer } from './constants';
import main from './main';

/* eslint-disable no-undef */
describe('main', () => {
  it('should move segment', () => {
    document.body.innerHTML = '<div id="app"></div>';

    main();

    expect(getAppContainer()).toMatchSnapshot();
  });
});
