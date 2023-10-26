import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowsAlt, FaCalendar, FaCogs, FaComment, FaPaintBrush, FaSearch, FaUserFriends } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            <br /> He participado en diversos programas de formación que han enriquecido mi conjunto de habilidades como programador.
            Estos programas incluyen: Programador <strong className="purple">Full Stack</strong> en 'Egg Cooperation y Argentina Programa'.
            Desarrollador <strong className="purple">Front-End</strong> en 'Eidos Global y Accenture' y actualmente en el programa:
            <strong className="purple"> Full Stack Developer Core</strong> en 'Digital Nao x Tecmilenio'.
            <br />
            <br />
            Además de mi formación formal, he buscado de manera autodidacta expandir mis conocimientos a través de plataformas educativas como <strong className="purple">Udemy, FundAula y Educacion IT. </strong>
            <br />
            <br />
            Adicionalmente, he trabajado en <strong className="purple">Proyectos Personales,</strong> que me han permitido aplicar y fortalecer mis habilidades en programación web.
            <br />
          </p>
          <p className="about-activity">
            <ImPointRight /> Poseo <strong className="purple">Habilidades</strong> en:
          </p>
          <ul>
            <li className="about-activity">
              <FaUserFriends /> Trabajar en Equipo
            </li>
            <li className="about-activity">
              <FaComment /> Comunicación Efectiva
            </li>
            <li className="about-activity">
              <FaArrowsAlt /> Adaptabilidad
            </li>
            <li className="about-activity">
              <FaCalendar /> Gestión del Tiempo
            </li>
            <li className="about-activity">
              <FaSearch /> Atención a los Detalles
            </li>
            <li className="about-activity">
              <FaCogs /> Pensamiento Lógico y Analítico
            </li>
            <li className="about-activity">
              <FaPaintBrush /> Creatividad
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
