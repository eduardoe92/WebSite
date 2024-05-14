import React, { useState, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import usFlag from "../Assets/Flags/us.svg";
import esFlag from "../Assets/Flags/es.svg";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
  };

  return (
    <Nav.Item className="fork-btn">
      <Button onClick={toggleLanguage} className="language-btn fork-btn-inner">
        <img
          src={i18n.language === "es" ? usFlag : esFlag}
          alt={i18n.language === "es" ? "US Flag" : "ES Flag"}
          style={{
            width: "23px",
            height: "23px",
            borderRadius: "100%",
          }}
        />
      </Button>
    </Nav.Item>
  );
}

export default LanguageSelector;

// Otro estilo de botón
    // <Nav.Item className="fork-btn">
    //   <Button onClick={toggleLanguage} className="language-btn fork-btn-inner">
    //     <img
    //       src={esFlag}
    //       alt="es-flag"
    //       style={{
    //         width: "23px",
    //         height: "23px",
    //         borderRadius: "100%",
    //         marginRight: "5px",
    //         opacity: language === "es" ? 1 : 0.5
    //       }}
    //     />
    //     <img
    //       src={usFlag}
    //       alt="us-flag"
    //       style={{
    //         width: "23px",
    //         height: "23px",
    //         borderRadius: "100%",
    //         opacity: language === "en" ? 1 : 0.5
    //       }}
    //     />
    //   </Button>
    // </Nav.Item>