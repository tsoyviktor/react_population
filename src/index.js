import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './components/App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
