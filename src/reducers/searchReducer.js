import * as types from '../actions/actionTypes';

const results = {
  results: [],
  products: [],
};

export default function searchReducer(state = results, action) {
  switch(action.type) {
    case types.LOAD_AUTOCOMPLETE_SEARCH_SUCCESS:
      return Object.assign([], state, {"results": action.results});
    case types.LOAD_FULL_TEXT_PRODUCT_SEARCH_SUCCESS:
      return Object.assign([], state, {"products": action.products});
    default:
      return state;
  }
}
