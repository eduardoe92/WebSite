import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Hobbies from "./Hobbies";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle/>
      <Container >
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col 
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              INFORMACIÓN ADICIONAL <strong className="purple">SOBRE MÍ</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <Hobbies/>
          </Col>
        </Row>
        <h1 className="project-heading">
          CONJUNTO DE <strong className="purple">HABILIDADES PROFESIONALES</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">HERRAMIENTAS</strong> QUE UTILIZO
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
