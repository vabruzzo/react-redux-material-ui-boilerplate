import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { DevTools} from './containers'
import getRoutes from './routes/index'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configureStore'

require('./styles/main.css')

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        {getRoutes()}
      </Router>
      {!(process.env.NODE_ENV === 'production') &&
        <DevTools />
      }    
    </div>
  </Provider>,
  document.getElementById('root')
)
