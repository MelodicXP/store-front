'use strict';

export const showChosenCategory = (category) => {
  return {
    type: 'SHOW_CATEGORY',
    payload: category
  }
}

export const showCategoryDescription = (category) => {
  return {
    type: 'SHOW_CATEGORY_DESCRIPTION',
    payload: category
  }
}