import MakisanTech from "../../Assets/Projects/Makisan-Tech.webp";
import Pokedex from "../../Assets/Projects/Pokedex.webp";
import ProEidos from "../../Assets/Projects/Proyecto-Eidos.webp";
import ConsoleLogAr from "../../Assets/Projects/ConsoleLog.Ar.webp";
import RickAndMorty from "../../Assets/Projects/RickAndMorty.webp";
import ShopMax from "../../Assets/Projects/ShopMax.webp";
import CarolineSeda from "../../Assets/Projects/CarolineSeda.webp";
import { t } from "i18next";


const ProjectList = () => {
  return [
  {
    imgPath: ShopMax,
    title: t('projects_section.title_project_7'),
    description: t('projects_section.description_project_7'),
    ghLink: t('projects_section.github_project_7'),
    demoLink: t('projects_section.link_project_7'),
  },
  {
    imgPath: ConsoleLogAr,
    title: t('projects_section.title_project_6'),
    description: t('projects_section.description_project_6'),
    ghLink: t('projects_section.github_project_6'),
    demoLink: t('projects_section.link_project_6'),
  },
  {
    imgPath: Pokedex,
    title: t('projects_section.title_project_5'),
    description: t('projects_section.description_project_5'),
    ghLink: t('projects_section.github_project_5'),
    demoLink: t('projects_section.link_project_5'),
  },
  {
    imgPath: CarolineSeda,
    title: t('projects_section.title_project_4'),
    description: t('projects_section.description_project_4'),
    ghLink: t('projects_section.github_project_4'),
    demoLink: t('projects_section.link_project_4'),
  },
  {
    imgPath: RickAndMorty,
    title: t('projects_section.title_project_3'),
    description: t('projects_section.description_project_3'),
    ghLink: t('projects_section.github_project_3'),
    demoLink: t('projects_section.link_project_3'),
  },
  {
    imgPath: MakisanTech,
    title: t('projects_section.title_project_2'),
    description: t('projects_section.description_project_2'),
    ghLink: t('projects_section.github_project_2'),
    demoLink: t('projects_section.link_project_2'),
  },
  {
    imgPath: ProEidos,
    title: t('projects_section.title_project_1'),
    description: t('projects_section.description_project_1'),
    ghLink: t('projects_section.github_project_1'),
    demoLink: t('projects_section.link_project_1'),
  },
];
}
export default ProjectList;
