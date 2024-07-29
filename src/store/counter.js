// Set initial state(s)
let initialState = { 
  categories: [
    {
      category:"ELECTRONICS",
      description: "Electronics Category Description"
    }, 
    {
      category: "FOOD",
      description: "Food Category Description"
    }
  ],
  activeCategory: {} // Store filtered category
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  // Deconstruct to pull type and payload from action object
  let { type, payload } = action;

  switch (type) {
      case 'SHOW_CATEGORY':
        return {
          ...state,
          activeCategory: state.categories.find((category) => category.category === payload)
        };
    default:
      return state;
  }
}

export default counterReducer;