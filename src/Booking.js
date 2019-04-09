import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Booking extends Component {
  render() {
    return (
      <div className="bg" id="booking">
        <div id="overlay">
          <h1 id="welcomeTitle">Book your next session</h1>
          <Row>
            <Col></Col>
          <Col>
          <div className="squareWrapper">
          <iframe className="squareWidget" src="https://squareup.com/appointments/buyer/widget/d87f4ed1-ee69-4a95-8df2-eb6dfc7b4190/C0H1E7DZ26ZEZ" />
          </div>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}
