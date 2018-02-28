import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
var jQuery = require('jquery');
window.jQuery = jQuery;
require('bootstrap');






ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
