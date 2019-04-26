import React, { Component } from "react";
import FormAlert from "./FormAlert";

export default class FormButton extends Component {
  loadingBtn() {
    return (
      <button id="formBtn" disabled>
        <i className="fa fa-circle-o-notch fa-spin" /> Loading...
      </button>
    );
  }

  successBtn() {
    return (
      <div>
      <button id="formBtn" disabled>
        <span className={`glyphicon glyphicon-ok`} /> Sent
      </button>
      <FormAlert status="success"/>
      </div>
    );
  }

  errorBtn() {
    return (
      <div>
      <button id="formBtn">
        Request Forms
      </button>
      <FormAlert status="error"/>
      </div>
    );
  }

  unsentBtn() {
    if (this.props.validated) {
      return <button id="formBtn">Request Forms</button>;
    } else {
      return <button id="formBtn" disabled>Request Forms</button>;
    }
  }

  decideWhichBtn() {
    if (this.props.loading) {
      return this.loadingBtn();
    } else if (this.props.sentStatus === "success") {
      return this.successBtn();
    } else if (this.props.sentStatus === "error"){
      return this.errorBtn();
    } else {
      return this.unsentBtn();
    }
  }

  render() {
    return (
      <div>
    {this.decideWhichBtn()}
    {this.props.validated ? null: <FormAlert status="warning"/>}
    </div>);
  }
}
