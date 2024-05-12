import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import homeLogo from "../../Assets/user.svg";
import Toolstack from "./Toolstack";
import SoftSkills from "./SoftSkills";
import Hobbies from "./Hobbies";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "15px",
            }}
          >
            <Aboutcard />
            <SoftSkills />
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
              style={{ maxHeight: "380px", marginBottom: "10%" }}
            />
            <Hobbies />
          </Col>
        </Row>
        <Techstack />
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
