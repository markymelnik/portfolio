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
            <img
              src={HeadshotPhoto}
              alt="Headshot of site developer, Mark Melnik"
            />
          </div>
          <div className="about-photo-name">Mark Melnik</div>
        </div>
        <div className="about-right">
          <p>
            Hey there! I'm Mark, an aspiring software developer based in New
            York City. I enjoy solving complex, technical problems and building
            creative, user-friendly interfaces. I've designed, built, and
            deployed projects rooted in fundamental principles of both frontend
            and backend development.
          </p>
          <hr />
          <p>
            I graduated with a major in Neuroscience and a minor in Russian from{" "}
            <a
              href="https://binghamton.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="university-link"
            >
              Binghamton University
            </a>
            . During my last semester, I had my first exposure to programming
            and quickly developed a fascination for technology and software. Since
            then, I've dedicated myself to learning computer science theory and
            fundamentals, focusing on building web applications through a
            project-based approach. I am deeply interested in the inner workings
            of software and its capacity to benefit others.
          </p>
          <hr />
          <p>
            I am eager to enter the software world, bringing a fresh perspective
            and contributing my skills and unique insights to a collaborative,
            professional environment. I am ready to tackle new challenges and
            further develop my skillset. Check out what I've
            created as I search for my first opportunity!
          </p>
          <SkillList />
        </div>
      </div>
    </section>
  );
});

export default About;
