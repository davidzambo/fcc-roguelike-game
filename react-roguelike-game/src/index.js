import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
