import { searchProducts, searchFullTextProducts } from "../../api";

// INITIAL_STATE
export const INITIAL_STATE = {
  searchText: '',
  isFetching: false,
  didInvalidate: false,
  suggestedProducts: [],
  products: []
};

// ACTIONS
export const IS_FETCHING = 'IS_FETCHING';
export const INVALIDATE_SEARCH = 'INVALIDATE_SEARCH';
export const RECEIVED_SUGGESTED_PRODUCTS = 'RECEIVE_SUGGESTED_PRODUCTS';
export const RECEIVED_PRODUCTS = 'RECEIVE_PRODUCTS';
export const MODIFY_SEARCH_TEXT = 'MODIFY_SEARCH_TEXT';

// ACTION CREATORS
export const doRequest = async (dispatch, text, requestType) => {
  try {
    dispatch(invalidateSearch(false));
    dispatch(isFetching());
    const items = await requestType(text);
    dispatch(isFetching(false));
    return items;
  } catch(e) {
    console.error(e);
    dispatch(invalidateSearch(true));
    return [];
  }
}

export const getProductsAutocomplete = (text = '') => async dispatch => {
    const items = await doRequest(dispatch, text, searchProducts);
    dispatch(receivedSuggestedProducts(items));
}

export const getProductsFullText = (text = '') => async dispatch => {
    const items = await doRequest(dispatch, text, searchFullTextProducts);
    dispatch(receivedProducts(items));
    dispatch(receivedSuggestedProducts([]));
    dispatch(modifySearchText());
}

export const shouldSearch = state => !state.isFetching;

export const searchIfNeeded = text => (dispatch, getState) => {
  dispatch(modifySearchText(text));
  return shouldSearch(getState())
  ? dispatch(getProductsAutocomplete(text))
  : Promise.resolve()
}

export const isFetching = (payload = true) => (
  {
    type: IS_FETCHING,
    payload
  }
)

export const invalidateSearch = (payload = true) => (
  {
    type: INVALIDATE_SEARCH,
    payload
  }
)

export const receivedSuggestedProducts = (products = []) => (
  {
    type: RECEIVED_SUGGESTED_PRODUCTS,
    payload: products
  }
);

export const receivedProducts = (products = []) => (
  {
    type: RECEIVED_PRODUCTS,
    payload: products
  }
);

export const modifySearchText = (text = '') => (
  {
    type: MODIFY_SEARCH_TEXT,
    payload: text
  }
);

// REDUCERS
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    case INVALIDATE_SEARCH:
      return {
        ...state,
        didInvalidate: action.payload
      }
    case RECEIVED_SUGGESTED_PRODUCTS:
      return {
        ...state,
        suggestedProducts: action.payload
      }
    case RECEIVED_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case MODIFY_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
