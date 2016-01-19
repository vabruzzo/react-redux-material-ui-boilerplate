import { REQUEST_ANSWER, RECEIVE_ANSWER } from '../constants/ActionTypes'

export default function wolfram (state = {
  isFetching: false,
  question: '',
  answer: ''
}, action) {
  switch (action.type) {
    case REQUEST_ANSWER:
      return Object.assign({}, state, {
        isFetching: true,
        question: action.question,
        answer: ''
      })
    case RECEIVE_ANSWER:
      return Object.assign({}, state, {
        isFetching: false,
        answer: action.answer
      })
    default:
      return state
  }
}
