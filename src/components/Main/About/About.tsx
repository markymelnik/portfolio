import { HTMLProps, forwardRef } from "react";
import SkillList from "./Skills/SkillList";
import HeadshotPhoto from '../../../assets/images/headshot/headshot.webp';
import { CONTENT } from "../../../lib/content";
import "./about.scss";

interface AboutProps extends HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <section ref={ref} className='about-container' {...props}>
      <h2 className='about-title'>
        <span>{CONTENT.about.number}</span>{CONTENT.about.header}
      </h2>
      <div className='about-information'>
        <div className='about-left'>
          <div className='about-photo'>
            <img
              src={HeadshotPhoto.src}
              alt='Headshot of site developer, Mark Melnik'
            />
          </div>
          <div className='about-photo-name'>{CONTENT.fullname}</div>
        </div>
        <div className='about-right'>
          <p>
            {CONTENT.about.p1}
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
          <p>{CONTENT.about.p2}</p>
          <SkillList />
        </div>
      </div>
    </section>
  );
});

export default About;
