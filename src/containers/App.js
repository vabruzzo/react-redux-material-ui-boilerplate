import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Header, Footer } from '../components'
import ThemeManager from 'material-ui/lib/styles/theme-manager'
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator'

@ThemeDecorator(ThemeManager.getMuiTheme(LightRawTheme))
class App extends Component {
  render () {
    const { content, dispatch, route } = this.props

    return (
      <div className='page'>
        <Header dispatch={dispatch} route={route} />
				<div className='content'>
          {content}
				</div>
				<Footer />
      </div>
    )
  }
}

App.PropTypes = {
  content: PropTypes.element.isRequired,
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

function mapStateToProps (state) {
  return {
    route: state.routing
  }
}

export default connect(
  mapStateToProps
)(App)
