import React, { Component } from "react";
import FormAlert from "./FormAlert";

export default class FormButton extends Component {
  loadingBtn() {
    return (
      <button className="formBtn" id="loading" disabled>
        <i className="fa fa-circle-o-notch fa-spin" /> Loading...
      </button>
    );
  }

  successBtn() {
    return (
      <div>
        <button className="formBtn" id="success" disabled>
          <span className={`glyphicon glyphicon-ok`} /> Sent
        </button>
        <FormAlert status="light" />
      </div>
    );
  }

  errorBtn() {
    return (
      <div>
        <button className="formBtn">REQUEST FORMS</button>
        <FormAlert status="error" />
      </div>
    );
  }

  unsentBtn() {
    if (this.props.validated) {
      return <button className="formBtn">REQUEST FORMS</button>;
    } else {
      return (
        <button className="formBtn" disabled>
          REQUEST FORMS
        </button>
      );
    }
  }

  decideWhichBtn() {
    if (this.props.loading) {
      return this.loadingBtn();
    } else if (this.props.sentStatus === "success") {
      return this.successBtn();
    } else if (this.props.sentStatus === "error") {
      return this.errorBtn();
    } else {
      return this.unsentBtn();
    }
  }

  render() {
    return (
      <div>
        {this.decideWhichBtn()}
        {this.props.validated ? null : <FormAlert status="warning" />}
      </div>
    );
  }
}
