import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MakisanTech from "../../Assets/Projects/Makisan-Tech.webp";
import Pokedex from "../../Assets/Projects/Pokedex.webp";
import ProEidos from "../../Assets/Projects/Proyecto-Eidos.webp";
import ConsoleLogAr from "../../Assets/Projects/ConsoleLog.Ar.webp";
import RickAndMorty from "../../Assets/Projects/RickAndMorty.webp";
import ShopMax from "../../Assets/Projects/ShopMax.webp";
import CarolineSeda from "../../Assets/Projects/CarolineSeda.webp"


function Projects() {

  const isDesktop = window.innerWidth >= 768 && window.innerWidth <= 1223;

  const projectsData = [
    {
      imgPath: ShopMax,
      title: "ShopMax",
      description: "ShopMax, un e-commerce en desarrollo, se encuentra actualmente en fase de implementación por un equipo de programadores expertos. Utilizando tecnologías como React, Java y MySQL, nuestro objetivo es ofrecer una experiencia de compra en línea eficiente y de alta calidad que cumpla con los más altos estándares del mercado digital actual.",
      ghLink: "https://github.com/eduardoe92/tienda",
      demoLink: "",
    },
    {
      imgPath: ConsoleLogAr,
      title: "ConsoleLog.Ar",
      description: "La página oficial de la marca ConsoleLog.Ar se encuentra actualmente en proceso de desarrollo por un equipo de programadores especializados. Utilizando tecnologías fundamentales como HTML, CSS y JavaScript, estamos comprometidos en crear una plataforma web que refleje la esencia y los valores de nuestra marca, proporcionando una experiencia digital óptima para nuestros usuarios.",
      ghLink: "https://github.com/eduardoe92/consolelog.ar",
      demoLink: "https://www.consolelog.ar/",
    },
    {
      imgPath: Pokedex,
      title: "Pokedex",
      description: "El Proyecto Pokedex, desarrollado con React, aprovecha la API de Pokemon para brindar a los usuarios acceso a las especificaciones de sus Pokémon favoritos. Esta aplicación está alojada en Vercel, garantizando una experiencia fluida y confiable. Con un enfoque en la usabilidad y la precisión de los datos, el Proyecto Pokedex es una herramienta invaluable para los entusiastas de Pokémon y los desarrolladores por igual.",
      ghLink: "https://github.com/eduardoe92/Pokedex",
      demoLink: "https://pokedex-eduardoe92.vercel.app/",
    },
    {
      imgPath: CarolineSeda,
      title: "Caroline Seda",
      description: "El Proyecto de Digital Nao consistió en la creación de una Landing Page para 'Caroline Seda', profesional en Administración y Dirección de Empresas. Se emplearon exclusivamente tecnologías HTML, CSS y Bootstrap para su desarrollo, garantizando una presentación elegante y funcional que resalta las habilidades y servicios ofrecidos por la licenciada.",
      ghLink: "https://github.com/eduardoe92/CarolineSada",
      demoLink: "https://eduardoe92.github.io/CarolineSada/",
    },
    {
      imgPath: RickAndMorty,
      title: "Rick and Morty",
      description: "El Proyecto Rick and Morty, desarrollado con React, utiliza la API de la serie para proporcionar a los usuarios información detallada sobre cada personaje. Esta aplicación está implementada en Vercel, asegurando una experiencia de usuario fluida y confiable.",
      ghLink: "https://github.com/eduardoe92/Pokedex",
      demoLink: "https://pokedex-eduardoe92.vercel.app/",
    },
    {
      imgPath: MakisanTech,
      title: "Makisan Tech",
      description: "La Landing Page de Makisan-Tech, desarrollada con HTML, CSS y JavaScript, fue fruto de una colaboración estrecha con un equipo de desarrolladores front-end. Nuestro objetivo principal fue optimizar la experiencia del usuario, asegurando una navegación fluida y una presentación atractiva que reflejara los valores de la empresa.",
      ghLink: "https://github.com/eduardoe92/web-makisan-tech",
      demoLink: "https://jonathansansok.github.io/web-makisan-tech/",
    },
    {
      imgPath: ProEidos,
      title: "Eidos Global",
      description: "Como proyecto final para el curso Eidos Global, diseñé una página de presentación personal utilizando HTML, CSS y JavaScript. La implementación de una interfaz interactiva fue fundamental para mejorar la experiencia del usuario, garantizando su adaptabilidad a diferentes dispositivos mediante un diseño responsivo.",
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