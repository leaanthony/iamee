import React, { Component } from 'react';
import Experiences from './Experiences';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import {
  Link
} from 'react-router-dom';
import { Card, Button, CardText, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter, CardBlock, CardTitle } from 'reactstrap';
import style from './ExperiencePage.css';

class ExperiencePage extends Component {
  constructor() {
    super()
    this.state = {
      modal: false
    };
    this.cardStyle.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState({
     modal: !this.state.modal
   });
 }

  cardStyle(color, border) {
    return (
      {
      'backgroundColor': color,
      'borderColor': border
      }
    )
  }

  render() {


    return (
      <div>

        <Navigation />

        <div className="spacer"></div>

        <Container className="text-center">
          <h1>Activity Builder</h1>
          <p>Start by choosing the experience you'd like to have. We'll suggest activities for you to achieve your goal.</p>
        </Container>

        <Container>
          <Row>
          <Experiences
            header="Bold"
            style={this.cardStyle('#F95272', '#F95272')}
          />

          <Experiences
            onclick={this.toggle}
            header="Relaxed"
            style={this.cardStyle('#30CDCA', '#30CDCA')}
          />


        <Modal id="content" isOpen={this.state.modal} toggle={this.toggle} className="modalRelaxed transparent">
            <ModalBody>
              <Card
                onClick={this.props.onclick}
                block inverse style={this.props.style}
                className="circle-modal"
              >
                <CardBlock>
                  <CardTitle className="blackFontTitle">Be Relaxed</CardTitle>
                  <CardText className="blackFontText">Take time out for yourself to relax</CardText>
                </CardBlock>
              </Card>
            </ModalBody>

            <ModalFooter className="modalButton">
              <Link to='/createtask'>
                <Button
                  className="rounded-button button-blue "
                  size="lg" block
                  color="primary"
                  onClick={this.toggle}>Start To Build
                </Button>
              </Link>
            </ModalFooter>
            </Modal>

          </Row>

          <div className="spacer"></div>

          <Row>
          <Experiences
            header="Positive"
            style={this.cardStyle('#F1E484', '#F1E484')}
          />

          <Experiences
            header="Inquisitive"
            style={this.cardStyle('#79A4FB', '#79A4FB')}
          />
          </Row>

          <div className="spacer"></div>

          <Row>
          <Experiences
            header="Adventurous"
            style={this.cardStyle('#32BAF0', '#32BAF0')}
          />

          <Experiences
            header="Motivated"
            style={this.cardStyle('#F1808B', '#F1808B')}
          />
          </Row>

          <div className="spacer"></div>

          <Row>
          <Experiences
            header="Yourself"
            style={this.cardStyle('#FBB751', '#FBB751')}
          />

          <Experiences
            header="Kind"
            style={this.cardStyle('#6DBF7A', '#6DBF7A')}
          />
          </Row>

          <div className="spacer"></div>
        </Container>

        <BottomNav />

      </div>
    );
  }
}

export default ExperiencePage;
