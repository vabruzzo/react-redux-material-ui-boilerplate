import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper'
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';

export default class WatsonPage extends Component {
  render() {
    return (
      <div>
        <Paper zDepth="2">
          <p>Ask IBM's Watson a question.</p>
          <TextField
            hintText="question"
            floatingLabelText="ask watson:" />
          <RaisedButton label="Ask!" />
          <div></div>
        </Paper>
      </div>
    );
  }
}
