import React from "react";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialNetworks() {

    const socialLinks = [
        { url: "https://github.com/eduardoe92", icon: <AiFillGithub />, text: "GitHub" },
        { url: "https://www.linkedin.com/in/eduardoe92", icon: <FaLinkedinIn />, text: "LinkedIn" },
        { url: "https://www.instagram.com/eduardo.e", icon: <AiFillInstagram />, text: "Instagram" }
    ];

    return (
        <Row>
            <Col md={12} className="home-about-social">
                <h1>ENCUÉNTRAME EN MIS <strong className="purple">REDES SOCIALES</strong></h1>
                <ul className="home-about-social-links">
                    {socialLinks.map((link, index) => (
                        <li key={index} className="social-icons">
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour home-social-icons"
                            >
                                {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
                <p>
                    No dudes en <strong className="purple">contactarte</strong> conmigo
                </p>
            </Col>
        </Row>
    );
}

export default SocialNetworks;