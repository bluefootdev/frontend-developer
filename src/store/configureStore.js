import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/productReducer'
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}