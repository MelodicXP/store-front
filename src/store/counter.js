// Set initial state(s)
let initialState = { 
  count: 0,
  numberOfClicks: 0,
  categories: ["Electronics", "Food"],
  products: [
    {
      name: "TV",
      price: 100,
      category: "Electronics"
    }
  ]
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  // Deconstruct to pull type and payload from action object
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return { 
        count: state.count + payload ,
        numberOfClicks: state.numberOfClicks + 1
      };
    case 'DECREMENT':
      return { 
        count: state.count - payload,
        numberOfClicks: state.numberOfClicks +1
      };
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