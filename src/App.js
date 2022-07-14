import React, { Component } from 'react'

import Home from './home';
import Nav from './nav';
import { Switch,Route } from 'react-router-dom';
import test from './Test';
class App extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Nav/>
            <Switch>
                <Route path="/" component={Home}exact/>
                <Route path="/test/:id" component={test}exact/>
            </Switch>
            
           
        </div>);
    }
}
 
export default App;