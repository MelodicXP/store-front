import { describe, it, beforeEach, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Categories from './index';

// Set up the mock store
const mockStore = configureStore([]);
const initialState = {
  categories: {
    activeCategory: null,
    categories: [
      {
        category: "ELECTRONICS",
        description: "Electronics Category Description"
      }, 
      {
        category: "FOOD",
        description: "Food Category Description"
      }
    ]
  }
};

describe('Categories', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  it('should render categories', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    expect(screen.getByText('Browse our Categories')).toBeInTheDocument();
    expect(screen.getByText('ELECTRONICS')).toBeInTheDocument();
    expect(screen.getByText('FOOD')).toBeInTheDocument();
  });

  it('should dispatch action when ELECTRONICS category is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    const electronicsElement = screen.getByText('ELECTRONICS');
    fireEvent.click(electronicsElement);

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'SHOW_CATEGORY', payload: 'ELECTRONICS' }
    ]);
  });

  it('should dispatch action when FOOD category is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    const foodElement = screen.getByText('FOOD');
    fireEvent.click(foodElement);

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'SHOW_CATEGORY', payload: 'FOOD' }
    ]);
  });
});
