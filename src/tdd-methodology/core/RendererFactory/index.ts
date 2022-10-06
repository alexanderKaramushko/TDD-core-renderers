import AbstractRenderer from '../Renderer';
import { RendererFactoryModel } from './types';

export default abstract class RendererFactory implements RendererFactoryModel {

  abstract createRenderer(): AbstractRenderer;

}
