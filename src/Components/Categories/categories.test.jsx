import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Categories from './index.jsx';

// Mock store
const mockStore = configureStore([]);
const initialState = {
  counter: {
    filteredCategory: null,
  },
};

const store = mockStore(initialState);

describe('Categories', () => {
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

  it('should dispatch actions when category is clicked', () => {
    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    const electronicsElement = screen.getByText('ELECTRONICS');
    const foodElement = screen.getByText('FOOD');

    fireEvent.click(electronicsElement);
    fireEvent.click(foodElement);

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'SHOW_CATEGORY', payload: 'ELECTRONICS' },
      { type: 'SHOW_CATEGORY_DESCRIPTION', payload: 'ELECTRONICS' },
      { type: 'SHOW_CATEGORY', payload: 'FOOD' },
      { type: 'SHOW_CATEGORY_DESCRIPTION', payload: 'FOOD' },
    ]);
  });
});