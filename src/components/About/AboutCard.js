import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Rakibul Hasan </span>
            from <span className="purple"> Barishal, Bangladesh.</span>
            <br />I am a junior FullStack Web Developer(MERN), I am passionate about doing a great job, and I assure you about the skills you’re looking for I  already have knowledge of HTML5, CSS3 & It’s Framework(Bootstrap, Tailwind), Javascript and Its library Reactjs also Nodejs, Expressjs, as Database expertise with MongoDB.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rakibul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
