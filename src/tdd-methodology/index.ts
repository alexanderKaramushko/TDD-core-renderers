import GameInitializer from './core/GameInitializer';
import main from './main';
import NativeRenderer from './renderers/NativeRenderer';

// todo use fabric method Renderer.nativeRenderer()
// to prevent straight reference to core
// GameInitializer is an entry point to core
main(new GameInitializer(new NativeRenderer()));
