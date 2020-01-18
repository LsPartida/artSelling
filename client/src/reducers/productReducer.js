import uuid from 'uuid';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_USER_PRODUCTS,
  CLEAR_ALL_PRODUCTS,
  CLEAR_USER_PRODUCTS,
  PRODUCT_ERROR
} from '../actions/types';

// Initial State
const initialState = {
  products: [],
  currentProduct: null,
  filteredProducts: null,
  error: null,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
