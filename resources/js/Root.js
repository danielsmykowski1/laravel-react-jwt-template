import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MyApp from './MyApp';
import { store } from './store';

console.log(store);

ReactDOM.render((
  <Provider store={store}>
    <MyApp />
  </Provider>
), document.getElementById('app'));
