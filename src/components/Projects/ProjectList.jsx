import MakisanTech from "../../Assets/Projects/Makisan-Tech.webp";
import Pokedex from "../../Assets/Projects/Pokedex.webp";
import RickAndMorty from "../../Assets/Projects/RickAndMorty.webp";
import CarolineSeda from "../../Assets/Projects/CarolineSeda.webp";
import { t } from "i18next";

const ProjectList = () => {
  return [
    {
      imgPath: MakisanTech,
      title: t("projects_section.title_project_4"),
      description: t("projects_section.description_project_4"),
      ghLink: t("projects_section.github_project_4"),
      demoLink: t("projects_section.link_project_4"),
    },
    {
      imgPath: CarolineSeda,
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
