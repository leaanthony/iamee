import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import style from './Navigation.css';
import Backend from './Backend'

class Navigation extends Component {
  logout() {
    Backend.logout();
    window.location = "/";
  }
  render() {
    return (
      <div className="navbarComponent">
        <div className="arrow-left"><FaArrowLeft /></div>
        <div><img className="brandImage" src={require("./images/iameeLogo_gradient.png")} alt="" onClick={this.logout}/></div>
        <div><img className="profileImage" src="" alt=""/></div>
      </div>
    );
  }

}

export default Navigation;
