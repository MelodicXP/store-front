import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import Products from './index';

// Set up the mock store with thunk middleware
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  products: {
    filteredProducts: [
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
      }
    ]
  }
};

describe('Products', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  it('should render product list', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(screen.getByText('TV')).toBeInTheDocument();
    expect(screen.getByText('75 inch TV')).toBeInTheDocument();
    expect(screen.getByAltText('TV')).toBeInTheDocument();

    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Macbook')).toBeInTheDocument();
    expect(screen.getByAltText('Laptop')).toBeInTheDocument();
  });

  it('should render the correct number of products', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const productImages = screen.getAllByRole('img');
    expect(productImages.length).toBe(2);
  });
});
