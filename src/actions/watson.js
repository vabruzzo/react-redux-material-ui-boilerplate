import * as types from '../constants/ActionTypes';

export function requestAnswer() {
  return {
    type: types.INCREMENT_COUNTER
  }
}

export function receiveAnswer() {
  return {
    type: types.DECREMENT_COUNTER
  }
}
