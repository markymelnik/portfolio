import { forwardRef } from "react";
import SkillList from "./Skill/SkillList";
/* import HeadshotPhoto from '../../../assets/images/headshot.jpg'; */
import "./_about.scss";

interface AboutProps extends React.HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {

  return (
    <section ref={ref} className="about-container" {...props}>
      <h2 className="about-title">
        <span>.01</span>About Me
      </h2>
      <div className="about-information">
        <div className="about-left">
          <div className="about-photo">
            {/* <img src={HeadshotPhoto} alt="photo of site creator, Mark Melnik"/> */}
          </div>
          <div className="about-photo-name">Mark Melnik</div>
        </div>
        <div className="about-right">
          <p>
            Hey there! I'm Mark, an aspiring software developer based in New
            York City. I enjoy building things for the web and exploring new
            technologies. I've built projects rooted in fundamental principles
            of both front-end and back-end development.
          </p>
          <hr />
          <p>
            I graduated from Binghamton University with degrees in Neuroscience
            and Russian. During my final semester, I took a genetics class that
            involved automating data analysis with R. This was my first exposure
            to programming, and I've been hooked ever since. I have dedicated
            myself to learning computer science fundamentals and applying them
            to the web through a project-based approach.
          </p>
          <hr />
          <p>
            I am eager to enter the software industry, bringing a fresh
            perspective and contributing my skills and unique insights through
            collaboration and professional growth. Check out what I've created!
          </p>
          <SkillList />
        </div>
      </div>
    </section>
  );
});

export default About;
