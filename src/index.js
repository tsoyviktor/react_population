import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
