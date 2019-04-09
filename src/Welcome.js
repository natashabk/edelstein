import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
export default class Home extends Component {
  render() {
    return (
      <div className="bg" id="welcome">
        <div id="overlay">
          <Element className="element" id="welcomeText">
            <Element name="intro" id="intro">
              <h1 id="welcomeTitle">
                How do you know when it's time to ask for help?
              </h1>
              <Row id="officeRow">
              <img src="https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2018/10/GettyImages-814596806.jpg" alt="couch-placeholder" id="officeImg"/>
              </Row>
              <p>
                {" "}
                At times, things may seem so overwhelming that we despair of
                ever recapturing the happiness and optimism that we once may
                have had. We may find ourselves so anxious about the future or
                so regretful about the past that the present becomes a very
                lonely, scary place.{" "}
              </p>
              <p>
                You do not have to continue to suffer with chronic worry,
                obsessional thinking, panic and depression. I can help you
                regain a stronger sense of control and safety, regain the
                ability to relax and face the world with renewed confidence.
              </p>
              <p>
                Using evidence based treatment, specifically tailored to your
                needs, we can work together to identify ways to overcome
                whatever obstacles you’re facing.
              </p>
            </Element>
            <Element name="specialities" id="specialities">
              <h1 id="welcomeTitle">Specialities</h1>
              <p>
                <ul>
                <Row>
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
            </Element>
           
          </Element>
        </div>
      </div>
    );
  }
}
