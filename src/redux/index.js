import { combineReducers, applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import app from './app';

const reducers = combineReducers({
  app,
});

const middlewares = [reduxPromise];

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
