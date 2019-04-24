import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
export default class Specialities extends Component {
  render() {
    return (              <div className="tabWrapper">
    <h1 id="welcomeTitle">Specialities</h1>
    <p id="pBlock">
      <ul>
        <Row id="specialitiesText">
          <Col>
            <li>
              <strong>Anxiety </strong>
            </li>
            <li>Social anxiety</li>
            <li>Obsessional thinking</li>
            <li>Chronic worry</li>
            <li>Panic attacks </li>
            <li>
              <strong>Depression </strong>
            </li>
            <li>Self-Criticism/Perfectionism</li>
            <li>Issues of Gender/Sexual Identity</li>
            <li>Personality Disorders</li>
            <li>Relationship Issues</li>
            <li>
              <strong>Life Transitions </strong>
            </li>
            <li>Grief/Bereavement </li>
            <li>Performance Anxiety </li>
            <li>Stress Management </li>
            <li>Career Coaching</li>
            <li>Work/Life Balance</li>
            <li>Retirement </li>
            <li>Professional/Work Issues</li>
          </Col>
          <Col>
            <li>
              <strong>Children </strong>
            </li>
            <li>Childhood Anxiety/Depression</li>
            <li>Oppositional Behavior Affect Dysregulation</li>
            <li>Parental Separation/Divorce </li>
            <li>
              <strong>Adolescents </strong>
            </li>
            <li>Social anxiety/depression </li>
            <li>Academic Difficulties </li>
            <li>Eating Issues</li>
            <li>Body Disatisfaction </li>
            <li>Oppositional behavior</li>
            <li>Marijuana Abuse </li>
            <li>
              <strong>Couples and Families</strong>{" "}
            </li>
            <li>Chronic Conflict</li>
            <li>Co-parenting</li>
            <li>Step-parenting</li>
            <li>Differing parenting styles</li>
            <li>Discipline and Limit-Setting</li>
          </Col>
        </Row>
      </ul>
    </p>
  </div>)}}