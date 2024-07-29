'use strict';

let initialState = {
  numberOfItemsInCart: 4
};

const cartReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SHOW_NUMBER_OF_ITEMS_IN_CART':
      return {
        ...state,
        numberOfItemsInCart: state.numberOfItemsInCart
      };
    default:
      return state;
  }
}

export default cartReducer;