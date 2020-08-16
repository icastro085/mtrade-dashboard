import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import toastr from 'toastr';

import './scss/index.scss';

import { store } from './redux';
import App from './App';
import { initializeLanguage } from './locale';

const container = document.querySelector('#app');

const initializeApp = async () => {
  await initializeLanguage();

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    container,
  );
};

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  positionClass: 'toast-top-right',
  progressBar: false,
  preventDuplicates: false,
  onclick: null,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 1500,
  extendedTimeOut: 1000,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

global.toastr = toastr;

initializeApp();
