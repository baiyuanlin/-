import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Find from './component/find';
import App from './component/app';

import {Router,Route,hashHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
