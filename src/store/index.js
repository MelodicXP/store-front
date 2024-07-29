'use strict';

/* This format used every time setting up a new file */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categories from './categories/categories.js';
import products from './products/products.js' // Name as you please'counter' 'counterReducer', etc...

let reducers = combineReducers({ categories, products });

const store = createStore(reducers, composeWithDevTools());

export default store;

