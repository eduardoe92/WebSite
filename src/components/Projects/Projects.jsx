import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MakisanTech from "../../Assets/Projects/Makisan-Tech.png";
import Pokedex from "../../Assets/Projects/Pokedex.png";
import ProEidos from "../../Assets/Projects/Proyecto-Eidos.png";
import ConsoleLogAr from "../../Assets/Projects/ConsoleLog.Ar.png";
import RickAndMorty from "../../Assets/Projects/RickAndMorty.png";
import ShopMax from "../../Assets/Projects/ShopMax.png";
import CarolineSeda from "../../Assets/Projects/CarolineSeda.png"


function Projects() {

  const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1223;

  const projectsData = [
    {
      imgPath: ShopMax,
      title: "ShopMax",
      description:
        "E-commerce 'ShopMax', actualmente se encuentra en desarrollo junto a un equipo de programadores, con tecnologías como React, Java y MySQL...",
      ghLink: "https://github.com/eduardoe92/tienda",
      demoLink: "",
    },
    {
      imgPath: ConsoleLogAr,
      title: "ConsoleLog.Ar",
      description: "Página oficial de la marca ConsoleLog.Ar, actualmente se encuentra en desarrollo junto a un equipo de programadores, con tecnologías como HTML, CSS y JavaScript...",
      ghLink: "https://github.com/eduardoe92/consolelog.ar",
      demoLink: "https://www.consolelog.ar/",
    },
    {
      imgPath: Pokedex,
      title: "Pokedex",
      description: "Proyecto Pokedex creado utilizando React, se utilizó la API de Pokemon, donde podrás encontrar las especificaciones de tu pokemon favorito. Se encuentra implementada en Vercel.",
      ghLink: "https://github.com/eduardoe92/Pokedex",
      demoLink: "https://pokedex-eduardoe92.vercel.app/",
    },
    {
      imgPath: CarolineSeda,
      title: "Caroline Seda",
      description: "Proyecto de Digital Nao, creacion de una Landing Page para 'Caroline Seda', una licenciada en Administración y Dirección de Empresas. Solo se utilizó tecnologías HTML, CSS, Bootstrap.",
      ghLink: "https://github.com/eduardoe92/CarolineSada",
      demoLink: "https://eduardoe92.github.io/CarolineSada/",
    },
    {
      imgPath: RickAndMorty,
      title: "Rick and Morty",
      description: "Proyecto Rick and Morty creado utilizando React, se utilizó la API de Rick and Morty, donde podrás encontrar las especificaciones de de cada personaje. Se encuentra implementada en Vercel.",
      ghLink: "https://github.com/eduardoe92/Pokedex",
      demoLink: "https://pokedex-eduardoe92.vercel.app/",
    },
    {
      imgPath: MakisanTech,
      title: "Makisan Tech",
      description: "Landing Page diseñada para la empresa Makisan-Tech. Desarrollada con HTML, CSS y JavaScript. Colaboré con un equipo de desarrolladores front-end para optimizar la experiencia del usuario.",
      ghLink: "https://github.com/eduardoe92/web-makisan-tech",
      demoLink: "https://jonathansansok.github.io/web-makisan-tech/",
    },
    {
      imgPath: ProEidos,
      title: "Eidos Global",
      description: "Página de presentación personal como proyecto final para el curso Eidos Global, diseñada con HTML, CSS y JavaScript. Implementé una interfaz interactiva para mejorar la experiencia del usuario, asegurando que fuera responsiva",
      ghLink: "https://github.com/eduardoe92/ProyectoFinal",
      demoLink: "https://eduardoe92.github.io/ProyectoFinal/",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MIS <strong className="purple">PROYECTOS</strong>
        </h1>
        <p style={{ color: "white" }}>
          A continuación te enseño algunos <strong className="purple">proyectos</strong> en los que he estado trabajando.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
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