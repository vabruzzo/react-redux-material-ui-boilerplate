import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/counter'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'

class Counter extends Component {
  render() {
    const { increment, decrement, counter } = this.props
    return (
      <div>
        <Paper className="paper" zDepth="2">
          <p>Clicked: {counter} times</p>
          <RaisedButton label="decrement" onClick={decrement} />
          {' '}
          <RaisedButton label="increment" onClick={increment} />
        </Paper>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
