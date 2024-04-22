import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ImagePersonal.webp";
import Tilt from "react-parallax-tilt";
import SocialNetworks from "../Contact/SocialNetWorks";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <strong className="purple"> PRESENTARME </strong>
            </h1>
            <p className="home-about-body">
              Soy un apasionado <strong className="purple">Programador Web</strong> en constante formación.
              <br />
              <br />Actualmente resido en <strong className="purple">Buenos Aires, Argentina,</strong> aunque soy originario de <b className="purple">Mérida, Venezuela.</b>
              <br />
              <br />A lo largo de mi trayecto, he invertido mi tiempo en adquirir diversos conocimientos y habilidades relevantes para la industria, las cuales son:
              <i>
                <b className="purple"> Java, JavaScript, HTML, CSS, Bootstrap, Tailwind-CSS, React, GitHub, MySQL, Vercel, Spring, Figma, Trello, Jira y WordPress. </b>
              </i>
              <br />
              <br />
              Siento una profunda pasión por la tecnología y el desarrollo web, y estoy comprometido a seguir aprendiendo cada día para convertirme en un&nbsp;
              <i>
                <strong className="purple">Profesional de Excelencia</strong> en el {" "}
                <strong className="purple">Mundo IT.</strong>
              </i>
              <br />
              <br />
              Estoy dispuesto a asumir <strong className="purple">Nuevos Desafíos</strong> y formar parte de equipos innovadores en el sector.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: '45%',
                  boxShadow: '10px 10px 20px rgb(112, 12, 134)'
                }}
              />
          </Col>
        </Row>
        <SocialNetworks/>
      </Container>
    </Container>
  );
}
export default Home2;
