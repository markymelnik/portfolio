import { forwardRef } from "react";
import SkillList from "./Skills/SkillList";
import "./about.scss";

import HeadshotPhoto from '../../../assets/images/headshot/headshot.webp';

interface AboutProps extends React.HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <section ref={ref} className='about-container' {...props}>
      <h2 className='about-title'>
        <span>.01</span>About Me
      </h2>
      <div className='about-information'>
        <div className='about-left'>
          <div className='about-photo'>
            <img
              src={HeadshotPhoto.src}
              alt='Headshot of site developer, Mark Melnik'
            />
          </div>
          <div className='about-photo-name'>Mark Melnik</div>
        </div>
        <div className='about-right'>
          <p>
            Hey there! I'm Mark, a software developer based in New York City. I
            solve complex technical problems and build full-stack applications
            for the web. I am currently seeking an entry-level software development role.
          </p>
          {/* <p>
          I graduated from{" "}
            <a
              href="https://binghamton.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="university-link"
            >
              Binghamton University
            </a>{" "}
            with a bachelor's degree in Integrative Neuroscience and a minor in Russian
            Studies.
          </p> */}
          <hr />
          <p>Check out my projects below!</p>
          <SkillList />
        </div>
      </div>
    </section>
  );
});

export default About;
