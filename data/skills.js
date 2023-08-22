import {
  TbBrandNextjs,
  TbBrandVite,
  TbBrandRedux,
  TbBrandTailwind,
} from "react-icons/tb";
import { BiLogoRedux } from "react-icons/bi";

import {
  DiHtml5,
  DiCss3,
  DiGit,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";

export const skills = [
  {
    title: "Html",
    icon: <DiHtml5 size={40} />,
  },
  {
    title: "Css",
    icon: <DiCss3 size={40} />,
  },
  {
    title: "JS",
    icon: <DiJavascript1 size={40} />,
  },
  {
    title: "Sass",
    icon: <DiSass size={40} />,
  },
  {
    title: "NodeJS",
    icon: <DiNodejsSmall size={40} />,
  },
  {
    title: "ReactJS",
    icon: <DiReact size={40} />,
  },
  {
    title: "Redux",
    icon: <BiLogoRedux size={40} />,
  },
  {
    title: "Tailwind",
    icon: <TbBrandTailwind size={40} />,
  },
  {
    title: "Git",
    icon: <DiGit size={40} />,
  },
  {
    title: "Vite",
    icon: <TbBrandVite size={40} />,
  },
  {
    title: "NextJS",
    icon: <TbBrandNextjs size={40} />,
  },
];
