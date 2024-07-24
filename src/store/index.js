'use strict';

/* This format used every time setting up a new file */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { counter } from './counter';


let reducers = combineReducers({ counter });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;

