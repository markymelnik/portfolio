import { forwardRef } from "react";

import SkillList from "./Skills/SkillList";
import HeadshotPhoto from "../../../assets/images/headshot.jpg";
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
            <img src={HeadshotPhoto} alt="photo of site creator, Mark Melnik" />
          </div>
          <div className="about-photo-name">Mark Melnik</div>
        </div>
        <div className="about-right">
          <p>
            Hey there! I'm Mark, an aspiring software developer based in New
            York City. I enjoy solving complex, technical problems and building
            creative, user-friendly interfaces. I've built projects rooted in
            fundamental principles of both frontend and backend development.
          </p>
          <hr />
          <p>
            I graduated from Binghamton University with degrees in Neuroscience
            and Russian. During my final semester, I took a genetics class
            involving automating data analysis with R. Since that initial
            exposure to programming, I've been hooked. I have dedicated myself
            to learning computer science fundamentals and theory, building web
            applications through a project-based approach.
          </p>
          <hr />
          <p>
            I am eager to enter the software world, bringing a fresh perspective
            and contributing my skills and unique insights to a collaborative,
            professional environment. I am ready for new challenges that will
            further develop my skillset. Check out what I've created as I search
            for my first opportunity!
          </p>
          <SkillList />
        </div>
      </div>
    </section>
  );
});

export default About;
