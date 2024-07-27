import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Products from './index.jsx';

// Set up the mock store
const mockStore = configureStore([]);
const initialState = {
  counter: {
    filteredProducts: [
      {
        name: 'Product 1',
        description: 'Description 1',
        image: 'image1.jpg',
      },
      {
        name: 'Product 2',
        description: 'Description 2',
        image: 'image2.jpg',
      },
    ],
  },
};
const store = mockStore(initialState);

describe('Products', () => {
  it('should render product list', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByAltText('Product 1')).toBeInTheDocument();

    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByAltText('Product 2')).toBeInTheDocument();
  });

  it('should render the correct number of products', () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const productCards = screen.getAllByRole('img');
    expect(productCards.length).toBe(2);
  });
});
