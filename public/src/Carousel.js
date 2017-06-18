import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div>
        <img src="" alt=""/>
        <h3>{this.props.subtitle}</h3>
        <img src="" alt=""/>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Carousel;
