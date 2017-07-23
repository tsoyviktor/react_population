import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './rootReducer';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux'


export const history = createHistory();
const initialState = {};

const middleware = [
  thunk,
  routerMiddleware(history)
];


export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

global.store = store;
