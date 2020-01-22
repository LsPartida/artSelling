import uuid from 'uuid';
import axios from 'axios';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PRODDUCT,
  FILTER_PRODUCT,
  CLEAR_FILTER,
  GET_ALL_PRODUCTS,
  GET_USER_PRODUCTS,
  CLEAR_ALL_PRODUCTS,
  CLEAR_USER_PRODUCTS,
  PRODUCT_ERROR
} from './types';

// Add product
export const addProduct = product => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log(product);
    const res = await axios.post('/api/products', product, config);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error
    });
  }
};
// Delete product

// Set current product

// Clear current product
export const clearCurrentProduct = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

// Update product

// Filter products
export const filterProduct = text => dispatch => {
  dispatch({
    type: FILTER_PRODUCT,
    payload: text
  });
};

// Clear Filter
export const clearFilter = () => dispatch => {
  dispatch({
    type: CLEAR_FILTER
  });
};

// Get all products just for the gallery
export const getAllProducts = () => async dispatch => {
  try {
    const res = await axios.get('api/products/all');
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response.msg
    });
  }
};

// Get user product

// Clear all products

// Clear user products
