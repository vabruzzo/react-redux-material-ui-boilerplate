import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, NavTabs, Footer } from '../components';

class App extends Component {
  render() {
    const { content, dispatch } = this.props;

    return (
      <div className='page'>
        <Header dispatch={dispatch}/>
				<div className="content">
          {content}
				</div>
				<Footer />
      </div>
    );
  }
}

export default connect()(App)
