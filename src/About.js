import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="bg" id="about">
        <div id="overlay">
          <h1 id="welcomeTitle">I'm Dr. Susan Edelstein.</h1>
          <div id="headshot">
            <img
              src="http://thenewtemperament.com/images/nt_drsue-photo.jpg"
              alt="placeholder"
            />
            <ul id="aboutList">
              <li><strong>PhD</strong>{" "}The Wright Institute, 1992</li>
              <li><strong>MA</strong>{" "}Wright Institute, 1990</li>
              <li><strong>BA</strong>{" "}Antioch University, 1984</li>
              <li><strong>License</strong>{" "}#PSY14535</li>
              </ul>
          </div>
          <p>
            {" "}
            With almost thirty years of experience working as a psychologist, I
            can show you ways to reduce your anxiety and develop new coping
            strategies to improve and heal interactions in your family, your
            relationships and your workplace. I help people understand
            themselves and the psychological obstacles that are getting in the
            way of experiencing life at its fullest.{" "}
          </p>
          <p>
            {" "}
            In my practice, I work with individuals and couples of
            all races, ethnicities, genders, sexualities, abilities, and backgrounds. 
            I have many years of experience helping families of all kinds 
            who are coping with difficulties in their relationships.
            Some couples come to see me to heal their marriages and some come to
            learn how to separate in ways to that support empathic separation
            and positive coparenting.{" "}
          </p>
          <p>
            Even when we provide our children with unconditional love and do our
            best to understand and support them, problems can arise that cause
            us to doubt our parenting. With almost thirty years of experience
            working with children with emotional and behavioral issues, I can
            help.
          </p>
        </div>
      </div>
    );
  }
}
