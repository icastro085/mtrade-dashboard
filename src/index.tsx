import React from 'react';
import { render } from 'react-dom';
import toastr from 'toastr';

import { GraphQLClient, ClientContext } from 'graphql-hooks';

import './scss/index.scss';

import App from './App';

const client = new GraphQLClient({
  url: 'http://localhost:4000/data-resource',
});

const container = document.querySelector('#app');

const initializeApp = async () => {
  render(
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>,
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
