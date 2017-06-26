import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap';
import Backend from './Backend';
import { Redirect } from 'react-router';

class LoginFB extends Component {
  constructor() {
    super();
    this.state = { };
    var currentUser = Backend.getCurrentUser();
    console.log(currentUser);
    if( !currentUser ) {
          Backend.FBSignin();
    }
  }
  componentDidMount() {
    const self = this;
    
    //   window.location="/experiences";
    // }
    Backend.onAuthStateChanged(function(user) {
      console.log(user);
      if( user ) {
        self.setState({loggedIn: true});
      } else {
        // Logging out?
      }
    });
  }
  render() {
    return (
        <div>
        
      <Col sm="6">
        <Card>
           <CardTitle>Spinner here</CardTitle>
        </Card>
       </Col>
       </div>
    );
  }
}

export default LoginFB;