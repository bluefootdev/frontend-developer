import { combineReducers } from 'redux';

import productReducer, { INITIAL_STATE as productInitialState } from './products';

export const INITIAL_STATE = {
  product: productInitialState
}


const reducers = combineReducers({
  product: productReducer
});

export default reducers;
