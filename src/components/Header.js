import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { NavTabs } from '../components';
import AppBar from 'material-ui/lib/app-bar';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import MenuItem from 'material-ui/lib/menus/menu-item';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    const { dispatch } = this.props;

    return (
			<header>
        <AppBar
          title="React/Redux/Material UI"
          iconElementLeft={
            <IconMenu iconButtonElement={
              <IconButton></IconButton>
            }>
              <MenuItem primaryText="Counter" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
        />
				<div className="title">
					<IndexLink to="/"><h1>React/Redux/Material UI</h1></IndexLink>
				</div>
				<NavTabs className="nav-bar" dispatch={dispatch}/>
				<div className="social">
				</div>
			</header>
    );
  }
}
