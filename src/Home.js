import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Home extends Component {
  render() {
    return (
      <div className="bg" id="home">
        <div id="homeTitle">
          <div id="homeTitle_wrapper">
          <h1>Susan Edelstein, PhD</h1>
          <h2>Licensed Clinincal Psychologist</h2>
          <h3>#PSY14535</h3>
          </div>
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
            Book now
          </Link>
        </div>
      </div>
    );
  }
}
