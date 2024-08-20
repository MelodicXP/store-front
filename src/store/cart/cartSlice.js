'use strict';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    numberOfItemsInCart: 0,
    itemsInCart: [],
  },
  reducers: {
    //** Name of actions to dispatch *//
    INCREMENT_NUM_CART_ITEMS: (state, action) => {
      state.itemsInCart.push(action.payload);
      state.numberOfItemsInCart = state.itemsInCart.length;
    },
    DECREMENT_NUM_CART_ITEMS: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter((_, index) => index !== action.payload.index);
      state.numberOfItemsInCart = state.itemsInCart.length;
    }
  }
});

// Export the actions for use in components
export const { INCREMENT_NUM_CART_ITEMS, DECREMENT_NUM_CART_ITEMS } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;

// let initialState = {
//   numberOfItemsInCart: 0,
//   itemsInCart: [] // Start with an empty array
// };

// const cartReducer = (state = initialState, action) => {
//   let { type, payload } = action;

//   switch (type) {
//     case 'ADD_TO_CART': {
//       const updatedItems = [...state.itemsInCart, payload];
//       return {
//         ...state,
//         itemsInCart: updatedItems,
//         numberOfItemsInCart: updatedItems.length
//       };
//     }
//     case 'DELETE_FROM_CART': {
//       const updatedItems = state.itemsInCart.filter((item, index) => index !== payload.index);
//       return {
//         ...state,
//         itemsInCart: updatedItems,
//         numberOfItemsInCart: updatedItems.length
//       };
//     }
//     default:
//       return state;
//   }
// }

// export default cartReducer;
