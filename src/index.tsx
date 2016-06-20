// import 'es5-shim';
// import 'es6-shim';
// import 'es6-promise';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configure-store';

// Global styles
import './styles/index.css';

const store = configureStore({});
const history = syncHistoryWithStore(hashHistory, store);
import defaultRoutes from './routes';
const routes = defaultRoutes(store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);
