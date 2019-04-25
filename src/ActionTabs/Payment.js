import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Payment extends Component {
  render() {
    return (
      <ul className="payment">
        <li id="officeInfoHead">
          <strong>Avg. Cost Per Session:</strong>
        </li>
        <li>$200 (sliding scale available)</li>
        <br/>
        <Row className="payment row">
          <Col xs={12} sm={6}>
        <li id="officeInfoHead">
          <strong>Payments accepted:</strong>
        </li>
        <li>Cash</li>
          <li>Check</li>
          <li>Mastercard</li>
          <li>Paypal</li>
          <li>Visa</li>
          <li>Venmo</li>
          </Col>
          <Col xs={12} sm={6}>
        <li id="officeInfoHead">
          <strong>Insurance accepted:</strong>
        </li>
        <li>BlueCross</li>
          <li>BlueShield</li>
          <li>Cigna</li>
          <li>Great-West Life</li>
          <li>Health Net</li>
          <li>MHN</li>
          <li>Out of Network Providers</li>
          </Col>
          </Row>
      </ul>
    );
  }
}
