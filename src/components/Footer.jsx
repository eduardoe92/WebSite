import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.webp";
import SocialIcon from "./Contact/SocialIcon";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <a href="/">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </a>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {SocialIcon.map((link, index) => (
              <li key={index} className="social-icons">
                <a
                  href={link.href}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
