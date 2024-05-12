import { t } from "i18next";
import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <h1
          className="text-uppercase"
          style={{ fontSize: "2.1em", paddingBottom: "20px" }}
        >
          {t("about_tile_1")}{" "}
          <strong className="purple"> {t("about_tile_2")}</strong>
        </h1>
        <blockquote
          className="blockquote mb-0"
          style={{ textAlign: "justify" }}
        >
          <p>
            {t("about_text_1")}{" "}
            <strong className="purple">{t("about_text_2")}</strong>{" "}
            {t("about_text_3")}{" "}
            <strong className="purple">{t("about_text_4")}</strong>{" "}
            {t("about_text_5")}{" "}
            <strong className="purple">{t("about_text_6")}</strong>{" "}
            {t("about_text_7")}
          </p>
          <p>
            {t("about_text_8")}{" "}
            <strong className="purple">{t("about_text_9")}</strong>{" "}
            {t("about_text_10")}{" "}
            <strong className="purple">{t("about_text_11")}</strong>{" "}
          </p>
          <p>
            {t("about_text_12")}{" "}
            <strong className="purple"> {t("about_text_13")} </strong>
          </p>
          <p>
            {t("about_text_14")}{" "}
            <strong className="purple">{t("about_text_15")}</strong>{" "}
            {t("about_text_16")}
            <p />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
