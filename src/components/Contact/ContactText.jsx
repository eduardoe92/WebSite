import React from "react";
import Card from "react-bootstrap/Card";

function ContactText() {
    return (
    <Card className="quote-card-view">
        <Card.Body>
        <blockquote className="blockquote mb-0" style={{ textAlign: "justify" }}>
            <p>
                Estoy a tu disposición para abordar cualquier
                <strong className="purple"> pregunta o inquietud</strong> que
                puedas tener. Si deseas ponerte en contacto conmigo, conectarte a
                través de mis <strong className="purple">redes sociales.</strong>
            </p>
            <p>
                Por favor, ten en cuenta que mi disponibilidad puede variar, pero
                haré todo lo posible por responder a tu
                <strong className="purple"> mensaje</strong> en el menor tiempo
                posible.
            </p>
            <p>
                ¡Espero tener <strong className="purple">noticias</strong> tuyas
                pronto!
            </p>
            <p>Saludos Cordiales.</p>
        </blockquote>
        </Card.Body>
    </Card>
    );
}

export default ContactText;
