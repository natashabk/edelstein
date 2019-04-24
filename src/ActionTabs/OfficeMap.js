import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const marker = "https://i.imgur.com/tLivjtG.png";
const center = {lat: 37.974311, lng: -122.531995}

export class OfficeMap extends Component {
  render() {
    const google = window.google;
  return (
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
  )
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
})(OfficeMap);