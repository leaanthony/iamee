import React, { Component } from 'react';
import style from './SignUp.css';
import { Container, Button, Form, FormGroup, Input, FormText} from 'reactstrap';
import {
  Link
} from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
        <Container className="text-center hide-overflow">
          <img className="logo" src={require('./images/logo.png')} alt=""/>
          <Link to='/experiences'>
            <Button
              className="rounded-button"
              outline
              color="primary"
              size="lg" block
              >
              SIGN UP WITH FACEBOOK
            </Button>
          </Link>
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
  }
}

export default SignUp;
