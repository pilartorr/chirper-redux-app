import React, { Component } from 'react';
import '../styles/index.css';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App text-center">
        Hello Chirper App
      </div>
    );
  }
}

export default connect()(App)
