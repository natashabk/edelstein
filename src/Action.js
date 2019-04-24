import React, { Component } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import OfficeMap from './ActionTabs/OfficeMap'
import Information from './ActionTabs/Information'
import Forms from './ActionTabs/Forms'


export default class Action extends Component {
  render() {
    return (
      <div className="bg" id="booking">
      <Row>
        <Col></Col>
      <Col xs={12} sm={12} md={9} id="middleCol">
        <div id="overlay">
        <div className="actionTabWrapper">
          <h1 id="bookingTitle">Booking <span class="glyphicon glyphicon-asterisk"></span></h1>
          <Tabs fill variant="tabs" defaultActiveKey="scheduling">
            <Tab eventKey="scheduling" title="Scheduling">
              <div className="squareWrapper">
                <iframe
                  className="squareWidget"
                  src="https://squareup.com/appointments/buyer/widget/d87f4ed1-ee69-4a95-8df2-eb6dfc7b4190/C0H1E7DZ26ZEZ"
                  />
              </div>
            </Tab>
            <Tab eventKey="location" title="Location">
            <div>
              <OfficeMap />
              </div>
            </Tab>
            <Tab eventKey="payment" title="Payment">
              <Information />
            </Tab>
            <Tab eventKey="forms" title="Forms">
              <Forms />
            </Tab>
          </Tabs>
          </div>
          </div>
          </Col>
                  <Col></Col>
          </Row>
          
          {/* <Row>
            <Col>
              <div className="officeInfo">
                <Information/>
              </div>
               <div className="mapWrapper">
              <OfficeMap/>
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
          </Row> */}
       
      </div>
    );
  }
}
