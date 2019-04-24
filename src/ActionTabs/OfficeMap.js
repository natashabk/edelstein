import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Row, Col } from "react-bootstrap";
const marker = "https://i.imgur.com/tLivjtG.png";
const center = { lat: 37.974311, lng: -122.531995 };

export class OfficeMap extends Component {
  render() {
    const google = window.google;
    return (
      <Row id="locationRow">
        <Col xs={12} sm={4} md={4} id="locationInfoText">
          <ul>
            <li id="officeInfoHead">
              <strong>Office Location</strong>
            </li>
            <li>1099 D St. Suite E</li>
            <li>San Rafael, CA 94901</li>
            <br />
            <li id="officeInfoHead">
              <strong>Contact</strong>
            </li>
            <li>(415) 302-2246</li>
            <li>drsusanedelstein@gmail.com</li>
            <br />
            <li id="officeInfoHead">
              <strong>License Number</strong>
            </li>
            <li>#PSY14535</li>
          </ul>
        </Col>
        <Col xs={12} sm={8} md={8}>
          <div className="mapWrapper">
            <Map
              google={this.props.google}
              zoom={13}
              initialCenter={center}
              fullscreenControl={false}
              mapTypeControl={false}
              streetViewControl={false}
            >
              <Marker
                name={"My Office"}
                position={center}
                icon={{
                  url: marker,
                  scaledSize: new google.maps.Size(64, 75)
                }}
              />
            </Map>
          </div>
        </Col>
      </Row>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
})(OfficeMap);
