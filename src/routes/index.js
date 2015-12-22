import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, MainPage, CounterPage, WatsonPage } from '../containers';

export default function getRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={{content: MainPage}}/>
      <Route path="about" components={{content: MainPage}}/>
      <Route path="counter" components={{content: CounterPage}}/>
      <Route path="watson" components={{content: WatsonPage}}/>
    </Route>
  );
}
