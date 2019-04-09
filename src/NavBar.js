import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" sticky="top">
        <Navbar.Brand href="#">Susan Edelstein, PhD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              className="welcome"
              to="welcome"
              onClick={() => this.props.scrollToWithContainer("intro")}
            >
              Welcome
            </Link>
            <Link
              className="welcome"
              to="welcome"
              onClick={() => this.props.scrollToWithContainer("specialities")}
            >
              Specialties
            </Link>
            <Link
              activeClass="active"
              className="about"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
            <Link
              activeClass="active"
              className="forms"
              to="forms"
              spy={true}
              smooth={true}
              duration={500}
            >
              Forms & Payment
            </Link>
            <Link
              activeClass="active"
              className="booking"
              to="booking"
              spy={true}
              smooth={true}
              duration={500}
            >
              Booking
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
