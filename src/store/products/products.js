'use strict';

let initialState = {
  products: [],
  filteredProducts: [],
};

// Reducer function
const productReducer = (state = initialState, action) => {
  // Deconstruct to pull type and payload from action object
  let { type, payload } = action;

  switch (type) {
    case 'SHOW_CATEGORY':
      return {
        ...state,
        filteredProducts: state.products.filter((item) => {
          return item.category === payload;
        })
      };
    case 'ADD_TO_CART': {
      const updatedProducts = state.products.map((product) => {
        if (product.name === payload.name) {
          return {
            ...product,
            inventory: product.inventory > 0 ? product.inventory - 1 : 0
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts
      };
    }
    case 'DELETE_FROM_CART': {
      const updatedProducts = state.products.map((product) => {
        if (product.name === payload.item.name) {
          return {
            ...product,
            inventory: product.inventory + 1
          };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts
      };
    }
    case 'GET':
      return {
        ...state,
        products: payload
      };
    default:
      return state;
  }
}

export default productReducer;
