import * as types from '../actions/actionTypes';

const products = [];

export default function productReducer(state = products, action) {
  switch(action.type) {
    case types.LOAD_FEATURED_PRODUCTS_SUCCESS:
      return Object.assign([], state, action.products);
    default:
      return state;
  }
}
