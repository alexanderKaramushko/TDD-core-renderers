import AbstractRenderer from '../Renderer';

export type RendererFactoryModel = {
  createRenderer(): AbstractRenderer;
}
