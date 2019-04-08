import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="sm" sticky="top">
        <Navbar.Brand href="#home">Susan Edelstein, PhD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
              className="welcome"
              to="welcome"
              onClick={() => this.props.scrollToWithContainer("whoISee")}
            >
              Who I See
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
              Forms & Payment
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

            {/* <Link
              activeClass="active"
              to="firstInsideContainer"
              spy={true}
              smooth={true}
              duration={800}
              containerId="containerElement"
            >
              Specialties
            </Link>

            <Link
              activeClass="active"
              to="secondInsideContainer"
              spy={true}
              smooth={true}
              duration={800}
              containerId="containerElement"
            >
              Who I See
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
