import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hariharan </span>
            from <span className="purple"> TamilNadu, India.</span>
            <br />
            I am a full-stack developer with a passion for building
            web applications and exploring new technologies.
            <br />
            I have completed my Bachelor's degree in Computer Science from
            <span className="purple">  Mar Gregorios college of Arts & science, Chennai.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hariharan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
