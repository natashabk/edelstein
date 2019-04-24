import React, { Component } from "react";
export default class Information extends Component {
  render() {
    return (
      <ul>
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
