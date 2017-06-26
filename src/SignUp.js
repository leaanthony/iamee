import React, { Component } from 'react';
import style from './SignUp.css';
import { Container, Button, Form, FormGroup, Input, FormText} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router';
import Backend from './Backend';

class SignUp extends Component {
  constructor() {
    super();
    this.state = { showLogin: false };
    
  }
  componentDidMount() {
    const self = this;
    // Backend.onAuthStateChanged(function(user) {
    //   self.setState({ currentUser: Backend.getCurrentUser()});
    // });
    // Backend.getFBUser(function(user){
    //   if( user ) {
    //     self.setState({ currentUser: Backend.getCurrentUser()});
    //   }
    // });

    var loggedInUser = Backend.getCurrentUser();
    console.log(loggedInUser);
    if( loggedInUser ) {
      window.location = "/experiences";
    }

    Backend.getRedirectResult(function(result) {
        if (result.credential) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            self.setState({token: result.credential.accessToken});
            
        }
        if( !result.user ) {
          self.setState({showLogin: true})
        } else {
          // Should this be using react-router?
          window.location = "/experiences";
        }
        // The signed-in user info.
        self.setState({currentUser: result.user});
        console.log("RESULT")
        console.log(result)
    }, function(error) {
      self.setState({showLogin: true});
        // Handle Errors here.
        console.log("ERROR")
        console.log(error);
    });

  }
  render() {
    if( this.state && this.state.showLogin ) {
      return (
        <Container className="text-center hide-overflow">
          <img className="logo" src={require('./images/logo.png')} alt=""/>
          {/*<Link to='/experiences'>*/}
            <Button
              className="rounded-button facebook-btn"
              outline
              color="primary"
              size="lg" block
              onClick={() => Backend.FBSignin()}
              >
              SIGN UP WITH FACEBOOK
            </Button>
          {/*</Link>*/}
          <div className="spacer"></div>
          <h4>OR</h4>
          <div className="spacer"></div>
          <FormGroup>
            <Input className= "bottom-border-input" type="username" name="username" placeholder="USER NAME" />
          </FormGroup>
          <FormGroup>
            <Input className= "bottom-border-input" type="password" name="password" placeholder="PASSWORD" />
          </FormGroup>
          <div className="spacer"></div>
          <Link to='/experiences'>
            <Button
              className="rounded-button"
              color="primary"
              size="lg"
              block
              >
              Sign Up
            </Button>
          </Link>
          <br/>
          <p>Already have an account? Log In</p>
          <div className="spacer"></div>
        </Container>
      
      );
    } else {
      return (<div/>)
    }
  }
}

export default SignUp;
