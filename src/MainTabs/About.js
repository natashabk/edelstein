import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="tabWrapper">
        <h1 className="welcomeTitle">About Me</h1>
        <div className="pBlock">
          {"  "}I provide psychotherapy and consultation for individuals, couples and
          families. My work is collaborative and relational. It is important to
          me that I provide a warm and inviting safe space to address anything
          that might be troubling you. The issues I treat are as varied as the
          people who come to see me. I work very hard to understand what brings
          each individual to me, helping to identify the beliefs that we
          developed through our experiences growing up and the coping strategies
          that we develop in order to feel safe.
          <br />
          {"  "}Sometimes those strategies have
          been very helpful in getting us to the present and sometimes those
          strategies no longer are adaptive in helping us accomplish our goals.
          Once these beliefs and strategies are conscious, we can alter those
          strategies and thus move forward. Issues that arise may include
          anxiety, generalized and social , trauma of all kinds, developmental
          transitions including grief and bereavement, body image and eating
          disorders, and stress management.
          <br />
          {"  "}With over twenty five years as a clinical psychologist , I still
          really enjoy my practice and my approach reflects my personal
          satisfaction. The work is endlessly fascinating and challenging and I
          consider it an honor be able to help people find their way back to
          joy. I welcome you to my practice.
          <br />
          <strong>Education:</strong>
          <ul id="educationList">
            <li>
              PhD <strong>Wright Institute</strong> 1992
            </li>
            <li>
              MA <strong>Wright Institute</strong> 1990
            </li>
            <li>
              BA <strong>Antioch University</strong> 1984
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
