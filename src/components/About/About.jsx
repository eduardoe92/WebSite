import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import homeLogo from "../../Assets/user.svg";
import Toolstack from "./Toolstack";
import Hobbies from "./Hobbies";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container >
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "5px",
            }}
          >
            <h1 className= "text-uppercase"style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Información adicional <strong className="purple">sobre mí</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "380px", marginBottom: "38px" }}
            />
            <Hobbies />
          </Col>
        </Row>
        <h1 className="project-heading text-uppercase">
          Conjunto de <strong className="purple">Habilidades Profesionales</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading text-uppercase">
          <strong className="purple">Herramientas</strong> que utilizo
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
