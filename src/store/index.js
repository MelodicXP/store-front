'use strict';

import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice.js';
import productsSlice from './products/productsSlice.js';
import cartSlice from './cart/cartSlice.js';

// Configure store using Redux Toolkit
const store = configureStore({
  reducer: {
    categoriesSlice,
    productsSlice,
    cartSlice
  },
  // Middleware is automatically added including thunk.
  // devTools: process.env.NODE_ENV !== 'production', 
  // Enable Redux DevTools in development mode
});

export default store;