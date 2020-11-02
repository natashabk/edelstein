import React, { Component } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import About from "./MainTabs/About";
import Welcome from "./MainTabs/Welcome";
import Specialities from "./MainTabs/Specialities";
import Payment from "./MainTabs/Payment";
export default class Main extends Component {
  render() {
    return (
      <div className="bg" id="welcome">
        <Row id="welcomeRow">
          <Col />
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
              <Tab eventKey="payment" title="Pay/Contact">
                <Payment />
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'flex-end' }}>
          <a
            href="https://susan-edelstein.clientsecure.me"
            target="_blank"
            rel="noopener noreferrer"
            data-spwidget-scope-id={`${ process.env.REACT_APP_WIDGET_SCOPE_ID }`}
            data-spwidget-scope-uri="susan-edelstein"
            data-spwidget-application-id={`${ process.env.REACT_APP_WIDGET_APP_ID }`}
            data-spwidget-scope-global
            data-spwidget-autobind
            style={{ textDecoration: 'none' }}
          >
            <div className="homeBtn">Book appointment →</div>
          </a>
        </Row>
      </div>
    );
  }
}
