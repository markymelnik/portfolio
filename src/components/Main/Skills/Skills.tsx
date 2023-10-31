import { forwardRef } from 'react';
import './_skills.scss';
import JS_SVG from './skills_icons/js_svg';
import CSS_SVG from './skills_icons/css_svg';
import HTML_SVG from './skills_icons/html_svg';
import REACT_SVG from './skills_icons/react_svg';
import REDUX_SVG from './skills_icons/redux_svg';
import TS_SVG from './skills_icons/ts_svg';
import JAVA_SVG from './skills_icons/java_svg';
import SPRING_SVG from './skills_icons/spring_svg';
import POSTGRES_SVG from './skills_icons/postgres_svg';
import SASS_SVG from './skills_icons/sass_svg';
import DOCKER_SVG from './skills_icons/docker_svg';
import GIT_SVG from './skills_icons/git_svg';
import JEST_SVG from './skills_icons/jest_svg';
import Technology from './Tech/Tech';
import NODE_SVG from './skills_icons/node_svg';
import FIGMA_SVG from './skills_icons/figma_svg';
import EXPRESS_SVG from './skills_icons/express.svg';

const TECHNOLOGIES = [
  { svg: <GIT_SVG />, customClass:'git'},
  { svg: <JS_SVG />, customClass:'javascript' },
  { svg: <CSS_SVG />, customClass:'css' },
  { svg: <HTML_SVG/>, customClass:'html' },
  { svg: <REACT_SVG/>, customClass:'react' },
  { svg: <REDUX_SVG/>, customClass:'redux' },
  { svg: <TS_SVG/>, customClass:'typescript' },
  { svg: <JAVA_SVG/>, customClass:'java' },
  { svg: <SPRING_SVG/>, customClass:'spring' },
  { svg: <POSTGRES_SVG/>, customClass:'postgres' },
  { svg: <SASS_SVG/>, customClass:'sass' },
  { svg: <DOCKER_SVG/>, customClass:'docker' },
  { svg: <JEST_SVG />, customClass:'jest' },
  { svg: <NODE_SVG />, customClass:'node' },
  { svg: <EXPRESS_SVG />, customClass:'express' },
  { svg: <FIGMA_SVG />, customClass:'figma'}
]

interface SkillsProps extends React.HTMLProps<HTMLDivElement> {}

const Skills = forwardRef<HTMLDivElement, SkillsProps>((props, ref) => {
  return (
    <section ref={ref} className="skills-container" {...props}>
      <h2 className="skills-title"><span>.02</span>Skills</h2>
      <ul className="skills-list">
      {TECHNOLOGIES.map((tech, index) => (
          <Technology
            key={index}
            customClass={tech.customClass}
            svg={tech.svg}
          />
        ))}
      </ul>
    </section>
  )
});

export default Skills;