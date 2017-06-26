import React, { Component } from 'react';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import style from './ShowExperience.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class ShowExperience extends Component {
  render() {
    return (
      <div>
        <Navigation />

      <div>
        <h3>You have selected</h3>
          <Card
            block inverse style={{backgroundColor: '#8FDAFD', borderColor: '#8FDAFD' }}
            className="circle"
          >
           <CardTitle>Relaxed</CardTitle>
           <CardText>Take time out for yourself to relax</CardText>
          </Card>
      </div>

        <BottomNav />
      </div>
    )
  }
}
