import React, { Component } from 'react';
import logo from './logo.svg';
import Carousel from './Carousel'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render() {
    return (
      <div>
        <Carousel
          subtitle=""
          image=""
          text="Focus on building the best you"
        />

        <Carousel
          subtitle="What do you want to be?"
          image=""
          text="Start by identifying your personal 'build' activity"
        />

        <Carousel
          subtitle=""
          image=""
          text="Invite a buddy to do it with you or join a community to keep it fun
          and motivating."
        />
      </div>
    );
  }
}

export default App;
