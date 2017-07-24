import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Fix to make it work on Heroku
// const injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();
// End of fix

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
