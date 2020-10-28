import {productsAPI} from "../api/api";

const ADD_PRODUCTS = 'ADD-PRODUCTS';
const ADD_PRODUCT_TO_BASKET = 'ADD-PRODUCT_TO_BASKET';

let initialState = {
  products:[],
  isLoaded: false,
  products_in_basket: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return {
        ...state,
        products: action.products,
        isLoaded: action.isLoaded
      }
    }
    case ADD_PRODUCT_TO_BASKET: {
      return {
        ...state,
        products_in_basket: state.products_in_basket.concat(action.product) 
      }
    }
    default:
      return state;
  }
};
const addProductsAC = (products) => ({ type: ADD_PRODUCTS, products, isLoaded: true });
export const addProductToBasketAC = (product) =>({ type: ADD_PRODUCT_TO_BASKET, product });

export const getAllProductsThunkCreator = (id = 1) => {
  return (dispatch) => {
    productsAPI.getAllProducts()
      .then(data => {
        dispatch(addProductsAC(data.fields.attribute_value))
      })
  }
};
export default productsReducer;
