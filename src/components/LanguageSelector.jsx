import React, { useState, useRef, useEffect } from "react";
import { Button, Nav } from "react-bootstrap";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import usFlag from "../Assets/Flags/us.svg";
import esFlag from "../Assets/Flags/es.svg";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setShowDropdown(false);
  };

  const currentLanguage = i18n.language === "es" ? esFlag : usFlag;

  return (
    <Nav.Item className="fork-btn" ref={dropdownRef}>
      <Button onClick={toggleDropdown} className="fork-btn-inner">
        <img
          src={currentLanguage}
          alt="current-language-flag"
          style={{ width: "23px", height: "23px", borderRadius: "100%"}}
        />{" "}
        {showDropdown ? <CgChevronUp /> : <CgChevronDown />}
      </Button>
      {showDropdown && (
        <ul className="dropdown-menu">
          <li onClick={() => changeLanguage("es")}>
            <img src={esFlag} alt="es-flag" />
          </li>
          <li onClick={() => changeLanguage("us")}>
            <img src={usFlag} alt="us-flag" />
          </li>
        </ul>
      )}
    </Nav.Item>
  );
}

export default LanguageSelector;
