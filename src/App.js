import React, { Component } from 'react';
import LisTires from "./componets/alltires";
import Addtires from "./componets/addingtires";
import Changebar from "./componets/Changebar";
import Subtire from "./componets/subtrackingtires";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Changebar/>
          <Switch>
            <Route exact path='/'component={LisTires}/>
            <Route exact path='/add' component={Addtires}/>
            <Route exact path='/subtract' component={Subtire}/>
          </Switch>
       </Router>
      </div>
    );
  }
}

export default App;

