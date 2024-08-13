'use strict';

import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categories.js';
import products from './products/products.js';
import cart from './cart/cart.js';

// Configure store using Redux Toolkit
const store = configureStore({
  reducer: {
    categoriesSlice,
    products,
    cart
  },
  // Middleware is automatically added including thunk.
  // devTools: process.env.NODE_ENV !== 'production', 
  // Enable Redux DevTools in development mode
});

export default store;