import React from "react";
import Card from "react-bootstrap/Card";
import {
    FaArrowsAlt,
    FaCalendar,
    FaCogs,
    FaComment,
    FaPaintBrush,
    FaSearch,
    FaUserFriends,
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function SoftSkills() {
const softSkills = [
    { icon: <FaCogs />, text: "Pensamiento Lógico y Analítico" },
    { icon: <FaComment />, text: "Comunicación Efectiva" },
    { icon: <FaSearch />, text: "Atención a los Detalles" },
    { icon: <FaCalendar />, text: "Gestión del Tiempo" },
    { icon: <FaUserFriends />, text: "Trabajar en Equipo" },
    { icon: <FaArrowsAlt />, text: "Adaptabilidad" },
    { icon: <FaPaintBrush />, text: "Creatividad" },
];

return (
    <Card className="quote-card-view">
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p className="about-activity text-uppercase">
                    <ImPointRight /> Poseo <strong className="purple">Habilidades</strong> en:
                </p>
            <ul>
            {softSkills.map((hobby, index) => (
            <li key={index} className="about-activity">
                {hobby.icon} {hobby.text}
            </li>
            ))}
                </ul>
            </blockquote>
        </Card.Body>
    </Card>
);
}

export default SoftSkills;
