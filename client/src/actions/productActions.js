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
} from './types';
import Axios from 'axios';

// Get all products just for the gallery
export const getAllProducts = () => async dispatch => {
  try {
    const res = await Axios.get('api/products/all');
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
