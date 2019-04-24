import React, { Component } from "react";
import { Row, Col, Container, Tabs, Tab } from "react-bootstrap";
import About from "./MainTabs/About";
import Welcome from "./MainTabs/Welcome";
import Specialities from "./MainTabs/Specialities";
import { Element } from "react-scroll";
export default class Main extends Component {
  render() {
    return (
      <div className="bg" id="welcome">
      <Row id="welcomeRow">
        <Col></Col>
        <Col xs={12} sm={12} md={7} id="rightCol">
          <Tabs fill variant="tabs" defaultActiveKey="welcome">
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
