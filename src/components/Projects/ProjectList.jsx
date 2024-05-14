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
    title: "ShopMax",
    description: t('projects_section.description_project_7'),
    ghLink: "https://github.com/eduardoe92/tienda",
    demoLink: "",
  },
  {
    imgPath: ConsoleLogAr,
    title: "ConsoleLog.Ar",
    description: t('projects_section.description_project_6'),
    ghLink: "https://github.com/eduardoe92/consolelog.ar",
    demoLink: "https://www.consolelog.ar/",
  },
  {
    imgPath: Pokedex,
    title: "Pokedex",
    description: t('projects_section.description_project_5'),
    ghLink: "https://github.com/eduardoe92/Pokedex",
    demoLink: "https://pokedex-eduardoe92.vercel.app/",
  },
  {
    imgPath: CarolineSeda,
    title: "Caroline Seda",
    description: t('projects_section.description_project_4'),
    ghLink: "https://github.com/eduardoe92/CarolineSada",
    demoLink: "https://eduardoe92.github.io/CarolineSada/",
  },
  {
    imgPath: RickAndMorty,
    title: "Rick and Morty",
    description: t('projects_section.description_project_3'),
    ghLink: "https://github.com/eduardoe92/ApiRickAndMorty",
    demoLink: "https://rickandmorty-seven-virid.vercel.app/",
  },
  {
    imgPath: MakisanTech,
    title: "Makisan Tech",
    description: t('projects_section.description_project_2'),
    ghLink: "https://github.com/eduardoe92/web-makisan-tech",
    demoLink: "https://jonathansansok.github.io/web-makisan-tech/",
  },
  {
    imgPath: ProEidos,
    title: "Eidos Global",
    description: t('projects_section.description_project_1'),
    ghLink: "https://github.com/eduardoe92/ProyectoFinal",
    demoLink: "https://eduardoe92.github.io/ProyectoFinal/",
  },
];
}
export default ProjectList;
