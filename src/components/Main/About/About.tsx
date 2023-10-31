import { forwardRef } from 'react';
import './_about.scss';
import Skill from './Skill/Skill';

interface AboutProps extends React.HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <section ref={ref} className="about-container" {...props}>
      <h2 className="about-title">
        <span>.01</span>About Me
      </h2>
      <div className="about-information">
        <p>
          Hey there! I'm Mark, an aspiring software developer based in New York
          City fascinated by the inner workings of technology. I have developed
          personal projects on a bedrock of fundamental concepts using web
          technologies on both the front and back end.
        </p>
        <p>
          I graduated from Binghamton University in 2022 with degrees in
          Neuroscience and Russian Studies. During my last semester of college,
          I became incredibly interested in technology after taking a genetics
          course that utilized R for data analysis. This was my first exposure
          to programming, and I've been hooked ever since. I have dedicated
          myself to learning computer science fundamentals and applying them to
          the web through a project-based approach.
        </p>
        <p>
          I am looking to enter the software world and gain professional
          experience!
        </p>
        <div className="about-photo"></div>
      </div>
      <div className="about-skills">
        <div className="about-skills-title">What I've worked with:</div>
        <ul className="about-skills-list">
          <Skill skillName="JavaScript" />
          <Skill skillName="Git" />
          <Skill skillName="TypeScript" />
          <Skill skillName="Java" />
          <Skill skillName="HTML" />
          <Skill skillName="Spring Boot" />
          <Skill skillName="CSS" />
          <Skill skillName="Node" />
          <Skill skillName="React" />
          <Skill skillName="Express" />
          <Skill skillName="Redux" />
          <Skill skillName="Jest" />
          <Skill skillName="Sass" />
          <Skill skillName="PostgreSQL" />
          <Skill skillName="Figma" />
          <Skill skillName="Docker" />
        </ul>
      </div>
    </section>
  );
});

export default About;