import * as types from './actionTypes';
import searchApi from '../api/SearchApi';

export function loadAutocompleteSearchSuccess(results) {
  return {type: types.LOAD_AUTOCOMPLETE_SEARCH_SUCCESS, results};
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