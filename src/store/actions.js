'use strict';

import axios from 'axios';


let url = `${import.meta.env.VITE_API}/products`;

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

export const deleteFromCart = (item, index) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: { item, index }
  }
}

export const getProducts = () => async (dispatch) => {
  const response = await axios.get(url);
  dispatch(getProductsAction(response.data));
}

function getProductsAction(data) {
  return {
    type: 'GET',
    payload: data
  }
}