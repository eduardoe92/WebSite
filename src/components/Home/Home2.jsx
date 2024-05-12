import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ImagePersonal.webp";
import SocialNetworks from "../Contact/SocialNetWorks";
import { t } from "i18next";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="text-uppercase" style={{ fontSize: "2.6em" }}>
              {t("home_title_1")}{" "}
              <strong className="purple"> {t("home_title_2")} </strong>
            </h1>
            <blockquote
              className="home-about-body"
              style={{ textAlign: "justify" }}
            >
              <p>
                {t("home_text_1")}{" "}
                <strong className="purple"> {t("home_text_2")}</strong>{" "}
                {t("home_text_3")}
              </p>
              <p>
                {t("home_text_4")}{" "}
                <strong className="purple">{t("home_text_5")}</strong>{" "}
                {t("home_text_6")}{" "}
                <strong className="purple">{t("home_text_7")}</strong>
              </p>
              <p>
                {t("home_text_8")}{" "}
                <strong className="purple"> {t("home_text_9")}</strong>
              </p>
              <p>
                {t("home_text_10")}{" "}
                <strong className="purple"> {t("home_text_11")}</strong>{" "}
                {t("home_text_12")}{" "}
                <strong className="purple"> {t("home_text_13")}</strong>
              </p>
              <p>
                {t("home_text_14")}{" "}
                <strong className="purple">{t("home_text_15")}</strong>{" "}
                {t("home_text_16")}
              </p>
            </blockquote>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={myImg}
              className="img-fluid"
              alt="avatar"
              style={{
                borderRadius: "45%",
                boxShadow: "10px 10px 20px rgb(112, 12, 134)",
              }}
            />
          </Col>
        </Row>
        <SocialNetworks />
      </Container>
    </Container>
  );
}
export default Home2;
