import * as types from './actionTypes';
import productApi from '../api/ProductApi';

export function loadFeaturedProductsSuccess(products) {
  return {type: types.LOAD_FEATURED_PRODUCTS_SUCCESS, products};
}

export function loadFeaturedProducts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return productApi.getFeaturedProducts().then(products => {
      dispatch(loadFeaturedProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}