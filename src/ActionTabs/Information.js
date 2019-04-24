import React, { Component } from "react";
export default class Information extends Component {
  render() {
    return (
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
        <li id="officeInfoHead">
          <strong>Avg. Cost Per Session:</strong>
        </li>
        <li>$200 (sliding scale available)</li>
        <li id="officeInfoHead">
          <strong>Payments accepted:</strong>
        </li>
        <li>Cash, Check, Mastercard, Paypal, Visa, Venmo</li>
        <li id="officeInfoHead">
          <strong>Insurance accepted:</strong>
        </li>
        <li>BlueCross, BlueShield, Cigna, Great-West Life, Health Net, MHN, Out of Network Providers</li>
      </ul>
    );
  }
}
