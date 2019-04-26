import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

const formNames = {
  nOPP: "Notice of Privacy Policies",
  hIPAAN: "HIPAA Notice",
  aTRI: "Authorization to Release Information",
  iCAdults: "Informed Consent - Adults",
  iCKids: "Informed Consent - Adolescents"
};

export default class Forms extends Component {
  state = {
    name: "",
    email: "",
    newPatient: false,
    forms: {
      nOPP: false,
      aTRI: false,
      hIPAAN: false,
      iCAdults: false,
      iCKids: false
    }
  };

  populateFormList() {
    return Object.keys(formNames).map(abbreviation => {
      let fullName = formNames[abbreviation];
      let selected = this.state.forms[abbreviation];
      return (
        <Form.Group as={Row} controlId={abbreviation} key={abbreviation}>
          <Form.Check
            type="checkbox"
            label={fullName}
            checked={selected}
            onChange={this.onFormCheck}
          />
        </Form.Group>
      );
    });
  }

  onNewPatientCheck = () => {
    let selected = !this.state.newPatient;
    this.setState(prevState => ({
      newPatient: selected,
      forms: {
        ...prevState.forms,
        nOPP: selected,
        hIPAAN: selected
      }
    }));
  };

  onFormCheck = e => {
    const formID = e.target.id;
    this.setState(prevState => ({
      ...prevState,
      forms: {
        ...prevState.forms,
        [formID]: !this.state.forms[formID]
      }
    }));
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  callAPI = e => {
    e.preventDefault();
    let data = {}
    data.name = this.state.name;
    data.email = this.state.email;
    data.newPatient = this.state.newPatient;
    data.forms = '';
    
    let forms = (Object.keys(this.state.forms).filter(form=> this.state.forms[form]=== true))
    forms.forEach(abbreviation =>
      data.forms = data.forms + ', ' + formNames[abbreviation] 
    );

    console.log(data)
    fetch("https://us-central1-edelstein-4e6a1.cloudfunctions.net/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp => console.log(resp));
    return <p>whatever</p>;
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.callAPI}>
          <Form.Group as={Row} controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Form.Text className="text-muted">
              Your email will never be shared with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group as={Row} controlId="formNewCheckbox">
            <Form.Check
              type="checkbox"
              label="I am a new patient."
              onChange={this.onNewPatientCheck}
            />
          </Form.Group>

          <p id="formsNote">
            Please select all the forms you would like to request. These will be
            emailed to the address you provided for your eSignature (no printer
            required).
          </p>

          {this.populateFormList()}

          <Button id="formBtn" type="submit">
            Request Forms
          </Button>
        </Form>
      </div>
    );
  }
}
