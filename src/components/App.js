import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from '../components/Header';
import PageBody from '../components/PageBody';
import {store} from '../store'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageBody/>
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
