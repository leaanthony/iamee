
import React, { Component } from 'react';
import Carousel from './Carousel';
import { Container, Button } from 'reactstrap';
import './App.css';
import style from './Homepage.css';
import Slider from 'react-slick';
import {
  Link
} from 'react-router-dom'


class Homepage extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="homepage-background">
        <div className="homepage-content">
          <img className="logo-title" src={require('./images/iameeLogo_gradient.png')} alt=""/>
          <div className="spacer"></div>
          <Container className="carousel text-center">
            <Slider {...settings}>
              <div>
                <Carousel
                  subtitle="Helping you build the best you"
                />
              </div>
              <div>
                <Carousel
                  subtitle="Choose activities to help you achieve a positive experience"
                />
              </div>
              <div>
                <Carousel
                  subtitle="You can invite a friend or join a community to keep you motivated"
                />
              </div>
            </Slider>
          </Container>
        </div>

        <Link to='/signup'>
          <Button
            color="primary"
            className = "fixed-button"
            size="lg"
            >
            Continue
          </Button>
        </Link>
      </div>
    );
  }
}

export default Homepage;
