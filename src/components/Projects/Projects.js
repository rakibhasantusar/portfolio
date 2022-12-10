import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Watch-Bazar.png";
import chatify from "../../Assets/Projects/Rakibul-arc.png";
import bitsOfCode from "../../Assets/Projects/coursera.png";

function Projects() {
  return (
    <Container fluid className="project-section" >
      <Particle />
      <Container style={{ marginBottom: "85px" }}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rakibul-Architecture"
              description="Personal service providing website, This website made with JavaScript library React v-18.2.0 & CSS React Tilwind FrameWork & daisyui Library,Also i use React icon, SVG image etc, fully responsive website "
              ghLink="https://github.com/rakibhasantusar/Rakibul-Architecture-Client"
              demoLink="https://rakibul-architecture.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Coursera-Bd"
              description="This website made with JavaScript library React v-18.2.0 & CSS React Bootstrap FrameWork, I use Firebase as my website deployer, I use React Router v-(6.4.2) which is make our website faster, fully responsive website"
              ghLink="https://github.com/rakibhasantusar/COURSERA_BD_CLIENT"
              demoLink="https://coursera-bd.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="watch-bazar"
              description="Watch-Bazar second hand watch selling website,This website made with JavaScript library React v-18.2.0 & CSS React Tilwind FrameWork & daisyui Library,I use Firebase as my website deployer,This website is fully responsive"
              ghLink="https://github.com/rakibhasantusar/Watch-Bazar-Client"
              demoLink="https://watch-bazar-bd.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
