import React, { Component } from "react";
import Home from "./Home.js";
import Welcome from "./Welcome.js";
import Booking from "./Booking.js";
import About from "./About.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styling/App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={routerProps => <Home {...routerProps} />} />
          <Route exact path="/welcome" component={routerProps => <Welcome {...routerProps} />} />
          <Route exact path="/booking" component={routerProps => <Booking {...routerProps} />} />
          <Route exact path="/about" component={routerProps => <About {...routerProps} />} />
        </div>
      </Router>
    );
  }
}

export default App;
