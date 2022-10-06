import { getAppContainer } from './constants';
import main from './main';
import NativeRenderer from './renderers/NativeRenderer/Renderer';

const renderers = [NativeRenderer];

/* eslint-disable no-undef */
describe('main', () => {
  test.each(renderers)(
    'should match snapshot for %p',
    (Renderer) => {
      document.body.innerHTML = '<div id="app"></div>';

      main(new Renderer());

      expect(getAppContainer()).toMatchSnapshot();
    },
  );
});
