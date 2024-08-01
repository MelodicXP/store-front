'use strict';

/* This format used every time setting up a new file */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import categories from './categories/categories.js';
import products from './products/products.js'; // Name as you please'counter' 'counterReducer', etc...
import cart from './cart/cart.js';

let reducers = combineReducers({ categories, products, cart });

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers, composedEnhancers);

export default store;
