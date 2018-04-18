import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import { INITIAL_STATE } from './reducers/products';

const loggerMiddleware = createLogger();
const middlewares = [
  promiseMiddleware,
  thunkMiddleware,
  loggerMiddleware
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(
    applyMiddleware(...middlewares)
  ),
);

export default store;
