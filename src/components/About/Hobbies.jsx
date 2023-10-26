import React from "react";
import Card from "react-bootstrap/Card";
import { FaBaseballBall, FaCamera, FaCar, FaFutbol, FaHeadphones,FaPlane } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Hobbies() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p className="about-activity">
                        <ImPointRight /> Mis <strong className="purple">Hobbies</strong> incluyen:
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

export default Hobbies;
