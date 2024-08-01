import { describe, it, expect } from 'vitest';
import productReducer from './products'; 
import { showCategory } from '../actions'; 

const initialState = {
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
};

describe('productReducer', () => {

  it('should handle SHOW_CATEGORY', () => {
    const action = {
      type: 'SHOW_CATEGORY',
      payload: 'ELECTRONICS'
    };

    const expectedState = {
      ...initialState,
      filteredProducts: initialState.products.filter(product => product.category === 'ELECTRONICS')
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });
});

describe('Action Creators', () => {
  it('should create an action to show chosen category', () => {
    const category = 'ELECTRONICS';
    const expectedAction = {
      type: 'SHOW_CATEGORY',
      payload: category,
    };
    expect(showCategory(category)).toEqual(expectedAction);
  });
});
