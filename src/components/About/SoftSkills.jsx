import { t } from "i18next";
import React from "react";
import Card from "react-bootstrap/Card";
import {
  FaArrowsAlt,
  FaCalendarAlt,
  FaCogs,
  FaComment,
  FaPaintBrush,
  FaSearch,
  FaUserFriends,
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function SoftSkills() {
  const softSkills = [
    { icon: <FaCogs />, text: t("text_skills_1") },
    { icon: <FaComment />, text: t("text_skills_2") },
    { icon: <FaSearch />, text: t("text_skills_3") },
    { icon: <FaCalendarAlt />, text: t("text_skills_4") },
    { icon: <FaUserFriends />, text: t("text_skills_5") },
    { icon: <FaArrowsAlt />, text: t("text_skills_6") },
    { icon: <FaPaintBrush />, text: t("text_skills_7") },
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-activity text-uppercase">
            <ImPointRight className="text-white"/>{" "}
            <strong className="purple">{t("soft_skills_title_1")}</strong>
          </p>
          <ul className="text-white">
            {softSkills.map((hobby, index) => (
              <li key={index} className="about-activity">
                {hobby.icon} {hobby.text}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SoftSkills;
