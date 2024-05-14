import { t } from "i18next";
import React from "react";
import Card from "react-bootstrap/Card";

function ContactText() {
    return (
        <Card className="quote-card-view">
        <Card.Body>
            <blockquote
            className="blockquote mb-0"
            style={{ textAlign: "justify" }}
            >
            <p>
                {t("contact_text_1")}
            </p>
            <p>
                <strong className="purple"> {t("contact_text_2")}</strong>
            </p>
            <p>{t("contact_text_3")}</p>
            <p>
                <strong className="purple">{t("contact_text_4")}</strong>
            </p>
            <p>
                {t("contact_text_5")}
            </p>
            </blockquote>
        </Card.Body>
        </Card>
    );
}

export default ContactText;
