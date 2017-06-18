import React, { Component } from 'react';
import Homepage from './Homepage';
import SignUp from './SignUp';
import CreateTask from './CreateTask'
import ExperiencePage from './ExperiencePage';
import Dashboard from './Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/experiences" component={ExperiencePage}/>
            <Route path="/createtask" component={CreateTask}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
