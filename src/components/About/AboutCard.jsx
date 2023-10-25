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
            Estos programas incluyen: Programador <span className="purple">Full Stack </span> en 'Egg Cooperation y Argentina Programa'.
            Desarrollador <span className="purple">Front-End </span> en 'Eidos Global y Accenture' y actualmente en el programa:
            <span className="purple"> Full Stack Developer Core </span>en 'Digital Nao x Tecmilenio'.
            <br />
            <br />
            Además de mi formación formal, he buscado de manera autodidacta expandir mis conocimientos a través de plataformas educativas como <span className="purple">Udemy, FundAula y Educacion IT. </span>
            Además, he trabajado en <span className="purple"> Proyectos Personales.</span> que me han permitido aplicar y fortalecer mis habilidades de programación.
            <br />
          </p>
          <p className="about-activity">
            <ImPointRight /><span className="purple"> Hobbies!</span>
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
