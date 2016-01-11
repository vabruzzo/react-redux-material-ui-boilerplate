import React, { Component } from 'react'
import TextField from 'material-ui/lib/text-field'
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button'
// import CircularProgress from 'material-ui/lib/circular-progress'

export default class WolframPage extends Component {
  render () {
    return (
      <div>
        <Paper className='paper' zDepth='2'>
          <p>Ask Wolfram a question.</p>
          <TextField
            hintText='question'
            floatingLabelText='ask Wolfram:'
          />
          {' '}
          <RaisedButton label='Ask!' />
          <div></div>
        </Paper>
      </div>
    )
  }
}
