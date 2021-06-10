import * as types from '../actions/actionTypes'

const initialState = {
  featured: [],
  list: [],
  item: {},
}

export default function productReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FEATURED_PRODUCTS_SUCCESS:
      return Object.assign([], state, { featured: action.products })
    case types.LOAD_PRODUCT_SEARCH_SUCCESS:
      return Object.assign([], state, { list: action.products })
    case types.LOAD_PRODUCTBY_ID_SUCCESS:
      return Object.assign([], state, { item: action.product[0] })
    case types.CLEAR_PRODUCT:
      return Object.assign([], state, { item: {} })
    default:
      return state
  }
}
