import * as types from './actionTypes';
import searchApi from '../api/SearchApi';
import productApi from '../api/ProductApi';

export function loadAutocompleteSearchSuccess(results) {
  return {type: types.LOAD_AUTOCOMPLETE_SEARCH_SUCCESS, results};
}

export function loadFullTextProductSearchSuccess(products) {
  return {type: types.LOAD_FULL_TEXT_PRODUCT_SEARCH_SUCCESS, products};
}

export function loadAutocompleteSearch(query) {
  return function(dispatch) {
    return searchApi.getAutocompleteSearch(query).then(results => {
      dispatch(loadAutocompleteSearchSuccess(results));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadFullTextProductSearch(query) {
  return function(dispatch) {
    return productApi.fullTextSearch(query).then(products => {
      dispatch(loadFullTextProductSearchSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

