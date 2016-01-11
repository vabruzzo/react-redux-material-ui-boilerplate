import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, MainPage, CounterPage, WolframPage } from '../containers'

export default function getRoutes () {
  return (
    <Route path='/' component={App}>
      <IndexRoute components={{content: MainPage}}/>
      <Route path='counter' components={{content: CounterPage}}/>
      <Route path='Wolfram' components={{content: WolframPage}}/>
    </Route>
  )
}
