import { REQUEST_ANSWER, RECEIVE_ANSWER } from '../constants/ActionTypes'

function answer (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_ANSWER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_ANSWER:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts
      })
    default:
      return state
  }
}

function answerFromWolfram (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ANSWER:
    case REQUEST_ANSWER:
      return Object.assign({}, state, {
        [action.reddit]: answer(state[action.reddit], action)
      })
    default:
      return state
  }
}
