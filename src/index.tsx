import React from 'react';
import ReactDOM from 'react-dom';
import PizzaConfigurator from './PizzaConfigurator';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <PizzaConfigurator />
  </Provider>,
  document.getElementById('react-mount')
);
