import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/contact.svg";
import ContactText from "./ContactText";
import SocialNetworks from "./SocialNetWorks";


function Contact() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container >
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            GRACIAS POR QUERER <strong className="purple">COMUNICARTE CONMIGO</strong>
                        </h1>
                        <ContactText />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "30px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={laptopImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <SocialNetworks/>
            </Container>
        </Container>
    );
}

export default Contact;