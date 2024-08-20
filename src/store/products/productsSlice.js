import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let url = `${import.meta.env.VITE_API}/products`;

// Thunk to fetch products
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null
  },
  reducers: {
    //** name of action to dispatch, state action **//
    SHOW_PRODUCTS_BY_CATEGORY: (state, action) => {
      state.filteredProducts = state.products.filter((item) => {
        return item.category.toLowerCase() === action.payload.toLowerCase();
      });
    },
    ADD_TO_CART: (state, action) => {
      const product = state.products.find((product) => product.name === action.payload.name);
      if (product && product.inventory > 0 ) {
        product.inventory -= 1;
      }
    },
    DELETE_FROM_CART: (state, action) => {
      const product = state.products.find((product) => product.name === action.payload.item.name);
      if (product) {
        product.inventory += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  SHOW_PRODUCTS_BY_CATEGORY,
  ADD_TO_CART,
  DELETE_FROM_CART,
} = productsSlice.actions;
export default productsSlice.reducer;

// 'use strict';

// let initialState = {
//   products: [],
//   filteredProducts: [],
// };

// // Reducer function
// const productReducer = (state = initialState, action) => {
//   // Deconstruct to pull type and payload from action object
//   let { type, payload } = action;

//   switch (type) {
//     case 'SHOW_CATEGORY':
//       return {
//         ...state,
//         filteredProducts: state.products.filter((item) => {
//           return item.category === payload;
//         })
//       };
//     case 'ADD_TO_CART': {
//       const updatedProducts = state.products.map((product) => {
//         if (product.name === payload.name) {
//           return {
//             ...product,
//             inventory: product.inventory > 0 ? product.inventory - 1 : 0
//           };
//         }
//         return product;
//       });

//       return {
//         ...state,
//         products: updatedProducts
//       };
//     }
//     case 'DELETE_FROM_CART': {
//       const updatedProducts = state.products.map((product) => {
//         if (product.name === payload.item.name) {
//           return {
//             ...product,
//             inventory: product.inventory + 1
//           };
//         }
//         return product;
//       });

//       return {
//         ...state,
//         products: updatedProducts
//       };
//     }
//     case 'GET':
//       return {
//         ...state,
//         products: payload
//       };
//     default:
//       return state;
//   }
// }

// export default productReducer;
