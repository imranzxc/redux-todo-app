import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { save } from 'redux-localstorage-simple';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/* eslint-enable */

const configureStore = (preloadState) => createStore(rootReducer, preloadState, composeEnhancers(
  applyMiddleware(save({namespace: 'todo-list'}))
));

const store = configureStore({});

export default store;
