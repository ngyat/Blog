import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import Saber from './containers/App';

const store = configureStore();

render(
  <Provider store={store}>
    <Saber />
  </Provider>,
  document.getElementById('content')
);
