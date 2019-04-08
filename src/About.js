import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="bg" id="about">
        <div id="overlay">
          <h1 id="welcomeTitle">I'm Dr. Susan Edelstein.</h1>
          <div id="headshot">
            <img
              src="http://thenewtemperament.com/images/nt_drsue-photo.jpg"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    );
  }
}
