import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Projects1 from "../Projects/Projects 1";
import ContactForm from "./ContactForm";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Rakibul Hasan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects1 />
      <ContactForm />
    </section>
  );
}

export default Home;
