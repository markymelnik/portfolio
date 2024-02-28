import JS_SVG from "./skill_icons/js_svg";
import JAVA_SVG from "./skill_icons/java_svg";
import TS_SVG from "./skill_icons/ts_svg";
import SPRING_SVG from "./skill_icons/spring_svg";
import HTML_SVG from "./skill_icons/html_svg";
import NODE_SVG from "./skill_icons/node_svg";
import CSS_SVG from "./skill_icons/css_svg";
import EXPRESS_SVG from "./skill_icons/express.svg";
import REACT_SVG from "./skill_icons/react_svg";
import POSTGRES_SVG from "./skill_icons/postgres_svg";
import ASTRO_SVG from "./skill_icons/astro_svg";
import GIT_SVG from "./skill_icons/git_svg";
import SASS_SVG from "./skill_icons/sass_svg";
import DOCKER_SVG from "./skill_icons/docker_svg";
import JEST_SVG from "./skill_icons/jest_svg";
import FIGMA_SVG from "./skill_icons/figma_svg";
import Skill from "./Skill/Skill";
import "./_skill-list.scss";

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
    <div className="about-skills">
      <h3 className="about-skills-title">I've been working with &rarr;</h3>
      <ul className="about-skills-list">
        {TECHNOLOGIES.map((tech, index) => (
          <Skill key={index} skillName={tech.skillName} svg={tech.svg} />
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
