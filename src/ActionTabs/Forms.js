import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Forms extends Component {
  render() {
    return (
      <div>
        <p id="formsNote">Note: These link to an external site.</p> 
      <Table>
        <tr>
          <td>Notice of Privacy Policies</td>
          <td id="formBtn">Sign</td>
        </tr>
      
        <tr>
          <td>Authorization to Release Information</td>
          <td id="formBtn">Sign</td>
        </tr>
      
        <tr>
          <td>HIPAA Notice</td>
          <td id="formBtn">Sign</td>
        </tr>
      
        <tr>
          <td>Informed Consent - Adults</td>
          <td id="formBtn">Sign</td>
        </tr>
      
        <tr>
          <td>Informed Consent - Adolescents</td>
          <td id="formBtn">Sign</td>
        </tr>
      </Table>
      </div>
    )
  }}
