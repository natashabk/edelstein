import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import { longStackSupport } from "q";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Booking extends Component {
  static defaultProps = {
    center: {
      lat: 37.974311,
      lng: -122.5344006
    },
    zoom: 13
  };

  render() {

    return (
      <div className="bg" id="booking">
        <div id="overlay">
          <h1 id="welcomeTitle">Book your next session</h1>
          <Row>
            <Col>
            <div className="mapWrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB6uDrK71HKJCGO7iPZDUj6BBns9CSOV_0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.974311}
            lng={-122.5344006}
            text="Office"
          />
        </GoogleMapReact>
      </div>
            </Col>
          <Col>
          <div className="squareWrapper">
          <iframe className="squareWidget" src="https://squareup.com/appointments/buyer/widget/d87f4ed1-ee69-4a95-8df2-eb6dfc7b4190/C0H1E7DZ26ZEZ" />
          </div>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}
