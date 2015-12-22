import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import counter from './counter';

const reducers = combineReducers({
  counter,
  routing: routeReducer
});

export default reducers;
