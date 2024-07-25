// Set initial state(s)
let initialState = { 
  count: 0,
  numberOfClicks: 0,
  categories: ["ELECTRONICS", "FOOD"],
  products: [
    {
      name: "TV",
      price: 100,
      category: "ELECTRONICS"
    },
    {
      name: "Apple",
      price: 2,
      category: "FOOD"
    }
  ],
  filteredProducts: [] // Store filtered products
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  // Deconstruct to pull type and payload from action object
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return { 
        ...state,
        count: state.count + payload ,
        numberOfClicks: state.numberOfClicks + 1
      };
    case 'DECREMENT':
      return { 
        ...state,
        count: state.count - payload,
        numberOfClicks: state.numberOfClicks +1
      };
    case 'SHOW_CATEGORY':
      return {
        ...state,
        filteredProducts: state.products.filter((item) => {
          return item.category === payload;
        })
      }
    default:
      return state;
  }
}

export default counterReducer;

// ACTION CREATORS (when invoked call reducer function 'counter')
export const increment = (payload) => {
  return {
    type: 'INCREMENT',
    payload: payload
  }
}

export const decrement = (payload) => {
  return {
    type: 'DECREMENT',
    payload: payload
  }
}

export const showChosenCategory = (category) => {
  return {
    type: 'SHOW_CATEGORY',
    payload: category
  }
}