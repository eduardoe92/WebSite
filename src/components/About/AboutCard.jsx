import React from "react";
import Card from "react-bootstrap/Card";
import { FaBaseballBall, FaCamera, FaCar, FaFutbol, FaHeadphones, FaPlane } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br /> He participado en varios programas de formación que han enriquecido mi conjunto de habilidades como programador.
            Estos programas incluyen: Programador <strong className="purple">Full Stack </strong> en 'Egg Cooperation y Argentina Programa'.
            Desarrollador <strong className="purple">Front-End </strong> en 'Eidos Global y Accenture' y actualmente en el programa:
            <strong className="purple"> Full Stack Developer Core </strong>en 'Digital Nao x Tecmilenio'.
            <br />
            <br />
            Además de mi formación formal, he buscado de manera autodidacta expandir mis conocimientos a través de plataformas educativas como <strong className="purple">Udemy, FundAula y Educacion IT. </strong>
            Adicionalmente, he trabajado en <strong className="purple"> Proyectos Personales,</strong> que me han permitido aplicar y fortalecer mis habilidades en programación web.
            <br />
          </p>
          <p className="about-activity">
            <ImPointRight /> Entre mis <strong className="purple"> Hobbies</strong> te podría comentar que:
            </p>
          <ul>
            
            <li className="about-activity">
              <FaPlane /> Me encanta Viajar
            </li>
            <li className="about-activity">
              <FaCamera /> La Fotografía
            </li>
            <li className="about-activity">
              <FaCar /> La Fórmula 1
            </li>
            <li className="about-activity">
              <FaBaseballBall /> El Béisbol
            </li>
            <li className="about-activity">
              <FaFutbol /> El Fútbol
            </li>
            <li className="about-activity">
              <FaHeadphones /> El Rock
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
