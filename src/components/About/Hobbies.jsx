import React from "react";
import Card from "react-bootstrap/Card";
import {
    FaBaseballBall,
    FaCamera,
    FaCar,
    FaFutbol,
    FaHeadphones,
    FaPlane,
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Hobbies() {
    const hobbies = [
    { icon: <FaPlane />, text: "Me encanta Viajar" },
    { icon: <FaCamera />, text: "La Fotografía" },
    { icon: <FaCar />, text: "La Fórmula 1" },
    { icon: <FaBaseballBall />, text: "El Béisbol" },
    { icon: <FaFutbol />, text: "El Fútbol" },
    { icon: <FaHeadphones />, text: "El Rock" },
    ];

    return (
    <Card className="quote-card-view">
        <Card.Body>
        <blockquote className="blockquote mb-0">
            <p className="about-activity text-uppercase">
            <ImPointRight /> Mis <strong className="purple">Hobbies</strong> son:
            </p>
            <ul>
            {hobbies.map((hobby, index) => (
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

export default Hobbies;
