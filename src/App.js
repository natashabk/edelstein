import React, { Component } from "react";
import Home from "./Home.js";
import Welcome from "./Welcome.js";
import Booking from "./Booking.js";
import About from "./About.js";
import Forms from "./Forms.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Home/>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    Welcome
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    Forms
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test8"
                    to="same"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    Same target
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test9"
                    to="same"
                    spy={true}
                    smooth={true}
                    duration={800}
                  >
                    Same target
                  </Link>
                </li>
                <li>
                  <a
                    className="test1"
                    to="test1"
                    onClick={() => this.scrollTo()}
                  >
                    Scroll to element
                  </a>
                </li>
                <li>
                  <a
                    className="test1"
                    to="test1"
                    onClick={() => this.scrollToWithContainer()}
                  >
                    Scroll to element within container
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name="test1" className="element">
          <Welcome />
        </Element>

        <Element name="test2" className="element">
          <About />
        </Element>

        <Element name="test3" className="element">
          <Forms />
        </Element>

        <Element name="test4" className="element">
          <Booking />
        </Element>
        <Link
          activeClass="active"
          to="firstInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          Go to first element inside container
        </Link>

        <Link
          activeClass="active"
          to="secondInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          Go to second element inside container
        </Link>

        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "200px",
            overflow: "scroll",
            marginBottom: "100px"
          }}
        >
          <Element
            name="firstInsideContainer"
            style={{
              marginBottom: "200px"
            }}
          >
            first element inside container
          </Element>

          <Element
            name="secondInsideContainer"
            style={{
              marginBottom: "200px"
            }}
          >
            second element inside container
          </Element>
        </Element>

        <Element id="same" className="element">
          Two links point to this
        </Element>

        <Element name="scroll-to-element" className="element">
          Scroll to element
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
