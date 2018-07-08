import React, { Component } from 'react';
import './App.css';
import Special from './special';
import Spbieshu from './spbieshu';
import Spsearch from './spsearch';
import Find from './component/find'
import Hedetail from './component/hedetail'
import Sqyd from './component/sqyd'


import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
					<div>
					    <Switch>
							<Route path="/special" component={Special}></Route>
							<Route path="/spsearch" component={Spsearch}></Route>
							<Route path="/spbieshu" component={Spbieshu}></Route>
							{/* <Redirect to="/special"/> */}
							</Switch>
				
				
						
					
						
						
						<Route path="/find" component={Find}></Route>
						<Route path="/hedetail/:id" component={Hedetail}></Route>
					
						<Route path="/sqyd" component={Sqyd}></Route>

					
					</div>
			
				</Router>
				
    );
  }
}

export default App;
