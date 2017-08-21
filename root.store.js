import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import { rootReducer } from './root.reducer';

const middlewares = [createLogger()];
const enhancers = autoRehydrate();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), enhancers)
);
