import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistory } from 'react-router-redux'
import getRoutes from './routes/index'
import injectTapEventPlugin from 'react-tap-event-plugin'
import thunk from 'redux-thunk'
import reducers from './reducers'

require('./styles/main.css')

injectTapEventPlugin()

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory)

const store = createStore(
  reducers, 
  applyMiddleware(
    reduxRouterMiddleware,
    thunk
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {getRoutes()}
    </Router>
  </Provider>,
  document.getElementById('root')
)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
let unsubscribe = store.subscribe(() => console.log(store.getState()))
