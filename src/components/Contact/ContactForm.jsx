import React, { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsSend } from "react-icons/bs";
import { Row } from "react-bootstrap";
import axios from "axios";
import { t } from "i18next";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState(t("form.form_pre_send"));

  const nombreRef = useRef(null);
  const correoRef = useRef(null);
  const mensajeRef = useRef(null);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText(t("form.form_sending"));

    const nombre = nombreRef.current.value;
    const correo = correoRef.current.value;
    const mensaje = mensajeRef.current.value;

    if (!nombre || !correo || !mensaje || !isValidEmail(correo) || mensaje.length > 1500) {
      setErrorMessage("Por favor, complete todos los campos correctamente.");
      setIsSending(false);
      setButtonText(t("form.form_pre_send"));
      return;
    }

    try {
      const response = await axios.post("/api/send-mail", {
        nombre,
        correo,
        mensaje,
      });
      if (response.status === 200) {
        setSuccessMessage(t("form.alert_send"));
        setErrorMessage("");
        setButtonText(t("form.form_send"));
      } else {
        setErrorMessage(t("form.alert_fail"));
        setButtonText(t("form.form_error"));
      }
    } catch (error) {
      setErrorMessage(t("form.alert_fail"));
      setButtonText(t("form.form_error"));
    }
    setIsSending(false);
  };

  return (
    <Card className="project-card-view form-input mx-auto">
      <br />
      <Row>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
              <Form.Label className="text-left text-md-center">
                {t("form.form_name")}
              </Form.Label>
              <Form.Control
                type="text"
                className="project-card-view-form form-user text-right"
                name={t("form.form_name")}
                placeholder={t("form.form_name")}
              />
            </Form.Group>
            <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
              <Form.Label className="text-left text-md-center">
                {t("form.form_email")}
              </Form.Label>
              <Form.Control
                type="email"
                className="project-card-view-form form-user text-right"
                name={t("form.form_email")}
                placeholder={t("form.form_email")}
              />
            </Form.Group>
            <Form.Group className="d-flex align-items-center justify-content-between flex-column flex-md-row">
              <Form.Label className="text-left text-md-center">
                {t("form.form_subject")}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                maxLength={1500}
                className="project-card-view-form form-user text-right"
                name={t("form.form_subject")}
                placeholder={t("form.form_message")}
              />
            </Form.Group>
            <br />
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            {successMessage && <p className="text-success">{successMessage}</p>}
            <Button type="submit" disabled={isSending}>
              <BsSend /> {buttonText}
            </Button>
          </Form>
        </Card.Body>
      </Row>
      <br />
    </Card>
  );
}

export default ContactForm;
