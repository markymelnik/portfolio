import JS_SVG from "../../../../lib/SkillIcons/JavaScriptIcon";
import JAVA_SVG from "../../../../lib/SkillIcons/JavaIcon";
import TS_SVG from "../../../../lib/SkillIcons/TypeScriptIcon";
import SPRING_SVG from "../../../../lib/SkillIcons/SpringIcon";
import HTML_SVG from "../../../../lib/SkillIcons/HTMLIcon";
import NODE_SVG from "../../../../lib/SkillIcons/NodeIcon";
import CSS_SVG from "../../../../lib/SkillIcons/CSSIcon";
import EXPRESS_SVG from "../../../../lib/SkillIcons/ExpressIcon";
import REACT_SVG from "../../../../lib/SkillIcons/ReactIcon";
import POSTGRES_SVG from "../../../../lib/SkillIcons/PostgresIcon";
import ASTRO_SVG from "../../../../lib/SkillIcons/AstroIcon";
import GIT_SVG from "../../../../lib/SkillIcons/GitIcon";
import SASS_SVG from "../../../../lib/SkillIcons/SassIcon";
import DOCKER_SVG from "../../../../lib/SkillIcons/DockerIcon";
import JEST_SVG from "../../../../lib/SkillIcons/JestIcon";
import FIGMA_SVG from "../../../../lib/SkillIcons/FigmaIcon";
import Skill from "./Skill/Skill";
import "./skill-list.scss";

const SkillList = () => {
  const TECHNOLOGIES = [
    { svg: <JS_SVG />, skillName: "JavaScript" },
    { svg: <JAVA_SVG />, skillName: "Java" },
    { svg: <TS_SVG />, skillName: "TypeScript" },
    { svg: <SPRING_SVG />, skillName: "Spring" },
    { svg: <HTML_SVG />, skillName: "HTML" },
    { svg: <NODE_SVG />, skillName: "Node" },
    { svg: <CSS_SVG />, skillName: "CSS" },
    { svg: <EXPRESS_SVG />, skillName: "Express" },
    { svg: <REACT_SVG />, skillName: "React" },
    { svg: <POSTGRES_SVG />, skillName: "PostgreSQL" },
    { svg: <ASTRO_SVG />, skillName: "Astro" },
    { svg: <GIT_SVG />, skillName: "Git" },
    { svg: <SASS_SVG />, skillName: "Sass" },
    { svg: <DOCKER_SVG />, skillName: "Docker" },
    { svg: <JEST_SVG />, skillName: "Jest" },
    { svg: <FIGMA_SVG />, skillName: "Figma" },
  ];

  return (
    <div className="skills-container">
      <h3 className="skills-title">I've been working with &rarr;</h3>
      <ul className="skills-list">
        {TECHNOLOGIES.map((tech, index) => (
          <Skill key={index} skillName={tech.skillName} svg={tech.svg} />
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
