import { describe, it, expect } from 'vitest';
import { showChosenCategory, showCategoryDescription } from './counter';

describe('Action Creators', () => {
  it('should create an action to show chosen category', () => {
    const category = 'ELECTRONICS';
    const expectedAction = {
      type: 'SHOW_CATEGORY',
      payload: category,
    };
    expect(showChosenCategory(category)).toEqual(expectedAction);
  });

  it('should create an action to show category description', () => {
    const category = 'ELECTRONICS';
    const expectedAction = {
      type: 'SHOW_CATEGORY_DESCRIPTION',
      payload: category,
    };
    expect(showCategoryDescription(category)).toEqual(expectedAction);
  });
});
