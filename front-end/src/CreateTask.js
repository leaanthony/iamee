import React, { Component } from 'react';
import Experiences from './Experiences';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import FaPlus from 'react-icons/lib/fa/plus';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import Banner from './Banner';
import { Badge, Card, FormGroup, Label, Input, FormText, Button, CardTitle, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import style from './CreateTask.css';
import {
  Link
} from 'react-router-dom'

class ExperiencePage extends Component {
  constructor() {
    super()

    this.state= {
      clicked: false,
      newActivity: '',
      activities: ['MEDITATION', 'READING', 'WRITING', 'ART', 'DANCING']
    }

    this.clickedTrue = this.clickedTrue.bind(this)
    this.addNewActivity = this.addNewActivity.bind(this)
  }

  changeActivity(event) {
    this.setState({
      newActivity: event.target.value
    })
    console.log(this.state.newActivity)
  }

  addNewActivity(){
    var array = this.state.activities;
    var new_activity = this.state.newActivity;
    array.push(new_activity)
    console.log(array)

    this.setState({
      activities: array
    })
  }

  clickedTrue(i){
      this.setState({
        clicked: i
      })
  }

  getStyles(i){
      return {
        backgroundColor: this.state.clicked == i ? "#33C2BC" : "transparent",
        color: this.state.clicked == i ? "white" : "#33C2BC"
      }
  }

  render() {
    return (
      <div className="let-there-be-overflow">
        <Navigation />
        <Banner />
        <Container>

          <div className="spacer-small"></div>

          <div className="intro-text text-center">
            <p>Intro text to go here telling users to select their activity</p>
          </div>

          <div className="pills">
            {this.state.activities.map((activity, i) =>
              <Badge id={i} onClick = {() => this.clickedTrue(i)} style={this.getStyles(i)} pill>
                <p>{activity}</p>
              </Badge>
            )}

          </div>

          <div className="spacer-small"></div>

          <FormGroup className="no-wrap">
            <Input className="activity-input" onChange={(e)=>this.changeActivity(e)} value={this.state.newActivity} type="activity" name="activity" id="activity" placeholder="Add your own activity" />
            <Button
              onClick={this.addNewActivity}
              color="primary"
              className="circle-button"
              >
                <FaPlus />
              </Button>
          </FormGroup>

          <div className="spacer"></div>

        <div className="text-center">
          <p>Set reminder frequency</p>
        </div>

        <div className="sorting">
          <div className="sort right"><label>
              <select>
              <option value="daily">DAILY</option>
              <option value="weekly">WEEKLY</option>
              <option value="monthly">MONTHLY</option>
              </select>
              <span className="pointer"><FaArrowDown/></span>
              </label>
            </div>
        </div>

        <div className="spacer"></div>

        <Link to='/dashboard'>
          <Button
            className="rounded-button"
            color="primary"
            size="lg"
            block
            >
            Create
          </Button>
        </Link>

        <div className="spacer"></div>

        </Container>

        <BottomNav />

      </div>
    );
  }
}

export default ExperiencePage;
