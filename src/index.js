import React from 'react';
import './css/semantic-ui/semantic.min.css';
import './index.css';
import { render } from 'react-dom';
import { createStore } from 'redux';
//import reducers from './reducers'
import Root from './components/Root';

import registerServiceWorker from './registerServiceWorker';

//const store = createStore(reducers)

render(<Root /*store={store}*/ />, document.getElementById('root'));
registerServiceWorker();
