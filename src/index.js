import React from 'react';
import './css/semantic-ui/semantic.min.css';
import './index.css';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <Router>
      <Route to="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
