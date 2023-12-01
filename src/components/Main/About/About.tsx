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
            Hey there! I'm Mark, a software developer based in New
            York City. I solve complex, technical problems and build creative,
            user-friendly interfaces.
          </p>
          <hr />
          <p>
            In 2022, I graduated from{" "}
            <a
              href="https://binghamton.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="university-link"
            >
              Binghamton University
            </a>{" "}
            with a bachelor's degree in Integrative Neuroscience and a minor in Russian
            Studies. During my last semester, I began experimenting with
            programming and quickly became fascinated by software. Since then,
            I've dedicated myself to learning computer science and developed my
            skills in designing, building, and maintaining full-stack web
            applications. I am deeply interested in the inner workings of
            software and the potential for information technology to
            improve lives.
          </p>
          <hr />
          <p>
            I am eager to enter the software world, bringing a fresh perspective
            and contributing my skills and unique insights to a collaborative,
            professional environment. I am ready to tackle new challenges and
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
