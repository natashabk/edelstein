import React, { Component } from "react";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import About from "./Tabs/About";
import Welcome from "./Tabs/Welcome";
import Specialities from "./Tabs/Specialities";
import { Element } from "react-scroll";
export default class Home extends Component {
  render() {
    return (
      <div className="bg" id="welcome">
      <Row id="welcomeRow">
        <Col></Col>
        <Col xs={12} sm={12} md={7} id="rightCol">
          <Tabs defaultActiveKey="welcome">
            <Tab eventKey="welcome" title="Welcome">
              <Welcome />
            </Tab>
            <Tab eventKey="specialities" title="Specialities">
              <Specialities />
            </Tab>
            <Tab eventKey="about" title="About">
              <About />
            </Tab>
          </Tabs>
        </Col>
        </Row>
      </div>
    );
  }
}
