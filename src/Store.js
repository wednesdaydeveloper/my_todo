import { reducer } from './reducers/index.js';


//  Store
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger();

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);