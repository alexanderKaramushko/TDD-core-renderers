/** Todo React part will be used for settings only */

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import App from './App';
// const mountNode = document.getElementById('app');

// ReactDOM.render(<App />, mountNode);

import { initCompositionRoot } from './compositionRoot';
import { DITypes } from './constants';
import { FieldFacadeModel } from './FieldFacade/types';
import './styles.scss';

const compositionRoot = initCompositionRoot();

const fieldFacade = compositionRoot.get<FieldFacadeModel>(DITypes.FieldFacade);

fieldFacade.init();
