import 'babel-polyfill';
// react
import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index.js';
// component
import App from './App';

// THE STORE
const store = createStore(allReducers);

// NOTE: Provider makes the STORE accessible to main App component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
