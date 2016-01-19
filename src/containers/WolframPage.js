import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as WolframActions from '../actions/wolfram'
import TextField from 'material-ui/lib/text-field'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
import CircularProgress from 'material-ui/lib/circular-progress'

class WolframPage extends Component {
  render () {
    const { fetchAnswer, question, answer, isFetching } = this.props

    return (
      <div>
        <Paper className='paper' zDepth='2'>
          <p>Ask Wolfram a question.</p>
          <TextField
            hintText='question'
            floatingLabelText='ask Wolfram:'
          />
          {' '}
          <RaisedButton label='Ask!' onClick={function() { fetchAnswer('asdf') }}/>
					{question != '' &&
            <div>
              Your question: {question}
            </div>
          }
          {isFetching &&
          	<CircularProgress />
					}
          <div>
            {answer}
          </div>
        </Paper>
      </div>
    )
  }
}

WolframPage.PropTypes = {
  fetchAnswer: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    question: state.wolfram.question,
    answer: state.wolfram.answer,
    isFetching: state.wolfram.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(WolframActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WolframPage)
