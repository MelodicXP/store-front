'use strict';

export const showCategory = (category) => {
  return {
    type: 'SHOW_CATEGORY',
    payload: category
  }
}

export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}

export const deleteFromCart = (index) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: index
  }
}
