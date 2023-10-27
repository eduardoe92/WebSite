import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsSend } from "react-icons/bs";
import { Row } from "react-bootstrap";

const formFields = [
    { label: "Nombre:", type: "text" },
    { label: "Apellido:", type: "text" },
    { label: "Pais:", type: "text" },
    { label: "Telefono:", type: "text" },
    { label: "Correo:", type: "email" },
    { label: "Mensaje:", type: "textarea" },
];

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const isValidNumber = (number) => {
        const numberRegex = /^\d+$/;
        return numberRegex.test(number);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nombre = formData.get("nombre");
        const apellido = formData.get("apellido");
        const pais = formData.get("pais");
        const telefono = formData.get("telefono");
        const correo = formData.get("correo");
        const mensaje = formData.get("mensaje");
        if (
            !nombre ||
            !apellido ||
            !pais ||
            !telefono ||
            !correo ||
            !mensaje ||
            mensaje.length > 1500 ||
            !isValidEmail(correo) ||
            !isValidNumber(telefono)
        ) {
            setErrorMessage("Por favor, complete todos los campos correctamente.");
            return;
        }
        try {
            const response = await fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre,
                    apellido,
                    pais,
                    telefono,
                    correo,
                    mensaje,
                }),
            });
            if (response.status === 200) {
                setSuccessMessage("Mensaje enviado con éxito");
            } else {
                setErrorMessage("Hubo un problema al enviar el mensaje.");
            }
        } catch (error) {
            setErrorMessage("Hubo un problema al enviar el mensaje.");
        }
    };

    return (
        <Card className="project-card-view form-input mx-auto">
            <br />
            <Row>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        {formFields.map((field, index) => (
                            <Form.Group
                                key={index}
                                className="d-flex align-items-center justify-content-between flex-column flex-md-row"
                            >
                                <Form.Label className="text-left text-md-center">
                                    {field.label}
                                </Form.Label>
                                {field.type === "textarea" ? (
                                    <Form.Control
                                        as={field.type}
                                        rows={3}
                                        maxLength={1500}
                                        className="project-card-view form-user text-right"
                                        name={field.label.toLowerCase()}
                                        placeholder={`Escribe tu ${field.label.toLowerCase().replace(':', '')}`}
                                    />
                                ) : (
                                    <Form.Control
                                        type={field.type}
                                        className="project-card-view form-user text-right"
                                        name={field.label.toLowerCase()}
                                        placeholder={`${field.label.replace(':', '')}`}
                                    />
                                )}
                            </Form.Group>
                        ))}
                        <br />
                        {errorMessage && <p className="text-danger">{errorMessage}</p>}
                        {successMessage && <p className="text-success">{successMessage}</p>}
                        <Button type="submit">
                            <BsSend /> Enviar
                        </Button>
                    </Form>
                </Card.Body>
            </Row>
            <br />
        </Card>
    );
}

export default ContactForm;
