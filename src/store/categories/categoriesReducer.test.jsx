import { describe, it, expect } from 'vitest';
import categoriesReducer from './categories';

const initialState = {
  categories: [
    {
      category: "ELECTRONICS",
      description: "Electronics Category Description"
    }, 
    {
      category: "FOOD",
      description: "Food Category Description"
    }
  ],
  activeCategory: {} // Store filtered category
};

describe('counterReducer', () => {
  it('should return the initial state', () => {
    expect(categoriesReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SHOW_CATEGORY', () => {
    const action = {
      type: 'SHOW_CATEGORY',
      payload: 'ELECTRONICS'
    };

    const expectedState = {
      ...initialState,
      activeCategory: initialState.categories.find(category => category.category === 'ELECTRONICS')
    };

    expect(categoriesReducer(initialState, action)).toEqual(expectedState);
  });
});
