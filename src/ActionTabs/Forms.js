import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormButton from "./FormButton";

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
    },
    loading: false,
    sentStatus: 'unsent'
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

  formatRequest(){
    let data = this.state;
    data.formString = '';
    let forms = (Object.keys(this.state.forms).filter(form=> this.state.forms[form]=== true))
    forms.forEach(abbreviation =>
      data.formString = data.formString + ', ' + formNames[abbreviation] 
    );
    data.formString = data.formString.slice(2)
    return data;
  }


  sendEmail = e => {
    e.preventDefault();
    this.setState({loading: true})

    let data = this.formatRequest();
    fetch("https://us-central1-edelstein-4e6a1.cloudfunctions.net/sendEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(resp => {
      if (resp.status === 200){
        this.setState({
          sentStatus: 'success',
          loading: false
        })
      } else { 
        this.setState({
          sentStatus: 'error',
          loading: false})
        }
    });
  }

  render() {
    return (
      <div id="formsWrapper">
        <Form onSubmit={this.sendEmail}>
          <Form.Group as={Row} controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Col xs="12" sm="8">
            <Form.Control
            size="lg"
              type="text"
              placeholder="Enter your full name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label>Email address</Form.Label>
            <Col xs="12" sm="8">
            <Form.Control
            size="lg"
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            </Col>
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

          <FormButton
          loading={this.state.loading}
          sentStatus={this.state.sentStatus}
          validated={(this.state.name && this.state.email)? true:false}
          /> 

        </Form>
      </div>
    );
  }
}
