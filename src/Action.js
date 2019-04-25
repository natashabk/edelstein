import React, { Component } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import OfficeMap from "./ActionTabs/OfficeMap";
import Information from "./ActionTabs/Payment";
import Forms from "./ActionTabs/Forms";

const symbols = {
  Scheduling: "calendar",
  Location: "map-marker",
  Payment: "usd",
  Forms: "inbox"
};

export default class Action extends Component {
  getResponsiveTabTitle(tab) {
    let span = <span class={`glyphicon glyphicon-${symbols[tab]}`} />;
    return window.innerWidth <= 375 ? span : tab;
  }

  render() {
    return (
      <div className="bg" id="booking">
        <Row>
          <Col />
          <Col xs={12} sm={12} md={9} id="middleCol">
            <div id="overlay">
              <div className="actionTabWrapper">
                <h1 id="bookingTitle">Booking</h1>
                <Tabs fill variant="tabs" defaultActiveKey="scheduling">
                  <Tab
                    eventKey="scheduling"
                    title={this.getResponsiveTabTitle("Scheduling")}
                  >
                    <div className="squareWrapper">
                      <iframe
                        className="squareWidget"
                        src="https://squareup.com/appointments/buyer/widget/d87f4ed1-ee69-4a95-8df2-eb6dfc7b4190/C0H1E7DZ26ZEZ"
                      />
                    </div>
                  </Tab>
                  <Tab
                    eventKey="location"
                    title={this.getResponsiveTabTitle("Location")}
                  >
                    <div>
                      <OfficeMap />
                    </div>
                  </Tab>
                  <Tab
                    eventKey="payment"
                    title={this.getResponsiveTabTitle("Payment")}
                  >
                    <Information />
                  </Tab>
                  <Tab
                    eventKey="forms"
                    title={this.getResponsiveTabTitle("Forms")}
                  >
                    <Forms />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
          <Col />
        </Row>
      </div>
    );
  }
}
