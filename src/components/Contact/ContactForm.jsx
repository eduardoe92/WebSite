import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsSend } from "react-icons/bs";

function ContactForm(props) {
    return (
        <Card className="project-card-view mx-auto">
            <br />
            <Card.Body>
                <Form>
                    <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <Form.Label className="text-left text-md-center">Nombre:</Form.Label>
                        <Form.Control type="text" className="project-card-view w-50 text-right" />
                    </Form.Group>
                    <br />
                    <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <Form.Label className="text-left text-md-center">Apellido:</Form.Label>
                        <Form.Control type="text" className="project-card-view w-50 text-right" />
                    </Form.Group>
                    <br />
                    <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <Form.Label className="text-left text-md-center">Pais:</Form.Label>
                        <Form.Control type="text" className="project-card-view w-50 text-right" />
                    </Form.Group>
                    <br />
                    <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <Form.Label className="text-left text-md-center">Telefono:</Form.Label>
                        <Form.Control type="number" className="project-card-view w-50 text-right" />
                    </Form.Group>
                    <br />
                    <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <Form.Label className="text-left text-md-center">Correo:</Form.Label>
                        <Form.Control type="email" className="project-card-view w-50 text-right" />
                    </Form.Group>
                    <br />
                    <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
                        <Form.Label className="text-left text-md-center">Mensaje:</Form.Label>
                        <Form.Control as="textarea" rows={3} className="project-card-view w-50 text-right" />
                    </Form.Group>
                </Form>
                <br />
                <Button>
                    <BsSend /> {" "}
                    Enviar
                </Button>
            </Card.Body>
            <br />
        </Card>
    );
}

export default ContactForm;


