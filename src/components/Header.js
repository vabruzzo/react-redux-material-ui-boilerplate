import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { NavTabs } from '../components';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class Header extends Component {
  render() {
    const { dispatch, route } = this.props;

    return (
			<header>
        <AppBar
          title="React/Redux/Material UI"
          showMenuIconButton={false}
          iconElementRight={
            <NavTabs dispatch={dispatch} route={route} />
          }
        />
			</header>
    );
  }
}
