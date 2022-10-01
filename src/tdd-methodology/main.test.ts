import { getAppContainer } from './constants';
import main from './main';

/* eslint-disable no-undef */
describe('main', () => {
  it('should take app snapshot to detect undesirable changes', () => {
    document.body.innerHTML = '<div id="app"></div>';

    main();

    expect(getAppContainer()).toMatchSnapshot();
  });
});
