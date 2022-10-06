import NativeRenderer from '.';
import AbstractRenderer from '../../core/Renderer';
import RendererFactory from '../../core/RendererFactory';

export default class Renderer extends RendererFactory {

  // eslint-disable-next-line class-methods-use-this
  createRenderer(): AbstractRenderer {
    return new NativeRenderer();
  }

}
