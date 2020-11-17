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
          <a
            href="https://susan-edelstein.clientsecure.me"
            target="_blank"
            rel="noopener noreferrer"
            data-spwidget-scope-id={`${ process.env.REACT_APP_WIDGET_SCOPE_ID }`}
            data-spwidget-scope-uri="susan-edelstein"
            data-spwidget-application-id={`${ process.env.REACT_APP_WIDGET_APP_ID }`}
            data-spwidget-scope-global
            data-spwidget-autobind
            style={{ textDecoration: 'none' }}
          >
            <div className="homeBtn">Book now*</div>
          </a>
          <div className="notice">* You will be redirected to the Simple Practice booking service, where you can create an account and schedule an appointment with me.</div>
        </div>
      </div>
    );
  }
}
