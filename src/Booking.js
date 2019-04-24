import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// import { longStackSupport } from "q";

const marker = "https://i.imgur.com/tLivjtG.png";
const API_KEY = `${process.env.REACT_APP_GOOGLE_API_KEY}`;

export class Booking extends Component {
  static defaultProps = {
    center: {
      lat: 37.974311,
      lng: -122.531995
    }
  };

  render() {
    const google = window.google
    return (
      <div className="bg" id="booking">
        <div id="overlay">
          <h1 id="welcomeTitle">Book your next session</h1>
          <Row>
            <Col>
              <div className="mapWrapper">
                <Map
                  google={this.props.google}
                  zoom={13}
                  initialCenter={this.props.center}
                  fullscreenControl={false}
                  mapTypeControl={false}
                  streetViewControl={false}
                >
                  <Marker
                    name={"My Office"}
                    position={this.props.center}
                    icon={{
                      url: marker,
                      scaledSize: new google.maps.Size(64, 75)
                    }}
                  />

                  {/* <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                      <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                  </InfoWindow> */}
                </Map>
              </div>
                <div className="officeInfo">
                  <ul>
                    <li id="officeInfoHead">
                      <strong>Office Location</strong>
                    </li>
                    <li>1099 D St. Suite E</li>
                    <li>San Rafael, CA 94901</li>
                    <br />
                    <li id="officeInfoHead">
                      <strong>Contact Information</strong>
                    </li>
                    <li>Mobile: (415)302-2246</li>
                    <li>drsusanedelstein@gmail.com</li>
                    <br />
                    <li id="officeInfoHead">
                      <strong>License Number</strong>
                    </li>
                    <li>#PSY14535</li>
                  </ul>
                </div>
            </Col>
            <Col>
              <div className="squareWrapper">
                <iframe
                  className="squareWidget"
                  src="https://squareup.com/appointments/buyer/widget/d87f4ed1-ee69-4a95-8df2-eb6dfc7b4190/C0H1E7DZ26ZEZ"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
})(Booking)
