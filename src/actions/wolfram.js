import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function requestAnswer (question) {
  return {
    type: types.REQUEST_ANSWER,
    question: question
  }
}

function receiveAnswer (json) {
  return {
    type: types.RECEIVE_ANSWER,
    answer: JSON.stringify(json.data.children)
  }
}

export function fetchAnswer (question) {
  return dispatch => {
    dispatch(requestAnswer(question))
    return fetch(`http://www.reddit.com/r/reactjs.json`)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      })
      .then(json => dispatch(receiveAnswer(json)))
  }
}
