import React, { Component } from 'react';
import { pushPath } from 'redux-simple-router';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

export default class NavTabs extends Component {
  render() {
    const { dispatch, route } = this.props;

    return (
			<Tabs className="nav-tabs"
        value={route.path}
        onChange={function(value) {
          dispatch(pushPath(value));
        }}>
        <Tab label="About" value="/" />
        <Tab label="Counter" value="/counter" />
        <Tab label="Watson" value="/watson" />
			</Tabs>
    );
  }
}
