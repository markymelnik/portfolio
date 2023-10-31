import { forwardRef } from 'react';
import './_about.scss';

interface AboutProps extends React.HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <section ref={ref} className="about-container" {...props}>
      <div className="about-intro">
        <h1 className="about-name">Mark Melnik</h1>
        <h2 className="about-description">programming for the web</h2>
      </div>
    </section>
  )
});

export default About;