import * as types from '../constants/ActionTypes'

export function requestAnswer () {
  return {
    type: types.REQUEST_ANSWER
  }
}

export function receiveAnswer () {
  return {
    type: types.RECEIVE_ANSWER
  }
}
