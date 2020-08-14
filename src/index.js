import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';

import { store } from './redux';
import App from './App';
// import { initializeLanguage } from './configs/i18next';

const container = document.querySelector('#app');

const initializeApp = async () => {
  // await initializeLanguage();

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    container,
  );
};

initializeApp();
