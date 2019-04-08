import React, { Component } from "react";
import Home from "./Home.js";
import Welcome from "./Welcome.js";
import Booking from "./Booking.js";
import About from "./About.js";
import Forms from "./Forms.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import "./Styling/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div class="App">
        <Home />
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="#home">Susan Edelstein</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
        <Element name="welcome" className="element">
          <Welcome />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="forms" className="element">
          <Forms />
        </Element>
        <Element name="booking" className="element">
          <Booking />
        </Element>
        <Element
          className="element"
          id="scroll-container"
          style={{
            position: "relative",
            height: "200px",
            overflow: "scroll",
            marginBottom: "100px"
          }}
        >
          <Element
            name="scroll-container-first-element"
            style={{
              marginBottom: "200px"
            }}
          >
            first element inside container
          </Element>

          <Element
            name="scroll-container-second-element"
            style={{
              marginBottom: "200px"
            }}
          >
            second element inside container
          </Element>
        </Element>
        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    );
  }
}

export default App;
