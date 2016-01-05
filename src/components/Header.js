import React, { Component, PropTypes } from 'react'
import { NavTabs } from '../components'
import AppBar from 'material-ui/lib/app-bar'

export default class Header extends Component {
  render () {
    const { dispatch, route } = this.props

    return (
      <header>
        <AppBar
          title='React/Redux/Material UI'
          showMenuIconButton={false}
          iconElementRight={
            <NavTabs dispatch={dispatch} route={route} />
          }
        />
			</header>
    )
  }
}

Header.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}
