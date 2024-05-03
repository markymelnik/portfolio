import JavaScriptIcon from "../../../../lib/skill-icons/JavaScriptIcon";
import JavaIcon from "../../../../lib/skill-icons/JavaIcon";
import TypeScriptIcon from "../../../../lib/skill-icons/TypeScriptIcon";
import SpringIcon from "../../../../lib/skill-icons/SpringIcon";
import HTMLIcon from "../../../../lib/skill-icons/HTMLIcon";
import NodeIcon from "../../../../lib/skill-icons/NodeIcon";
import CssIcon from "../../../../lib/skill-icons/CSSIcon";
import ExpressIcon from "../../../../lib/skill-icons/ExpressIcon";
import ReactIcon from "../../../../lib/skill-icons/ReactIcon";
import PostgresIcon from "../../../../lib/skill-icons/PostgresIcon";
import AstroIcon from "../../../../lib/skill-icons/AstroIcon";
import GitIcon from "../../../../lib/skill-icons/GitIcon";
import SassIcon from "../../../../lib/skill-icons/SassIcon";
import DockerIcon from "../../../../lib/skill-icons/DockerIcon";
import JestIcon from "../../../../lib/skill-icons/JestIcon";
import AWSIcon from "../../../../lib/skill-icons/AWSIcon";
import Skill from "./Skill/Skill";
import { CONTENT } from "../../../../lib/content";
import "./skill-list.scss";

const SkillList = () => {
  const TECHNOLOGIES = [
    { svg: <JavaScriptIcon />, skillName: "JavaScript" },
    { svg: <JavaIcon />, skillName: "Java" },
    { svg: <TypeScriptIcon />, skillName: "TypeScript" },
    { svg: <SpringIcon />, skillName: "Spring" },
    { svg: <HTMLIcon />, skillName: "HTML" },
    { svg: <NodeIcon />, skillName: "Node.js" },
    { svg: <CssIcon />, skillName: "CSS" },
    { svg: <ExpressIcon />, skillName: "Express" },
    { svg: <ReactIcon />, skillName: "React" },
    { svg: <PostgresIcon />, skillName: "PostgreSQL" },
    { svg: <AstroIcon />, skillName: "Astro" },
    { svg: <GitIcon />, skillName: "Git" },
    { svg: <SassIcon />, skillName: "Sass" },
    { svg: <DockerIcon />, skillName: "Docker" },
    { svg: <JestIcon />, skillName: "Jest" },
    { svg: <AWSIcon />, skillName: "AWS" },
  ];

  return (
    <div className="skills-container">
      <h3 className="skills-title">{CONTENT.skills.header} &rarr;</h3>
      <ul className="skills-list">
        {TECHNOLOGIES.map((tech, index) => (
          <Skill key={index} skillName={tech.skillName} svg={tech.svg} />
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
