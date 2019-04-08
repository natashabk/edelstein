import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" sticky="top">
      <Navbar.Brand href="#home">Susan Edelstein</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            activeClass="active"
            className="welcome"
            to="welcome"
            spy={true}
            smooth={true}
            duration={800}
          >
            Welcome
          </Link>
          <Link
            activeClass="active"
            className="about"
            to="about"
            spy={true}
            smooth={true}
            duration={800}
          >
            About Me
          </Link>
          <Link
            activeClass="active"
            className="forms"
            to="forms"
            spy={true}
            smooth={true}
            duration={800}
          >
            Forms
          </Link>
          <Link
            activeClass="active"
            className="booking"
            to="booking"
            spy={true}
            smooth={true}
            duration={800}
          >
            Booking
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}