import { forwardRef } from 'react';
import './_about.scss';

interface AboutProps extends React.HTMLProps<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, AboutProps>((props, ref) => {
  return (
    <div ref={ref} className="about-container" {...props}>
      <div className="about-intro">
        <div className="about-name">Mark Melnik</div>
        <div className="about-description">programming for the web</div>
      </div>
    </div>
  )
});

export default About;