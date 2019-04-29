import React, { Component } from "react";
import Home from "./Home.js";
import Welcome from "./Main.js";
import Booking from "./Action.js";

import {
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

import "./Styling/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {});
    Events.scrollEvent.register("end", function() {});
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer(id) {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("welcome", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo(id, {
        duration: 300,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "welcomeText"
      })
    );
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div className="App">
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="welcome" className="element">
          <Welcome />
        </Element>
        <Element name="booking" className="element">
          <Booking />
        </Element>
      </div>
    );
  }
}

export default App;
