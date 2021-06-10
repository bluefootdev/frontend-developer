import { combineReducers } from 'redux'
import products from './productReducer'
import search from './searchReducer'

const rootReducer = combineReducers({
  // short hand property names
  products,
  search
})

export default rootReducer
