'use strict';

export const showCategory = (category) => {
  return {
    type: 'SHOW_CATEGORY',
    payload: category
  }
}

// export const showCategoryDescription = (category) => {
//   return {
//     type: 'SHOW_CATEGORY_DESCRIPTION',
//     payload: category
//   }
// }