'use strict';

let initialState = {
  numberOfItemsInCart: 0,
  itemsInCart: [] // Start with an empty array
};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART': {
      const updatedItems = [...state.itemsInCart, payload];
      return {
        ...state,
        itemsInCart: updatedItems,
        numberOfItemsInCart: updatedItems.length
      };
    }
    case 'DELETE_FROM_CART': {
      const updatedItems = state.itemsInCart.filter((item, index) => index !== payload.index);
      return {
        ...state,
        itemsInCart: updatedItems,
        numberOfItemsInCart: updatedItems.length
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
