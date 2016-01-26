import React, { Component } from 'react'
import AppBar from 'material-ui/lib/app-bar'

export default class Header extends Component {
  render () {
    return (
      <header>
        <AppBar
          title='React/Redux/Material UI'
          showMenuIconButton={false}
        />
			</header>
    )
  }
}
