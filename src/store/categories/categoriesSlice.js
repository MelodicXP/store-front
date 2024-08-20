import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
      {
        category: 'ELECTRONICS',
        description: 'Electronics Category Description',
      },
      {
        category: 'FOOD',
        description: 'Food Category Description',
      },
    ],
    activeCategory: {}, // Store filtered category
  },
  reducers: {
    /// name of action to dispatch, state action
    SHOW_CATEGORY: (state, action) => {
      state.activeCategory = state.categories.find(
        (category) => category.category === action.payload
      );
    },
  },
});

export const { SHOW_CATEGORY } = categoriesSlice.actions;
export default categoriesSlice.reducer;