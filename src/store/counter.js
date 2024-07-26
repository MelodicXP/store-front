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
  products: [
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
    },
    {
      name: "Speaker",
      description: "Bose",
      price: 300,
      category: "ELECTRONICS",
      inventory: 3,
      image: "src/assets/speakerImage.jpg"
    },
    {
      name: "Apple",
      description: "Sweet fruit",
      price: 2,
      category: "FOOD",
      inventory: 2,
      image: "src/assets/appleImage.jpg"
    }
  ],
  filteredProducts: [], // Store filtered products
  filteredCategory: {} // Store filtered category
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  // Deconstruct to pull type and payload from action object
  let { type, payload } = action;

  switch (type) {
    case 'SHOW_CATEGORY':
      return {
        ...state,
        filteredProducts: state.products.filter((item) => {
          return item.category === payload;
        })
      };
      case 'SHOW_CATEGORY_DESCRIPTION':
        return {
          ...state,
          filteredCategory: state.categories.find((category) => category.category === payload)
        };
    default:
      return state;
  }
}

export default counterReducer;

// ACTION CREATORS (when invoked call reducer function 'counter')
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