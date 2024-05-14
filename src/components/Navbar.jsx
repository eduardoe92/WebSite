import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.webp";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";

import { t } from "i18next";
import { BsLaptop } from "react-icons/bs";
import ButtonGithub from "./ButtonGithub";
import LanguageSelector from "./LanguageSelector";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navItems = [
    { to: t("link_home"), icon: <AiOutlineHome />, text: t("home") },
    { to: t("link_about"), icon: <AiOutlineUser />, text: t("about_me") },
    { to: t("link_projects"), icon: <BsLaptop />, text: t("projects") },
    { to: t("link_contact"), icon: <AiOutlineMessage />, text: t("contact") },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="">
          <img src={logo} className="img logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                  style={{ marginBottom: "2px" }}
                >
                  {item.icon}{" "}
                  {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}
            <LanguageSelector/>
            <ButtonGithub/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
