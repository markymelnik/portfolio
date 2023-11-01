import CSS_SVG from "./skills_icons/css_svg";
import DOCKER_SVG from "./skills_icons/docker_svg";
import EXPRESS_SVG from "./skills_icons/express.svg";
import FIGMA_SVG from "./skills_icons/figma_svg";
import GIT_SVG from "./skills_icons/git_svg";
import HTML_SVG from "./skills_icons/html_svg";
import JAVA_SVG from "./skills_icons/java_svg";
import JEST_SVG from "./skills_icons/jest_svg";
import JS_SVG from "./skills_icons/js_svg";
import NODE_SVG from "./skills_icons/node_svg";
import POSTGRES_SVG from "./skills_icons/postgres_svg";
import REACT_SVG from "./skills_icons/react_svg";
import REDUX_SVG from "./skills_icons/redux_svg";
import SASS_SVG from "./skills_icons/sass_svg";
import SPRING_SVG from "./skills_icons/spring_svg";
import TS_SVG from "./skills_icons/ts_svg";
import Skill from "./Skill";
import './_skill.scss';

const SkillList = () => {

  const TECHNOLOGIES = [
    { svg: <JS_SVG />, skillName:'Javascript' },
    { svg: <GIT_SVG />, skillName:'Git'},
    { svg: <TS_SVG/>, skillName:'Typescript' },
    { svg: <JAVA_SVG/>, skillName:'Java' },
    { svg: <HTML_SVG/>, skillName:'HTML' },
    { svg: <SPRING_SVG/>, skillName:'Spring Boot' },
    { svg: <CSS_SVG />, skillName:'CSS' },
    { svg: <NODE_SVG/>, skillName:'Node' },
    { svg: <REACT_SVG/>, skillName:'React' },
    { svg: <EXPRESS_SVG />, skillName:'Express' },
    { svg: <REDUX_SVG/>, skillName:'Redux' },
    { svg: <JEST_SVG />, skillName:'Jest' },
    { svg: <SASS_SVG/>, skillName:'Sass' },
    { svg: <POSTGRES_SVG/>, skillName:'PostgreSQL' },
    { svg: <FIGMA_SVG />, skillName:'Figma'},
    { svg: <DOCKER_SVG/>, skillName:'Docker' },
  ]

  return (
    <div className="about-skills">
      <h3 className="about-skills-title">Technologies I've been working with:</h3>
      <ul className="about-skills-list">
        {TECHNOLOGIES.map((tech, index) => (
          <Skill key={index} skillName={tech.skillName} svg={tech.svg} />
        ))}
      </ul>
    </div>
  );
}

export default SkillList;