import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './scss/index.scss';
import App from './App';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

