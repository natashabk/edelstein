import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="tabWrapper">
        <h1 className="welcomeTitle">About Me</h1>
        <p className="pBlock">
          {" "}
          With almost thirty years of experience working as a psychologist, I
          can show you ways to reduce your anxiety and develop new coping
          strategies to improve and heal interactions in your family, your
          relationships and your workplace. I help people understand themselves
          and the psychological obstacles that are getting in the way of
          experiencing life at its fullest. <br /> In my practice, I work with
          individuals and couples of all races, ethnicities, genders,
          sexualities, abilities, and backgrounds. I have many years of
          experience helping families of all kinds who are coping with
          difficulties in their relationships. Some couples come to see me to
          heal their marriages and some come to learn how to separate in ways to
          that support empathic separation and positive coparenting. <br />
          Even when we provide our children with unconditional love and do our
          best to understand and support them, problems can arise that cause us
          to doubt our parenting. With almost thirty years of experience working
          with children with emotional and behavioral issues, I can help.<br/>
        <ul id="educationList">
          <li>PhD  <strong>Wright Institute</strong> 1992</li>
          <li>MA{" "}  <strong>Wright Institute</strong> 1990</li>
          <li>BA{" "}  <strong>Antioch University</strong> 1984</li>
        </ul>
        </p>
      </div>
    );
  }
}
