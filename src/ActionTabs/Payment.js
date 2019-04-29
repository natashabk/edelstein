import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Payment extends Component {
  render() {
    return (
      <ul className="payment">
        <li id="officeInfoHead" className="white">
          <strong>Avg. Cost Per Session:</strong>
        </li>
        <li className="white" id="bottom">
          $200 (sliding scale available)
        </li>
        <br />
        <Row className="payment row">
          <Col xs={12} sm={6}>
            <li id="officeInfoHead" className="white">
              <strong>Payments accepted:</strong>
            </li>
            <li className="white">Cash</li>
            <li className="white">Check</li>
            <li className="white">Mastercard</li>
            <li className="white">Paypal</li>
            <li className="white">Visa</li>
            <li className="white" id="bottom">
              Venmo
            </li>
          </Col>
          <Col xs={12} sm={6}>
            <li id="officeInfoHead" className="white">
              <strong>Insurance accepted:</strong>
            </li>
            <li className="white">BlueCross/BlueShield</li>
            <li className="white">Cigna</li>
            <li className="white">Great-West Life</li>
            <li className="white">Health Net</li>
            <li className="white">MHN</li>
            <li className="white" id="bottom">
              Out of Network Providers
            </li>
          </Col>
        </Row>
      </ul>
    );
  }
}
