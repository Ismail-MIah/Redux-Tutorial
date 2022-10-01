const { createStore, combineReducers } = require("redux");

//Products Constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//product STATE
const initialProductsState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// PRODUCT ACTION
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// productReducer

const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

// combineReducerStore

//store
const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});
