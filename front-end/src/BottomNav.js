import React, { Component } from 'react';
import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';
import style from './bottomNav.css';
import { Container } from 'reactstrap';

class BottomNav extends Component {
  render() {
    return (

      <div className="bottomNav">
        <Container>
          <div className="icon">
            <div className="full-width-home">
              <FaHome />
            </div>
            <p>Home</p>
          </div>
        </Container>

        <Container>
          <div className="icon">
            <div className="full-width-notification ">
              <FaBell />
            </div>
            <p>Notifcation</p>
          </div>
        </Container>

        <Container>
          <div className="icon">
            <div className="full-width-create">
              <FaPlusCircle />
            </div>
              <p>Create</p>
          </div>
        </Container>

        <Container>
          <div className="icon">
            <div className="full-width">
              <FaSearch />
            </div>
              <p>Find</p>
          </div>
        </Container>

        <Container>
          <div className="icon">
            <div className="full-width-buddies">
              <FaUsers />
            </div>
              <p>Buddies</p>
          </div>
        </Container>

      </div>
    );
  }
}

export default BottomNav;
