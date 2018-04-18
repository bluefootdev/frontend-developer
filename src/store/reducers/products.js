import { searchProducts } from "../../api";

// INITIAL_STATE
export const INITIAL_STATE = {
  isFetching: false,
  didInvalidate: false,
  products: []
};

// ACTIONS
export const IS_FETCHING = 'IS_FETCHING';
export const INVALIDATE_SEARCH = 'INVALIDATE_SEARCH';
export const RECEIVED_PRODUCTS = 'RECEIVE_PRODUCTS';

// ACTION CREATORS
export const search = text => async dispatch => {
  try {
    dispatch(invalidateSearch(false));
    dispatch(isFetching());
    const { itemsReturned = [] } = await searchProducts(text);
    dispatch(isFetching(false))
    dispatch(receivedProducts(itemsReturned));
  } catch (e) {
    console.error(e);
    dispatch(invalidateSearch(true));
  }
}

export const shouldSearch = state => !state.isFetching;

export const searchIfNeeded = text => (dispatch, getState) => (
  shouldSearch(getState())
  ? dispatch(search(text))
  : Promise.resolve()
)

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

export const receivedProducts = (products = []) => (
  {
    type: RECEIVED_PRODUCTS,
    payload: products
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
    case RECEIVED_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
