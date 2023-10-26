import React from "react";
import Card from "react-bootstrap/Card";

function ContactText() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <br /> Estoy a tu disposición para abordar cualquier <strong className="purple">pregunta o inquietud</strong> que puedas tener.
                        Si deseas ponerte en contacto conmigo, puedes completar el <strong className="purple">formulario</strong> a continuación o conectarte
                        a través de mis <strong className="purple">redes sociales. </strong>
                        Por favor, ten en cuenta que mi disponibilidad puede variar, pero haré todo lo posible por responder a tu
                        <strong className="purple"> mensaje</strong> en el menor tiempo posible.
                        <br />
                        <br />
                        ¡Espero tener <strong className="purple">noticias</strong> tuyas pronto!
                        <br />
                        <br />
                        Saludos Cordiales!
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default ContactText;
