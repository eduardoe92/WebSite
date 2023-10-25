import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ImagePersonal.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

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
                <b className="purple"> Java, JavaScript, HTML, CSS, Bootstrap, Tailwind-CSS, Figma, React, GitHub, MySQL, Spring y WordPress. </b>
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
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  borderRadius: '175px',
                  boxShadow: '10px 10px 20px rgb(112, 12, 134)'
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN MIS <strong className="purple">REDES SOCIALES</strong></h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/eduardoe92"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://discord.com/channels/@eduardo.e"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eduardoe92"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/eduardo.e"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              No dudes en <strong className="purple">contactarte</strong> conmigo
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
