import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from '../components/Header';
import PageBody from '../components/PageBody';
import {store} from '../store';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
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
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App/>
      </MuiThemeProvider>
    </Provider>
  );
};

export default ReduxApp;
