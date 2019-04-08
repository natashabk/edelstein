import React, { Component } from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

export default class Home extends Component {
  render() {
    return (
      <div className="bg" id="home">
        <div id="homeTitle">
          <h1>Find your way back</h1>
          <h1 id="homeBtmTitle">to a healthier you.</h1>
          <Link
            className="homeBtn"
            id="topHomeBtn"
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            duration={800}
          >
            Learn more
          </Link>
          <Link
            className="homeBtn"
            activeClass="active"
            to="booking"
            spy={true}
            smooth={true}
            duration={800}
          >
            Current patients
          </Link>
        </div>
      </div>
    );
  }
}
