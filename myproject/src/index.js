import React from 'react';
import ReactDOM from 'react-dom';
import './Details.css';
import './room.css';
import App from './App';
import Special from './special';
// import './index.css';
// import Find from './component/find';
// import App from './component/app';
import {Router,Route,hashHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import Index from './components/index'




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
