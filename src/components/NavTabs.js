import React, { Component, PropTypes } from 'react'
import { routeActions } from 'react-router-redux'
import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'

export default class NavTabs extends Component {
  render () {
    const { dispatch, route } = this.props

    return (
      <Tabs className='nav-tabs'
        value={route.location.pathname}
        onChange={function (value) {
          dispatch(routeActions.push(value))
        }}>
        <Tab label='About' value='/' />
        <Tab label='Counter' value='/counter' />
        <Tab label='Wolfram' value='/Wolfram' />
			</Tabs>
    )
  }
}

NavTabs.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}
