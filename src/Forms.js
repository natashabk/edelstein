import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
export default class Forms extends Component {
  render() {
    return (
      <div className="bg" id="forms">
        <Container>
          <h1 id="welcomeTitle">Forms & Payment</h1>
            
          <Row id="form">
            <Col sm={8}>
              <p>Notice of Privacy Policies</p>
            </Col>
            <Col sm={4}>
              <button id="formBtn">Sign</button>
            </Col>{" "}
          </Row>
          <Row id="form">
            <Col sm={8}>
              <p>Authorization to Release Information</p>
            </Col>
            <Col sm={4}>
              <button id="formBtn">Sign</button>
            </Col>{" "}
          </Row>
          <Row id="form">
            <Col sm={8}>
              <p>HIPAA Notice</p>
            </Col>
            <Col sm={4}>
              <button id="formBtn">Sign</button>
            </Col>{" "}
          </Row>
          <Row id="form">
            <Col sm={8}>
              <p>Informed Consent - Adults</p>
            </Col>
            <Col sm={4}>
              <button id="formBtn">Sign</button>
            </Col>{" "}
          </Row>
          <Row id="form">
            <Col sm={8}>
              <p>Informed Consent - Adolescents</p>
            </Col>
            <Col sm={4}>
              <button id="formBtn">Sign</button>
            </Col>{" "}
          </Row>
          <Row className="payment">
            <Col sm={4} id="paymentCol"><p><strong>Avg. Cost Per Session:</strong></p></Col><Col sm={8}><p>$200 (sliding scale available)</p></Col>
            <Col sm={4} id="paymentCol"><p><strong>Payments accepted: </strong></p></Col><Col sm={8}><p>Cash, Check, Mastercard, Paypal, Visa, Venmo</p></Col>
            <Col sm={4} id="paymentCol"><p><strong>Insurance accepted:</strong></p></Col><Col sm={8}><p>BlueCross, BlueShield, Cigna, Great-West Life, Health Net, MHN, Out of Network Providers</p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
