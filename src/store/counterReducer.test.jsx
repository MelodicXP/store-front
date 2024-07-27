import { describe, it, expect } from 'vitest';
import counterReducer from './counter';

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
  products: [
    {
      name: "TV",
      description: "75 inch TV",
      price: 100,
      category: "ELECTRONICS",
      inventory: 3,
      image: "src/assets/tvImage.jpg"
    },
    {
      name: "Laptop",
      description: "Macbook",
      price: 1000,
      category: "ELECTRONICS",
      inventory: 3,
      image: "src/assets/laptopImage.jpg"
    },
    {
      name: "Speaker",
      description: "Bose",
      price: 300,
      category: "ELECTRONICS",
      inventory: 3,
      image: "src/assets/speakerImage.jpg"
    },
    {
      name: "Apple",
      description: "Sweet fruit",
      price: 2,
      category: "FOOD",
      inventory: 2,
      image: "src/assets/appleImage.jpg"
    }
  ],
  filteredProducts: [], // Store filtered products
  filteredCategory: {} // Store filtered category
};

describe('counterReducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SHOW_CATEGORY', () => {
    const action = {
      type: 'SHOW_CATEGORY',
      payload: 'ELECTRONICS'
    };

    const expectedState = {
      ...initialState,
      filteredProducts: initialState.products.filter(product => product.category === 'ELECTRONICS')
    };

    expect(counterReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SHOW_CATEGORY_DESCRIPTION', () => {
    const action = {
      type: 'SHOW_CATEGORY_DESCRIPTION',
      payload: 'FOOD'
    };

    const expectedState = {
      ...initialState,
      filteredCategory: initialState.categories.find(category => category.category === 'FOOD')
    };

    expect(counterReducer(initialState, action)).toEqual(expectedState);
  });
});
