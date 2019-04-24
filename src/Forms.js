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
          
        </Container>
      </div>
    );
  }
}
