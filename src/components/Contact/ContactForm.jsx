// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { BsSend } from "react-icons/bs";
// import { Row } from "react-bootstrap";

// const formFields = [
//     { label: "Nombre:", type: "text" },
//     { label: "Correo:", type: "email" },
//     { label: "Mensaje:", type: "textarea" },
// ];

// function ContactForm() {
//     const [errorMessage, setErrorMessage] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");

//     const isValidEmail = (email) => {
//         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         return emailRegex.test(email);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const nombre = formData.get("nombre");
//         const correo = formData.get("correo");
//         const mensaje = formData.get("mensaje");
//         if (
//             !nombre ||
//             !correo ||
//             !mensaje ||
//             mensaje.length > 1500 ||
//             !isValidEmail(correo)
//         ) {
//             setErrorMessage("Por favor, complete todos los campos correctamente.");
//             return;
//         }
//         try {
//             const response = await fetch("/send-email", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     nombre,
//                     correo,
//                     mensaje,
//                 }),
//             });
//             if (response.status === 200) {
//                 setSuccessMessage("Mensaje enviado con éxito");
//             } else {
//                 setErrorMessage("Hubo un problema al enviar el mensaje.");
//             }
//         } catch (error) {
//             setErrorMessage("Hubo un problema al enviar el mensaje.");
//         }
//     };

//     return (
//         <Card className="project-card-view form-input mx-auto">
//             <br />
//             <Row>
//                 <Card.Body>
//                     <Form onSubmit={handleSubmit}>
//                         {formFields.map((field, index) => (
//                             <Form.Group
//                                 key={index}
//                                 className="d-flex align-items-center justify-content-between flex-column flex-md-row"
//                             >
//                                 <Form.Label className="text-left text-md-center">
//                                     {field.label}
//                                 </Form.Label>
//                                 {field.type === "textarea" ? (
//                                     <Form.Control
//                                         as={field.type}
//                                         rows={3}
//                                         maxLength={1500}
//                                         className="project-card-view-form form-user text-right"
//                                         name={field.label.toLowerCase()}
//                                         placeholder={`Escribe tu ${field.label.toLowerCase().replace(':', '')}`}
//                                     />
//                                 ) : (
//                                     <Form.Control
//                                         type={field.type}
//                                         className="project-card-view-form form-user text-right"
//                                         name={field.label.toLowerCase()}
//                                         placeholder={`${field.label.replace(':', '')}`}
//                                     />
//                                 )}
//                             </Form.Group>
//                         ))}
//                         <br />
//                         {errorMessage && <p className="text-danger">{errorMessage}</p>}
//                         {successMessage && <p className="text-success">{successMessage}</p>}
//                         <Button type="submit">
//                             <BsSend /> Enviar
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Row>
//             <br />
//         </Card>
//     );
// }

// export default ContactForm;

import React, { useState } from "react";
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

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
  
    const nombre = e.target.elements.nombre.value;
    const correo = e.target.elements.correo.value;
    const mensaje = e.target.elements.mensaje.value;
  
    if (!nombre || !correo || !mensaje || !isValidEmail(correo) || mensaje.length > 1500) {
      setErrorMessage("Por favor, complete todos los campos correctamente.");
      setIsSending(false);
      return;
    }
  
    try {
      const response = await axios.post("/api/send-mail", {
        nombre,
        correo,
        mensaje,
      });
      if (response.status === 200) {
        setSuccessMessage("Mensaje enviado con éxito");
        setErrorMessage("");
      } else {
        setErrorMessage("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      setErrorMessage("Hubo un problema al enviar el mensaje.");
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
              <BsSend />{" "}
              {isSending ? t("form.form_sending") : t("form.form_send")}
            </Button>
          </Form>
        </Card.Body>
      </Row>
      <br />
    </Card>
  );
}

export default ContactForm;
