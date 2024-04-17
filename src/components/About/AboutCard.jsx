import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowsAlt, FaCalendar, FaCogs, FaComment, FaPaintBrush, FaSearch, FaUserFriends } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function AboutCard() {

  const skills = [
    { icon: <FaCogs />, text: "Pensamiento Lógico y Analítico" },
    { icon: < FaComment />, text: "Comunicación Efectiva" },
    { icon: < FaSearch />, text: "Atención a los Detalles" },
    { icon: < FaCalendar />, text: "Gestión del Tiempo" },
    { icon: < FaUserFriends />, text: "Trabajar en Equipo" },
    { icon: < FaArrowsAlt />, text: "Adaptabilidad" },
    { icon: < FaPaintBrush />, text: "Creatividad" },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            <br /> He participado en diversos programas de formación que han enriquecido mi conjunto de habilidades como programador.
            Estos programas incluyen: Programador <strong className="purple">Full Stack</strong> en 'Egg Cooperation y Argentina Programa'.
            Desarrollador <strong className="purple">Front-End</strong> en 'Eidos Global y Accenture' y actualmente en el programa
            <strong className="purple"> Full Stack Developer Core</strong> en 'Digital Nao x Tecmilenio'.
            <br />
            <br/> Anteriormente formé parte de la <strong className="purple">Universidad de los Andes</strong>, en la ciudad de Mérida — Venezuela,
            en donde estudié la carrera de <strong className="purple">Ingeniería Eléctrica.</strong>
            <br/>
            <br />
            Además de mi formación formal, he buscado de manera autodidacta expandir mis conocimientos a través de plataformas educativas
            como <strong className="purple">Udemy, FundAula y Educacion IT. </strong>
            <br />
            <br />
            Adicionalmente, he trabajado en <strong className="purple">Proyectos Personales,</strong> que me han permitido aplicar y fortalecer
            mis habilidades en programación web.
            <br />
          </p>
          <p className="about-activity">
            <ImPointRight /> Poseo <strong className="purple">Habilidades</strong> en:
          </p>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className="about-activity">
                {skill.icon} {skill.text}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
