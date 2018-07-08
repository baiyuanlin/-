import React, { Component } from 'react';
import './App.css';
import Special from './special';
import Spbieshu from './spbieshu';
import Spsearch from './spsearch';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
					    <Switch>
							<Route path="/special" component={Special}></Route>
							<Route path="/spsearch" component={Spsearch}></Route>
							<Route path="/spbieshu" component={Spbieshu}></Route>
							<Redirect to="/special"/>
							</Switch>
				</Router>
    );
  }
}

export default App;
