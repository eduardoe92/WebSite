import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ProjectList from "./ProjectList";

function Projects() {

  const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1223;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-uppercase">
          Mis <strong className="purple">Proyectos</strong>
        </h1>
        <p style={{ color: "white" }}>
          A continuación te enseño algunos <strong className="purple">proyectos</strong> en los que he estado trabajando.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectList.map((project, index) => (
            <Col key={index} md={isDesktop ? 6 : 4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;