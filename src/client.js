import 'babel-polyfill';
import 'es6-promise/auto';
import React from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App/App';

axios.defaults.baseURL = window.__BASEURL__;
const rootElement = document.getElementById('root');
const store = configureStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
