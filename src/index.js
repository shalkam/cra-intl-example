import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './AppWrapper';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
