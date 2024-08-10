import MakisanTech from "../../Assets/Projects/Makisan-Tech.webp";
import Pokedex from "../../Assets/Projects/Pokedex.webp";
import RickAndMorty from "../../Assets/Projects/RickAndMorty.webp";
import CarolineSada from "../../Assets/Projects/CarolineSada.webp";
import Library from "../../Assets/Projects/Library.webp";
import Challenges from "../../Assets/Projects/Challenges.webp";
import QRApp from "../../Assets/Projects/QR-App.webp";
import Flowento from "../../Assets/Projects/Flowento.webp"

import { t } from "i18next";

const ProjectList = () => {
  return [
    {
      imgPath: Flowento,
      title: t("projects_section.title_project_8"),
      description: t("projects_section.description_project_8"),
      ghLink: t("projects_section.github_project_8"),
      demoLink: t("projects_section.link_project_8"),
    },
    {
      imgPath: Challenges,
      title: t("projects_section.title_project_7"),
      description: t("projects_section.description_project_7"),
      ghLink: t("projects_section.github_project_7"),
      demoLink: t("projects_section.link_project_7"),
    },
    {
      imgPath: QRApp,
      title: t("projects_section.title_project_6"),
      description: t("projects_section.description_project_6"),
      ghLink: t("projects_section.github_project_6"),
      demoLink: t("projects_section.link_project_6"),
    },
    {
      imgPath: Library,
      title: t("projects_section.title_project_5"),
      description: t("projects_section.description_project_5"),
      ghLink: t("projects_section.github_project_5"),
      demoLink: t("projects_section.link_project_5"),
    },
    {
      imgPath: MakisanTech,
      title: t("projects_section.title_project_4"),
      description: t("projects_section.description_project_4"),
      ghLink: t("projects_section.github_project_4"),
      demoLink: t("projects_section.link_project_4"),
    },
    {
      imgPath: CarolineSada,
      title: t("projects_section.title_project_3"),
      description: t("projects_section.description_project_3"),
      ghLink: t("projects_section.github_project_3"),
      demoLink: t("projects_section.link_project_3"),
    },
    {
      imgPath: Pokedex,
      title: t("projects_section.title_project_2"),
      description: t("projects_section.description_project_2"),
      ghLink: t("projects_section.github_project_2"),
      demoLink: t("projects_section.link_project_2"),
    },
    {
      imgPath: RickAndMorty,
      title: t("projects_section.title_project_1"),
      description: t("projects_section.description_project_1"),
      ghLink: t("projects_section.github_project_1"),
      demoLink: t("projects_section.link_project_1"),
    },
  ];
};
export default ProjectList;
