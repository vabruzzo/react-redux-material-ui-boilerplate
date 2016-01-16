import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import wolfram from './wolfram'

const reducers = combineReducers({
  counter,
  wolfram,
  routing: routeReducer
})

export default reducers
