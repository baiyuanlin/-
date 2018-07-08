import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Room from './room';
import Details from './Details';
class App extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <Router>
                     <div>
                        
                        <Route path="/Details" component={Details}></Route>
                        <Route path="/room" component={Room}></Route>


                    </div>

                </Router>


            </div>
        )
    }



}

export default App