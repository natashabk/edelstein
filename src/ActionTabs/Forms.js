import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Forms extends Component {
  render() {
    return (
      <Table>
        <tr>
          <td>Notice of Privacy Policies</td>
          <td>Sign</td>
        </tr>
      
        <tr>
          <td>Authorization to Release Information</td>
          <td>Sign</td>
        </tr>
      
        <tr>
          <td>HIPAA Notice</td>
          <td>Sign</td>
        </tr>
      
        <tr>
          <td>Informed Consent - Adults</td>
          <td>Sign</td>
        </tr>
      
        <tr>
          <td>Informed Consent - Adolescents</td>
          <td>Sign</td>
        </tr>
      </Table>
    )
  }}
