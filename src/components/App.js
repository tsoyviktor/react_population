import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux'
import { history, store } from '../store/index'
import PageBody from '../components/PageBody';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> World population Application</h2>
        </div>
        <div className="App-intro">
            <PageBody />
        </div>
      </div>
    );
  }
}

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

export default ReduxApp;
