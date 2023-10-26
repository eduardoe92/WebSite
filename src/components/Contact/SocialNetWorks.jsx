import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialNetworks() {
    return (
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
    );
}

export default SocialNetworks;