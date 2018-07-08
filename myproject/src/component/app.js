import React from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Find from './find'
import Hedetail from './hedetail'
import Sqyd from './sqyd'

import $ from 'jquery'
import '../css/find.css'
import '../mock/data'



class App extends React.Component{
	constructor(props){
		super(props)
    }
    componentDidMount(){
		$.ajax({
			type:"get",
			url:"http://www.baidu.com/api/a",
			async:true,
			dataType:"json",
			success:function(data){
				// console.log(data)
			}

		})
	}
    render(){
		return(
			<div>
			  <footer>
                    <h1>头部</h1>
                </footer>
				
				<Router>
					<div>
						
					
						
						
						<Route path="/find" component={Find}></Route>
						<Route path="/hedetail/:id" component={Hedetail}></Route>
						<Route path="/sqyd" component={Sqyd}></Route>


					
					</div>
				</Router>
				<footer>
                    <h1>头部</h1>
                </footer>
			</div>
		)
	}
}

export default App;