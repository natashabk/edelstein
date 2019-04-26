import React, { Component } from "react";
import { Alert } from "react-bootstrap";

const messages = {
  "success": "Your request has been sent. You should recieve your documents by email within the next few days.",
  "warning": "Please enter your full name and a valid email address above.",
  "danger": "Sorry, your request didn't go through. Please refresh the page and try again."
}

export default class FormAlert extends Component {

  render(){
    return (
      <Alert variant={this.props.status}>
          {messages[this.props.status]}
      </Alert>
    )
  }
}