import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Specialities extends Component {
  render() {
    return (
      <div className="tabWrapper">
        <h1 className="welcomeTitle">Payment</h1>
        <p className="pBlock">Avg. Cost Per Session:  $210 (sliding scale available)</p>
        <ul style={{ textAlign: 'left', paddingLeft: 35 }}>
          <Row>
            <Col>
              <li>
                <strong>Accepted forms</strong>
              </li>
              <li>Cash</li>
              <li>Check</li>
              <li>Mastercard</li>
              <li>Visa</li>
              <li>Paypal</li>
              <li>Venmo</li>
            </Col>
            <Col>
              <li>
                <strong>Insurance</strong>
              </li>
              <li>Blue Cross / Blue Shield</li>
              <li>Cigna</li>
              <li>Great-West Life</li>
              <li>Health Net</li>
              <li>MHN</li>
              <li>Medicare</li>
              <li>Out of Network Providers</li>
            </Col>
          </Row>
        </ul>

        <h1 className="welcomeTitle">Contact</h1>
        <p className="pBlock">
          For everyone's safety during the COVID-19 pandemic, all appointments will be held online or by phone until further notice.
        <br /><br />
        </p>
        <p className="pBlock" style={{ textAlign: 'center' }}>
          <strong style={{ lineHeight: '25px' }}>☎  (415) 302-2246</strong>
          <br />
          <strong style={{ lineHeight: '25px' }}>✎  drsusanedelstein@gmail.com</strong>
        </p>
      </div>
    );
  }
}
