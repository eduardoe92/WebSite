import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ImagePersonal.webp";
import SocialNetworks from "../Contact/SocialNetWorks";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="text-uppercase" style={{ fontSize: "2.6em" }}>
              Permíteme <strong className="purple"> Presentarme </strong>
            </h1>
            <blockquote
              className="home-about-body"
              style={{ textAlign: "justify" }}
            >
              <p>
                Soy un apasionado
                <strong className="purple"> Programador Web</strong> en
                constante formación.{" "}
              </p>
              <p>
                Actualmente resido en
                <strong className="purple"> Buenos Aires, Argentina, </strong>
                aunque soy originario de
                <strong className="purple"> Mérida, Venezuela.</strong>
              </p>
              <p>
                A lo largo de mi trayecto, he invertido mi tiempo en adquirir
                diversos conocimientos y habilidades relevantes para la
                industria, las cuales son:
                <strong className="purple">
                  {" "}
                  Java, React, Astro, MySQL, JavaScript, HTML, CSS, Bootstrap,
                  Tailwind-CSS, Spring, WordPress, NodeJS, Postman, Vercel,
                  GitHub, Figma, Jira, Trello, Notion y Miro.
                </strong>
              </p>
              <p>
                Siento una profunda pasión por la tecnología y el desarrollo
                web, y estoy comprometido a seguir aprendiendo cada día para
                convertirme en un
                <strong className="purple">
                  {" "}
                  Profesional de Excelencia
                </strong>{" "}
                en el <strong className="purple"> Mundo IT.</strong>
              </p>
              <p>
                Estoy dispuesto a asumir
                <strong className="purple"> Nuevos Desafíos</strong> y formar
                parte de equipos innovadores en el sector.
              </p>
            </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{
                borderRadius: "45%",
                boxShadow: "10px 10px 20px rgb(112, 12, 134)",
              }}
            />
          </Col>
        </Row>
        <SocialNetworks />
      </Container>
    </Container>
  );
}
export default Home2;
