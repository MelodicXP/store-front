'use strict';

/* This format used every time setting up a new file */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counter from './counter.js'; // Name as you please'counter' 'counterReducer', etc...

let reducers = combineReducers({ counter });

const store = createStore(reducers, composeWithDevTools());

export default store;

