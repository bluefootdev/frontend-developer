import * as types from '../actions/actionTypes';

const results = [];

export default function searchReducer(state = results, action) {
  switch(action.type) {
    case types.LOAD_AUTOCOMPLETE_SEARCH_SUCCESS:
      return Object.assign([], state, action.results);
    default:
      return state;
  }
}
