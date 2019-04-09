import React, { Component } from "react";
import Script from 'react-load-script';

export default class Booking extends Component {

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
  
  render() {
    return (
      <div className="bg" id="booking">
        <div id="overlay">
          <h1 id="welcomeTitle">Book your next session</h1>
          <Script
      url="https://square.site/appointments/buyer/widget/d87f4ed1-ee69-4a95-8df2-eb6dfc7b4190/C0H1E7DZ26ZEZ.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
        </div>
      </div>
    );
  }
}
